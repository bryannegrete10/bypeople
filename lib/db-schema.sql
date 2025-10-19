-- Basic Postgres schema for ByPeople (apply to Supabase or Postgres)

-- Enable pgcrypto for gen_random_uuid (Supabase has it enabled by default)
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Users table (creators and brands)
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  name text,
  role text NOT NULL, -- 'creator' | 'brand' | 'admin'
  bio text,
  avatar_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Creators profile details
CREATE TABLE IF NOT EXISTS creators (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  instagram_handle text,
  tiktok_handle text,
  followers_count integer,
  ugc_certified boolean DEFAULT false,
  portfolio_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Brands table
CREATE TABLE IF NOT EXISTS brands (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  company_name text,
  website text,
  created_at timestamptz DEFAULT now()
);

-- Campaigns
CREATE TABLE IF NOT EXISTS campaigns (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  brand_id uuid REFERENCES brands(id) ON DELETE SET NULL,
  title text NOT NULL,
  brief text,
  budget numeric(12,2),
  status text DEFAULT 'draft', -- draft | live | completed | cancelled
  start_date timestamptz,
  end_date timestamptz,
  created_at timestamptz DEFAULT now()
);

-- Media uploads (portfolio & campaign submissions)
CREATE TABLE IF NOT EXISTS media (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  creator_id uuid REFERENCES creators(id) ON DELETE SET NULL,
  campaign_id uuid REFERENCES campaigns(id) ON DELETE SET NULL,
  public_url text,
  public_id text,
  type text, -- 'video' | 'image'
  duration_seconds integer,
  width integer,
  height integer,
  uploaded_at timestamptz DEFAULT now()
);

-- Payments & escrows
CREATE TABLE IF NOT EXISTS payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  campaign_id uuid REFERENCES campaigns(id) ON DELETE SET NULL,
  amount numeric(12,2),
  currency text DEFAULT 'USD',
  stripe_payment_intent text,
  stripe_session text,
  status text DEFAULT 'pending', -- pending | paid | refunded
  created_at timestamptz DEFAULT now()
);
