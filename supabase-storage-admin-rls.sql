-- ==============================================================================
-- SUPABASE STORAGE & DATABASE RLS POLICIES FOR ADMIN-PROTECTED BIRTHDAY ASSETS
-- ==============================================================================
-- Run this script in the Supabase Dashboard -> SQL Editor (https://supabase.com/dashboard)
-- 
-- Objectives:
-- 1. Public visitors can ONLY READ (SELECT) published celebration assets & content.
-- 2. Only authenticated admin accounts can INSERT, UPDATE, or DELETE assets in 'Birthday-assets'.
-- 3. Anonymous / unauthenticated users are BLOCKED from modifying or deleting anything.
-- ==============================================================================

-- 1. Ensure the 'Birthday-assets' bucket exists and is set to public read
INSERT INTO storage.buckets (id, name, public)
VALUES ('Birthday-assets', 'Birthday-assets', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- 2. Enable Row Level Security (RLS) on storage.objects
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

-- 3. Clean up any existing policies on the Birthday-assets bucket to avoid conflicts
DROP POLICY IF EXISTS "Public Access" ON storage.objects;
DROP POLICY IF EXISTS "Allow public read access to Birthday-assets" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated admin upload to Birthday-assets" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated admin update on Birthday-assets" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated admin delete on Birthday-assets" ON storage.objects;
DROP POLICY IF EXISTS "Allow admin user upload to Birthday-assets" ON storage.objects;
DROP POLICY IF EXISTS "Allow admin user update on Birthday-assets" ON storage.objects;
DROP POLICY IF EXISTS "Allow admin user delete on Birthday-assets" ON storage.objects;

-- ==============================================================================
-- STORAGE POLICIES: Birthday-assets
-- ==============================================================================

-- POLICY 1: PUBLIC VISITORS CAN ONLY READ (SELECT) ASSETS
-- Anyone (anon visitors and authenticated users) can view and stream celebration photos,
-- music, and backgrounds.
CREATE POLICY "Allow public read access to Birthday-assets"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'Birthday-assets');

-- POLICY 2: ONLY AUTHENTICATED ADMIN USERS CAN INSERT (UPLOAD)
-- Protects photos/, backgrounds/, and music/ folders against unauthorized uploads.
CREATE POLICY "Allow authenticated admin upload to Birthday-assets"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'Birthday-assets'
  -- Optional stricter restriction: uncomment the line below to restrict to your specific admin email:
  -- AND (auth.jwt() ->> 'email') = 'matimbangobeni78@gmail.com'
);

-- POLICY 3: ONLY AUTHENTICATED ADMIN USERS CAN UPDATE (REPLACE)
CREATE POLICY "Allow authenticated admin update on Birthday-assets"
ON storage.objects
FOR UPDATE
TO authenticated
USING (
  bucket_id = 'Birthday-assets'
  -- AND (auth.jwt() ->> 'email') = 'matimbangobeni78@gmail.com'
)
WITH CHECK (
  bucket_id = 'Birthday-assets'
  -- AND (auth.jwt() ->> 'email') = 'matimbangobeni78@gmail.com'
);

-- POLICY 4: ONLY AUTHENTICATED ADMIN USERS CAN DELETE ASSETS
CREATE POLICY "Allow authenticated admin delete on Birthday-assets"
ON storage.objects
FOR DELETE
TO authenticated
USING (
  bucket_id = 'Birthday-assets'
  -- AND (auth.jwt() ->> 'email') = 'matimbangobeni78@gmail.com'
);

-- ==============================================================================
-- DATABASE POLICIES: birthday_content table (Persistence)
-- ==============================================================================
-- Ensures the birthday text message and background/music links also adhere to the
-- same security rule: public read-only, admin write.

ALTER TABLE IF EXISTS public.birthday_content ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public read on birthday_content" ON public.birthday_content;
DROP POLICY IF EXISTS "Allow authenticated admin update on birthday_content" ON public.birthday_content;
DROP POLICY IF EXISTS "Allow authenticated admin insert on birthday_content" ON public.birthday_content;

-- Read: Public can read current birthday config
CREATE POLICY "Allow public read on birthday_content"
ON public.birthday_content
FOR SELECT
TO public
USING (true);

-- Update: Only authenticated admin can update configuration
CREATE POLICY "Allow authenticated admin update on birthday_content"
ON public.birthday_content
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- Insert: Only authenticated admin can insert configuration
CREATE POLICY "Allow authenticated admin insert on birthday_content"
ON public.birthday_content
FOR INSERT
TO authenticated
WITH CHECK (true);
