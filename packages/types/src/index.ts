// ============================================================
// THE LIVING LIBRARY — Core Type Definitions
// ============================================================

// ── User & Auth ──────────────────────────────────────────────

export type UserRole = 'USER' | 'MEMBER' | 'SCHOLAR' | 'CURATOR' | 'MODERATOR' | 'ADMIN'

export type MembershipTier = 'FREE' | 'MEMBER' | 'SCHOLAR' | 'PREMIUM'

export interface User {
  id: string
  email: string
  role: UserRole
  membershipTier: MembershipTier
  createdAt: Date
  updatedAt: Date
}

export interface Profile {
  id: string
  userId: string
  username: string
  displayName: string
  bio?: string
  avatarUrl?: string
  location?: string
  website?: string
  isScholarVerified: boolean
  isPublic: boolean
  interests: string[]
  readingPreferences: ReadingPreference
  createdAt: Date
  updatedAt: Date
}

export interface ReadingPreference {
  preferredDifficulty: TextDifficulty
  preferredTraditions: string[]
  preferredLanguages: string[]
  dailyReadingGoalMinutes: number
}

// ── Content Classification ────────────────────────────────────

export type SourceType =
  | 'PRIMARY_SOURCE'
  | 'CLASSICAL_COMMENTARY'
  | 'MODERN_SCHOLARSHIP'
  | 'COMPARATIVE_ANALYSIS'
  | 'SPECULATIVE'
  | 'COMMUNITY_COMMENTARY'

export type TextDifficulty =
  | 'SEED'
  | 'FOUNDATION'
  | 'STRUCTURAL'
  | 'ESOTERIC'
  | 'SCHOLARLY'
  | 'SPECIALIST'

export type KnowledgeConfidence =
  | 'HISTORICAL_CONSENSUS'
  | 'SCHOLARLY_DEBATED'
  | 'TRADITIONAL_INTERPRETATION'
  | 'SPECULATIVE'
  | 'MYTHOLOGICAL_SYMBOLIC'

export type ReadingState =
  | 'UNREAD'
  | 'READING'
  | 'COMPLETED'
  | 'REVISITING'
  | 'STUDYING_DEEPLY'
  | 'ARCHIVED'
  | 'ABANDONED'

// ── Civilisation ──────────────────────────────────────────────

export type CivilisationType =
  | 'MESOPOTAMIAN'
  | 'EGYPTIAN'
  | 'HEBREW'
  | 'GREEK'
  | 'ROMAN'
  | 'PERSIAN'
  | 'HINDU'
  | 'BUDDHIST'
  | 'TAOIST'
  | 'CONFUCIAN'
  | 'JAPANESE'
  | 'NORSE'
  | 'CELTIC'
  | 'ISLAMIC'
  | 'AFRICAN'
  | 'INDIGENOUS'
  | 'MESOAMERICAN'
  | 'RENAISSANCE_HERMETIC'
  | 'ENLIGHTENMENT'
  | 'CHRISTIAN_MYSTICAL'
  | 'OTHER'

export interface Civilization {
  id: string
  name: string
  slug: string
  type: CivilisationType
  overview: string
  historicalPeriod: string
  geographicRegion: string
  languages: string[]
  cosmology?: string
  philosophy?: string
  imageUrl?: string
  mapUrl?: string
  isPublished: boolean
  createdAt: Date
  updatedAt: Date
}

// ── Books & Texts ─────────────────────────────────────────────

export interface Book {
  id: string
  title: string
  originalTitle?: string
  slug: string
  authorId?: string
  civilizationId?: string
  language: string
  estimatedDate?: string
  historicalContext: string
  summary: string
  keyConceptIds: string[]
  difficulty: TextDifficulty
  sourceType: SourceType
  relatedBookIds: string[]
  coverImageUrl?: string
  pageCount?: number
  isPublicDomain: boolean
  gutenbergId?: string
  openLibraryId?: string
  affiliateLinks: AffiliateLink[]
  freeReadingUrls: FreeReadingSource[]
  isPublished: boolean
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date
}

