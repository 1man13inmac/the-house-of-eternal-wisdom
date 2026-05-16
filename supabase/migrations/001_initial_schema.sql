-- ============================================================
-- THE LIVING LIBRARY — Initial Supabase Schema
-- ============================================================
-- This extends the Prisma schema with Supabase-specific features:
-- Row-Level Security (RLS), auth triggers, and real-time subscriptions.

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";  -- For fuzzy text search
CREATE EXTENSION IF NOT EXISTS "unaccent"; -- For accent-insensitive search

-- ── Auth Trigger ──────────────────────────────────────────────
-- Automatically create a user record when someone signs up via Supabase Auth

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.users (id, email, role, created_at, updated_at)
  VALUES (
    NEW.id::text,
    NEW.email,
    'USER',
    NOW(),
    NOW()
  );
  
  INSERT INTO public.memberships (id, user_id, tier, created_at, updated_at)
  VALUES (
    gen_random_uuid()::text,
    NEW.id::text,
    'FREE',
    NOW(),
    NOW()
  );
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- ── Full-Text Search ──────────────────────────────────────────
-- Add tsvector columns for full-text search

ALTER TABLE books ADD COLUMN IF NOT EXISTS search_vector tsvector;

UPDATE books SET search_vector = 
  setweight(to_tsvector('english', COALESCE(title, '')), 'A') ||
  setweight(to_tsvector('english', COALESCE(summary, '')), 'B') ||
  setweight(to_tsvector('english', COALESCE(historical_context, '')), 'C');

CREATE INDEX IF NOT EXISTS books_search_idx ON books USING GIN(search_vector);

CREATE OR REPLACE FUNCTION update_books_search_vector()
RETURNS trigger AS $$
BEGIN
  NEW.search_vector :=
    setweight(to_tsvector('english', COALESCE(NEW.title, '')), 'A') ||
    setweight(to_tsvector('english', COALESCE(NEW.summary, '')), 'B') ||
    setweight(to_tsvector('english', COALESCE(NEW.historical_context, '')), 'C');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER books_search_vector_update
  BEFORE INSERT OR UPDATE ON books
  FOR EACH ROW EXECUTE PROCEDURE update_books_search_vector();

-- Concepts search
ALTER TABLE concepts ADD COLUMN IF NOT EXISTS search_vector tsvector;

CREATE INDEX IF NOT EXISTS concepts_search_idx ON concepts USING GIN(search_vector);

-- Glossary search
ALTER TABLE glossary_terms ADD COLUMN IF NOT EXISTS search_vector tsvector;

CREATE INDEX IF NOT EXISTS glossary_search_idx ON glossary_terms USING GIN(search_vector);
