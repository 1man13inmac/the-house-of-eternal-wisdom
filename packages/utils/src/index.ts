// ============================================================
// THE LIVING LIBRARY — Shared Utilities
// ============================================================

/**
 * Convert a string to a URL-safe slug
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
    .replace(/^-+|-+$/g, '')
}

/**
 * Truncate text to a given length
 */
export function truncate(text: string, maxLength: number, suffix = '...'): string {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength - suffix.length) + suffix
}

/**
 * Format a date for display
 */
export function formatDate(date: Date | string, options?: Intl.DateTimeFormatOptions): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return d.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    ...options,
  })
}

/**
 * Parse an approximate historical date (e.g., "~500 BCE") to a numeric value for sorting.
 * BCE dates are negative.
 */
export function parseHistoricalDate(dateStr: string): number | null {
  const cleaned = dateStr.replace(/[~≈c\.\s]/g, '').toUpperCase()
  const bceMatch = cleaned.match(/^(\d+)BCE$/)
  if (bceMatch) return -parseInt(bceMatch[1])
  const ceMatch = cleaned.match(/^(\d+)(CE)?$/)
  if (ceMatch) return parseInt(ceMatch[1])
  return null
}

/**
 * Normalize a difficulty level to a human-readable label
 */
export const DIFFICULTY_LABELS: Record<string, string> = {
  SEED: 'Introductory',
  FOUNDATION: 'Foundation',
  STRUCTURAL: 'Intermediate',
  ESOTERIC: 'Advanced',
  SCHOLARLY: 'Scholarly',
  SPECIALIST: 'Specialist',
}

/**
 * Normalize a source type to a human-readable label
 */
export const SOURCE_TYPE_LABELS: Record<string, string> = {
  PRIMARY_SOURCE: 'Primary Source',
  CLASSICAL_COMMENTARY: 'Classical Commentary',
  MODERN_SCHOLARSHIP: 'Modern Scholarship',
  COMPARATIVE_ANALYSIS: 'Comparative Analysis',
  SPECULATIVE: 'Speculative',
  COMMUNITY_COMMENTARY: 'Community Commentary',
}

/**
 * Normalize a knowledge confidence level
 */
export const CONFIDENCE_LABELS: Record<string, string> = {
  HISTORICAL_CONSENSUS: 'Historical Consensus',
  SCHOLARLY_DEBATED: 'Scholarly Debated',
  TRADITIONAL_INTERPRETATION: 'Traditional Interpretation',
  SPECULATIVE: 'Speculative',
  MYTHOLOGICAL_SYMBOLIC: 'Mythological/Symbolic',
}

/**
 * Generate a reading time estimate
 */
export function estimateReadingTime(wordCount: number, wordsPerMinute = 200): number {
  return Math.ceil(wordCount / wordsPerMinute)
}

/**
 * Check if a value is a non-empty string
 */
export function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0
}

/**
 * Create a paginated slice of an array
 */
export function paginate<T>(array: T[], page: number, perPage: number): {
  data: T[]
  total: number
  totalPages: number
  page: number
  perPage: number
} {
  const total = array.length
  const totalPages = Math.ceil(total / perPage)
  const offset = (page - 1) * perPage
  return {
    data: array.slice(offset, offset + perPage),
    total,
    totalPages,
    page,
    perPage,
  }
}
