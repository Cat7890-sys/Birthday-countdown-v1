/**
 * ============================================================================
 * BIRTHDAY COUNTDOWN & CELEBRATION
 * ============================================================================
 * Hosted easily on GitHub Pages!
 * Fully responsive on mobile (iOS / Android), tablet, and desktop.
 */

// ============================================================================
// ⚙️ BIRTHDAY CUSTOMIZATION (EDIT THESE VALUES FOR YOUR CELEBRATION)
// ============================================================================

/**
 * 1. Target Birthday Date & Time
 * Format: "YYYY-MM-DDTHH:MM:SS" (e.g., "2026-09-25T00:00:00")
 * Change this to the exact date and time of the birthday!
 */
const birthdayDate = "2026-10-05T00:00:00";

/**
 * 2. Birthday Person's Name
 * Displayed dynamically in the title and celebration screen.
 */
const birthdayName = "Sarah";

/**
 * 3. Personalized Heartfelt Birthday Message
 * Appears when the countdown reaches zero.
 */
const birthdayMessage = "Happy Birthday to the most wonderful person in my life. Thank you for filling every single day with warmth, laughter, and so much happiness. Being with you is my favorite thing in the world, and I wanted to make this little surprise just to remind you how deeply loved and cherished you are. Here's to you, all our sweetest memories, and all the adventures still ahead of us. I love you endlessly! ❤️✨";

/**
 * 4. Background Image
 * Place your personal birthday photo in: images/background.jpg
 * If left empty or file is missing, a beautiful pink-and-blue mesh gradient is used automatically.
 */
const backgroundImage = "images/background.jpg";

/**
 * 5. Background Overlay Opacity (0.0 = completely clear, 1.0 = dark & opaque)
 * Default: 0.65 provides optimal text contrast over photos.
 */
const overlayOpacity = 0.65;

/**
 * 6. Background Music Path
 * Place your audio file in: audio/background-music.mp3
 * Supports MP3, WAV, and OGG formats!
 */
const backgroundMusic = "audio/background-music.mp3";

/**
 * 7. Loop Music Setting
 * If true, repeats automatically.
 */
const loopMusic = true;

/**
 * 8. Curated Nostalgic Memories (Displayed on the last day / celebration)
 */
const defaultMemories = [
  {
    id: "mem-1",
    type: "photo",
    mediaUrl: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&auto=format&fit=crop&q=80",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&auto=format&fit=crop&q=80",
    title: "Our Golden Hour Laughs",
    date: "A Warm Summer Evening",
    caption: "One of my absolute favorite evenings with you—we couldn't stop laughing until our cheeks hurt.",
    isHighlight: true,
    style: "tape",
    size: "normal",
    tilt: "left"
  },
  {
    id: "mem-2",
    type: "photo",
    mediaUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&auto=format&fit=crop&q=80",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&auto=format&fit=crop&q=80",
    title: "", // Title is optional - tested here with blank string
    date: "Starry Road Trip",
    caption: "Windows down, your hand in mine, favorite songs playing under the starry sky.",
    isHighlight: false,
    style: "polaroid",
    size: "normal",
    tilt: "right"
  },
  {
    id: "mem-3",
    type: "video",
    mediaUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&auto=format&fit=crop&q=80",
    title: "Candid Joy & Laughter",
    date: "Dancing in the Kitchen",
    caption: "That sweet little dance you do whenever you're truly happy is the sweetest thing in the world.",
    isHighlight: true,
    style: "card",
    size: "wide",
    tilt: "slight"
  },
  {
    id: "mem-4",
    type: "photo",
    mediaUrl: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&auto=format&fit=crop&q=80",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&auto=format&fit=crop&q=80",
    title: "Sunday Mornings & Big Dreams",
    date: "Our Quiet Moments",
    caption: "Coffee, warm cuddles, and talking for hours about all our future adventures together.",
    isHighlight: false,
    style: "tape",
    size: "normal",
    tilt: "left"
  },
  {
    id: "mem-5",
    type: "photo",
    mediaUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop&q=80",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop&q=80",
    title: "My Favorite Smile",
    date: "Every Single Day",
    caption: "Watching you shine and smile is the best feeling in the world. I'm so proud of you.",
    isHighlight: true,
    style: "polaroid",
    size: "normal",
    tilt: "right"
  },
  {
    id: "mem-6",
    type: "photo",
    mediaUrl: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&auto=format&fit=crop&q=80",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&auto=format&fit=crop&q=80",
    title: "", // Title is optional
    date: "Forever & Always",
    caption: "Every single day with you is my favorite day. Happy Birthday, my love! ❤️",
    isHighlight: false,
    style: "tape",
    size: "tall",
    tilt: "slight"
  }
];

/**
 * 9. Initial Pre-Loaded Heartfelt Guestbook & Love Notes Wishes
 * Demonstrates the allowed combinations:
 * - Text + 3 photos
 * - Text + 2 photos + 1 short video
 * - Text + 1 photo + 1 audio voice recording
 * - Text message with sticker
 */
const defaultGuestbookMessages = [
  {
    id: "wish-love",
    author: "With all my heart ❤️",
    role: "Forever Yours 💌",
    avatar: "❤️",
    message: "Happy Birthday, beautiful! I put together this whole birthday chapter experience because you deserve the world and so much more. Thank you for making my life so incredibly bright and loving. I love you with all my heart, today and every single day! ❤️✨",
    sticker: "💖",
    date: "Today",
    likes: 38,
    likedByUser: true,
    photos: [
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&auto=format&fit=crop&q=80"
    ],
    videoUrl: null,
    audioUrl: null,
    type: "photos"
  },
  {
    id: "wish-1",
    author: "Jessica M.",
    role: "Best Friend 👯‍♀️",
    avatar: "JM",
    message: "Happy Birthday to my absolute favorite human! Thank you for always being there with late-night taco runs, endless belly laughs, and unconditional love. Here's a sweet clip and memories from our favorite trip! 💖✨",
    sticker: "💖",
    date: "Today",
    likes: 19,
    likedByUser: false,
    photos: [
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&auto=format&fit=crop&q=80"
    ],
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    audioUrl: null,
    type: "video"
  },
  {
    id: "wish-2",
    author: "Liam & David",
    role: "College Crew 🎓",
    avatar: "LD",
    message: "Happiest of birthdays! Can't wait to celebrate tonight with the whole gang. Raising a giant toast to you and many more epic road trips ahead! 🥂🎉",
    sticker: "🥂",
    date: "Today",
    likes: 14,
    likedByUser: false,
    photos: [],
    videoUrl: null,
    audioUrl: null,
    type: "text"
  },
  {
    id: "wish-3",
    author: "Mom & Dad",
    role: "Family Love 💕",
    avatar: "MD",
    message: "Wishing our precious girl the sweetest birthday! We left you a little audio note with all our love and blessings. You are our biggest pride and joy. Happy Birthday! 🎂❤️",
    sticker: "🎂",
    date: "Today",
    likes: 27,
    likedByUser: false,
    photos: [
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&auto=format&fit=crop&q=80"
    ],
    videoUrl: null,
    audioUrl: "https://actions.google.com/sounds/v1/water/rain_heavy.ogg",
    type: "audio"
  }
];

/**
 * 10. Curated Default Celebration Burst Photos
 * Pre-loaded high-resolution, joyful photos so the celebration works out of the box!
 */
const defaultBurstPhotos = [
  {
    id: "sample-1",
    name: "Golden Joy",
    src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=700&auto=format&fit=crop&q=80",
    caption: "My favorite smile in the whole world ✨",
    timestamp: 1710000001
  },
  {
    id: "sample-2",
    name: "Birthday Cheers",
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=700&auto=format&fit=crop&q=80",
    caption: "Celebrating the most wonderful girl today and always ❤️",
    timestamp: 1710000002
  },
  {
    id: "sample-3",
    name: "Starlit Road Trip",
    src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=700&auto=format&fit=crop&q=80",
    caption: "Adventures with you are my absolute favorite 🌌",
    timestamp: 1710000003
  },
  {
    id: "sample-4",
    name: "Cozy Dreams",
    src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=700&auto=format&fit=crop&q=80",
    caption: "Warm coffee, cozy moments, and endless love ☕",
    timestamp: 1710000004
  },
  {
    id: "sample-5",
    name: "Pure Happiness",
    src: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=700&auto=format&fit=crop&q=80",
    caption: "Your laugh is my absolute favorite sound in the world 🎊",
    timestamp: 1710000005
  },
  {
    id: "sample-6",
    name: "Kindred Heart",
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=700&auto=format&fit=crop&q=80",
    caption: "To the love of my life, I adore you endlessly ❤️",
    timestamp: 1710000006
  }
];

// ============================================================================
// CORE APPLICATION LOGIC
// ============================================================================

// ============================================================================
// 🌐 SUPABASE PERSISTENT STORAGE CONFIGURATION
// ============================================================================
const SUPABASE_URL = "https://rqehrbituhykrmiujhuk.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_o5hbaYx5BDiX8kqzNV8nYw_4gQ05n3e";
const SUPABASE_STORAGE_BUCKET = "Birthday-assets";

let supabaseClient = null;
let currentSupabaseRowId = 1;

// Admin Authentication State
let currentAdminSession = null;
let currentAdminUser = null;

/**
 * Returns true if an authenticated admin session is active
 */
function isCurrentUserAdmin() {
  return Boolean(currentAdminUser && currentAdminSession?.access_token);
}

/**
 * Update UI according to admin authentication state
 */
function updateAdminUI(session) {
  currentAdminSession = session || null;
  currentAdminUser = session?.user || null;

  const isAuth = isCurrentUserAdmin();
  const banner = document.getElementById("adminAuthBanner");
  const label = document.getElementById("adminStatusLabel");
  const toggleBtn = document.getElementById("toggleAdminLoginBtn");
  const signOutBtn = document.getElementById("adminSignOutBtn");
  const loginForm = document.getElementById("adminLoginForm");

  if (banner) {
    if (isAuth) {
      banner.classList.add("logged-in");
    } else {
      banner.classList.remove("logged-in");
    }
  }

  if (label) {
    if (isAuth) {
      const email = currentAdminUser.email || "Admin";
      label.textContent = `🛡️ Admin Active: ${email}`;
    } else {
      label.textContent = "Visitor Mode (Public Read-Only)";
    }
  }

  if (toggleBtn) {
    toggleBtn.style.display = isAuth ? "none" : "inline-flex";
  }

  if (signOutBtn) {
    signOutBtn.style.display = isAuth ? "inline-flex" : "none";
  }

  if (isAuth && loginForm) {
    loginForm.style.display = "none";
  }
}

/**
 * Prompt and open the admin login drawer
 */
function openAdminLoginForm(reasonMessage) {
  const loginForm = document.getElementById("adminLoginForm");
  const passwordInput = document.getElementById("adminPasswordInput");

  if (loginForm) {
    loginForm.style.display = "block";
  }
  if (reasonMessage) {
    showStorageStatus("adminAuthStatus", reasonMessage, "error", 6000);
  }
  if (passwordInput) {
    passwordInput.focus();
  }
}

/**
 * Initialize Supabase Auth listener and retrieve existing session
 */
async function initSupabaseAuth() {
  const client = getSupabaseClient();
  if (!client || !client.auth) return;

  try {
    const { data } = await client.auth.getSession();
    if (data?.session) {
      updateAdminUI(data.session);
    }

    client.auth.onAuthStateChange((_event, session) => {
      updateAdminUI(session);
    });
  } catch (err) {
    console.warn("[Supabase Auth] Session init warning:", err);
  }
}

/**
 * Lazily initialize the Supabase client if the official SDK is available
 */
function getSupabaseClient() {
  if (supabaseClient) return supabaseClient;
  if (typeof window !== "undefined" && window.supabase && typeof window.supabase.createClient === "function") {
    try {
      supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
    } catch (e) {
      console.warn("[Supabase] Failed to init client:", e);
    }
  }
  return supabaseClient;
}

/**
 * Display clear upload and persistence status feedback in the customization panel
 */
function showStorageStatus(elementId, message, type = "success", duration = 5000) {
  const el = document.getElementById(elementId);
  if (!el) return;
  el.textContent = message;
  el.className = `storage-upload-status ${type}`;
  el.style.display = "flex";

  if (duration > 0) {
    setTimeout(() => {
      if (el.textContent === message) {
        el.style.display = "none";
      }
    }, duration);
  }
}

/**
 * Upload a file directly to the Supabase Storage bucket 'Birthday-assets'
 * under photos/, backgrounds/, or music/.
 * Protected: requires an authenticated admin account.
 * Returns { success: true, publicUrl, fileName } or { success: false, error }
 */
async function uploadToSupabaseStorage(folder, file) {
  if (!isCurrentUserAdmin()) {
    openAdminLoginForm("🔒 Admin sign-in required to upload files to Supabase Storage.");
    return {
      success: false,
      error: "Admin authentication required. Sign in as admin to upload assets."
    };
  }

  const bucket = SUPABASE_STORAGE_BUCKET;
  const cleanExt = (file.name.split('.').pop() || 'bin').toLowerCase();
  const cleanBase = file.name.replace(/\.[^/.]+$/, "").replace(/[^a-zA-Z0-9_-]/g, "_");
  const fileName = `${Date.now()}_${cleanBase}.${cleanExt}`;
  const filePath = `${folder}/${fileName}`;

  // 1. Try official Supabase SDK (automatically attaches authenticated JWT session)
  const client = getSupabaseClient();
  if (client && client.storage) {
    try {
      const { data, error } = await client.storage
        .from(bucket)
        .upload(filePath, file, {
          cacheControl: "3600",
          upsert: true
        });

      if (!error && data) {
        const { data: urlData } = client.storage
          .from(bucket)
          .getPublicUrl(filePath);
        return {
          success: true,
          publicUrl: urlData.publicUrl,
          path: filePath,
          fileName
        };
      }

      if (error) {
        console.warn("[Supabase Storage SDK upload note]:", error);
        if (error.message && error.message.toLowerCase().includes("row-level security")) {
          return {
            success: false,
            error: "Storage RLS notice: Ensure your admin user has an INSERT policy on bucket 'Birthday-assets'."
          };
        }
      }
    } catch (sdkErr) {
      console.warn("[Supabase Storage SDK error]:", sdkErr);
    }
  }

  // 2. Direct REST upload fallback with authenticated JWT
  try {
    const uploadUrl = `${SUPABASE_URL}/storage/v1/object/${bucket}/${filePath}`;
    const authToken = currentAdminSession?.access_token || SUPABASE_PUBLISHABLE_KEY;
    const res = await fetch(uploadUrl, {
      method: "POST",
      headers: {
        "apikey": SUPABASE_PUBLISHABLE_KEY,
        "Authorization": `Bearer ${authToken}`,
        "x-upsert": "true"
      },
      body: file
    });

    if (res.ok) {
      const publicUrl = `${SUPABASE_URL}/storage/v1/object/public/${bucket}/${filePath}`;
      return {
        success: true,
        publicUrl,
        path: filePath,
        fileName
      };
    } else {
      const err = await res.json().catch(() => ({}));
      const msg = err.message || err.error || res.statusText;
      return {
        success: false,
        error: msg.includes("row-level security")
          ? "Storage RLS notice: Ensure your admin user has an INSERT policy on bucket 'Birthday-assets'."
          : msg
      };
    }
  } catch (err) {
    return { success: false, error: err.message };
  }
}

/**
 * Load celebration photos from Supabase Storage (photos/).
 * Queries the Birthday-assets bucket and populates currentPhotos for the celebration burst.
 */