export interface AffiliateLink {
  id: string
  platform: 'AMAZON' | 'PUBLISHER' | 'OTHER'
  url: string
  label: string
  isActive: boolean
}

export interface FreeReadingSource {
  platform: 'GUTENBERG' | 'INTERNET_ARCHIVE' | 'WIKISOURCE' | 'OTHER'
  url: string
  format: 'HTML' | 'PDF' | 'EPUB' | 'TXT'
}

// ── Authors & Figures ─────────────────────────────────────────

export interface HistoricalFigure {
  id: string
  name: string
  originalName?: string
  slug: string
  born?: string
  died?: string
  civilizationId?: string
  traditionIds: string[]
  topicIds: string[]
  biography: string
  significance: string
  imageUrl?: string
  isPublished: boolean
  createdAt: Date
  updatedAt: Date
}

// ── Concepts & Knowledge Graph ────────────────────────────────

export interface Concept {
  id: string
  name: string
  slug: string
  definition: string
  extendedDescription?: string
  traditionId?: string
  parentConceptId?: string
  relatedConceptIds: string[]
  parallelConceptIds: string[] // Cross-tradition parallel concepts
  confidence: KnowledgeConfidence
  tags: string[]
  isPublished: boolean
  createdAt: Date
  updatedAt: Date
}

export interface ParallelConcept {
  conceptId: string
  parallelConceptId: string
  relationship: string // e.g., "analogous", "possibly related", "structural parallel"
  confidence: KnowledgeConfidence
  notes: string
}

// ── Learning Paths ────────────────────────────────────────────

export interface LearningPath {
  id: string
  title: string
  slug: string
  description: string
  difficulty: TextDifficulty
  estimatedHours: number
  prerequisiteIds: string[]
  traditionIds: string[]
  topicIds: string[]
  stepsCount: number
  isPublished: boolean
  isFeatured: boolean
  createdAt: Date
  updatedAt: Date
}

// ── Journal ───────────────────────────────────────────────────

export type JournalEntryVisibility = 'PRIVATE' | 'MEMBERS_ONLY' | 'PUBLIC'

export interface Journal {
  id: string
  userId: string
  title: string
  description?: string
  isDefault: boolean
  createdAt: Date
  updatedAt: Date
}

export interface JournalEntry {
  id: string
  journalId: string
  userId: string
  title: string
  content: string // Markdown
  visibility: JournalEntryVisibility
  tags: string[]
  relatedBookIds: string[]
  relatedConceptIds: string[]
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date
}

// ── Annotations ───────────────────────────────────────────────

export interface Annotation {
  id: string
  userId: string
  bookId: string
  type: 'HIGHLIGHT' | 'NOTE' | 'CROSS_REFERENCE'
  text: string
  startPosition: string
  endPosition: string
  note?: string
  crossRefBookId?: string
  crossRefPosition?: string
  isPublic: boolean
  createdAt: Date
  updatedAt: Date
}

// ── Search ────────────────────────────────────────────────────

export interface SearchResult {
  type:
    | 'BOOK'
    | 'CONCEPT'
    | 'FIGURE'
    | 'CIVILIZATION'
    | 'LEARNING_PATH'
    | 'ARTICLE'
    | 'JOURNAL_ENTRY'
  id: string
  title: string
  excerpt: string
  slug: string
  imageUrl?: string
  relevanceScore: number
  metadata: Record<string, unknown>
}

export interface SearchFilters {
  type?: SearchResult['type'][]
  civilizationIds?: string[]
  traditionIds?: string[]
  topicIds?: string[]
  difficulty?: TextDifficulty[]
  dateRange?: { from?: string; to?: string }
  language?: string
  isPublicDomain?: boolean
}

// ── Timeline ──────────────────────────────────────────────────

