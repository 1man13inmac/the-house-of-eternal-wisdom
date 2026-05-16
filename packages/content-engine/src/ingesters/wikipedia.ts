/**
 * Safely strip HTML tags from a string without using regex-based sanitization.
 * Uses a character-by-character state machine approach that is not vulnerable
 * to malformed tags or script injection.
 */
function stripHtmlTags(input: string): string {
  let result = ''
  let insideTag = false
  for (let i = 0; i < input.length; i++) {
    const ch = input[i]
    if (ch === '<') {
      insideTag = true
    } else if (ch === '>') {
      insideTag = false
    } else if (!insideTag) {
      result += ch
    }
  }
  return result
}

/**
 * Wikipedia API Ingester
 * Fetches article summaries and metadata from Wikipedia.
 * Used for: historical figures, civilization overviews, concept definitions.
 * Only fetches summaries — NOT full articles to avoid copyright complexity.
 */
export class WikipediaIngester {
  private readonly baseUrl = 'https://en.wikipedia.org/api/rest_v1'

  /**
   * Get a page summary
   */
  async getPageSummary(title: string): Promise<WikipediaSummary | null> {
    const encodedTitle = encodeURIComponent(title.replace(/ /g, '_'))
    const response = await fetch(`${this.baseUrl}/page/summary/${encodedTitle}`)
    if (!response.ok) return null

    const data = await response.json() as RawWikipediaSummary
    return {
      title: data.title,
      displayTitle: data.displaytitle,
      description: data.description,
      extract: data.extract,
      thumbnailUrl: data.thumbnail?.source,
      pageUrl: data.content_urls?.desktop?.page,
    }
  }

  /**
   * Search Wikipedia for articles
   */
  async search(query: string, limit = 10): Promise<WikipediaSearchResult[]> {
    const params = new URLSearchParams({
      action: 'query',
      list: 'search',
      srsearch: query,
      srlimit: limit.toString(),
      format: 'json',
      origin: '*',
    })

    const response = await fetch(`https://en.wikipedia.org/w/api.php?${params}`)
    if (!response.ok) return []

    const data = await response.json() as { query: { search: RawSearchResult[] } }
    return data.query.search.map((r) => ({
      pageId: r.pageid,
      title: r.title,
      snippet: stripHtmlTags(r.snippet),
    }))
  }
}

// Types
interface RawWikipediaSummary {
  title: string
  displaytitle: string
  description?: string
  extract: string
  thumbnail?: { source: string }
  content_urls?: { desktop?: { page: string } }
}

interface RawSearchResult {
  pageid: number
  title: string
  snippet: string
}

export interface WikipediaSummary {
  title: string
  displayTitle: string
  description?: string
  extract: string
  thumbnailUrl?: string
  pageUrl?: string
}

export interface WikipediaSearchResult {
  pageId: number
  title: string
  snippet: string
}