async function loadBirthdayPhotosFromSupabase() {
  const bucket = SUPABASE_STORAGE_BUCKET;
  let fileList = [];

  // 1. Try SDK list
  const client = getSupabaseClient();
  if (client && client.storage) {
    try {
      const { data, error } = await client.storage
        .from(bucket)
        .list("photos", {
          limit: 100,
          sortBy: { column: "created_at", order: "desc" }
        });

      if (!error && Array.isArray(data)) {
        fileList = data.filter(f => f.name && f.name !== ".emptyFolderPlaceholder");
      }
    } catch (e) {
      console.warn("[Supabase Storage] SDK list note:", e);
    }
  }

  // 2. Fallback direct REST list
  if (fileList.length === 0) {
    try {
      const res = await fetch(`${SUPABASE_URL}/storage/v1/object/list/${bucket}`, {
        method: "POST",
        headers: {
          "apikey": SUPABASE_PUBLISHABLE_KEY,
          "Authorization": `Bearer ${SUPABASE_PUBLISHABLE_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prefix: "photos", limit: 100 })
      });
      if (res.ok) {
        const rows = await res.json();
        if (Array.isArray(rows)) {
          fileList = rows.filter(f => f.name && f.name !== ".emptyFolderPlaceholder");
        }
      }
    } catch (e) {
      console.warn("[Supabase Storage] REST list note:", e);
    }
  }

  if (fileList.length > 0) {
    const loadedPhotos = fileList.map(f => {
      const publicUrl = `${SUPABASE_URL}/storage/v1/object/public/${bucket}/photos/${f.name}`;
      return {
        id: "sb-" + f.name,
        name: f.name,
        src: publicUrl,
        caption: f.name.replace(/^[0-9]+_/, "").replace(/\.[^/.]+$/, "").replace(/_/g, " "),
        timestamp: f.created_at ? new Date(f.created_at).getTime() : Date.now(),
        fromSupabase: true
      };
    });

    currentPhotos = loadedPhotos;
    renderPhotoThumbnails();

    // Cache locally for instant offline preview
    try {
      localStorage.setItem("birthday_burst_photos_v1", JSON.stringify(currentPhotos));
    } catch (_) {}

    console.log(`[Supabase Storage] Successfully synced ${loadedPhotos.length} photos from photos/ bucket`);
    return true;
  }
  return false;
}

/**
 * Fetch the latest birthday content from Supabase.
 * Tries the official Supabase SDK first, with a pure fetch REST fallback
 * ensuring 100% compatibility with GitHub Pages.
 */
async function loadBirthdayContentFromSupabase() {
  try {
    let row = null;

    // 1. Try official SDK
    const client = getSupabaseClient();
    if (client) {
      try {
        const { data, error } = await client
          .from("birthday_content")
          .select("*")
          .order("updated_at", { ascending: false })
          .limit(1);

        if (!error && Array.isArray(data) && data.length > 0) {
          row = data[0];
        } else if (error) {
          console.warn("[Supabase SDK] Query notice:", error.message);
        }
      } catch (sdkErr) {
        console.warn("[Supabase SDK] Fetch error:", sdkErr);
      }
    }

    // 2. Direct REST fallback (pure browser fetch)
    if (!row) {
      try {
        const response = await fetch(
          `${SUPABASE_URL}/rest/v1/birthday_content?select=*&order=updated_at.desc&limit=1`,
          {
            headers: {
              "apikey": SUPABASE_PUBLISHABLE_KEY,
              "Authorization": `Bearer ${SUPABASE_PUBLISHABLE_KEY}`
            }
          }
        );
        if (response.ok) {
          const rows = await response.json();
          if (Array.isArray(rows) && rows.length > 0) {
            row = rows[0];
          }
        }
      } catch (restErr) {
        console.warn("[Supabase REST] Offline or connection error:", restErr);
      }
    }

    // 3. Apply retrieved content if found
    if (row) {
      if (row.id) {
        currentSupabaseRowId = row.id;
      }

      // Update Birthday Message
      if (row.birthday_message && typeof row.birthday_message === "string" && row.birthday_message.trim() !== "") {
        currentMessage = row.birthday_message.trim();
        if (celebrationMsg) {
          celebrationMsg.textContent = currentMessage;
        }
        if (devMessageInput) {
          devMessageInput.value = currentMessage;
        }
      }

      // Update background URL if specified in Supabase
      if (row.background_url && typeof row.background_url === "string" && row.background_url.trim() !== "") {
        currentBgImage = row.background_url.trim();
        if (devBgInput) {
          devBgInput.value = currentBgImage;
        }
        setupBackground();
      }

      // Update music URL if specified in Supabase
      if (row.music_url && typeof row.music_url === "string" && row.music_url.trim() !== "") {
        currentMusicUrl = row.music_url.trim();
        if (bgAudio) {
          bgAudio.src = currentMusicUrl;
        }
        if (devMusicInput) {
          devMusicInput.value = currentMusicUrl;
        }
      }

      setupDynamicContent();
      console.log("[Supabase] Successfully loaded latest online birthday content:", row);
    } else {
      console.log("[Supabase] No remote content found. Using local fallback.");
    }
  } catch (err) {
    console.warn("[Supabase] Could not load online content, maintaining local fallback:", err);
  }
}

/**
 * Save updated birthday content to Supabase so it persists across refreshes and devices.
 * Protected: requires an active admin session to update the remote database.
 */
async function saveBirthdayContentToSupabase(newMessage, newBgUrl, newMusicUrl) {
  if (!isCurrentUserAdmin()) {
    console.log("[Supabase] Visitor mode: remote database update skipped (admin login required to persist online).");
    return false;
  }

  const payload = {
    birthday_message: (newMessage || currentMessage || "").trim(),
    background_url: (newBgUrl || currentBgImage || "").trim(),
    music_url: (newMusicUrl || currentMusicUrl || "").trim(),
    updated_at: new Date().toISOString()
  };

  // 1. Try official SDK (automatically passes authenticated JWT)
  const client = getSupabaseClient();
  if (client) {
    try {
      const { data, error } = await client
        .from("birthday_content")
        .update(payload)
        .eq("id", currentSupabaseRowId);

      if (!error) {
        console.log("[Supabase SDK] Saved online birthday content as authenticated admin:", data);
        return true;
      }
      console.warn("[Supabase SDK] Update note:", error.message);
    } catch (sdkErr) {
      console.warn("[Supabase SDK] Save error:", sdkErr);
    }
  }

  // 2. Direct REST fallback with admin JWT
  try {
    const authToken = currentAdminSession?.access_token || SUPABASE_PUBLISHABLE_KEY;
    const res = await fetch(`${SUPABASE_URL}/rest/v1/birthday_content?id=eq.${currentSupabaseRowId}`, {
      method: "PATCH",
      headers: {
        "apikey": SUPABASE_PUBLISHABLE_KEY,
        "Authorization": `Bearer ${authToken}`,
        "Content-Type": "application/json",
        "Prefer": "return=representation"
      },
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      const data = await res.json();
      console.log("[Supabase REST] Saved online birthday content as authenticated admin:", data);
      return true;
    }
  } catch (restErr) {
    console.warn("[Supabase REST] Could not save content to Supabase:", restErr);
  }

  return false;
}

// State
let targetDate = new Date(birthdayDate);
let currentName = birthdayName;
let currentMessage = birthdayMessage;
let currentBgImage = backgroundImage;
let currentMusicUrl = backgroundMusic;
let currentOverlayOpacity = overlayOpacity;

let countdownInterval = null;
let isCelebrationActive = false;

// Photo Burst & Celebration Customization State
let currentPhotos = [];
let burstConfig = {
  burstStyle: "mixed",           // "burst" | "float" | "fall" | "pop" | "mixed"
  photoShape: "polaroid",        // "polaroid" | "rounded" | "circle" | "square" | "mixed"
  photoSize: "medium",           // "small" | "medium" | "large"
  burstSpeed: "normal",          // "slow" | "normal" | "fast" | "explosive"
  burstDuration: "12",           // "5" | "8" | "12" | "infinite"
  photoRotation: "medium",       // "none" | "subtle" | "medium" | "wild"
  photoBorderColor: "gradient",  // "gradient" | "pink" | "light-pink" | "hot-pink" | "blue" | "light-blue" | "purple"
  photoBorderThickness: "2",     // "1" | "2" | "4" | "6"
  photoCornerRadius: 16,
  photoGlowIntensity: 0.8,
  confettiAmount: "normal",      // "low" | "normal" | "high"
  confettiSpeed: "normal",       // "slow" | "normal" | "fast"
  gradientPreset: "dusk",
  colorPinkIntensity: 1.0,
  colorBlueIntensity: 1.0,
  colorPurpleIntensity: 1.0,
  headline: "Happy Birthday, My Love ❤️",
  revealThirdTitle: "MY EVERYTHING ❤️"
};

let photoBurstActiveTimeout = null;
let heroPhotosTimerTimeout = null;

// Background Audio State
let isMusicPlaying = false;
let isMusicMuted = false;
let userExplicitlyPaused = false;
let audioContext = null;
let synthInterval = null;

// Guestbook State
let guestbookMessages = [];
let currentGuestbookFilter = "all";
let selectedSticker = "💖";
let modalMediaStream = null;
let modalMediaRecorder = null;
let modalRecordedChunks = [];
let modalRecordedBlobUrl = null;

// DOM Elements - Opening Screen, 3-2-1 Reveal & 10s Photo Reveal
const openingScreen = document.getElementById("openingScreen");
const openingMessage = document.getElementById("openingMessage");
const openingPersonName = document.getElementById("openingPersonName");
const showMeBtn = document.getElementById("showMeBtn");

const revealCountdownStage = document.getElementById("revealCountdownStage");
const revealCountdownNum = document.getElementById("revealCountdownNum");
const revealCountdownSub = document.getElementById("revealCountdownSub");

const tenSecondPhotoReveal = document.getElementById("tenSecondPhotoReveal");
const revealTimerProgress = document.getElementById("revealTimerProgress");
const revealCountdownSeconds = document.getElementById("revealCountdownSeconds");
const threeFloatingPhotosStage = document.getElementById("threeFloatingPhotosStage");
const skipRevealBtn = document.getElementById("skipRevealBtn");

const celebrationScreen = document.getElementById("celebrationScreen");

const heroPersonName = document.getElementById("heroPersonName");
const celebrationTitle = document.getElementById("celebrationTitle");
const celebrationMsg = document.getElementById("celebrationMsg");
const targetDateDisplay = document.getElementById("targetDateDisplay");

const bgImageEl = document.getElementById("bgImage");
const bgOverlayEl = document.getElementById("bgOverlay");

// Music Elements
const bgAudio = document.getElementById("bgAudio");
const musicPlayBtn = document.getElementById("musicPlayBtn");
const musicBtn = musicPlayBtn; // Alias for backwards-compatibility
const musicMuteBtn = document.getElementById("musicMuteBtn");
const musicBtnLabel = document.getElementById("musicBtnLabel");
const soundBars = document.getElementById("soundBars");
const autoplayMusicPrompt = document.getElementById("autoplayMusicPrompt");

// Sections
const lastDaySection = document.getElementById("lastDaySection");
const guestbookSection = document.getElementById("guestbookSection");
const guestbookGallery = document.getElementById("guestbookGallery");
const guestbookCount = document.getElementById("guestbookCount");
const openSignGuestbookBtn = document.getElementById("openSignGuestbookBtn");
const guestbookFilterTabs = document.getElementById("guestbookFilterTabs");

// Sign Guestbook Modal
const signGuestbookModal = document.getElementById("signGuestbookModal");
const closeSignGuestbookBtn = document.getElementById("closeSignGuestbookBtn");
const modeTextBtn = document.getElementById("modeTextBtn");
const modeVideoBtn = document.getElementById("modeVideoBtn");
const textWishForm = document.getElementById("textWishForm");
const videoWishForm = document.getElementById("videoWishForm");
const wishAuthorName = document.getElementById("wishAuthorName");
const wishAuthorRole = document.getElementById("wishAuthorRole");
const wishMessageText = document.getElementById("wishMessageText");
const stickerPicker = document.getElementById("stickerPicker");

// Modal Video Elements
const modalVideoAuthorName = document.getElementById("modalVideoAuthorName");
const modalVideoAuthorRole = document.getElementById("modalVideoAuthorRole");
const modalRecIndicator = document.getElementById("modalRecIndicator");
const modalVideoPreview = document.getElementById("modalVideoPreview");
const modalRecStartBtn = document.getElementById("modalRecStartBtn");
const modalRecStopBtn = document.getElementById("modalRecStopBtn");
const modalPostVideoWishBtn = document.getElementById("modalPostVideoWishBtn");

// Dev Modal Elements
const devModal = document.getElementById("devModal");
const devToggleBtn = document.getElementById("devToggleBtn");
const closeDevModalBtn = document.getElementById("closeDevModal");
const devDateInput = document.getElementById("devDateInput");
const devNameInput = document.getElementById("devNameInput");
const devHeadlineInput = document.getElementById("devHeadlineInput");
const devRevealThirdTitleInput = document.getElementById("devRevealThirdTitleInput");
const devMessageInput = document.getElementById("devMessageInput");
const devBgInput = document.getElementById("devBgInput");
const devOpacityInput = document.getElementById("devOpacityInput");
const devOpacityVal = document.getElementById("devOpacityVal");
const applyDevBtn = document.getElementById("applyDevBtn");
const copyConfigBtn = document.getElementById("copyConfigBtn");

// Photo Burst & Pinned Hero Elements
const photoBurstOverlay = document.getElementById("photoBurstOverlay");
const replayBurstBtn = document.getElementById("replayBurstBtn");
const heroPhotosPinnedContainer = document.getElementById("heroPhotosPinnedContainer");
const heroTimerProgress = document.getElementById("heroTimerProgress");
const heroPhotosPinnedCards = document.getElementById("heroPhotosPinnedCards");

// Customize Panel - Photos Tab
const panelPhotoCount = document.getElementById("panelPhotoCount");
const photoThumbnailsGrid = document.getElementById("photoThumbnailsGrid");
const photoFileInput = document.getElementById("photoFileInput");
const addPhotosBtn = document.getElementById("addPhotosBtn");
const syncSupabasePhotosBtn = document.getElementById("syncSupabasePhotosBtn");
const loadSamplePhotosBtn = document.getElementById("loadSamplePhotosBtn");
const clearAllPhotosBtn = document.getElementById("clearAllPhotosBtn");
const photoUploadStatus = document.getElementById("photoUploadStatus");

// Customize Panel - Burst & FX Controls
const burstStyleSelect = document.getElementById("burstStyleSelect");
const photoShapeSelect = document.getElementById("photoShapeSelect");
const photoSizeSelect = document.getElementById("photoSizeSelect");
const burstSpeedSelect = document.getElementById("burstSpeedSelect");
const burstDurationSelect = document.getElementById("burstDurationSelect");
const photoRotationSelect = document.getElementById("photoRotationSelect");
const photoBorderColorSelect = document.getElementById("photoBorderColorSelect");
const photoBorderThicknessSelect = document.getElementById("photoBorderThicknessSelect");
const photoCornerRadiusInput = document.getElementById("photoCornerRadiusInput");
const photoGlowIntensityInput = document.getElementById("photoGlowIntensityInput");
const confettiAmountSelect = document.getElementById("confettiAmountSelect");
const confettiSpeedSelect = document.getElementById("confettiSpeedSelect");

// Customize Panel - Background Tab
const bgFileInput = document.getElementById("bgFileInput");
const uploadBgBtn = document.getElementById("uploadBgBtn");
const bgUploadStatus = document.getElementById("bgUploadStatus");
const bgGradientPresetSelect = document.getElementById("bgGradientPresetSelect");

// Customize Panel - Music Tab
const audioFileInput = document.getElementById("audioFileInput");
const uploadAudioBtn = document.getElementById("uploadAudioBtn");
const uploadedAudioName = document.getElementById("uploadedAudioName");
const musicUploadStatus = document.getElementById("musicUploadStatus");
const devMusicInput = document.getElementById("devMusicInput");
const previewMusicBtn = document.getElementById("previewMusicBtn");
const devMusicVolume = document.getElementById("devMusicVolume");
const devMusicLoop = document.getElementById("devMusicLoop");

// Customize Panel - Colors Tab
const colorPinkIntensity = document.getElementById("colorPinkIntensity");
const colorBlueIntensity = document.getElementById("colorBlueIntensity");
const colorPurpleIntensity = document.getElementById("colorPurpleIntensity");

// Customize Panel - Quick Test & Footer Buttons
const testPhotoBurstActionBtn = document.getElementById("testPhotoBurstActionBtn");
const testBurstModalFooterBtn = document.getElementById("testBurstModalFooterBtn");
const closeDevModalBottomBtn = document.getElementById("closeDevModalBottomBtn");
const customizeNavTabs = document.getElementById("customizeNavTabs");

// Customize Panel - Admin Authentication Elements
const adminAuthBanner = document.getElementById("adminAuthBanner");
const adminStatusPill = document.getElementById("adminStatusPill");
const adminStatusLabel = document.getElementById("adminStatusLabel");
const toggleAdminLoginBtn = document.getElementById("toggleAdminLoginBtn");
const adminSignOutBtn = document.getElementById("adminSignOutBtn");
const adminLoginForm = document.getElementById("adminLoginForm");
const adminEmailInput = document.getElementById("adminEmailInput");
const adminPasswordInput = document.getElementById("adminPasswordInput");
const adminSignInBtn = document.getElementById("adminSignInBtn");
const adminMagicLinkBtn = document.getElementById("adminMagicLinkBtn");
const adminCancelLoginBtn = document.getElementById("adminCancelLoginBtn");
const adminAuthStatus = document.getElementById("adminAuthStatus");

// Quick Test Buttons
const testRevealSequenceBtn = document.getElementById("testRevealSequenceBtn");
const testZeroBtn = document.getElementById("testZeroBtn");
const testLastDayBtn = document.getElementById("testLastDayBtn");
const testGuestbookBtn = document.getElementById("testGuestbookBtn");
const resetExperienceBtn = document.getElementById("resetExperienceBtn");

// Lightbox Elements
const lightboxModal = document.getElementById("lightboxModal");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");
const closeLightboxBtn = document.getElementById("closeLightboxBtn");

// Tab elements in last-day section
const tabMemories = document.getElementById("tabMemories");
const tabVideos = document.getElementById("tabVideos");
const memoriesView = document.getElementById("memoriesView");
const videoBoothView = document.getElementById("videoBoothView");

// Video recorder elements (vault)
const recordVideoBtn = document.getElementById("recordVideoBtn");
const stopVideoBtn = document.getElementById("stopVideoBtn");
const saveVideoBtn = document.getElementById("saveVideoBtn");
const videoPreview = document.getElementById("videoPreview");
const recordingIndicator = document.getElementById("recordingIndicator");
const authorNameInput = document.getElementById("authorNameInput");
const recordedList = document.getElementById("recordedList");

let mediaStream = null;
let mediaRecorder = null;
let recordedChunks = [];
let recordedBlobUrl = null;

// Multi-Page Chapter Navigation Elements
const pageChapter1 = document.getElementById("pageChapter1");
const pageChapter2 = document.getElementById("pageChapter2");
const pageChapter3 = document.getElementById("pageChapter3");
const chapterNavBar = document.getElementById("chapterNavBar");
const chapterBtn1 = document.getElementById("chapterBtn1");
const chapterBtn2 = document.getElementById("chapterBtn2");
const chapterBtn3 = document.getElementById("chapterBtn3");

// Tap to continue chapter banner buttons (matches both HTML IDs and legacy IDs)
const goToPage2Btn = document.getElementById("goToPage2Btn") || document.getElementById("turnToChapter2Btn");
const goToPage3Btn = document.getElementById("goToPage3Btn") || document.getElementById("turnToChapter3Btn");
const backToPage1Btn = document.getElementById("backToPage1Btn") || document.getElementById("backToChapter1Btn");
const backToPage2Btn = document.getElementById("backToPage2Btn") || document.getElementById("backToChapter2Btn");
const backToPage1From3Btn = document.getElementById("backToPage1From3Btn") || document.getElementById("backToChapter1From3Btn");
const openSignLoveNoteFromChapterBtn = document.getElementById("openSignLoveNoteFromChapterBtn");

// ============================================================================
// INITIALIZATION
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  initSupabaseAuth();
  setupDynamicContent();
  setupBackground();
  initOpeningScreen();
  initParticlesCanvas();
  initConfettiCanvas();
  setupEventListeners();
  initScrapbookMemories();
  initBackgroundMusic();
  initGuestbook();
  initLoveNotesSystem();
  initChapterSystem();
  initPhotoStorageAndBurstSettings();
  loadBirthdayContentFromSupabase();
  loadBirthdayPhotosFromSupabase();
});

function setupDynamicContent() {
  if (openingPersonName) {
    openingPersonName.textContent = currentName;
  }
  if (openingMessage) {
    openingMessage.innerHTML = `I made something Just for you, <span class="recipient-highlight" id="openingPersonName">${currentName}</span> ❤️`;
  }

  // Update photo sticker image on Opening Screen with a real photo
  const stickerImg = document.getElementById("showMeStickerImg");
  if (stickerImg) {
    const photos = getThreeHeroPhotos();
    if (photos && photos.length > 0 && photos[0]) {
      stickerImg.src = photos[0];
    } else if (currentBgImage && currentBgImage.trim() !== "") {
      stickerImg.src = currentBgImage;
    }
  }

  if (heroPersonName) heroPersonName.textContent = currentName;

  const celebrationEyebrow = document.getElementById("celebrationEyebrow");
  if (celebrationEyebrow) {
    celebrationEyebrow.textContent = burstConfig.headline || "Happy Birthday, My Love ❤️";
  }
  if (celebrationTitle) {
    celebrationTitle.textContent = "Happy Birthday, My Love ❤️";
  }
  const celebrationSurpriseIntro = document.getElementById("celebrationSurpriseIntro");
  if (celebrationSurpriseIntro) {
    celebrationSurpriseIntro.textContent = "I made this little surprise just for you.";
  }
  if (celebrationMsg) celebrationMsg.textContent = currentMessage;

  // Set initial dev form values
  if (devNameInput) devNameInput.value = currentName;
  if (devMessageInput) devMessageInput.value = currentMessage;
  if (devBgInput) devBgInput.value = currentBgImage;
  if (devOpacityInput) {
    devOpacityInput.value = String(currentOverlayOpacity);
    if (devOpacityVal) devOpacityVal.textContent = `${Math.round(currentOverlayOpacity * 100)}%`;
  }
}

function setupBackground() {
  if (!bgImageEl || !bgOverlayEl) return;

  // Apply overlay opacity
  document.documentElement.style.setProperty("--overlay-opacity", String(currentOverlayOpacity));

  if (currentBgImage && currentBgImage.trim() !== "") {
    // Pre-test image to avoid broken icon
    const imgTest = new Image();
    imgTest.src = currentBgImage;
    imgTest.onload = () => {
      bgImageEl.style.backgroundImage = `url("${currentBgImage}")`;
      bgImageEl.style.opacity = "1";
    };
    imgTest.onerror = () => {
      // Graceful fallback to pure animated gradient mesh
      bgImageEl.style.opacity = "0";
    };
  } else {
    bgImageEl.style.opacity = "0";
  }
}

// ============================================================================
// EXPERIENCE SEQUENCE CONTROLLER
// (Opening Screen -> "SHOW ME" -> 3-2-1 Reveal -> 10s Photo Hover -> Main Celebration)
// ============================================================================
let revealCountdownTimer = null;
let photoRevealTimer = null;
let photoRevealSecondsInterval = null;

function initOpeningScreen() {
  if (revealCountdownTimer) {
    clearInterval(revealCountdownTimer);
    revealCountdownTimer = null;
  }
  if (photoRevealTimer) {
    clearTimeout(photoRevealTimer);
    photoRevealTimer = null;
  }
  if (photoRevealSecondsInterval) {
    clearInterval(photoRevealSecondsInterval);
    photoRevealSecondsInterval = null;
  }

  isCelebrationActive = false;

  // Make sure opening screen is active and visible
  if (openingScreen) {
    openingScreen.style.display = "flex";
    openingScreen.classList.add("active");
  }

  if (revealCountdownStage) {
    revealCountdownStage.style.display = "none";
  }

  if (tenSecondPhotoReveal) {
    tenSecondPhotoReveal.classList.remove("active");
    tenSecondPhotoReveal.style.display = "none";
  }

  if (celebrationScreen) {
    celebrationScreen.classList.remove("active");
  }

  // Hide Chapter navigation bar on opening screen
  if (chapterNavBar) {
    chapterNavBar.style.display = "none";
  }

  // Update recipient name in message
  if (openingPersonName) {
    openingPersonName.textContent = currentName;
  }
}

function startRevealSequence() {
  // Hide Opening Screen
  if (openingScreen) {
    openingScreen.classList.remove("active");
    openingScreen.style.display = "none";
  }

  // Hide any active celebration or overlay
  if (celebrationScreen) {
    celebrationScreen.classList.remove("active");
  }
  if (tenSecondPhotoReveal) {
    tenSecondPhotoReveal.classList.remove("active");
    tenSecondPhotoReveal.style.display = "none";
  }

  // Attempt to play music smoothly on user interaction
  if (!isMusicPlaying && !userExplicitlyPaused) {
    playMusic();
  }

  // Show 3 -> 2 -> 1 Reveal stage
  if (revealCountdownStage) {
    revealCountdownStage.style.display = "flex";
  }

  let count = 3;
  if (revealCountdownNum) {
    revealCountdownNum.textContent = String(count);
    revealCountdownNum.className = "reveal-countdown-number tick-pop";
  }
  if (revealCountdownSub) {
    revealCountdownSub.textContent = "Getting your surprise ready...";
  }

  if (revealCountdownTimer) clearInterval(revealCountdownTimer);

  revealCountdownTimer = setInterval(() => {
    count--;
    if (count > 0) {
      if (revealCountdownNum) {
        revealCountdownNum.textContent = String(count);
        revealCountdownNum.className = "reveal-countdown-number";
        void revealCountdownNum.offsetWidth; // Restart CSS keyframe animation
        revealCountdownNum.className = "reveal-countdown-number tick-pop";
      }
      if (revealCountdownSub) {
        revealCountdownSub.textContent = count === 2 ? "Almost there..." : "Here it comes! ❤️";
      }
    } else {
      // Reached 0: Immediately transition to birthday reveal & 10s photo hover
      clearInterval(revealCountdownTimer);
      revealCountdownTimer = null;

      if (revealCountdownStage) {
        revealCountdownStage.style.display = "none";
      }

      triggerBirthdayRevealWithPhotoHover();
    }
  }, 1000);
}

function triggerBirthdayRevealWithPhotoHover() {
  // Launch celebration confetti
  startConfettiAnimation();

  // Launch the 10-second photo hover reveal
  startTenSecondPhotoReveal();
}

function getThreeHeroPhotos() {
  let photoUrls = [];

  if (Array.isArray(currentPhotos) && currentPhotos.length > 0) {
    photoUrls = currentPhotos
      .map(p => (typeof p === "string" ? p : (p.src || p.url || "")))
      .filter(u => Boolean(u) && u.trim() !== "");
  }

  if (photoUrls.length === 0 && Array.isArray(defaultBurstPhotos) && defaultBurstPhotos.length > 0) {
    photoUrls = defaultBurstPhotos.slice();
  }

  // Fallback if no photos
  if (photoUrls.length === 0) {
    photoUrls = [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=80"
    ];
  }

  const p1 = photoUrls[0];
  const p2 = photoUrls[1] || photoUrls[0];
  const p3 = photoUrls[2] || photoUrls[1] || photoUrls[0];

  return [p1, p2, p3];
}

function getRevealThirdTitle() {
  if (burstConfig.revealThirdTitle && burstConfig.revealThirdTitle.trim() !== "") {
    return burstConfig.revealThirdTitle.trim();
  }
  if (currentPhotos && currentPhotos[2] && (currentPhotos[2].caption || currentPhotos[2].name)) {
    return (currentPhotos[2].caption || currentPhotos[2].name).trim();
  }
  return "MY EVERYTHING ❤️";
}

function startTenSecondPhotoReveal() {
  if (!tenSecondPhotoReveal) {
    // If element missing, jump directly to main celebration
    triggerCelebration();
    return;
  }

  // Pick the three prominent photos
  const [photo1, photo2, photo3] = getThreeHeroPhotos();
  const title1 = "MY BABY";
  const title2 = "MY LOVE";
  const title3 = getRevealThirdTitle();

  if (threeFloatingPhotosStage) {
    threeFloatingPhotosStage.innerHTML = `
      <!-- Photo 1: Furthest in background, smaller, slightly blurred/subdued, moves forward smoothly -->
      <div class="reveal-photo-card card-photo-1" id="revealCard1" title="Click to view memory (${escapeHtml(title1)})">
        <div class="reveal-card-inner">
          <img src="${photo1}" alt="${title1} - Cherished memory with ${escapeHtml(currentName)}" class="reveal-photo-img" />
          <div class="reveal-specular-sheen"></div>
        </div>
        <div class="reveal-photo-badge badge-photo-1">
          <span>✨</span>
          <span>${title1}</span>
          <span>✨</span>
        </div>
      </div>

      <!-- Photo 2: Starts behind Photo 1 / middle layer, slightly larger, moves forward toward viewer -->
      <div class="reveal-photo-card card-photo-2" id="revealCard2" title="Click to view memory (${escapeHtml(title2)})">
        <div class="reveal-card-inner">
          <img src="${photo2}" alt="${title2} - Cherished memory with ${escapeHtml(currentName)}" class="reveal-photo-img" />
          <div class="reveal-specular-sheen"></div>
        </div>
        <div class="reveal-photo-badge badge-photo-2">
          <span>❤️</span>
          <span>${title2}</span>
          <span>❤️</span>
        </div>
      </div>

      <!-- Photo 3: Starts deep, moves forward to front-center, largest, main focal centerpiece -->
      <div class="reveal-photo-card card-photo-3" id="revealCard3" title="Click to view memory (${escapeHtml(title3)})">
        <div class="reveal-card-inner">
          <img src="${photo3}" alt="${escapeHtml(title3)} - Cherished memory with ${escapeHtml(currentName)}" class="reveal-photo-img" />
          <div class="reveal-specular-sheen"></div>
        </div>
        <div class="reveal-photo-badge badge-photo-3">
          <span>👑</span>
          <span>${escapeHtml(title3)}</span>
          <span>✨</span>
        </div>
      </div>
    `;

    // Hook click to lightbox on each photo
    const card1 = document.getElementById("revealCard1");
    const card2 = document.getElementById("revealCard2");
    const card3 = document.getElementById("revealCard3");

    if (card1) card1.addEventListener("click", () => openLightbox(photo1, title1));
    if (card2) card2.addEventListener("click", () => openLightbox(photo2, title2));
    if (card3) card3.addEventListener("click", () => openLightbox(photo3, title3));
  }

  // Reset timer UI (10s progress bar and countdown)
  if (revealTimerProgress) {
    revealTimerProgress.style.animation = "none";
    void revealTimerProgress.offsetWidth;
    revealTimerProgress.style.animation = "revealBarShrink 10s linear forwards";
  }

  let remainingSec = 10;
  if (revealCountdownSeconds) {
    revealCountdownSeconds.textContent = `${remainingSec}s`;
  }

  if (photoRevealSecondsInterval) clearInterval(photoRevealSecondsInterval);
  photoRevealSecondsInterval = setInterval(() => {
    remainingSec--;
    if (remainingSec >= 1 && revealCountdownSeconds) {
      revealCountdownSeconds.textContent = `${remainingSec}s`;
    } else {
      clearInterval(photoRevealSecondsInterval);
      photoRevealSecondsInterval = null;
    }
  }, 1000);

  // Show the 10-second photo reveal overlay
  tenSecondPhotoReveal.style.display = "flex";
  void tenSecondPhotoReveal.offsetWidth;
  tenSecondPhotoReveal.classList.add("active");

  // Schedule transition to main birthday experience after 10 seconds
  if (photoRevealTimer) clearTimeout(photoRevealTimer);
  photoRevealTimer = setTimeout(() => {
    completePhotoRevealToMainExperience();
  }, 10000);
}

function completePhotoRevealToMainExperience() {
  if (photoRevealTimer) {
    clearTimeout(photoRevealTimer);
    photoRevealTimer = null;
  }
  if (photoRevealSecondsInterval) {
    clearInterval(photoRevealSecondsInterval);
    photoRevealSecondsInterval = null;
  }

  // Smooth fade out of the 10s photo reveal overlay
  if (tenSecondPhotoReveal) {
    tenSecondPhotoReveal.classList.remove("active");
    setTimeout(() => {
      tenSecondPhotoReveal.style.display = "none";
    }, 700);
  }

  // Transition into main birthday experience
  triggerCelebration();
}

function resetToOpeningScreen() {
  initOpeningScreen();
}

// ============================================================================
// CELEBRATION REVEAL & CONFETTI (Main Birthday Experience)
// ============================================================================
function triggerCelebration() {
  if (revealCountdownTimer) clearInterval(revealCountdownTimer);
  if (photoRevealTimer) clearTimeout(photoRevealTimer);
  if (photoRevealSecondsInterval) clearInterval(photoRevealSecondsInterval);

  isCelebrationActive = true;

  // Ensure Opening Screen and Reveal Stage are hidden
  if (openingScreen) {
    openingScreen.classList.remove("active");
    openingScreen.style.display = "none";
  }
  if (revealCountdownStage) {
    revealCountdownStage.style.display = "none";
  }
  if (tenSecondPhotoReveal) {
    tenSecondPhotoReveal.classList.remove("active");
    tenSecondPhotoReveal.style.display = "none";
  }

  // Activate Celebration screen
  if (celebrationScreen) celebrationScreen.classList.add("active");

  const celebrationEyebrow = document.getElementById("celebrationEyebrow");
  if (celebrationEyebrow) {
    celebrationEyebrow.textContent = burstConfig.headline || "Happy Birthday, My Love ❤️";
  }

  if (celebrationTitle) {
    celebrationTitle.textContent = "Happy Birthday, My Love ❤️";
  }

  const celebrationSurpriseIntro = document.getElementById("celebrationSurpriseIntro");
  if (celebrationSurpriseIntro) {
    celebrationSurpriseIntro.textContent = "I made this little surprise just for you.";
  }

  if (celebrationMsg) {
    celebrationMsg.textContent = currentMessage;
  }

  // Always unlock last-day features on celebration
  unlockLastDaySection();

  // Reveal Guestbook gallery alongside birthday celebration
  if (guestbookSection) {
    guestbookSection.classList.add("active");
    renderGuestbookGallery();
  }

  // Launch celebratory Confetti
  startConfettiAnimation();

  // Trigger Photo Burst feature (with 5-second pinned hero cards that settle into layout)
  showHeroPinnedPhotos();

  // Show Chapter navigation bar and ensure Chapter 1 is active
  if (chapterNavBar) {
    chapterNavBar.style.display = "flex";
  }
  showChapter(1, false);

  // Keep music playing smoothly; if not yet started and user hasn't explicitly paused, start it
  if (!isMusicPlaying && !userExplicitlyPaused) {
    playMusic();
  }
}

function unlockLastDaySection() {
  if (lastDaySection) {
    lastDaySection.classList.add("unlocked");
  }
}

// ============================================================================
// BACKGROUND MUSIC ENGINE (MP3 / WAV / OGG & Mobile Autoplay Policy Handler)
// ============================================================================

function initBackgroundMusic() {
  if (!bgAudio) return;

  // Configure audio tag with backgroundMusic setting
  bgAudio.src = backgroundMusic;
  bgAudio.loop = Boolean(loopMusic);
  bgAudio.volume = 0.65;

  bgAudio.addEventListener("ended", () => {
    if (!loopMusic) {
      isMusicPlaying = false;
      updateMusicUI(false);
    }
  });

  bgAudio.addEventListener("error", () => {
    console.warn("Notice: Audio file at " + backgroundMusic + " could not be loaded; using soft ambient chimes synthesizer as fallback.");
    if (isMusicPlaying) {
      startAmbientSynth();
    }
  });

  // Attempt initial playback respecting modern browser autoplay policies
  const playPromise = bgAudio.play();
  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        // Autoplay succeeded!
        isMusicPlaying = true;
        updateMusicUI(true);
        hideAutoplayPrompt();
      })
      .catch(() => {
        // Autoplay blocked by mobile browser - show subtle "Tap to play music 🎵" prompt
        isMusicPlaying = false;
        updateMusicUI(false);
        showAutoplayPrompt();

        // Listen for first touch/click anywhere on page to begin playback naturally
        const onFirstUserTap = () => {
          if (!userExplicitlyPaused && !isMusicPlaying) {
            playMusic();
          }
          window.removeEventListener("click", onFirstUserTap);
          window.removeEventListener("touchstart", onFirstUserTap);
        };
        window.addEventListener("click", onFirstUserTap, { once: true });
        window.addEventListener("touchstart", onFirstUserTap, { once: true });
      });
  }
}

function playMusic() {
  userExplicitlyPaused = false;
  hideAutoplayPrompt();

  if (bgAudio) {
    const playPromise = bgAudio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          isMusicPlaying = true;
          updateMusicUI(true);
        })
        .catch(() => {
          // Fallback to ambient chime synth if browser blocks media element
          startAmbientSynth();
          isMusicPlaying = true;
          updateMusicUI(true);
        });
    } else {
      isMusicPlaying = true;
      updateMusicUI(true);
    }
  } else {
    startAmbientSynth();
    isMusicPlaying = true;
    updateMusicUI(true);
  }
}

function pauseMusic() {
  if (bgAudio) {
    bgAudio.pause();
  }
  stopAmbientSynth();
  isMusicPlaying = false;
  userExplicitlyPaused = true;
  updateMusicUI(false);
  hideAutoplayPrompt();
}

function toggleMusic() {
  if (isMusicPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
}

function toggleMute() {
  if (!bgAudio) return;
  isMusicMuted = !isMusicMuted;
  bgAudio.muted = isMusicMuted;
  if (musicMuteBtn) {
    musicMuteBtn.textContent = isMusicMuted ? "🔇" : "🔊";
    musicMuteBtn.setAttribute("title", isMusicMuted ? "Unmute music" : "Mute music");
  }
}

function updateMusicUI(playing) {
  if (soundBars) {
    if (playing) {
      soundBars.classList.add("playing");
    } else {
      soundBars.classList.remove("playing");
    }
  }
  if (musicBtnLabel) {
    musicBtnLabel.textContent = playing ? "Playing" : "Music";
  }
  if (musicPlayBtn) {
    musicPlayBtn.setAttribute("title", playing ? "Pause background music" : "Play background music");
  }
  if (musicBtn) {
    if (playing) {
      musicBtn.classList.add("music-playing");
    } else {
      musicBtn.classList.remove("music-playing");
    }
  }
}

function showAutoplayPrompt() {
  if (autoplayMusicPrompt && !userExplicitlyPaused) {
    autoplayMusicPrompt.classList.remove("hidden");
  }
}

function hideAutoplayPrompt() {
  if (autoplayMusicPrompt) {
    autoplayMusicPrompt.classList.add("hidden");
  }
}

// Gentle pentatonic chime sequence (synthesizer fallback)
const CHIME_PENTATONIC = [
  261.63, // C4
  293.66, // D4
  329.63, // E4
  392.00, // G4
  440.00, // A4
  523.25, // C5
  587.33, // D5
  659.25  // E5
];

function playSoftChime(freq, duration = 3.5, gainLevel = 0.08) {
  if (!audioContext) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) audioContext = new AudioCtx();
  }
  if (!audioContext) return;
  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

  try {
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, audioContext.currentTime);

    filter.type = "lowpass";
    filter.frequency.setValueAtTime(1200, audioContext.currentTime);

    gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(gainLevel, audioContext.currentTime + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(audioContext.destination);

    osc.start();
    osc.stop(audioContext.currentTime + duration);
  } catch {
    // Graceful silent return
  }
}

function startAmbientSynth() {
  if (synthInterval) clearInterval(synthInterval);

  playSoftChime(261.63, 4, 0.06);
  setTimeout(() => playSoftChime(329.63, 4, 0.05), 300);
  setTimeout(() => playSoftChime(392.00, 4, 0.05), 600);

  synthInterval = setInterval(() => {
    if (!isMusicPlaying) return;
    const randomFreq = CHIME_PENTATONIC[Math.floor(Math.random() * CHIME_PENTATONIC.length)];
    playSoftChime(randomFreq, 3.2, 0.07);

    if (Math.random() > 0.5) {
      setTimeout(() => {
        const harmonyFreq = CHIME_PENTATONIC[Math.floor(Math.random() * CHIME_PENTATONIC.length)];
        playSoftChime(harmonyFreq, 3.5, 0.05);
      }, 600);
    }
  }, 2200);
}

function stopAmbientSynth() {
  if (synthInterval) {
    clearInterval(synthInterval);
    synthInterval = null;
  }
}

// ============================================================================
// BIRTHDAY GUESTBOOK ENGINE (Text Notes, Video Wishes & Gallery)
// ============================================================================

const GUESTBOOK_STORAGE_KEY = "birthday_guestbook_messages_v1";

function initGuestbook() {
  loadGuestbookMessages();
  renderGuestbookGallery();
  setupGuestbookModal();
}

function loadGuestbookMessages() {
  try {
    const saved = localStorage.getItem(GUESTBOOK_STORAGE_KEY);
    if (saved) {
      guestbookMessages = JSON.parse(saved);
    } else {
      guestbookMessages = [...defaultGuestbookMessages];
      saveGuestbookMessages();
    }
  } catch {
    guestbookMessages = [...defaultGuestbookMessages];
  }
}

function saveGuestbookMessages() {
  try {
    localStorage.setItem(GUESTBOOK_STORAGE_KEY, JSON.stringify(guestbookMessages));
  } catch (err) {
    console.warn("Could not persist guestbook to localStorage:", err);
  }
}

function renderGuestbookGallery(filter = currentGuestbookFilter) {
  if (!guestbookGallery) return;
  currentGuestbookFilter = filter;

  let filtered = guestbookMessages;
  if (filter === "text") {
    filtered = guestbookMessages.filter(m => m.type !== "video");
  } else if (filter === "video") {
    filtered = guestbookMessages.filter(m => m.type === "video");
  }

  if (guestbookCount) {
    guestbookCount.textContent = String(guestbookMessages.length);
  }

  guestbookGallery.innerHTML = "";

  // Prompt card to encourage visitors to sign
  const promptCard = document.createElement("div");
  promptCard.className = "guest-prompt-card";
  promptCard.id = "guestPromptCard";
  promptCard.innerHTML = `
    <div class="guest-prompt-icon">✍️</div>
    <div class="guest-prompt-title">Leave a Birthday Wish</div>
    <div class="guest-prompt-desc">Add a sweet note or video for ${escapeHtml(currentName)}!</div>
  `;
  promptCard.addEventListener("click", openSignGuestbook);
  guestbookGallery.appendChild(promptCard);

  // Render cards
  filtered.forEach((item) => {
    const card = document.createElement("div");
    card.className = "guest-item-card";
    card.id = `guestCard_${item.id}`;

    const isLiked = Boolean(item.likedByUser);
    const stickerHtml = item.sticker ? `<span class="guest-sticker-badge">${escapeHtml(item.sticker)}</span>` : "";

    if (item.type === "video") {
      card.innerHTML = `
        <div class="guest-item-header">
          <div class="guest-avatar">${escapeHtml(item.avatar || "🎥")}</div>
          <div class="guest-author-info">
            <span class="guest-author-name">${escapeHtml(item.author)}</span>
            <span class="guest-role-tag">${escapeHtml(item.role || "Friend 💕")}</span>
          </div>
          ${stickerHtml}
        </div>
        <div class="guest-video-wrapper">
          <video src="${item.videoUrl}" controls playsinline></video>
        </div>
        ${item.message ? `<p class="guest-message-text">${escapeHtml(item.message)}</p>` : ""}
        <div class="guest-item-footer">
          <span>${escapeHtml(item.date || "Today")}</span>
          <button class="guest-like-btn ${isLiked ? 'liked' : ''}" data-id="${item.id}" title="Send love">
            <span>${isLiked ? '❤️' : '🤍'}</span>
            <span>${item.likes || 0}</span>
          </button>
        </div>
      `;
    } else {
      card.innerHTML = `
        <div class="guest-item-header">
          <div class="guest-avatar">${escapeHtml(item.avatar || "💌")}</div>
          <div class="guest-author-info">
            <span class="guest-author-name">${escapeHtml(item.author)}</span>
            <span class="guest-role-tag">${escapeHtml(item.role || "Friend 💕")}</span>
          </div>
          ${stickerHtml}
        </div>
        <p class="guest-message-text">"${escapeHtml(item.message)}"</p>
        <div class="guest-item-footer">
          <span>${escapeHtml(item.date || "Today")}</span>
          <button class="guest-like-btn ${isLiked ? 'liked' : ''}" data-id="${item.id}" title="Send love">
            <span>${isLiked ? '❤️' : '🤍'}</span>
            <span>${item.likes || 0}</span>
          </button>
        </div>
      `;
    }

    const likeBtn = card.querySelector(".guest-like-btn");
    if (likeBtn) {
      likeBtn.addEventListener("click", () => handleLikeWish(item.id));
    }

    guestbookGallery.appendChild(card);
  });
}

function handleLikeWish(id) {
  const item = guestbookMessages.find(m => m.id === id);
  if (!item) return;

  if (item.likedByUser) {
    item.likes = Math.max(0, (item.likes || 1) - 1);
    item.likedByUser = false;
  } else {
    item.likes = (item.likes || 0) + 1;
    item.likedByUser = true;
  }
  saveGuestbookMessages();
  renderLoveNotes();
  renderGuestbookGallery(currentGuestbookFilter);
}

function openSignGuestbook() {
  if (signGuestbookModal) {
    signGuestbookModal.classList.add("active");
  }
}

function closeSignGuestbook() {
  if (signGuestbookModal) {
    signGuestbookModal.classList.remove("active");
  }
  stopModalCamera();
}

// ============================================================================
// CHAPTER 3 — BIRTHDAY LOVE NOTES & WISHES ENGINE
// ============================================================================

let noteModalPhotos = []; // array of data URLs or URLs
let noteModalVideo = null; // video data URL or blob URL
let noteModalVoice = null; // audio data URL or blob URL
let noteModalSticker = "💖";
let noteModalVideoRecorder = null;
let noteModalVoiceRecorder = null;
let noteModalVideoStream = null;
let noteModalVoiceStream = null;
let noteModalVideoChunks = [];
let noteModalVoiceChunks = [];

function initLoveNotesSystem() {
  renderLoveNotes();
  setupLoveNotesModal();
  setupAdminLoveNotes();
}

function renderLoveNotes() {
  const loveNotesGrid = document.getElementById("loveNotesCardsGrid") || document.getElementById("loveNotesGrid");
  if (!loveNotesGrid) return;

  const countBadge = document.getElementById("guestbookCount");
  if (countBadge) {
    countBadge.textContent = String(guestbookMessages.length);
  }

  loveNotesGrid.innerHTML = "";

  // Prompt card to invite more wishes
  const promptCard = document.createElement("div");
  promptCard.className = "love-note-card prompt-card";
  promptCard.id = "loveNotePromptCard";
  promptCard.innerHTML = `
    <div style="text-align: center; padding: 1.5rem 1rem;">
      <div style="font-size: 2.2rem; margin-bottom: 0.6rem;">💌</div>
      <h4 style="font-family: var(--font-heading); font-size: 1.25rem; color: var(--color-pink-primary); margin-bottom: 0.4rem;">Add Your Love Note</h4>
      <p style="font-size: 0.85rem; color: var(--color-text-secondary); line-height: 1.5; margin-bottom: 1rem;">
        Leave a sweet birthday wish, photos, short video, or voice message for ${escapeHtml(currentName)}!
      </p>
      <button type="button" class="primary-btn pulse-glow" style="margin: 0 auto; padding: 0.6rem 1.3rem; font-size: 0.9rem;">
        <span>✍️ Write a Note</span>
      </button>
    </div>
  `;
  promptCard.addEventListener("click", openSignGuestbook);
  loveNotesGrid.appendChild(promptCard);

  guestbookMessages.forEach((item) => {
    const card = document.createElement("div");
    card.className = "love-note-card";
    card.id = `loveNoteCard_${item.id}`;

    const isLiked = Boolean(item.likedByUser);
    const stickerHtml = item.sticker ? `<span class="love-note-sticker">${escapeHtml(item.sticker)}</span>` : "";

    // Photos grid (up to 3)
    let photosHtml = "";
    if (item.photos && item.photos.length > 0) {
      const pCount = Math.min(item.photos.length, 3);
      const imgTags = item.photos.slice(0, 3).map((src, idx) => `
        <div class="love-note-media-item" data-photo-src="${escapeHtml(src)}">
          <img src="${src}" alt="Note photo ${idx + 1}" loading="lazy" />
        </div>
      `).join("");
      photosHtml = `<div class="love-note-media-grid count-${pCount}">${imgTags}</div>`;
    }

    // Video Box
    let videoHtml = "";
    if (item.videoUrl) {
      videoHtml = `
        <div class="love-note-video-box">
          <video src="${item.videoUrl}" controls playsinline preload="metadata"></video>
        </div>
      `;
    }

    // Voice / Audio Box
    let voiceHtml = "";
    if (item.audioUrl) {
      voiceHtml = `
        <div class="love-note-audio-box">
          <div class="love-note-audio-header">🎙️ Voice Note</div>
          <audio src="${item.audioUrl}" controls style="width: 100%; height: 38px;"></audio>
        </div>
      `;
    }

    card.innerHTML = `
      <div class="love-note-header">
        <div class="love-note-avatar">${escapeHtml(item.avatar || "💌")}</div>
        <div class="love-note-author-meta">
          <span class="love-note-author-name">${escapeHtml(item.author)}</span>
          <span class="love-note-author-role">${escapeHtml(item.role || "Loved One 💕")}</span>
        </div>
        ${stickerHtml}
      </div>
      <p class="love-note-body-text">${escapeHtml(item.message || "")}</p>
      ${photosHtml}
      ${videoHtml}
      ${voiceHtml}
      <div class="love-note-footer">
        <span class="love-note-date">${escapeHtml(item.date || "Today")}</span>
        <button class="love-note-like-btn ${isLiked ? 'liked' : ''}" data-id="${item.id}" type="button" title="Send love">
          <span>${isLiked ? '❤️' : '🤍'}</span>
          <span>${item.likes || 0}</span>
        </button>
      </div>
    `;

    // Click photo to open lightbox
    card.querySelectorAll(".love-note-media-item").forEach(el => {
      el.addEventListener("click", () => {
        const src = el.getAttribute("data-photo-src");
        if (src) openLightbox(src, `${item.author}'s photo wish`);
      });
    });

    // Like button
    const likeBtn = card.querySelector(".love-note-like-btn");
    if (likeBtn) {
      likeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        handleLikeWish(item.id);
      });
    }

    loveNotesGrid.appendChild(card);
  });
}

