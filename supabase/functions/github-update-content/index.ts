// Supabase Edge Function: github-update-content
// Securely commits updated site-content.json to GitHub repository:
// Cat7890-sys/Birthday-countdown-v1
// 
// Enforces:
// 1. Supabase JWT authentication (bearer token required)
// 2. Admin authorization (email must match authorized admin)
// 3. Strict scope: only allows updating 'site-content.json' in 'Cat7890-sys/Birthday-countdown-v1' on branch 'main'
// 4. Server-side GitHub token retrieval from environment secret GITHUB_TOKEN
// 5. Conflict protection via GitHub file SHA validation

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const REPO_OWNER = "Cat7890-sys";
const REPO_NAME = "Birthday-countdown-v1";
const TARGET_FILE_PATH = "site-content.json";
const TARGET_BRANCH = "main";
const AUTHORIZED_ADMIN_EMAIL = "matimbangobeni78@gmail.com";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
  "Content-Type": "application/json"
};

serve(async (req: Request) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  // Only allow POST or GET
  if (req.method !== "POST" && req.method !== "GET") {
    return new Response(
      JSON.stringify({ success: false, error: "Method not allowed" }),
      { status: 405, headers: corsHeaders }
    );
  }

  try {
    // ------------------------------------------------------------------------
    // 1. Validate Supabase Authentication
    // ------------------------------------------------------------------------
    const authHeader = req.headers.get("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Unauthorized: Missing or invalid authentication token"
        }),
        { status: 401, headers: corsHeaders }
      );
    }

    const token = authHeader.replace("Bearer ", "").trim();
    const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
    const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") || "";

    if (!supabaseUrl || !supabaseAnonKey) {
      console.error("[github-update-content] Missing SUPABASE_URL or SUPABASE_ANON_KEY in environment.");
      return new Response(
        JSON.stringify({
          success: false,
          error: "Server configuration error: Supabase environment variables missing"
        }),
        { status: 500, headers: corsHeaders }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey, {
      global: { headers: { Authorization: `Bearer ${token}` } }
    });

    const { data: { user }, error: authError } = await supabase.auth.getUser(token);
    if (authError || !user) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Unauthorized: Authentication session has expired or is invalid"
        }),
        { status: 401, headers: corsHeaders }
      );
    }

    // ------------------------------------------------------------------------
    // 2. Validate Admin Authorization
    // ------------------------------------------------------------------------
    const adminEmail = (Deno.env.get("ADMIN_EMAIL") || AUTHORIZED_ADMIN_EMAIL).toLowerCase();
    const userEmail = (user.email || "").toLowerCase();

    if (userEmail !== adminEmail) {
      console.warn(`[github-update-content] Forbidden attempt by user: ${userEmail}`);
      return new Response(
        JSON.stringify({
          success: false,
          error: "Forbidden: You do not have permission to publish changes to GitHub"
        }),
        { status: 403, headers: corsHeaders }
      );
    }

    // ------------------------------------------------------------------------
    // 3. Retrieve Server-Side GitHub Token
    // ------------------------------------------------------------------------
    const githubToken = Deno.env.get("GITHUB_TOKEN");
    if (!githubToken) {
      console.error("[github-update-content] Secret GITHUB_TOKEN is not configured in Supabase Edge Function secrets.");
      return new Response(
        JSON.stringify({
          success: false,
          error: "GitHub repository secret (GITHUB_TOKEN) is not configured in Supabase. Please set the secret using the Supabase CLI: supabase secrets set GITHUB_TOKEN=your_token"
        }),
        { status: 500, headers: corsHeaders }
      );
    }

    const githubApiHeaders = {
      "Authorization": `Bearer ${githubToken}`,
      "Accept": "application/vnd.github.v3+json",
      "User-Agent": "Supabase-Edge-Function-Birthday-Sync"
    };

    const repoApiUrl = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${TARGET_FILE_PATH}`;

    // ------------------------------------------------------------------------
    // Handle GET: Retrieve current file status and SHA
    // ------------------------------------------------------------------------
    if (req.method === "GET") {
      const getRes = await fetch(`${repoApiUrl}?ref=${TARGET_BRANCH}`, {
        headers: githubApiHeaders
      });

      if (getRes.status === 404) {
        return new Response(
          JSON.stringify({
            success: true,
            exists: false,
            sha: null,
            message: "File site-content.json does not exist yet in repository."
          }),
          { status: 200, headers: corsHeaders }
        );
      }

      if (!getRes.ok) {
        const errText = await getRes.text();
        console.error("[github-update-content] GitHub GET error:", getRes.status, errText);
        return new Response(
          JSON.stringify({
            success: false,
            error: "Failed to retrieve current file info from GitHub"
          }),
          { status: getRes.status, headers: corsHeaders }
        );
      }

      const fileData = await getRes.json();
      return new Response(
        JSON.stringify({
          success: true,
          exists: true,
          sha: fileData.sha,
          branch: TARGET_BRANCH,
          html_url: fileData.html_url
        }),
        { status: 200, headers: corsHeaders }
      );
    }

    // ------------------------------------------------------------------------
    // Handle POST: Update site-content.json in GitHub repo
    // ------------------------------------------------------------------------
    let body: any = {};
    try {
      body = await req.json();
    } catch (_) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid JSON request body" }),
        { status: 400, headers: corsHeaders }
      );
    }

    const { content, expectedSha, commitMessage } = body;
    if (!content) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing 'content' object in request body" }),
        { status: 400, headers: corsHeaders }
      );
    }

    // Step A: Fetch current file SHA from GitHub for conflict prevention
    let currentSha: string | null = null;
    const fetchCurrentRes = await fetch(`${repoApiUrl}?ref=${TARGET_BRANCH}`, {
      headers: githubApiHeaders
    });

    if (fetchCurrentRes.ok) {
      const currentData = await fetchCurrentRes.json();
      currentSha = currentData.sha;
    } else if (fetchCurrentRes.status !== 404) {
      console.error("[github-update-content] Failed to check existing file:", fetchCurrentRes.status);
      return new Response(
        JSON.stringify({
          success: false,
          error: "GitHub authentication failed or repository could not be reached."
        }),
        { status: 502, headers: corsHeaders }
      );
    }

    // Step B: Conflict Protection
    // If the client sent an expectedSha, it must match the current file SHA
    if (expectedSha && currentSha && expectedSha !== currentSha) {
      return new Response(
        JSON.stringify({
          success: false,
          conflict: true,
          currentSha: currentSha,
          error: "GitHub file changed externally. Please reload and try again."
        }),
        { status: 409, headers: corsHeaders }
      );
    }

    // Step C: Format JSON content string and Base64 encode
    const contentString = typeof content === "string"
      ? content
      : JSON.stringify(content, null, 2);

    // Deno UTF-8 safe base64 encoding
    const encoder = new TextEncoder();
    const dataBytes = encoder.encode(contentString);
    let binary = "";
    const len = dataBytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(dataBytes[i]);
    }
    const contentBase64 = btoa(binary);

    // Step D: Commit to GitHub via GitHub Contents API
    const finalCommitMessage = (commitMessage && typeof commitMessage === "string" && commitMessage.trim())
      ? commitMessage.trim()
      : "Update website content from Admin Console";

    const putPayload: any = {
      message: finalCommitMessage,
      content: contentBase64,
      branch: TARGET_BRANCH
    };

    if (currentSha) {
      putPayload.sha = currentSha;
    }

    const putRes = await fetch(repoApiUrl, {
      method: "PUT",
      headers: {
        ...githubApiHeaders,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(putPayload)
    });

    const putData = await putRes.json();

    if (!putRes.ok) {
      console.error("[github-update-content] GitHub PUT error:", putRes.status, putData);
      if (putRes.status === 409) {
        return new Response(
          JSON.stringify({
            success: false,
            conflict: true,
            error: "GitHub file conflict detected. Please reload and try again."
          }),
          { status: 409, headers: corsHeaders }
        );
      }

      if (putRes.status === 401 || putRes.status === 403) {
        return new Response(
          JSON.stringify({
            success: false,
            error: "GitHub authentication failed. Please verify repository write permissions."
          }),
          { status: 403, headers: corsHeaders }
        );
      }

      return new Response(
        JSON.stringify({
          success: false,
          error: putData?.message || "GitHub repository update failed."
        }),
        { status: putRes.status, headers: corsHeaders }
      );
    }

    // Step E: Return structured commit data to Admin Console
    const commitSha = putData?.commit?.sha || "";
    const shortSha = commitSha ? commitSha.substring(0, 7) : "";
    const commitUrl = putData?.commit?.html_url || `https://github.com/${REPO_OWNER}/${REPO_NAME}/commit/${commitSha}`;

    return new Response(
      JSON.stringify({
        success: true,
        message: "Saved to GitHub successfully.",
        notice: "Changes committed to GitHub. GitHub Pages may take a short time to deploy.",
        commit: {
          sha: commitSha,
          shortSha: shortSha,
          htmlUrl: commitUrl
        },
        file: {
          path: TARGET_FILE_PATH,
          sha: putData?.content?.sha || ""
        },
        timestamp: new Date().toISOString()
      }),
      { status: 200, headers: corsHeaders }
    );
  } catch (err: any) {
    console.error("[github-update-content] Unexpected error:", err);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Internal server error occurred while processing GitHub sync."
      }),
      { status: 500, headers: corsHeaders }
    );
  }
});
