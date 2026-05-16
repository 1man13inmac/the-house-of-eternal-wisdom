/**
 * Build a PostgreSQL full-text search query from user input.
 * Supports fuzzy matching, phrase search, and multi-field search.
 */
export function buildSearchQuery(
  userInput: string,
  options: {
    type?: string
    civilizationId?: string
    difficulty?: string[]
    language?: string
  } = {}
): {
  tsQuery: string
  filters: Record<string, unknown>
} {
  // Sanitize and normalize
  const sanitized = userInput
    .trim()
    .replace(/[^\w\s'-]/g, ' ')
    .replace(/\s+/g, ' ')

  // Handle phrase search (quoted strings)
  const phraseMatches = sanitized.match(/"([^"]+)"/g) || []
  const phrases = phraseMatches.map((p) => p.replace(/"/g, '').trim())

  // Remaining words
  const withoutPhrases = sanitized.replace(/"[^"]+"/g, '').trim()
  const words = withoutPhrases.split(' ').filter(Boolean)

  // Build ts_query string
  const parts: string[] = []

  // Add phrase parts (must appear together)
  for (const phrase of phrases) {
    parts.push(`'${phrase}'`)
  }

  // Add individual words with prefix matching for partial word search
  for (const word of words) {
    if (word.length >= 2) {
      parts.push(`${word}:*`)
    }
  }

  const tsQuery = parts.join(' & ') || sanitized

  // Build filter object
  const filters: Record<string, unknown> = {}
  if (options.type) filters.type = options.type
  if (options.civilizationId) filters.civilizationId = options.civilizationId
  if (options.difficulty?.length) filters.difficulty = { in: options.difficulty }
  if (options.language) filters.language = options.language

  return { tsQuery, filters }
}

/**
 * Parse a search query string to extract structured components
 */
export function parseSearchQuery(query: string): {
  phrases: string[]
  terms: string[]
  filters: Record<string, string>
} {
  const phrases: string[] = []
  const terms: string[] = []
  const filters: Record<string, string> = {}

  // Extract phrases
  let remaining = query
  const phraseRegex = /"([^"]+)"/g
  let match
  while ((match = phraseRegex.exec(query)) !== null) {
    phrases.push(match[1])
    remaining = remaining.replace(match[0], '')
  }

  // Extract key:value filters (e.g., civilization:greek difficulty:seed)
  // Bounded quantifiers prevent ReDoS; keys/values max 50 chars
  const filterRegex = /([A-Za-z][A-Za-z0-9_]{0,49}):([A-Za-z][A-Za-z0-9_]{0,49})/g
  while ((match = filterRegex.exec(remaining)) !== null) {
    filters[match[1]] = match[2]
    remaining = remaining.replace(match[0], '')
  }

  // Remaining words
  terms.push(...remaining.trim().split(/\s+/).filter(Boolean))

  return { phrases, terms, filters }
}