// Multi-attachment rules and modal setup
function setupLoveNotesModal() {
  if (openSignGuestbookBtn) {
    openSignGuestbookBtn.addEventListener("click", openSignGuestbook);
  }
  if (closeSignGuestbookBtn) {
    closeSignGuestbookBtn.addEventListener("click", closeSignGuestbook);
  }
  if (signGuestbookModal) {
    signGuestbookModal.addEventListener("click", (e) => {
      if (e.target === signGuestbookModal) closeSignGuestbook();
    });
  }

  // Sticker Picker
  const stickerOptions = document.querySelectorAll("#stickerPicker .sticker-option");
  stickerOptions.forEach(btn => {
    btn.addEventListener("click", () => {
      stickerOptions.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      noteModalSticker = btn.dataset.sticker || "💖";
    });
  });

  // Photos file input
  const notePhotosInput = document.getElementById("notePhotosInput");
  if (notePhotosInput) {
    notePhotosInput.addEventListener("change", (e) => {
      const files = Array.from(e.target.files || []);
      if (!files.length) return;

      const maxAllowed = (noteModalVideo || noteModalVoice) ? 2 : 3;
      const slotsRemaining = Math.max(0, maxAllowed - noteModalPhotos.length);

      if (slotsRemaining <= 0) {
        alert(`You can only attach up to ${maxAllowed} photos with your current selection.`);
        notePhotosInput.value = "";
        return;
      }

      const filesToRead = files.slice(0, slotsRemaining);
      let readCount = 0;

      filesToRead.forEach(file => {
        const reader = new FileReader();
        reader.onload = (loadEvent) => {
          noteModalPhotos.push(loadEvent.target.result);
          readCount++;
          if (readCount === filesToRead.length) {
            updateNoteAttachmentStatus();
          }
        };
        reader.readAsDataURL(file);
      });

      notePhotosInput.value = "";
    });
  }

  // Video Section toggles and recording
  const openVideoRecorderBtn = document.getElementById("openVideoRecorderBtn");
  const noteVideoPanel = document.getElementById("noteVideoPanel");
  const closeVideoPanelBtn = document.getElementById("closeVideoPanelBtn");
  const startNoteVideoRecBtn = document.getElementById("startNoteVideoRecBtn");
  const stopNoteVideoRecBtn = document.getElementById("stopNoteVideoRecBtn");
  const noteVideoFileInput = document.getElementById("noteVideoFileInput");
  const noteVideoPreview = document.getElementById("noteVideoPreview");
  const noteVideoRecIndicator = document.getElementById("noteVideoRecIndicator");

  if (openVideoRecorderBtn) {
    openVideoRecorderBtn.addEventListener("click", () => {
      if (noteModalVoice) {
        if (!confirm("You already have a voice note attached. Attaching a video will replace your voice note. Proceed?")) return;
        noteModalVoice = null;
      }
      if (noteVideoPanel) noteVideoPanel.style.display = "block";
      updateNoteAttachmentStatus();
    });
  }

  if (closeVideoPanelBtn) {
    closeVideoPanelBtn.addEventListener("click", () => {
      stopNoteVideoCapture();
      if (noteVideoPanel) noteVideoPanel.style.display = "none";
    });
  }

  if (startNoteVideoRecBtn) {
    startNoteVideoRecBtn.addEventListener("click", async () => {
      try {
        noteModalVideoStream = await navigator.mediaDevices.getUserMedia({
          video: { width: { ideal: 640 }, height: { ideal: 480 }, facingMode: "user" },
          audio: true
        });
        if (noteVideoPreview) {
          noteVideoPreview.srcObject = noteModalVideoStream;
          noteVideoPreview.style.display = "block";
          noteVideoPreview.muted = true;
          noteVideoPreview.play();
        }

        noteModalVideoChunks = [];
        noteModalVideoRecorder = new MediaRecorder(noteModalVideoStream);
        noteModalVideoRecorder.ondataavailable = (e) => {
          if (e.data && e.data.size > 0) noteModalVideoChunks.push(e.data);
        };
        noteModalVideoRecorder.onstop = () => {
          const blob = new Blob(noteModalVideoChunks, { type: "video/webm" });
          noteModalVideo = URL.createObjectURL(blob);
          noteModalVoice = null; // Video and voice are mutually exclusive
          if (noteVideoPreview) {
            noteVideoPreview.srcObject = null;
            noteVideoPreview.src = noteModalVideo;
            noteVideoPreview.muted = false;
            noteVideoPreview.controls = true;
          }
          stopNoteVideoCapture();
          updateNoteAttachmentStatus();
        };

        noteModalVideoRecorder.start();
        if (startNoteVideoRecBtn) startNoteVideoRecBtn.style.display = "none";
        if (stopNoteVideoRecBtn) stopNoteVideoRecBtn.style.display = "inline-flex";
        if (noteVideoRecIndicator) noteVideoRecIndicator.style.display = "inline-flex";
      } catch (err) {
        alert("Camera or microphone permission is required to record a video.");
      }
    });
  }

  if (stopNoteVideoRecBtn) {
    stopNoteVideoRecBtn.addEventListener("click", () => {
      if (noteModalVideoRecorder && noteModalVideoRecorder.state !== "inactive") {
        noteModalVideoRecorder.stop();
      }
      if (stopNoteVideoRecBtn) stopNoteVideoRecBtn.style.display = "none";
      if (startNoteVideoRecBtn) startNoteVideoRecBtn.style.display = "inline-flex";
      if (noteVideoRecIndicator) noteVideoRecIndicator.style.display = "none";
    });
  }

  if (noteVideoFileInput) {
    noteVideoFileInput.addEventListener("change", (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      noteModalVideo = URL.createObjectURL(file);
      noteModalVoice = null;
      if (noteVideoPreview) {
        noteVideoPreview.srcObject = null;
        noteVideoPreview.src = noteModalVideo;
        noteVideoPreview.style.display = "block";
        noteVideoPreview.controls = true;
      }
      updateNoteAttachmentStatus();
      noteVideoFileInput.value = "";
    });
  }

  // Voice Section toggles and recording
  const openVoiceRecorderBtn = document.getElementById("openVoiceRecorderBtn");
  const noteVoicePanel = document.getElementById("noteVoicePanel");
  const closeVoicePanelBtn = document.getElementById("closeVoicePanelBtn");
  const startNoteVoiceRecBtn = document.getElementById("startNoteVoiceRecBtn");
  const stopNoteVoiceRecBtn = document.getElementById("stopNoteVoiceRecBtn");
  const noteVoiceFileInput = document.getElementById("noteVoiceFileInput");
  const noteVoicePreview = document.getElementById("noteVoicePreview");
  const noteVoiceRecIndicator = document.getElementById("noteVoiceRecIndicator");

  if (openVoiceRecorderBtn) {
    openVoiceRecorderBtn.addEventListener("click", () => {
      if (noteModalVideo) {
        if (!confirm("You already have a video attached. Attaching a voice note will replace your video. Proceed?")) return;
        noteModalVideo = null;
      }
      if (noteVoicePanel) noteVoicePanel.style.display = "block";
      updateNoteAttachmentStatus();
    });
  }

  if (closeVoicePanelBtn) {
    closeVoicePanelBtn.addEventListener("click", () => {
      stopNoteVoiceCapture();
      if (noteVoicePanel) noteVoicePanel.style.display = "none";
    });
  }

  if (startNoteVoiceRecBtn) {
    startNoteVoiceRecBtn.addEventListener("click", async () => {
      try {
        noteModalVoiceStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        noteModalVoiceChunks = [];
        noteModalVoiceRecorder = new MediaRecorder(noteModalVoiceStream);
        noteModalVoiceRecorder.ondataavailable = (e) => {
          if (e.data && e.data.size > 0) noteModalVoiceChunks.push(e.data);
        };
        noteModalVoiceRecorder.onstop = () => {
          const blob = new Blob(noteModalVoiceChunks, { type: "audio/webm" });
          noteModalVoice = URL.createObjectURL(blob);
          noteModalVideo = null; // Mutually exclusive
          if (noteVoicePreview) {
            noteVoicePreview.src = noteModalVoice;
            noteVoicePreview.style.display = "block";
          }
          stopNoteVoiceCapture();
          updateNoteAttachmentStatus();
        };

        noteModalVoiceRecorder.start();
        if (startNoteVoiceRecBtn) startNoteVoiceRecBtn.style.display = "none";
        if (stopNoteVoiceRecBtn) stopNoteVoiceRecBtn.style.display = "inline-flex";
        if (noteVoiceRecIndicator) noteVoiceRecIndicator.style.display = "inline-flex";
      } catch (err) {
        alert("Microphone permission is required to record a voice note.");
      }
    });
  }

  if (stopNoteVoiceRecBtn) {
    stopNoteVoiceRecBtn.addEventListener("click", () => {
      if (noteModalVoiceRecorder && noteModalVoiceRecorder.state !== "inactive") {
        noteModalVoiceRecorder.stop();
      }
      if (stopNoteVoiceRecBtn) stopNoteVoiceRecBtn.style.display = "none";
      if (startNoteVoiceRecBtn) startNoteVoiceRecBtn.style.display = "inline-flex";
      if (noteVoiceRecIndicator) noteVoiceRecIndicator.style.display = "none";
    });
  }

  if (noteVoiceFileInput) {
    noteVoiceFileInput.addEventListener("change", (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      noteModalVoice = URL.createObjectURL(file);
      noteModalVideo = null;
      if (noteVoicePreview) {
        noteVoicePreview.src = noteModalVoice;
        noteVoicePreview.style.display = "block";
      }
      updateNoteAttachmentStatus();
      noteVoiceFileInput.value = "";
    });
  }

  // Unified Form Submit (Enforces: author, message, combinations)
  const loveNoteSubmissionForm = document.getElementById("loveNoteSubmissionForm");
  if (loveNoteSubmissionForm) {
    loveNoteSubmissionForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const authorInput = document.getElementById("wishAuthorName");
      const roleInput = document.getElementById("wishAuthorRole");
      const messageInput = document.getElementById("wishMessageText");

      const author = authorInput ? authorInput.value.trim() : "A Loving Friend";
      const role = (roleInput && roleInput.value.trim()) || "Loved One 💕";
      const message = messageInput ? messageInput.value.trim() : "";

      if (!author || !message) {
        alert("Please provide your name and a heartfelt message!");
        return;
      }

      const initials = author.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2) || "💌";

      let noteType = "text";
      if (noteModalVideo) noteType = "video";
      else if (noteModalVoice) noteType = "audio";
      else if (noteModalPhotos.length > 0) noteType = "photos";

      const newNote = {
        id: "wish-" + Date.now(),
        author: author,
        role: role,
        avatar: initials,
        message: message,
        sticker: noteModalSticker,
        photos: [...noteModalPhotos],
        videoUrl: noteModalVideo,
        audioUrl: noteModalVoice,
        date: "Just now",
        likes: 1,
        likedByUser: true,
        type: noteType
      };

      guestbookMessages.unshift(newNote);
      saveGuestbookMessages();

      // Reset form and attachments
      loveNoteSubmissionForm.reset();
      resetNoteModalAttachments();
      closeSignGuestbook();

      // Re-render both views
      renderLoveNotes();
      renderGuestbookGallery(currentGuestbookFilter);

      // Celebration burst
      startConfettiAnimation();
    });
  }

  // Initial status check
  updateNoteAttachmentStatus();
}

