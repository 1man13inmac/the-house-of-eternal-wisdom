-- ============================================================
-- THE LIVING LIBRARY — Row-Level Security Policies
-- ============================================================

-- ── Enable RLS on all user-facing tables ─────────────────────

ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE memberships ENABLE ROW LEVEL SECURITY;
ALTER TABLE journals ENABLE ROW LEVEL SECURITY;
ALTER TABLE journal_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE reading_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE annotations ENABLE ROW LEVEL SECURITY;
ALTER TABLE highlights ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookmarks ENABLE ROW LEVEL SECURITY;
ALTER TABLE collections ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;

-- ── Public read access (no auth required) ─────────────────────

-- Books: anyone can read published books
CREATE POLICY "books_public_read" ON books
  FOR SELECT USING (is_published = true AND deleted_at IS NULL);

-- Civilizations: anyone can read published civilizations  
CREATE POLICY "civilizations_public_read" ON civilizations
  FOR SELECT USING (is_published = true AND deleted_at IS NULL);

-- Learning paths: anyone can read published paths
CREATE POLICY "learning_paths_public_read" ON learning_paths
  FOR SELECT USING (is_published = true);

-- Glossary: anyone can read
CREATE POLICY "glossary_public_read" ON glossary_terms
  FOR SELECT USING (is_published = true);

-- Concepts: anyone can read published concepts
CREATE POLICY "concepts_public_read" ON concepts
  FOR SELECT USING (is_published = true);

-- Profiles: anyone can read public profiles
CREATE POLICY "profiles_public_read" ON profiles
  FOR SELECT USING (is_public = true);

-- Articles: anyone can read published articles
CREATE POLICY "articles_public_read" ON articles
  FOR SELECT USING (is_published = true AND deleted_at IS NULL);

-- Discussion threads: anyone can read
CREATE POLICY "threads_public_read" ON discussion_threads
  FOR SELECT USING (deleted_at IS NULL);

-- Comments: anyone can read (moderated)
CREATE POLICY "comments_public_read" ON comments
  FOR SELECT USING (deleted_at IS NULL AND is_moderated = false);

-- ── Authenticated user policies ───────────────────────────────

-- Users can read their own data
CREATE POLICY "users_own_read" ON users
  FOR SELECT USING (auth.uid()::text = id);

-- Users can update their own data
CREATE POLICY "users_own_update" ON users
  FOR UPDATE USING (auth.uid()::text = id);

-- Profile: own read/write
CREATE POLICY "profiles_own_write" ON profiles
  FOR ALL USING (auth.uid()::text = user_id);

-- Membership: own read
CREATE POLICY "memberships_own_read" ON memberships
  FOR SELECT USING (auth.uid()::text = user_id);

-- Journals: own full access
CREATE POLICY "journals_own" ON journals
  FOR ALL USING (auth.uid()::text = user_id);

-- Journal entries: own full access + public entries readable by all
CREATE POLICY "journal_entries_own" ON journal_entries
  FOR ALL USING (auth.uid()::text = user_id);

CREATE POLICY "journal_entries_public_read" ON journal_entries
  FOR SELECT USING (visibility = 'PUBLIC' AND deleted_at IS NULL);

-- Reading progress: own access only
CREATE POLICY "reading_progress_own" ON reading_progress
  FOR ALL USING (auth.uid()::text = user_id);

-- Annotations: own + public read
CREATE POLICY "annotations_own" ON annotations
  FOR ALL USING (auth.uid()::text = user_id);

CREATE POLICY "annotations_public_read" ON annotations
  FOR SELECT USING (is_public = true);

-- Highlights: own access
CREATE POLICY "highlights_own" ON highlights
  FOR ALL USING (auth.uid()::text = user_id);

-- Bookmarks: own access
CREATE POLICY "bookmarks_own" ON bookmarks
  FOR ALL USING (auth.uid()::text = user_id);

-- Collections: own + public read
CREATE POLICY "collections_own" ON collections
  FOR ALL USING (auth.uid()::text = user_id);

CREATE POLICY "collections_public_read" ON collections
  FOR SELECT USING (is_public = true);

-- AI conversations: own access only (private by design)
CREATE POLICY "ai_conversations_own" ON ai_conversations
  FOR ALL USING (auth.uid()::text = user_id);

-- Notifications: own access only
CREATE POLICY "notifications_own" ON notifications
  FOR ALL USING (auth.uid()::text = user_id);

-- ── Admin policies ────────────────────────────────────────────

-- Admins can do everything (checked via users.role)
CREATE POLICY "admin_full_access" ON books
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE id = auth.uid()::text
      AND role IN ('ADMIN', 'CURATOR', 'MODERATOR')
    )
  );