export type TimelineLayer =
  | 'POLITICAL'
  | 'PHILOSOPHICAL'
  | 'SCIENTIFIC'
  | 'RELIGIOUS'
  | 'LITERARY'
  | 'ARCHITECTURAL'
  | 'LINGUISTIC'

export interface TimelineEvent {
  id: string
  title: string
  description: string
  date: string // ISO or approximate like "~500 BCE"
  dateNumeric?: number // For sorting
  layer: TimelineLayer
  civilizationId?: string
  isApproximate: boolean
  sourceType: SourceType
  confidence: KnowledgeConfidence
  relatedFigureIds: string[]
  relatedBookIds: string[]
  createdAt: Date
  updatedAt: Date
}

// ── Community ─────────────────────────────────────────────────

export interface DiscussionThread {
  id: string
  title: string
  content: string
  authorId: string
  bookId?: string
  conceptId?: string
  civilizationId?: string
  topicId?: string
  tags: string[]
  isPinned: boolean
  isLocked: boolean
  commentCount: number
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date
}

// ── AI ────────────────────────────────────────────────────────

export interface AIConversation {
  id: string
  userId: string
  title: string
  messages: AIMessage[]
  contextBookId?: string
  contextConceptId?: string
  createdAt: Date
  updatedAt: Date
}

export interface AIMessage {
  id: string
  role: 'USER' | 'ASSISTANT' | 'SYSTEM'
  content: string
  confidence?: KnowledgeConfidence
  citations?: string[]
  createdAt: Date
}

// ── Recommendations ───────────────────────────────────────────

export interface Recommendation {
  id: string
  userId: string
  type: 'BOOK' | 'CONCEPT' | 'LEARNING_PATH' | 'CIVILIZATION' | 'ARTICLE'
  itemId: string
  reason: string
  score: number
  isViewed: boolean
  isDismissed: boolean
  createdAt: Date
}

// ── Memberships ───────────────────────────────────────────────

export interface Membership {
  id: string
  userId: string
  tier: MembershipTier
  stripeCustomerId?: string
  stripeSubscriptionId?: string
  currentPeriodStart?: Date
  currentPeriodEnd?: Date
  cancelAtPeriodEnd: boolean
  createdAt: Date
  updatedAt: Date
}

// ── Map & Sacred Sites ────────────────────────────────────────

export interface MapLocation {
  id: string
  name: string
  slug: string
  type: 'SACRED_SITE' | 'LIBRARY' | 'MONASTERY' | 'TEMPLE' | 'CITY' | 'REGION' | 'OTHER'
  latitude: number
  longitude: number
  description: string
  civilizationId?: string
  historicalPeriod?: string
  isActive: boolean
  imageUrl?: string
  createdAt: Date
  updatedAt: Date
}

// ── Glossary ──────────────────────────────────────────────────

export interface GlossaryTerm {
  id: string
  term: string
  slug: string
  definition: string
  etymology?: string
  language?: string
  civilizationId?: string
  relatedTermIds: string[]
  relatedConceptIds: string[]
  isPublished: boolean
  createdAt: Date
  updatedAt: Date
}

// ── Notifications ─────────────────────────────────────────────

export interface Notification {
  id: string
  userId: string
  type: 'MENTION' | 'REPLY' | 'RECOMMENDATION' | 'SYSTEM' | 'NEW_CONTENT'
  title: string
  message: string
  actionUrl?: string
  isRead: boolean
  createdAt: Date
}

// ── Collections ───────────────────────────────────────────────

export interface Collection {
  id: string
  userId: string
  title: string
  description?: string
  isPublic: boolean
  bookIds: string[]
  conceptIds: string[]
  createdAt: Date
  updatedAt: Date
}

// ── Pagination ────────────────────────────────────────────────

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  perPage: number
  totalPages: number
}

export interface CursorPaginatedResponse<T> {
  data: T[]
  nextCursor?: string
  hasMore: boolean
}

// ── API Response ──────────────────────────────────────────────

export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
  message?: string
}