function stopNoteVideoCapture() {
  if (noteModalVideoStream) {
    noteModalVideoStream.getTracks().forEach(t => t.stop());
    noteModalVideoStream = null;
  }
}

function stopNoteVoiceCapture() {
  if (noteModalVoiceStream) {
    noteModalVoiceStream.getTracks().forEach(t => t.stop());
    noteModalVoiceStream = null;
  }
}

function resetNoteModalAttachments() {
  noteModalPhotos = [];
  noteModalVideo = null;
  noteModalVoice = null;
  stopNoteVideoCapture();
  stopNoteVoiceCapture();

  const noteVideoPanel = document.getElementById("noteVideoPanel");
  const noteVoicePanel = document.getElementById("noteVoicePanel");
  const noteVideoPreview = document.getElementById("noteVideoPreview");
  const noteVoicePreview = document.getElementById("noteVoicePreview");

  if (noteVideoPanel) noteVideoPanel.style.display = "none";
  if (noteVoicePanel) noteVoicePanel.style.display = "none";
  if (noteVideoPreview) {
    noteVideoPreview.srcObject = null;
    noteVideoPreview.src = "";
    noteVideoPreview.style.display = "none";
  }
  if (noteVoicePreview) {
    noteVoicePreview.src = "";
    noteVoicePreview.style.display = "none";
  }

  updateNoteAttachmentStatus();
}

