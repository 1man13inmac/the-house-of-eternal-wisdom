/**
 * Project Gutenberg Ingester
 * Fetches public domain book metadata from the Gutenberg API.
 * Full texts can be loaded for books that are confirmed public domain.
 */
export class GutenbergIngester {
  private readonly baseUrl = 'https://gutendex.com'

  /**
   * Search for books on Project Gutenberg
   */
  async searchBooks(query: string, languages?: string[]): Promise<GutenbergBook[]> {
    const params = new URLSearchParams({ search: query })
    if (languages?.length) params.set('languages', languages.join(','))

    const response = await fetch(`${this.baseUrl}/books?${params}`)
    if (!response.ok) throw new Error(`Gutenberg API error: ${response.status}`)

    const data = await response.json() as { results: RawGutenbergBook[] }
    return data.results.map(this.mapBook)
  }

  /**
   * Get a specific book by Gutenberg ID
   */
  async getBook(gutenbergId: number): Promise<GutenbergBook | null> {
    const response = await fetch(`${this.baseUrl}/books/${gutenbergId}`)
    if (!response.ok) return null
    const data = await response.json() as RawGutenbergBook
    return this.mapBook(data)
  }

  private mapBook(book: RawGutenbergBook): GutenbergBook {
    return {
      gutenbergId: book.id.toString(),
      title: book.title,
      authors: book.authors.map((a) => a.name),
      subjects: book.subjects,
      languages: book.languages,
      downloadCount: book.download_count,
      formats: book.formats,
      textUrl: book.formats['text/html'] ||
               book.formats['text/plain; charset=utf-8'] ||
               book.formats['text/plain'],
      isPublicDomain: true, // All Gutenberg books are public domain
    }
  }
}

// Types
interface RawGutenbergBook {
  id: number
  title: string
  authors: Array<{ name: string; birth_year?: number; death_year?: number }>
  subjects: string[]
  languages: string[]
  download_count: number
  formats: Record<string, string>
}

export interface GutenbergBook {
  gutenbergId: string
  title: string
  authors: string[]
  subjects: string[]
  languages: string[]
  downloadCount: number
  formats: Record<string, string>
  textUrl?: string
  isPublicDomain: boolean
}