// Enforces exact combinations:
// 1. Up to 3 photos (0 video, 0 voice)
// 2. Up to 2 photos + 1 short video (0 voice)
// 3. Up to 2 photos + 1 short voice (0 video)
function updateNoteAttachmentStatus() {
  const statusPhotosTag = document.getElementById("statusPhotosTag");
  const statusVideoTag = document.getElementById("statusVideoTag");
  const statusVoiceTag = document.getElementById("statusVoiceTag");
  const previewsContainer = document.getElementById("noteAttachedPreviews");
  const addPhotosLabel = document.getElementById("addPhotosLabel");

  const hasVideoOrVoice = Boolean(noteModalVideo || noteModalVoice);
  const maxPhotos = hasVideoOrVoice ? 2 : 3;

  // Trim photos if currently exceeds limit
  if (noteModalPhotos.length > maxPhotos) {
    noteModalPhotos = noteModalPhotos.slice(0, maxPhotos);
  }

  if (statusPhotosTag) {
    statusPhotosTag.textContent = `📸 Photos: ${noteModalPhotos.length}/${maxPhotos}`;
    statusPhotosTag.classList.toggle("active-attached", noteModalPhotos.length > 0);
  }

  if (statusVideoTag) {
    statusVideoTag.textContent = noteModalVideo ? "🎥 Video: 1 attached ✓" : "🎥 Video: None";
    statusVideoTag.classList.toggle("active-attached", Boolean(noteModalVideo));
  }

  if (statusVoiceTag) {
    statusVoiceTag.textContent = noteModalVoice ? "🎙️ Voice: 1 attached ✓" : "🎙️ Voice: None";
    statusVoiceTag.classList.toggle("active-attached", Boolean(noteModalVoice));
  }

  if (addPhotosLabel) {
    if (noteModalPhotos.length >= maxPhotos) {
      addPhotosLabel.style.opacity = "0.45";
      addPhotosLabel.style.pointerEvents = "none";
    } else {
      addPhotosLabel.style.opacity = "1";
      addPhotosLabel.style.pointerEvents = "auto";
    }
  }

  // Render previews with removal buttons
  if (previewsContainer) {
    previewsContainer.innerHTML = "";

    // Photos previews
    noteModalPhotos.forEach((src, idx) => {
      const chip = document.createElement("div");
      chip.className = "note-preview-chip";
      chip.innerHTML = `
        <img src="${src}" alt="Attached preview ${idx + 1}" />
        <span>Photo ${idx + 1}</span>
        <button type="button" class="remove-chip-btn" data-photo-idx="${idx}">&times;</button>
      `;
      chip.querySelector(".remove-chip-btn").addEventListener("click", () => {
        noteModalPhotos.splice(idx, 1);
        updateNoteAttachmentStatus();
      });
      previewsContainer.appendChild(chip);
    });

    // Video preview chip
    if (noteModalVideo) {
      const chip = document.createElement("div");
      chip.className = "note-preview-chip";
      chip.innerHTML = `
        <span>🎥 Video Attached</span>
        <button type="button" class="remove-chip-btn" id="removeVideoChipBtn">&times;</button>
      `;
      chip.querySelector("#removeVideoChipBtn").addEventListener("click", () => {
        noteModalVideo = null;
        const noteVideoPreview = document.getElementById("noteVideoPreview");
        if (noteVideoPreview) noteVideoPreview.src = "";
        updateNoteAttachmentStatus();
      });
      previewsContainer.appendChild(chip);
    }

    // Voice preview chip
    if (noteModalVoice) {
      const chip = document.createElement("div");
      chip.className = "note-preview-chip";
      chip.innerHTML = `
        <span>🎙️ Voice Note Attached</span>
        <button type="button" class="remove-chip-btn" id="removeVoiceChipBtn">&times;</button>
      `;
      chip.querySelector("#removeVoiceChipBtn").addEventListener("click", () => {
        noteModalVoice = null;
        const noteVoicePreview = document.getElementById("noteVoicePreview");
        if (noteVoicePreview) noteVoicePreview.src = "";
        updateNoteAttachmentStatus();
      });
      previewsContainer.appendChild(chip);
    }
  }
}

// Admin Love Notes Tab Management
function setupAdminLoveNotes() {
  const resetBtn = document.getElementById("adminResetLoveNotesBtn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (confirm("Reset love notes and wishes to the default messages?")) {
        guestbookMessages = [...defaultGuestbookMessages];
        saveGuestbookMessages();
        renderLoveNotes();
        renderGuestbookGallery(currentGuestbookFilter);
        renderAdminLoveNotesList();
      }
    });
  }
}

function renderAdminLoveNotesList() {
  const container = document.getElementById("adminLoveNotesList");
  if (!container) return;

  container.innerHTML = "";

  if (guestbookMessages.length === 0) {
    container.innerHTML = `<p style="color: var(--color-text-secondary); font-size: 0.85rem; padding: 0.8rem;">No love notes currently registered.</p>`;
    return;
  }

  guestbookMessages.forEach((item, index) => {
    const row = document.createElement("div");
    row.className = "admin-note-item-row";

    let mediaBadge = "";
    if (item.videoUrl) mediaBadge += `<span class="note-media-badge">🎥 Video</span>`;
    if (item.audioUrl) mediaBadge += `<span class="note-media-badge">🎙️ Voice</span>`;
    if (item.photos && item.photos.length > 0) mediaBadge += `<span class="note-media-badge">📸 ${item.photos.length} Photo(s)</span>`;

    row.innerHTML = `
      <div class="note-item-main">
        <div class="note-item-header">
          <strong>${escapeHtml(item.author)}</strong>
          <span>${escapeHtml(item.sticker || '💖')}</span>
          <span style="font-size: 0.75rem; color: var(--color-text-secondary);">${escapeHtml(item.role || '')}</span>
          ${mediaBadge}
        </div>
        <div class="note-item-snippet">"${escapeHtml((item.message || '').slice(0, 75))}${(item.message || '').length > 75 ? '...' : ''}"</div>
      </div>
      <div class="note-item-actions">
        <button type="button" class="admin-danger-btn delete-note-btn" data-index="${index}">🗑️ Delete</button>
      </div>
    `;

    row.querySelector(".delete-note-btn").addEventListener("click", () => {
      if (confirm(`Delete love note from ${item.author}?`)) {
        guestbookMessages.splice(index, 1);
        saveGuestbookMessages();
        renderLoveNotes();
        renderGuestbookGallery(currentGuestbookFilter);
        renderAdminLoveNotesList();
      }
    });

    container.appendChild(row);
  });
}

function setupGuestbookModal() {
  // Legacy alias, full functionality handled in setupLoveNotesModal
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ============================================================================
// AMBIENT PARTICLES (Stars, Floating Hearts & Glowing Dots)
// ============================================================================
let particles = [];
let particlesAnimationId = null;

function initParticlesCanvas() {
  const canvas = document.getElementById("particlesCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // Create subtle particles
  const count = Math.min(Math.floor(window.innerWidth / 18), 50);
  particles = [];

  const types = ["star", "heart", "circle"];
  const colors = ["#ff75a6", "#38bdf8", "#ffffff", "#ffd5e5", "#bfe9ff"];

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3.5 + 1.5,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: -Math.random() * 0.5 - 0.2,
      opacity: Math.random() * 0.7 + 0.3,
      fadeSpeed: Math.random() * 0.015 + 0.005,
      color: colors[Math.floor(Math.random() * colors.length)],
      type: types[Math.floor(Math.random() * types.length)],
      angle: Math.random() * Math.PI * 2,
      angularSpeed: (Math.random() - 0.5) * 0.02
    });
  }

  function renderParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let p of particles) {
      p.x += p.speedX;
      p.y += p.speedY;
      p.angle += p.angularSpeed;

      // Wrap around
      if (p.y < -10) {
        p.y = canvas.height + 10;
        p.x = Math.random() * canvas.width;
      }
      if (p.x < -10) p.x = canvas.width + 10;
      if (p.x > canvas.width + 10) p.x = -10;

      ctx.save();
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;
      ctx.shadowBlur = 8;
      ctx.shadowColor = p.color;

      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);

      if (p.type === "circle") {
        ctx.beginPath();
        ctx.arc(0, 0, p.size, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.type === "star") {
        drawStar(ctx, 0, 0, 4, p.size * 1.8, p.size * 0.8);
      } else if (p.type === "heart") {
        drawHeart(ctx, 0, 0, p.size * 1.4);
      }

      ctx.restore();
    }

    particlesAnimationId = requestAnimationFrame(renderParticles);
  }

  renderParticles();
}

function drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius) {
  let rot = Math.PI / 2 * 3;
  let x = cx;
  let y = cy;
  let step = Math.PI / spikes;

  ctx.beginPath();
  ctx.moveTo(cx, cy - outerRadius);
  for (let i = 0; i < spikes; i++) {
    x = cx + Math.cos(rot) * outerRadius;
    y = cy + Math.sin(rot) * outerRadius;
    ctx.lineTo(x, y);
    rot += step;

    x = cx + Math.cos(rot) * innerRadius;
    y = cy + Math.sin(rot) * innerRadius;
    ctx.lineTo(x, y);
    rot += step;
  }
  ctx.lineTo(cx, cy - outerRadius);
  ctx.closePath();
  ctx.fill();
}

function drawHeart(ctx, x, y, size) {
  ctx.beginPath();
  const topCurveHeight = size * 0.3;
  ctx.moveTo(x, y + topCurveHeight);
  // top left curve
  ctx.bezierCurveTo(
    x, y, 
    x - size / 2, y, 
    x - size / 2, y + topCurveHeight
  );
  // bottom left curve
  ctx.bezierCurveTo(
    x - size / 2, y + (size + topCurveHeight) / 2, 
    x, y + (size + topCurveHeight) / 2, 
    x, y + size
  );
  // bottom right curve
  ctx.bezierCurveTo(
    x, y + (size + topCurveHeight) / 2, 
    x + size / 2, y + (size + topCurveHeight) / 2, 
    x + size / 2, y + topCurveHeight
  );
  // top right curve
  ctx.bezierCurveTo(
    x + size / 2, y, 
    x, y, 
    x, y + topCurveHeight
  );
  ctx.closePath();
  ctx.fill();
}

// ============================================================================
// CELEBRATION CONFETTI ENGINE (Pink, Light Pink, Blue, Light Blue, Purple, White)
// ============================================================================
let confettiPieces = [];
let confettiAnimationId = null;

function initConfettiCanvas() {
  const canvas = document.getElementById("confettiCanvas");
  if (!canvas) return;

  function resizeConfetti() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeConfetti();
  window.addEventListener("resize", resizeConfetti);
}

function startConfettiAnimation() {
  const canvas = document.getElementById("confettiCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  // Confetti Color Palette specified in user requirements
  const colors = [
    "#ff2a7a", // Pink
    "#ff75a6", // Light pink
    "#00d2ff", // Blue
    "#38bdf8", // Light blue / Sky blue
    "#8b5cf6", // Purple
    "#ffffff"  // White
  ];

  confettiPieces = [];
  
  // Dynamic piece count based on burstConfig setting
  let countFactor = 1.0;
  if (burstConfig.confettiAmount === "low") countFactor = 0.5;
  if (burstConfig.confettiAmount === "high") countFactor = 2.0;
  const pieceCount = Math.min(Math.floor((window.innerWidth / 4) * countFactor), 350);

  // Dynamic speed based on burstConfig setting
  let speedMultiplier = 1.0;
  if (burstConfig.confettiSpeed === "slow") speedMultiplier = 0.55;
  if (burstConfig.confettiSpeed === "fast") speedMultiplier = 1.6;

  for (let i = 0; i < pieceCount; i++) {
    confettiPieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height * 0.8,
      w: Math.random() * 10 + 6,
      h: Math.random() * 6 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      speedY: (Math.random() * 4 + 2.5) * speedMultiplier,
      speedX: (Math.random() * 3 - 1.5) * speedMultiplier,
      angle: Math.random() * 360,
      angularSpeed: (Math.random() - 0.5) * 8 * speedMultiplier,
      flutterSpeed: Math.random() * 0.1 + 0.05,
      flutterPhase: Math.random() * Math.PI * 2
    });
  }

  function renderConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let p of confettiPieces) {
      p.y += p.speedY;
      p.x += p.speedX + Math.sin(p.flutterPhase) * 1.5;
      p.flutterPhase += p.flutterSpeed;
      p.angle += p.angularSpeed;

      // Wrap to top with fresh blast
      if (p.y > canvas.height + 20) {
        p.y = -20;
        p.x = Math.random() * canvas.width;
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.angle * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.shadowBlur = 6;
      ctx.shadowColor = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    }

    confettiAnimationId = requestAnimationFrame(renderConfetti);
  }

  if (confettiAnimationId) cancelAnimationFrame(confettiAnimationId);
  renderConfetti();
}

// ============================================================================
// MULTI-PAGE CHAPTER SYSTEM (Chapter 1, Chapter 2, Chapter 3)
// ============================================================================

let currentActiveChapter = 1;

function initChapterSystem() {
  if (chapterBtn1) chapterBtn1.addEventListener("click", () => showChapter(1));
  if (chapterBtn2) chapterBtn2.addEventListener("click", () => showChapter(2));
  if (chapterBtn3) chapterBtn3.addEventListener("click", () => showChapter(3));

  // Turn to Next / Previous Chapter buttons (connecting both page continue banners & headers)
  if (goToPage2Btn) {
    goToPage2Btn.addEventListener("click", () => showChapter(2));
  }
  if (goToPage3Btn) {
    goToPage3Btn.addEventListener("click", () => showChapter(3));
  }
  if (backToPage1Btn) {
    backToPage1Btn.addEventListener("click", () => showChapter(1));
  }
  if (backToPage2Btn) {
    backToPage2Btn.addEventListener("click", () => showChapter(2));
  }
  if (backToPage1From3Btn) {
    backToPage1From3Btn.addEventListener("click", () => showChapter(1));
  }
  if (openSignLoveNoteFromChapterBtn) {
    openSignLoveNoteFromChapterBtn.addEventListener("click", () => openSignGuestbook());
  }
}

function showChapter(chapterNum, autoScroll = true) {
  currentActiveChapter = chapterNum;

  const page1 = document.getElementById("pageChapter1");
  const page2 = document.getElementById("pageChapter2");
  const page3 = document.getElementById("pageChapter3");

  const btn1 = document.getElementById("chapterBtn1");
  const btn2 = document.getElementById("chapterBtn2");
  const btn3 = document.getElementById("chapterBtn3");

  if (page1) page1.style.display = (chapterNum === 1) ? "block" : "none";
  if (page2) page2.style.display = (chapterNum === 2) ? "block" : "none";
  if (page3) page3.style.display = (chapterNum === 3) ? "block" : "none";

  if (btn1) btn1.classList.toggle("active", chapterNum === 1);
  if (btn2) btn2.classList.toggle("active", chapterNum === 2);
  if (btn3) btn3.classList.toggle("active", chapterNum === 3);

  if (chapterNum === 2) {
    renderMemoriesScrapbook();
    setTimeout(() => {
      initHighlightedMemoriesObserver();
    }, 200);
  } else if (chapterNum === 3) {
    renderLoveNotes();
  }

  // Smooth scroll without interfering with normal user scrolling
  if (autoScroll) {
    let targetEl = null;
    if (chapterNum === 1) targetEl = document.getElementById("celebrationScreen");
    else if (chapterNum === 2) targetEl = page2;
    else if (chapterNum === 3) targetEl = page3;

    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
}

// ============================================================================
// CHAPTER 2 — SCRAPBOOK MEMORIES & 3D SPOTLIGHT ENGINE
// ============================================================================

const MEMORIES_STORAGE_KEY = "birthday_scrapbook_memories_v2";
let activeMemories = [];

let activeSpotlightElement = null;
let isSpotlightLocked = false;
let memoriesObserver = null;

function initScrapbookMemories() {
  try {
    const saved = localStorage.getItem(MEMORIES_STORAGE_KEY);
    if (saved) {
      activeMemories = JSON.parse(saved);
    } else {
      activeMemories = [...defaultMemories];
      saveActiveMemories();
    }
  } catch {
    activeMemories = [...defaultMemories];
  }

  renderMemoriesScrapbook();
  renderMemories(); // Legacy grid support
  setupAdminMemories();
  initHighlightedMemoriesObserver();
}

function saveActiveMemories() {
  try {
    localStorage.setItem(MEMORIES_STORAGE_KEY, JSON.stringify(activeMemories));
  } catch (err) {
    console.warn("Could not persist scrapbook memories to localStorage:", err);
  }
}

function renderMemoriesScrapbook() {
  const scrapbook = document.getElementById("memoriesScrapbookContainer") || document.getElementById("memoriesScrapbook");
  if (!scrapbook) return;

  scrapbook.innerHTML = "";

  activeMemories.forEach((item, index) => {
    const card = document.createElement("div");
    const styleClass = item.style ? `style-${item.style}` : "style-tape";
    const sizeClass = item.size ? `size-${item.size}` : "size-normal";
    const tiltClass = item.tilt ? `tilt-${item.tilt}` : (index % 2 === 0 ? "tilt-left" : "tilt-right");
    const highlightClass = item.isHighlight ? "is-highlight-memory" : "";

    card.className = `memory-card ${styleClass} ${sizeClass} ${tiltClass} ${highlightClass}`.trim();
    card.id = `memCard_${item.id || index}`;
    card.setAttribute("data-index", String(index));
    if (item.isHighlight) {
      card.setAttribute("data-is-highlight", "true");
    }

    // Title is strictly OPTIONAL — only rendered if title text exists!
    const hasTitle = Boolean(item.title && item.title.trim().length > 0);
    const titleHtml = hasTitle ? `<h4 class="memory-card-title">${escapeHtml(item.title.trim())}</h4>` : "";
    const dateHtml = item.date ? `<span class="memory-card-date">${escapeHtml(item.date)}</span>` : "";
    const captionHtml = item.caption ? `<p class="memory-card-caption">${escapeHtml(item.caption)}</p>` : "";
    const highlightBadge = item.isHighlight ? `<span class="memory-highlight-badge">⭐ Highlight</span>` : "";

    let mediaHtml = "";
    if (item.type === "video") {
      mediaHtml = `
        <div class="memory-video-wrap">
          <video class="memory-video" src="${item.mediaUrl}" controls playsinline preload="metadata"></video>
        </div>
      `;
    } else {
      const src = item.mediaUrl || item.image;
      mediaHtml = `
        <div class="memory-img-wrap">
          <img src="${src}" alt="${escapeHtml(item.title || 'Scrapbook photo')}" loading="lazy" />
        </div>
      `;
    }

    card.innerHTML = `
      ${highlightBadge}
      ${mediaHtml}
      <div class="memory-content-box">
        ${titleHtml}
        ${captionHtml}
        ${dateHtml}
      </div>
    `;

    // Click photo to open lightbox
    if (item.type !== "video") {
      const imgWrap = card.querySelector(".memory-img-wrap");
      if (imgWrap) {
        imgWrap.addEventListener("click", () => {
          openLightbox(item.mediaUrl || item.image, `${item.title ? item.title + ' — ' : ''}${item.caption || ''}`);
        });
      }
    }

    scrapbook.appendChild(card);
  });
}

// 3D Spotlight Scroll Effect:
// - Highlighted memories activate INDIVIDUALLY and SEQUENTIALLY based on scrolling.
// - NEVER shows multiple highlighted memories floating forward simultaneously.
// - Grows slightly larger, floats forward in 3D, subtle glow, surrounding memories dim.
// - Stays active for ~3 seconds before smoothly returning to normal.
// - Does not interfere with normal scrolling.
function initHighlightedMemoriesObserver() {
  if (memoriesObserver) {
    memoriesObserver.disconnect();
    memoriesObserver = null;
  }

  const highlightCards = document.querySelectorAll('.memories-scrapbook .memory-card[data-is-highlight="true"], #memoriesScrapbook .memory-card[data-is-highlight="true"], #memoriesScrapbookContainer .memory-card[data-is-highlight="true"]');
  if (!highlightCards || highlightCards.length === 0) return;

  if ('IntersectionObserver' in window) {
    memoriesObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting && !isSpotlightLocked && !activeSpotlightElement) {
          triggerSequentialSpotlight(entry.target);
          break; // Strictly one card at a time
        }
      }
    }, {
      root: null,
      rootMargin: "-15% 0px -15% 0px", // triggers when entering central viewport zone
      threshold: 0.35
    });

    highlightCards.forEach(card => memoriesObserver.observe(card));
  }
}

function triggerSequentialSpotlight(cardEl) {
  if (isSpotlightLocked || activeSpotlightElement) return;
  if (cardEl.dataset.recentlySpotlighted === "true") return;

  isSpotlightLocked = true;
  activeSpotlightElement = cardEl;
  cardEl.dataset.recentlySpotlighted = "true";

  const scrapbook = document.getElementById("memoriesScrapbookContainer") || document.getElementById("memoriesScrapbook");
  if (scrapbook) scrapbook.classList.add("has-active-spotlight");
  cardEl.classList.add("is-spotlight-active");

  // Stays active for ~3 seconds before smoothly returning to normal
  setTimeout(() => {
    cardEl.classList.remove("is-spotlight-active");
    if (scrapbook) scrapbook.classList.remove("has-active-spotlight");
    activeSpotlightElement = null;

    // Cooldown of 800ms before another highlighted memory can activate
    setTimeout(() => {
      isSpotlightLocked = false;
    }, 800);

    // Reset cooldown for this specific memory after 15 seconds
    setTimeout(() => {
      delete cardEl.dataset.recentlySpotlighted;
    }, 15000);
  }, 3000);
}

// Legacy Polaroid Reel Support
function renderMemories() {
  const container = document.getElementById("memoriesGrid");
  if (!container) return;

  container.innerHTML = "";
  activeMemories.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "polaroid-card";
    const src = item.mediaUrl || item.image;
    card.innerHTML = `
      <div class="polaroid-img-wrap">
        <img src="${src}" alt="${escapeHtml(item.title || 'Memory')}" loading="lazy" />
      </div>
      <div class="polaroid-caption">${escapeHtml(item.caption || '')}</div>
      <div class="polaroid-date">${escapeHtml(item.date || '')}</div>
    `;
    card.addEventListener("click", () => openLightbox(src, `${item.title ? item.title + ' — ' : ''}${item.caption || ''}`));
    container.appendChild(card);
  });
}

// Admin Memories Tab Management (Reordering, Highlighting, Adding, Deleting)
function setupAdminMemories() {
  const resetBtn = document.getElementById("adminResetMemoriesBtn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (confirm("Reset memories to default list?")) {
        activeMemories = [...defaultMemories];
        saveActiveMemories();
        renderMemoriesScrapbook();
        renderMemories();
        renderAdminMemoriesList();
        initHighlightedMemoriesObserver();
      }
    });
  }

  const addPhotoBtn = document.getElementById("adminAddMemoryPhotoBtn");
  if (addPhotoBtn) {
    addPhotoBtn.addEventListener("click", () => {
      const url = prompt("Enter photo image URL:");
      if (!url || !url.trim()) return;
      const title = prompt("Optional Title (press OK to leave blank):") || "";
      const caption = prompt("Caption:") || "";
      const date = prompt("Date or year:", "Special Day") || "";
      const isHighlight = confirm("Highlight this memory with 3D spotlight?");

      const newMem = {
        id: "mem-" + Date.now(),
        type: "photo",
        title: title.trim(),
        caption: caption.trim(),
        date: date.trim(),
        image: url.trim(),
        mediaUrl: url.trim(),
        isHighlight: Boolean(isHighlight),
        style: "tape",
        tilt: "slight",
        size: "normal"
      };

      activeMemories.push(newMem);
      saveActiveMemories();
      renderMemoriesScrapbook();
      renderMemories();
      renderAdminMemoriesList();
      initHighlightedMemoriesObserver();
    });
  }

  const addVideoBtn = document.getElementById("adminAddMemoryVideoBtn");
  if (addVideoBtn) {
    addVideoBtn.addEventListener("click", () => {
      const url = prompt("Enter short video MP4/WebM URL:");
      if (!url || !url.trim()) return;
      const title = prompt("Optional Title (press OK to leave blank):") || "";
      const caption = prompt("Caption:") || "";
      const date = prompt("Date or year:", "Special Day") || "";
      const isHighlight = confirm("Highlight this video with 3D spotlight?");

      const newMem = {
        id: "mem-" + Date.now(),
        type: "video",
        title: title.trim(),
        caption: caption.trim(),
        date: date.trim(),
        mediaUrl: url.trim(),
        image: "",
        isHighlight: Boolean(isHighlight),
        style: "tape",
        tilt: "slight",
        size: "normal"
      };

      activeMemories.push(newMem);
      saveActiveMemories();
      renderMemoriesScrapbook();
      renderMemories();
      renderAdminMemoriesList();
      initHighlightedMemoriesObserver();
    });
  }
}

function renderAdminMemoriesList() {
  const container = document.getElementById("adminMemoriesList");
  if (!container) return;

  container.innerHTML = "";

  if (activeMemories.length === 0) {
    container.innerHTML = `<p style="color: var(--color-text-secondary); font-size: 0.85rem; padding: 0.8rem;">No memories currently added.</p>`;
    return;
  }

  activeMemories.forEach((item, index) => {
    const row = document.createElement("div");
    row.className = "admin-memory-item-row";

    const displayTitle = item.title && item.title.trim().length > 0 ? item.title : "(No title)";
    const typeIcon = item.type === "video" ? "🎥 Video" : "📸 Photo";

    row.innerHTML = `
      <div class="memory-item-left">
        <span class="memory-item-type">${typeIcon}</span>
        <strong>${escapeHtml(displayTitle)}</strong>
        <span style="font-size: 0.75rem; color: var(--color-text-secondary);">${escapeHtml(item.caption ? item.caption.slice(0, 30) + '...' : '')}</span>
      </div>
      <div class="memory-item-actions">
        <label class="memory-highlight-toggle">
          <input type="checkbox" class="toggle-highlight-checkbox" ${item.isHighlight ? 'checked' : ''} />
          <span>⭐ Spotlight</span>
        </label>
        <button type="button" class="admin-icon-btn move-up-btn" ${index === 0 ? 'disabled' : ''} title="Move earlier in story">▲</button>
        <button type="button" class="admin-icon-btn move-down-btn" ${index === activeMemories.length - 1 ? 'disabled' : ''} title="Move later in story">▼</button>
        <button type="button" class="admin-danger-btn delete-mem-btn" title="Delete memory">🗑️</button>
      </div>
    `;

    // Toggle highlight
    const cb = row.querySelector(".toggle-highlight-checkbox");
    if (cb) {
      cb.addEventListener("change", (e) => {
        item.isHighlight = e.target.checked;
        saveActiveMemories();
        renderMemoriesScrapbook();
        initHighlightedMemoriesObserver();
      });
    }

    // Move Up
    const upBtn = row.querySelector(".move-up-btn");
    if (upBtn && index > 0) {
      upBtn.addEventListener("click", () => {
        const temp = activeMemories[index];
        activeMemories[index] = activeMemories[index - 1];
        activeMemories[index - 1] = temp;
        saveActiveMemories();
        renderMemoriesScrapbook();
        renderMemories();
        renderAdminMemoriesList();
        initHighlightedMemoriesObserver();
      });
    }

    // Move Down
    const downBtn = row.querySelector(".move-down-btn");
    if (downBtn && index < activeMemories.length - 1) {
      downBtn.addEventListener("click", () => {
        const temp = activeMemories[index];
        activeMemories[index] = activeMemories[index + 1];
        activeMemories[index + 1] = temp;
        saveActiveMemories();
        renderMemoriesScrapbook();
        renderMemories();
        renderAdminMemoriesList();
        initHighlightedMemoriesObserver();
      });
    }

    // Delete
    const delBtn = row.querySelector(".delete-mem-btn");
    if (delBtn) {
      delBtn.addEventListener("click", () => {
        if (confirm(`Remove memory "${displayTitle}"?`)) {
          activeMemories.splice(index, 1);
          saveActiveMemories();
          renderMemoriesScrapbook();
          renderMemories();
          renderAdminMemoriesList();
          initHighlightedMemoriesObserver();
        }
      });
    }

    container.appendChild(row);
  });
}

function openLightbox(imgSrc, caption) {
  if (!lightboxModal) return;
  lightboxImg.src = imgSrc;
  lightboxCaption.textContent = caption;
  lightboxModal.classList.add("active");
}

function closeLightbox() {
  if (!lightboxModal) return;
  lightboxModal.classList.remove("active");
}

// ============================================================================
// HEARTFELT VIDEO MESSAGE BOOTH (Camera & Audio Recording)
// ============================================================================
async function startCamera() {
  try {
    mediaStream = await navigator.mediaDevices.getUserMedia({
      video: { width: { ideal: 640 }, height: { ideal: 480 }, facingMode: "user" },
      audio: true
    });
    if (videoPreview) {
      videoPreview.srcObject = mediaStream;
      videoPreview.style.display = "block";
      videoPreview.muted = true;
      videoPreview.play();
    }
    return true;
  } catch (err) {
    alert("Camera & microphone access is needed to record a video message! Please check permissions in your browser.");
    return false;
  }
}

function stopCamera() {
  if (mediaStream) {
    mediaStream.getTracks().forEach(track => track.stop());
    mediaStream = null;
  }
  if (videoPreview) {
    videoPreview.style.display = "none";
    videoPreview.srcObject = null;
  }
}

async function handleRecordStart() {
  const ready = await startCamera();
  if (!ready) return;

  recordedChunks = [];
  try {
    mediaRecorder = new MediaRecorder(mediaStream);
    mediaRecorder.ondataavailable = (e) => {
      if (e.data && e.data.size > 0) {
        recordedChunks.push(e.data);
      }
    };
    mediaRecorder.onstop = () => {
      const blob = new Blob(recordedChunks, { type: "video/webm" });
      recordedBlobUrl = URL.createObjectURL(blob);
      if (videoPreview) {
        videoPreview.srcObject = null;
        videoPreview.src = recordedBlobUrl;
        videoPreview.muted = false;
        videoPreview.controls = true;
      }
      if (saveVideoBtn) saveVideoBtn.style.display = "inline-flex";
      stopCamera();
    };

    mediaRecorder.start();
    if (recordVideoBtn) recordVideoBtn.style.display = "none";
    if (stopVideoBtn) stopVideoBtn.style.display = "inline-flex";
    if (recordingIndicator) recordingIndicator.style.display = "inline-flex";
  } catch (err) {
    alert("MediaRecorder is not supported in this browser.");
  }
}

function handleRecordStop() {
  if (mediaRecorder && mediaRecorder.state !== "inactive") {
    mediaRecorder.stop();
  }
  if (stopVideoBtn) stopVideoBtn.style.display = "none";
  if (recordVideoBtn) recordVideoBtn.style.display = "inline-flex";
  if (recordingIndicator) recordingIndicator.style.display = "none";
}

function handleSaveVideo() {
  if (!recordedBlobUrl) return;
  const author = (authorNameInput && authorNameInput.value.trim()) || "A Loving Friend";

  const card = document.createElement("div");
  card.className = "message-video-card";
  card.innerHTML = `
    <video src="${recordedBlobUrl}" controls></video>
    <div class="message-meta">
      <span class="author-name">💌 ${author}</span>
      <a href="${recordedBlobUrl}" download="birthday-wish-${author}.webm" class="footer-link" style="color: var(--color-blue-baby); font-size:0.75rem;">Download</a>
    </div>
  `;
  if (recordedList) {
    recordedList.prepend(card);
  }

  // Reset recorder UI
  if (saveVideoBtn) saveVideoBtn.style.display = "none";
  if (authorNameInput) authorNameInput.value = "";
  if (videoPreview) {
    videoPreview.style.display = "none";
    videoPreview.src = "";
  }
}

// ============================================================================
// EVENT LISTENERS & CUSTOMIZATION
// ============================================================================
function setupEventListeners() {
  // Main music play/pause toggle button
  if (musicPlayBtn) {
    musicPlayBtn.addEventListener("click", () => toggleMusic());
  } else if (musicBtn) {
    musicBtn.addEventListener("click", () => toggleMusic());
  }

  // Music mute/unmute button
  if (musicMuteBtn) {
    musicMuteBtn.addEventListener("click", () => toggleMute());
  }

  // Mobile autoplay tap-to-play pill
  if (autoplayMusicPrompt) {
    autoplayMusicPrompt.addEventListener("click", () => {
      playMusic();
    });
  }

  // Celebrate More Confetti button
  const celebrateMoreBtn = document.getElementById("celebrateMoreBtn");
  if (celebrateMoreBtn) {
    celebrateMoreBtn.addEventListener("click", () => startConfettiAnimation());
  }

  // Show Me button / Photo Sticker on Opening Screen
  if (showMeBtn) {
    showMeBtn.addEventListener("click", () => {
      startRevealSequence();
    });
  }
  const showMeStickerContainer = document.getElementById("showMeStickerContainer");
  if (showMeStickerContainer) {
    showMeStickerContainer.addEventListener("click", () => {
      startRevealSequence();
    });
  }
  const stickerWrappers = document.querySelectorAll(".photo-sticker-wrapper");
  stickerWrappers.forEach(w => {
    w.addEventListener("click", () => {
      startRevealSequence();
    });
  });

  // Skip Reveal button on 10s Photo Reveal
  if (skipRevealBtn) {
    skipRevealBtn.addEventListener("click", () => {
      completePhotoRevealToMainExperience();
    });
  }

  // Expose key handlers to window for backwards compatibility
  window.startConfettiAnimation = startConfettiAnimation;
  window.toggleMusic = toggleMusic;
  window.playMusic = playMusic;
  window.pauseMusic = pauseMusic;
  window.toggleMute = toggleMute;

  // Lightbox close
  if (closeLightboxBtn) {
    closeLightboxBtn.addEventListener("click", closeLightbox);
  }
  if (lightboxModal) {
    lightboxModal.addEventListener("click", (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  // Tabs for last day section
  if (tabMemories && tabVideos) {
    tabMemories.addEventListener("click", () => {
      tabMemories.classList.add("active");
      tabVideos.classList.remove("active");
      if (memoriesView) memoriesView.style.display = "grid";
      if (videoBoothView) videoBoothView.style.display = "none";
    });

    tabVideos.addEventListener("click", () => {
      tabVideos.classList.add("active");
      tabMemories.classList.remove("active");
      if (memoriesView) memoriesView.style.display = "none";
      if (videoBoothView) videoBoothView.style.display = "flex";
    });
  }

  // Video recording actions
  if (recordVideoBtn) recordVideoBtn.addEventListener("click", handleRecordStart);
  if (stopVideoBtn) stopVideoBtn.addEventListener("click", handleRecordStop);
  if (saveVideoBtn) saveVideoBtn.addEventListener("click", handleSaveVideo);

  // Dev modal triggers
  if (devToggleBtn) {
    devToggleBtn.addEventListener("click", () => {
      if (devModal) devModal.classList.add("active");
    });
  }
  if (closeDevModalBtn) {
    closeDevModalBtn.addEventListener("click", () => {
      if (devModal) devModal.classList.remove("active");
    });
  }
  if (devModal) {
    devModal.addEventListener("click", (e) => {
      if (e.target === devModal) devModal.classList.remove("active");
    });
  }

  // Dev overlay opacity live slider
  if (devOpacityInput) {
    devOpacityInput.addEventListener("input", (e) => {
      const val = parseFloat(e.target.value);
      if (devOpacityVal) devOpacityVal.textContent = `${Math.round(val * 100)}%`;
      document.documentElement.style.setProperty("--overlay-opacity", String(val));
    });
  }

  // Apply dev changes
  if (applyDevBtn) {
    applyDevBtn.addEventListener("click", () => {
      if (devDateInput && devDateInput.value) {
        targetDate = new Date(devDateInput.value);
      }
      if (devNameInput && devNameInput.value) {
        currentName = devNameInput.value.trim();
      }
      if (devMessageInput && devMessageInput.value) {
        currentMessage = devMessageInput.value.trim();
      }
      if (devBgInput && devBgInput.value) {
        currentBgImage = devBgInput.value.trim();
      }
      if (devMusicInput && devMusicInput.value) {
        currentMusicUrl = devMusicInput.value.trim();
        if (bgAudio) bgAudio.src = currentMusicUrl;
      }
      if (devOpacityInput) {
        currentOverlayOpacity = parseFloat(devOpacityInput.value);
      }
      if (devRevealThirdTitleInput && devRevealThirdTitleInput.value) {
        burstConfig.revealThirdTitle = devRevealThirdTitleInput.value.trim();
        saveBurstSettings();
      }

      // Persist latest configuration to Supabase birthday_content table
      saveBirthdayContentToSupabase(currentMessage, currentBgImage, currentMusicUrl);

      setupDynamicContent();
      setupBackground();
      
      // Reset view to opening screen
      initOpeningScreen();

      if (devModal) devModal.classList.remove("active");
    });
  }

  // Quick Test Reveal Sequence (3-2-1 -> 10s Photo Reveal -> Celebration)
  if (testRevealSequenceBtn) {
    testRevealSequenceBtn.addEventListener("click", () => {
      if (devModal) devModal.classList.remove("active");
      startRevealSequence();
    });
  }

  // Quick Test Zero / Celebration
  if (testZeroBtn) {
    testZeroBtn.addEventListener("click", () => {
      triggerCelebration();
      if (devModal) devModal.classList.remove("active");
    });
  }

  // Quick Test Last Day Vault
  if (testLastDayBtn) {
    testLastDayBtn.addEventListener("click", () => {
      unlockLastDaySection();
      if (devModal) devModal.classList.remove("active");
      if (lastDaySection) {
        lastDaySection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Quick Test Guestbook Section
  if (testGuestbookBtn) {
    testGuestbookBtn.addEventListener("click", () => {
      if (guestbookSection) {
        guestbookSection.classList.add("active");
        renderGuestbookGallery();
        guestbookSection.scrollIntoView({ behavior: "smooth" });
      }
      if (devModal) devModal.classList.remove("active");
    });
  }

  // Reset Experience to Opening Screen
  if (resetExperienceBtn) {
    resetExperienceBtn.addEventListener("click", () => {
      currentName = birthdayName;
      currentMessage = birthdayMessage;
      currentBgImage = backgroundImage;
      currentOverlayOpacity = overlayOpacity;
      setupDynamicContent();
      setupBackground();
      resetToOpeningScreen();
      if (devModal) devModal.classList.remove("active");
    });
  }

  // Copy Clean Config Snippet
  if (copyConfigBtn) {
    copyConfigBtn.addEventListener("click", () => {
      const codeSnippet = `// Paste into top of script.js:
const birthdayDate = "${devDateInput ? devDateInput.value : birthdayDate}";
const birthdayName = "${devNameInput ? devNameInput.value : birthdayName}";
const birthdayMessage = "${devMessageInput ? devMessageInput.value.replace(/"/g, '\\"') : birthdayMessage}";
const backgroundImage = "${devBgInput ? devBgInput.value : backgroundImage}";
const overlayOpacity = ${devOpacityInput ? devOpacityInput.value : overlayOpacity};
const backgroundMusic = "${backgroundMusic}";
const loopMusic = ${loopMusic};`;

      navigator.clipboard.writeText(codeSnippet).then(() => {
        const originalText = copyConfigBtn.textContent;
        copyConfigBtn.textContent = "Copied to Clipboard! ✓";
        setTimeout(() => {
          copyConfigBtn.textContent = originalText;
        }, 2000);
      });
    });
  }

  // ============================================================================
  // ADMIN AUTHENTICATION CONTROLS
  // ============================================================================
  if (toggleAdminLoginBtn && adminLoginForm) {
    toggleAdminLoginBtn.addEventListener("click", () => {
      const isHidden = adminLoginForm.style.display === "none";
      adminLoginForm.style.display = isHidden ? "block" : "none";
      if (isHidden && adminPasswordInput) {
        adminPasswordInput.focus();
      }
    });
  }

  if (adminCancelLoginBtn && adminLoginForm) {
    adminCancelLoginBtn.addEventListener("click", () => {
      adminLoginForm.style.display = "none";
    });
  }

  if (adminSignInBtn) {
    adminSignInBtn.addEventListener("click", async () => {
      const email = adminEmailInput ? adminEmailInput.value.trim() : "";
      const password = adminPasswordInput ? adminPasswordInput.value : "";
      if (!email || !password) {
        showStorageStatus("adminAuthStatus", "Please enter both admin email and password.", "error", 4000);
        return;
      }

      showStorageStatus("adminAuthStatus", "Authenticating with Supabase...", "loading", 0);
      const client = getSupabaseClient();
      if (!client || !client.auth) {
        showStorageStatus("adminAuthStatus", "Supabase client not available. Check network connection.", "error", 4000);
        return;
      }

      try {
        const { data, error } = await client.auth.signInWithPassword({ email, password });
        if (error) {
          showStorageStatus("adminAuthStatus", `Sign in failed: ${error.message}`, "error", 6000);
        } else if (data?.session) {
          updateAdminUI(data.session);
          showStorageStatus("adminAuthStatus", "Admin authenticated successfully! Online modifications enabled. ❤️", "success", 4000);
        }
      } catch (err) {
        showStorageStatus("adminAuthStatus", `Sign in error: ${err.message}`, "error", 5000);
      }
    });
  }

  if (adminMagicLinkBtn) {
    adminMagicLinkBtn.addEventListener("click", async () => {
      const email = adminEmailInput ? adminEmailInput.value.trim() : "";
      if (!email) {
        showStorageStatus("adminAuthStatus", "Please enter admin email to receive magic sign-in link.", "error", 4000);
        return;
      }

      showStorageStatus("adminAuthStatus", "Sending magic sign-in link...", "loading", 0);
      const client = getSupabaseClient();
      if (!client || !client.auth) {
        showStorageStatus("adminAuthStatus", "Supabase client not available.", "error", 4000);
        return;
      }

      try {
        const { error } = await client.auth.signInWithOtp({
          email,
          options: {
            emailRedirectTo: window.location.href
          }
        });
        if (error) {
          showStorageStatus("adminAuthStatus", `Magic link error: ${error.message}`, "error", 6000);
        } else {
          showStorageStatus("adminAuthStatus", `Magic link dispatched to ${email}! Check email to authenticate.`, "success", 7000);
        }
      } catch (err) {
        showStorageStatus("adminAuthStatus", `Magic link error: ${err.message}`, "error", 5000);
      }
    });
  }

  if (adminSignOutBtn) {
    adminSignOutBtn.addEventListener("click", async () => {
      const client = getSupabaseClient();
      if (client && client.auth) {
        await client.auth.signOut().catch(() => {});
      }
      updateAdminUI(null);
      showStorageStatus("adminAuthStatus", "Signed out of admin mode. Site is now in visitor read-only mode.", "loading", 3500);
    });
  }

  // Allow pressing Enter on password field to submit
  if (adminPasswordInput && adminSignInBtn) {
    adminPasswordInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        adminSignInBtn.click();
      }
    });
  }

  // ============================================================================
  // WIRE UP PHOTO BURST & CUSTOMIZE CELEBRATION CONTROLS
  // ============================================================================

  // Tab Navigation in Customize Modal
  if (customizeNavTabs) {
    const tabButtons = customizeNavTabs.querySelectorAll(".customize-tab-btn");
    tabButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const targetTabId = btn.getAttribute("data-tab");
        tabButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const panes = document.querySelectorAll(".customize-pane");
        panes.forEach(p => {
          if (p.id === targetTabId) {
            p.classList.add("active");
          } else {
            p.classList.remove("active");
          }
        });

        if (targetTabId === "tabMemoriesAdmin") {
          renderAdminMemoriesList();
        } else if (targetTabId === "tabLoveNotesAdmin") {
          renderAdminLoveNotesList();
        }
      });
    });
  }

  // Photo Upload Actions
  if (addPhotosBtn && photoFileInput) {
    addPhotosBtn.addEventListener("click", () => {
      if (!isCurrentUserAdmin()) {
        openAdminLoginForm("🔒 Admin sign-in required to upload photos to Supabase Storage.");
        return;
      }
      photoFileInput.click();
    });
  }

  if (syncSupabasePhotosBtn) {
    syncSupabasePhotosBtn.addEventListener("click", async () => {
      showStorageStatus("photoUploadStatus", "Checking Supabase Storage (photos/)...", "loading", 0);
      const loaded = await loadBirthdayPhotosFromSupabase();
      if (loaded) {
        showStorageStatus("photoUploadStatus", `Synced ${currentPhotos.length} photo(s) from Supabase ❤️`, "success", 4500);
      } else {
        showStorageStatus("photoUploadStatus", "No remote photos found in Supabase Storage. Current photos active.", "loading", 3500);
      }
    });
  }

  if (photoFileInput) {
    photoFileInput.addEventListener("change", (e) => {
      if (e.target.files && e.target.files.length > 0) {
        handlePhotoFiles(Array.from(e.target.files));
        photoFileInput.value = "";
      }
    });
  }

  if (loadSamplePhotosBtn) {
    loadSamplePhotosBtn.addEventListener("click", () => {
      loadSamplePhotos();
    });
  }

  if (clearAllPhotosBtn) {
    clearAllPhotosBtn.addEventListener("click", () => {
      const hasRemote = currentPhotos.some(p => p.fromSupabase);
      if (hasRemote && !isCurrentUserAdmin()) {
        openAdminLoginForm("🔒 Admin sign-in required to delete online celebration photos.");
        return;
      }
      if (confirm("Are you sure you want to clear all uploaded celebration photos?")) {
        clearAllPhotos();
      }
    });
  }

  // Replay Photo Burst Button (in Celebration Screen)
  if (replayBurstBtn) {
    replayBurstBtn.addEventListener("click", () => {
      triggerPhotoBurst();
      startConfettiAnimation();
    });
  }

  // Test Photo Burst Buttons (in Modal)
  if (testPhotoBurstActionBtn) {
    testPhotoBurstActionBtn.addEventListener("click", () => {
      triggerCelebration();
      if (devModal) devModal.classList.remove("active");
    });
  }

  if (testBurstModalFooterBtn) {
    testBurstModalFooterBtn.addEventListener("click", () => {
      triggerCelebration();
      if (devModal) devModal.classList.remove("active");
    });
  }

  if (closeDevModalBottomBtn) {
    closeDevModalBottomBtn.addEventListener("click", () => {
      if (devModal) devModal.classList.remove("active");
    });
  }

  // Burst & FX Live Setting Listeners
  if (burstStyleSelect) {
    burstStyleSelect.addEventListener("change", (e) => {
      burstConfig.burstStyle = e.target.value;
      saveBurstSettings();
    });
  }
  if (photoShapeSelect) {
    photoShapeSelect.addEventListener("change", (e) => {
      burstConfig.photoShape = e.target.value;
      saveBurstSettings();
    });
  }
  if (photoSizeSelect) {
    photoSizeSelect.addEventListener("change", (e) => {
      burstConfig.photoSize = e.target.value;
      saveBurstSettings();
    });
  }
  if (burstSpeedSelect) {
    burstSpeedSelect.addEventListener("change", (e) => {
      burstConfig.burstSpeed = e.target.value;
      saveBurstSettings();
    });
  }
  if (burstDurationSelect) {
    burstDurationSelect.addEventListener("change", (e) => {
      burstConfig.burstDuration = e.target.value;
      saveBurstSettings();
    });
  }
  if (photoRotationSelect) {
    photoRotationSelect.addEventListener("change", (e) => {
      burstConfig.photoRotation = e.target.value;
      saveBurstSettings();
    });
  }
  if (photoBorderColorSelect) {
    photoBorderColorSelect.addEventListener("change", (e) => {
      burstConfig.photoBorderColor = e.target.value;
      saveBurstSettings();
    });
  }
  if (photoBorderThicknessSelect) {
    photoBorderThicknessSelect.addEventListener("change", (e) => {
      burstConfig.photoBorderThickness = e.target.value;
      saveBurstSettings();
    });
  }
  if (photoCornerRadiusInput) {
    photoCornerRadiusInput.addEventListener("input", (e) => {
      burstConfig.photoCornerRadius = parseInt(e.target.value, 10);
      saveBurstSettings();
    });
  }
  if (photoGlowIntensityInput) {
    photoGlowIntensityInput.addEventListener("input", (e) => {
      burstConfig.photoGlowIntensity = parseFloat(e.target.value);
      saveBurstSettings();
    });
  }
  if (confettiAmountSelect) {
    confettiAmountSelect.addEventListener("change", (e) => {
      burstConfig.confettiAmount = e.target.value;
      saveBurstSettings();
    });
  }
  if (confettiSpeedSelect) {
    confettiSpeedSelect.addEventListener("change", (e) => {
      burstConfig.confettiSpeed = e.target.value;
      saveBurstSettings();
    });
  }

  // Background Customization Listeners
  if (uploadBgBtn && bgFileInput) {
    uploadBgBtn.addEventListener("click", () => {
      if (!isCurrentUserAdmin()) {
        openAdminLoginForm("🔒 Admin sign-in required to upload background images to Supabase Storage.");
        return;
      }
      bgFileInput.click();
    });
  }

  if (bgFileInput) {
    bgFileInput.addEventListener("change", async (e) => {
      if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        showStorageStatus(
          "bgUploadStatus",
          "Uploading background image to Supabase Storage (backgrounds/)...",
          "loading",
          0
        );

        try {
          const uploadRes = await uploadToSupabaseStorage("backgrounds", file);
          if (uploadRes.success) {
            currentBgImage = uploadRes.publicUrl;
            if (devBgInput) devBgInput.value = currentBgImage;
            setupBackground();
            // Save public URL to birthday_content table
            await saveBirthdayContentToSupabase(currentMessage, currentBgImage, currentMusicUrl);
            showStorageStatus("bgUploadStatus", "Saved successfully ❤️", "success", 5000);
          } else {
            // Local fallback preview
            const reader = new FileReader();
            reader.onload = (event) => {
              currentBgImage = event.target.result;
              if (devBgInput) devBgInput.value = "Custom Uploaded Photo (Local)";
              setupBackground();
            };
            reader.readAsDataURL(file);

            const isRLS = uploadRes.error && uploadRes.error.toLowerCase().includes("row-level security");
            showStorageStatus(
              "bgUploadStatus",
              isRLS
                ? "Applied locally! (Note: Enable INSERT policy on 'Birthday-assets' in Supabase to sync online)"
                : `Upload notice: ${uploadRes.error || "applied locally"}`,
              isRLS ? "error" : "loading",
              7000
            );
          }
        } catch (err) {
          console.error("Background upload error:", err);
          showStorageStatus("bgUploadStatus", "Failed to upload to Supabase, check network.", "error", 5000);
        }
      }
    });
  }

  if (bgGradientPresetSelect) {
    bgGradientPresetSelect.addEventListener("change", (e) => {
      burstConfig.gradientPreset = e.target.value;
      applyGradientPreset(e.target.value);
      saveBurstSettings();
    });
  }

  // Music Customization Listeners
  if (uploadAudioBtn && audioFileInput) {
    uploadAudioBtn.addEventListener("click", () => {
      if (!isCurrentUserAdmin()) {
        openAdminLoginForm("🔒 Admin sign-in required to upload music to Supabase Storage.");
        return;
      }
      audioFileInput.click();
    });
  }

  if (audioFileInput) {
    audioFileInput.addEventListener("change", async (e) => {
      if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        if (uploadedAudioName) uploadedAudioName.textContent = file.name;
        showStorageStatus(
          "musicUploadStatus",
          "Uploading audio file to Supabase Storage (music/)...",
          "loading",
          0
        );

        try {
          const uploadRes = await uploadToSupabaseStorage("music", file);
          if (uploadRes.success) {
            currentMusicUrl = uploadRes.publicUrl;
            if (devMusicInput) devMusicInput.value = currentMusicUrl;
            if (bgAudio) {
              bgAudio.src = currentMusicUrl;
              playMusic();
            }
            // Save public URL to birthday_content table
            await saveBirthdayContentToSupabase(currentMessage, currentBgImage, currentMusicUrl);
            showStorageStatus("musicUploadStatus", "Saved successfully ❤️", "success", 5000);
          } else {
            // Local blob preview fallback
            const objectUrl = URL.createObjectURL(file);
            if (bgAudio) {
              bgAudio.src = objectUrl;
              playMusic();
            }
            const isRLS = uploadRes.error && uploadRes.error.toLowerCase().includes("row-level security");
            showStorageStatus(
              "musicUploadStatus",
              isRLS
                ? "Playing locally! (Note: Enable INSERT policy on 'Birthday-assets' in Supabase to sync online)"
                : `Upload notice: ${uploadRes.error || "playing locally"}`,
              isRLS ? "error" : "loading",
              7000
            );
          }
        } catch (err) {
          console.error("Music upload error:", err);
          showStorageStatus("musicUploadStatus", "Failed to upload to Supabase, check network.", "error", 5000);
        }
      }
    });
  }

  if (previewMusicBtn) {
    previewMusicBtn.addEventListener("click", () => {
      toggleMusic();
      previewMusicBtn.textContent = isMusicPlaying ? "⏸ Pause Preview" : "▶ Play Preview";
    });
  }

  if (devMusicVolume) {
    devMusicVolume.addEventListener("input", (e) => {
      const vol = parseFloat(e.target.value);
      if (bgAudio) bgAudio.volume = vol;
    });
  }

  if (devMusicLoop) {
    devMusicLoop.addEventListener("change", (e) => {
      if (bgAudio) bgAudio.loop = e.target.checked;
    });
  }

  // Headline Listener
  if (devHeadlineInput) {
    devHeadlineInput.addEventListener("input", (e) => {
      burstConfig.headline = e.target.value;
      const celebrationEyebrow = document.getElementById("celebrationEyebrow");
      if (celebrationEyebrow) celebrationEyebrow.textContent = e.target.value;
      saveBurstSettings();
    });
  }

  // Color Intensity Sliders
  if (colorPinkIntensity) {
    colorPinkIntensity.addEventListener("input", (e) => {
      burstConfig.colorPinkIntensity = parseFloat(e.target.value);
      applyThemeIntensities();
      saveBurstSettings();
    });
  }
  if (colorBlueIntensity) {
    colorBlueIntensity.addEventListener("input", (e) => {
      burstConfig.colorBlueIntensity = parseFloat(e.target.value);
      applyThemeIntensities();
      saveBurstSettings();
    });
  }
  if (colorPurpleIntensity) {
    colorPurpleIntensity.addEventListener("input", (e) => {
      burstConfig.colorPurpleIntensity = parseFloat(e.target.value);
      applyThemeIntensities();
      saveBurstSettings();
    });
  }
}

// ============================================================================
// PHOTO STORAGE (INDEXEDDB WITH LOCALSTORAGE FALLBACK)
// ============================================================================
const DB_NAME = "BirthdayCelebrationDB";
const DB_VERSION = 1;
const PHOTO_STORE = "celebration_photos";

function openPhotoDB() {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) {
      resolve(null); // Fallback to localStorage
      return;
    }
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(PHOTO_STORE)) {
        db.createObjectStore(PHOTO_STORE, { keyPath: "id" });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => resolve(null);
  });
}

async function initPhotoStorageAndBurstSettings() {
  // 1. Load Burst Config from localStorage
  try {
    const savedConfig = localStorage.getItem("birthday_burst_settings_v1");
    if (savedConfig) {
      burstConfig = Object.assign(burstConfig, JSON.parse(savedConfig));
    }
  } catch (err) {
    console.warn("Could not load burst settings from localStorage:", err);
  }

  // Sync inputs with burstConfig
  syncInputsWithBurstConfig();

  // 2. Load Photos from IndexedDB or LocalStorage
  const db = await openPhotoDB();
  if (db) {
    try {
      const tx = db.transaction(PHOTO_STORE, "readonly");
      const store = tx.objectStore(PHOTO_STORE);
      const req = store.getAll();
      req.onsuccess = () => {
        if (req.result && req.result.length > 0) {
          currentPhotos = req.result;
        } else {
          // Seed with default high quality photos
          currentPhotos = [...defaultBurstPhotos];
          seedDefaultPhotosToDB(db, currentPhotos);
        }
        renderPhotoThumbnails();
      };
      req.onerror = () => {
        fallbackLoadLocalStoragePhotos();
      };
    } catch {
      fallbackLoadLocalStoragePhotos();
    }
  } else {
    fallbackLoadLocalStoragePhotos();
  }

  applyGradientPreset(burstConfig.gradientPreset || "dusk");
  applyThemeIntensities();
}

function fallbackLoadLocalStoragePhotos() {
  try {
    const raw = localStorage.getItem("birthday_burst_photos_v1");
    if (raw) {
      currentPhotos = JSON.parse(raw);
    } else {
      currentPhotos = [...defaultBurstPhotos];
      localStorage.setItem("birthday_burst_photos_v1", JSON.stringify(currentPhotos));
    }
  } catch {
    currentPhotos = [...defaultBurstPhotos];
  }
  renderPhotoThumbnails();
}

function seedDefaultPhotosToDB(db, photos) {
  try {
    const tx = db.transaction(PHOTO_STORE, "readwrite");
    const store = tx.objectStore(PHOTO_STORE);
    photos.forEach(p => store.put(p));
  } catch (e) {
    console.warn("Could not seed IndexedDB photos:", e);
  }
}

function saveBurstSettings() {
  try {
    localStorage.setItem("birthday_burst_settings_v1", JSON.stringify(burstConfig));
  } catch (e) {
    console.warn("Could not save burst config:", e);
  }
}

function syncInputsWithBurstConfig() {
  if (burstStyleSelect) burstStyleSelect.value = burstConfig.burstStyle;
  if (photoShapeSelect) photoShapeSelect.value = burstConfig.photoShape;
  if (photoSizeSelect) photoSizeSelect.value = burstConfig.photoSize;
  if (burstSpeedSelect) burstSpeedSelect.value = burstConfig.burstSpeed;
  if (burstDurationSelect) burstDurationSelect.value = burstConfig.burstDuration;
  if (photoRotationSelect) photoRotationSelect.value = burstConfig.photoRotation;
  if (photoBorderColorSelect) photoBorderColorSelect.value = burstConfig.photoBorderColor;
  if (photoBorderThicknessSelect) photoBorderThicknessSelect.value = burstConfig.photoBorderThickness;
  if (photoCornerRadiusInput) photoCornerRadiusInput.value = burstConfig.photoCornerRadius;
  if (photoGlowIntensityInput) photoGlowIntensityInput.value = burstConfig.photoGlowIntensity;
  if (confettiAmountSelect) confettiAmountSelect.value = burstConfig.confettiAmount;
  if (confettiSpeedSelect) confettiSpeedSelect.value = burstConfig.confettiSpeed;
  if (devHeadlineInput) devHeadlineInput.value = burstConfig.headline;
  if (devRevealThirdTitleInput) devRevealThirdTitleInput.value = burstConfig.revealThirdTitle || "MY EVERYTHING ❤️";
  if (bgGradientPresetSelect) bgGradientPresetSelect.value = burstConfig.gradientPreset;
  if (colorPinkIntensity) colorPinkIntensity.value = burstConfig.colorPinkIntensity;
  if (colorBlueIntensity) colorBlueIntensity.value = burstConfig.colorBlueIntensity;
  if (colorPurpleIntensity) colorPurpleIntensity.value = burstConfig.colorPurpleIntensity;
}

// Render Thumbnail Gallery in Customize Panel
function renderPhotoThumbnails() {
  if (panelPhotoCount) panelPhotoCount.textContent = String(currentPhotos.length);
  if (!photoThumbnailsGrid) return;

  photoThumbnailsGrid.innerHTML = "";

  if (currentPhotos.length === 0) {
    photoThumbnailsGrid.innerHTML = `
      <div class="thumb-card-empty">
        <p>📷 No celebration photos uploaded yet.</p>
        <p style="font-size: 0.8rem; margin-top: 0.35rem; color: rgba(255,255,255,0.7);">
          Click <strong>"+ Add Photos"</strong> to upload memories, or click <strong>"Load Sample Photos"</strong> to restore the festive presets!
        </p>
      </div>
    `;
    return;
  }

  currentPhotos.forEach((photo, index) => {
    const card = document.createElement("div");
    card.className = "thumb-card";

    // Badges for top 3 main hero cards that pin for 5 seconds
    let badgeHtml = "";
    if (index === 0) badgeHtml = `<span class="thumb-badge">★ #1 Hero (Pinned)</span>`;
    else if (index === 1) badgeHtml = `<span class="thumb-badge">★ #2 Hero (Pinned)</span>`;
    else if (index === 2) badgeHtml = `<span class="thumb-badge">★ #3 Hero (Pinned)</span>`;

    card.innerHTML = `
      <img src="${photo.src}" class="thumb-img" alt="${photo.name || 'Photo'}" loading="lazy" />
      ${badgeHtml}
      <button type="button" class="thumb-remove-btn" title="Remove photo" aria-label="Remove photo">&times;</button>
    `;

    // Click photo to preview in lightbox
    const imgEl = card.querySelector(".thumb-img");
    imgEl.addEventListener("click", () => {
      openLightbox(photo.src, photo.caption || photo.name || "Celebration Photo");
    });

    // Remove photo button
    const removeBtn = card.querySelector(".thumb-remove-btn");
    removeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      deletePhoto(photo.id);
    });

    photoThumbnailsGrid.appendChild(card);
  });
}

// Photo file processing with Supabase Storage upload
async function handlePhotoFiles(files) {
  if (!isCurrentUserAdmin()) {
    openAdminLoginForm("🔒 Admin sign-in required to upload photos to Supabase Storage.");
    return;
  }

  const validFiles = Array.from(files).filter(f => f.type && f.type.startsWith("image/"));
  if (validFiles.length === 0) return;

  showStorageStatus(
    "photoUploadStatus",
    `Uploading ${validFiles.length} photo(s) to Supabase Storage (photos/)...`,
    "loading",
    0
  );

  let successCount = 0;
  let rlsNotice = false;

  for (let i = 0; i < validFiles.length; i++) {
    const file = validFiles[i];
    showStorageStatus(
      "photoUploadStatus",
      `Uploading photo ${i + 1} of ${validFiles.length} to photos/...`,
      "loading",
      0
    );

    try {
      // 1. Upload to Supabase Storage bucket 'Birthday-assets' under photos/
      const uploadRes = await uploadToSupabaseStorage("photos", file);
      
      let photoSrc = "";
      let photoName = file.name;
      let isRemote = false;

      if (uploadRes.success) {
        photoSrc = uploadRes.publicUrl;
        photoName = uploadRes.fileName || file.name;
        isRemote = true;
        successCount++;
      } else {
        if (uploadRes.error && uploadRes.error.toLowerCase().includes("row-level security")) {
          rlsNotice = true;
        }
        // Fallback to local optimized DataURL preview if upload failed so user experience is smooth
        photoSrc = await readFileAsOptimizedDataURL(file);
      }

      const newPhoto = {
        id: "photo-" + Date.now() + "-" + Math.random().toString(36).substring(2, 7),
        name: photoName,
        src: photoSrc,
        caption: file.name.replace(/\.[^/.]+$/, "").replace(/_/g, " "),
        timestamp: Date.now(),
        fromSupabase: isRemote
      };

      currentPhotos.push(newPhoto);
      await savePhotoRecord(newPhoto);
    } catch (err) {
      console.error("Failed processing photo file:", err);
    }
  }

  renderPhotoThumbnails();

  if (successCount > 0) {
    showStorageStatus(
      "photoUploadStatus",
      `Saved successfully ❤️ (${successCount} photo${successCount > 1 ? "s" : ""} in Supabase Storage)`,
      "success",
      5000
    );
  } else if (rlsNotice) {
    showStorageStatus(
      "photoUploadStatus",
      "Saved locally! (Note: Enable INSERT policy on bucket 'Birthday-assets' in Supabase Storage for online sync)",
      "error",
      8000
    );
  } else {
    showStorageStatus("photoUploadStatus", "Saved locally in browser cache ❤️", "success", 4000);
  }
}

function readFileAsOptimizedDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        // Max dimension 1000px for optimal speed and storage safety
        const maxDim = 1000;
        let w = img.width;
        let h = img.height;

        if (w > maxDim || h > maxDim) {
          if (w > h) {
            h = Math.round((h * maxDim) / w);
            w = maxDim;
          } else {
            w = Math.round((w * maxDim) / h);
            h = maxDim;
          }
        }

        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, w, h);
        resolve(canvas.toDataURL("image/jpeg", 0.85));
      };
      img.onerror = () => resolve(e.target.result);
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function savePhotoRecord(photo) {
  const db = await openPhotoDB();
  if (db) {
    try {
      const tx = db.transaction(PHOTO_STORE, "readwrite");
      tx.objectStore(PHOTO_STORE).put(photo);
    } catch {
      // Fallback
    }
  }
  try {
    localStorage.setItem("birthday_burst_photos_v1", JSON.stringify(currentPhotos));
  } catch {
    // If storage quota exceeded in localStorage, IndexedDB still holds the record
  }
}

async function deletePhoto(id) {
  const target = currentPhotos.find(p => p.id === id);
  if (target && target.fromSupabase && !isCurrentUserAdmin()) {
    openAdminLoginForm("🔒 Admin sign-in required to delete online celebration photos.");
    return;
  }

  currentPhotos = currentPhotos.filter(p => p.id !== id);
  renderPhotoThumbnails();

  // If photo was stored in Supabase Storage, attempt remote deletion as well
  if (target && target.name && target.fromSupabase && isCurrentUserAdmin()) {
    try {
      const client = getSupabaseClient();
      if (client && client.storage) {
        client.storage.from(SUPABASE_STORAGE_BUCKET).remove([`photos/${target.name}`]).catch(() => {});
      }
    } catch (_) {}
  }

  const db = await openPhotoDB();
  if (db) {
    try {
      const tx = db.transaction(PHOTO_STORE, "readwrite");
      tx.objectStore(PHOTO_STORE).delete(id);
    } catch {
      // Ignore
    }
  }
  try {
    localStorage.setItem("birthday_burst_photos_v1", JSON.stringify(currentPhotos));
  } catch {}
}

async function clearAllPhotos() {
  currentPhotos = [];
  renderPhotoThumbnails();

  const db = await openPhotoDB();
  if (db) {
    try {
      const tx = db.transaction(PHOTO_STORE, "readwrite");
      tx.objectStore(PHOTO_STORE).clear();
    } catch {}
  }
  try {
    localStorage.removeItem("birthday_burst_photos_v1");
  } catch {}
}

async function loadSamplePhotos() {
  currentPhotos = [...defaultBurstPhotos];
  renderPhotoThumbnails();

  const db = await openPhotoDB();
  if (db) {
    seedDefaultPhotosToDB(db, currentPhotos);
  }
  try {
    localStorage.setItem("birthday_burst_photos_v1", JSON.stringify(currentPhotos));
  } catch {}
}

// Apply Color Atmosphere Presets
function applyGradientPreset(preset) {
  const root = document.documentElement;
  switch (preset) {
    case "sunset":
      root.style.setProperty("--color-pink-primary", "#ff1e78");
      root.style.setProperty("--color-blue-primary", "#9333ea");
      root.style.setProperty("--color-blue-deep", "#3b0764");
      break;
    case "cyber":
      root.style.setProperty("--color-pink-primary", "#ff007f");
      root.style.setProperty("--color-blue-primary", "#00ffff");
      root.style.setProperty("--color-blue-deep", "#0a0a23");
      break;
    case "pastel":
      root.style.setProperty("--color-pink-primary", "#f472b6");
      root.style.setProperty("--color-blue-primary", "#60a5fa");
      root.style.setProperty("--color-blue-deep", "#1e293b");
      break;
    case "midnight":
      root.style.setProperty("--color-pink-primary", "#e11d48");
      root.style.setProperty("--color-blue-primary", "#6366f1");
      root.style.setProperty("--color-blue-deep", "#09090b");
      break;
    case "dusk":
    default:
      root.style.setProperty("--color-pink-primary", "#ff2a7a");
      root.style.setProperty("--color-blue-primary", "#00d2ff");
      root.style.setProperty("--color-blue-deep", "#0e1533");
      break;
  }
}

function applyThemeIntensities() {
  const root = document.documentElement;
  const p = burstConfig.colorPinkIntensity || 1.0;
  const b = burstConfig.colorBlueIntensity || 1.0;
  root.style.setProperty("--pink-intensity", String(p));
  root.style.setProperty("--blue-intensity", String(b));
}

// ============================================================================
// PHOTO BURST ENGINE (Burst outward from center, rotate, scale, and glow)
// ============================================================================

function stopPhotoBurst() {
  if (photoBurstActiveTimeout) {
    clearTimeout(photoBurstActiveTimeout);
    photoBurstActiveTimeout = null;
  }
  if (heroPhotosTimerTimeout) {
    clearTimeout(heroPhotosTimerTimeout);
    heroPhotosTimerTimeout = null;
  }
  if (photoBurstOverlay) {
    photoBurstOverlay.innerHTML = "";
    photoBurstOverlay.classList.remove("active");
  }
}

function triggerPhotoBurst() {
  stopPhotoBurst();

  // If no photos have been uploaded or loaded, skip photo animation and let confetti shine alone
  if (!currentPhotos || currentPhotos.length === 0) {
    if (heroPhotosPinnedContainer) {
      heroPhotosPinnedContainer.style.display = "none";
    }
    return;
  }

  if (!photoBurstOverlay) return;
  photoBurstOverlay.classList.add("active");

  const vw = window.innerWidth;
  const vh = window.innerHeight;

  // Decide photos to display
  let photosToDisplay = [...currentPhotos];
  // If user only uploaded 1 or 2 photos, clone to make a balanced festive burst of at least 4 items
  if (photosToDisplay.length === 1) {
    photosToDisplay = [photosToDisplay[0], photosToDisplay[0], photosToDisplay[0], photosToDisplay[0]];
  } else if (photosToDisplay.length === 2) {
    photosToDisplay = [photosToDisplay[0], photosToDisplay[1], photosToDisplay[0], photosToDisplay[1]];
  }

  const count = photosToDisplay.length;

  // Speed mapping
  let speedDurationSec = 1.2;
  if (burstConfig.burstSpeed === "slow") speedDurationSec = 1.8;
  else if (burstConfig.burstSpeed === "fast") speedDurationSec = 0.8;
  else if (burstConfig.burstSpeed === "explosive") speedDurationSec = 0.5;

  // Rotation ranges
  let maxRotation = 25;
  if (burstConfig.photoRotation === "none") maxRotation = 0;
  else if (burstConfig.photoRotation === "subtle") maxRotation = 12;
  else if (burstConfig.photoRotation === "wild") maxRotation = 45;

  // Size mapping
  let sizePx = 180;
  if (burstConfig.photoSize === "small") sizePx = Math.min(vw * 0.35, 130);
  else if (burstConfig.photoSize === "large") sizePx = Math.min(vw * 0.5, 230);
  else sizePx = Math.min(vw * 0.42, 180);

  // Distribute burst items in a balanced outward spiral from screen center
  photosToDisplay.forEach((photo, index) => {
    const item = document.createElement("div");
    item.className = "burst-photo-item";

    // Shape assignment
    let shape = burstConfig.photoShape;
    if (shape === "mixed") {
      const shapes = ["polaroid", "rounded", "circle", "square"];
      shape = shapes[index % shapes.length];
    }
    item.classList.add(`shape-${shape}`);

    // Border glow assignment
    const borderTheme = burstConfig.photoBorderColor || "gradient";
    item.classList.add(`border-glow-${borderTheme}`);

    // Dimensions
    item.style.width = `${sizePx}px`;
    item.style.height = shape === "circle" ? `${sizePx}px` : `${Math.round(sizePx * 1.25)}px`;

    // Position & angle math: outward burst from (50vw, 50vh)
    const angle = (index / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.35;
    const minRadius = Math.min(vw, vh) * 0.22;
    const maxRadius = Math.min(vw, vh) * 0.44;
    const radius = minRadius + (index % 2) * (maxRadius - minRadius) * 0.85 + (Math.random() - 0.5) * 40;

    const targetX = Math.round(Math.cos(angle) * radius);
    const targetY = Math.round(Math.sin(angle) * radius);
    const targetRot = Math.round((Math.random() - 0.5) * 2 * maxRotation);

    const floatDx = Math.round((Math.random() - 0.5) * 35);
    const floatDy = Math.round((Math.random() - 0.5) * 35);

    // CSS variables for keyframes
    item.style.setProperty("--target-x", `${targetX}px`);
    item.style.setProperty("--target-y", `${targetY}px`);
    item.style.setProperty("--target-rot", `${targetRot}deg`);
    item.style.setProperty("--float-dx", `${floatDx}px`);
    item.style.setProperty("--float-dy", `${floatDy}px`);
    item.style.setProperty("--burst-border-width", `${burstConfig.photoBorderThickness || 2}px`);
    item.style.setProperty("--burst-radius", `${burstConfig.photoCornerRadius || 16}px`);
    item.style.setProperty("--burst-glow", `${burstConfig.photoGlowIntensity || 0.8}`);

    // Place element in the exact viewport center
    item.style.left = "50vw";
    item.style.top = "50vh";

    // Style animation
    let animName = "photoBurstOut";
    const userStyle = burstConfig.burstStyle;
    if (userStyle === "float") animName = "photoFloatGentle";
    else if (userStyle === "fall") animName = "photoFallDown";
    else if (userStyle === "pop") animName = "photoPopIn";
    else if (userStyle === "mixed") {
      const anims = ["photoBurstOut", "photoFloatGentle", "photoPopIn", "photoFallDown"];
      animName = anims[index % anims.length];
    }

    const staggerDelay = index * 0.08;
    item.style.animation = `${animName} ${speedDurationSec}s cubic-bezier(0.16, 1, 0.3, 1) ${staggerDelay}s forwards, photoFloatGentle 4s ease-in-out ${speedDurationSec + staggerDelay}s infinite alternate`;

    // Inner Image
    item.innerHTML = `<img src="${photo.src}" class="burst-photo-img" alt="${photo.name || 'Photo'}" />`;

    // Click to view in Lightbox
    item.addEventListener("click", () => {
      openLightbox(photo.src, photo.caption || photo.name || "Birthday Memory");
    });

    photoBurstOverlay.appendChild(item);
  });

  // Display 3 Main Hero Photos (Pastes on screen for 5s after burst, then settles)
  showHeroPinnedPhotos();

  // Overlay duration
  if (burstConfig.burstDuration !== "infinite") {
    const durSec = parseInt(burstConfig.burstDuration, 10) || 12;
    photoBurstActiveTimeout = setTimeout(() => {
      if (photoBurstOverlay) {
        photoBurstOverlay.style.transition = "opacity 1.5s ease";
        photoBurstOverlay.style.opacity = "0";
        setTimeout(() => {
          photoBurstOverlay.innerHTML = "";
          photoBurstOverlay.style.opacity = "1";
          photoBurstOverlay.style.transition = "";
          photoBurstOverlay.classList.remove("active");
        }, 1500);
      }
    }, durSec * 1000);
  }
}

// ============================================================================
// PINNED 3 MAIN HERO PHOTOS (Pastes on screen for 5 seconds after burst)
// ============================================================================
function showHeroPinnedPhotos() {
  if (!heroPhotosPinnedContainer || !heroPhotosPinnedCards) return;

  // Pick top 3 hero photos (from currentPhotos or fallback)
  const threePhotos = getThreeHeroPhotos();
  if (!threePhotos || threePhotos.length === 0) return;

  // Reset container state
  heroPhotosPinnedContainer.classList.remove("settled");
  heroPhotosPinnedContainer.style.display = "block";

  heroPhotosPinnedCards.innerHTML = "";

  const roles = ["hero-left", "hero-center", "hero-right"];
  const badges = ["✨ My Favorite Smile", "❤️ The One I Adore ✨", "🥰 Forever With You"];

  threePhotos.forEach((photoUrl, idx) => {
    const card = document.createElement("div");
    card.className = `hero-pinned-card ${roles[idx]}`;
    card.innerHTML = `
      <img src="${photoUrl}" class="hero-pinned-img" alt="Hero Photo" />
      <span class="hero-pinned-badge">${badges[idx]}</span>
    `;

    // Click opens Lightbox
    card.addEventListener("click", () => {
      openLightbox(photoUrl, badges[idx]);
    });

    heroPhotosPinnedCards.appendChild(card);
  });

  // Re-trigger the 5-second shrink animation on timer bar
  if (heroTimerProgress) {
    heroTimerProgress.style.animation = "none";
    // Trigger reflow
    void heroTimerProgress.offsetWidth;
    heroTimerProgress.style.animation = "heroTimerShrink 5s linear forwards";
  }

  // After 5 seconds, paste settles smoothly into the celebration layout
  if (heroPhotosTimerTimeout) clearTimeout(heroPhotosTimerTimeout);
  heroPhotosTimerTimeout = setTimeout(() => {
    if (heroPhotosPinnedContainer) {
      heroPhotosPinnedContainer.classList.add("settled");
    }
  }, 5000);
}

// Expose Supabase helpers for inspection or external script triggers
if (typeof window !== "undefined") {
  window.loadBirthdayContentFromSupabase = loadBirthdayContentFromSupabase;
  window.saveBirthdayContentToSupabase = saveBirthdayContentToSupabase;
}

