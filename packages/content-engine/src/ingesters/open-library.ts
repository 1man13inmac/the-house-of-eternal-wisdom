/**
 * Open Library API Ingester
 * Fetches book metadata from Open Library (openlibrary.org)
 * Only fetches metadata, summaries, and cover images — NOT full copyrighted texts.
 */
export class OpenLibraryIngester {
  private readonly baseUrl = 'https://openlibrary.org'

  /**
   * Search for books by query
   */
  async searchBooks(query: string, limit = 20): Promise<OpenLibraryBook[]> {
    const url = `${this.baseUrl}/search.json?q=${encodeURIComponent(query)}&limit=${limit}&fields=key,title,author_name,first_publish_year,subject,cover_i,isbn,language`

    const response = await fetch(url)
    if (!response.ok) throw new Error(`Open Library API error: ${response.status}`)

    const data = await response.json() as { docs: RawOpenLibraryDoc[] }
    return data.docs.map(this.mapBook)
  }

  /**
   * Get book details by Open Library ID (e.g., '/works/OL45804W')
   */
  async getBook(workId: string): Promise<OpenLibraryBook | null> {
    const url = `${this.baseUrl}${workId}.json`

    const response = await fetch(url)
    if (!response.ok) return null

    const data = await response.json() as RawOpenLibraryWork
    return this.mapWork(data)
  }

  /**
   * Get cover image URL
   */
  getCoverUrl(coverId: number, size: 'S' | 'M' | 'L' = 'M'): string {
    return `https://covers.openlibrary.org/b/id/${coverId}-${size}.jpg`
  }

  private mapBook(doc: RawOpenLibraryDoc): OpenLibraryBook {
    return {
      openLibraryId: doc.key,
      title: doc.title,
      authors: doc.author_name || [],
      firstPublishedYear: doc.first_publish_year,
      subjects: doc.subject?.slice(0, 10) || [],
      coverImageUrl: doc.cover_i ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg` : undefined,
      isbn: doc.isbn?.[0],
      languages: doc.language || [],
    }
  }

  private mapWork(work: RawOpenLibraryWork): OpenLibraryBook {
    return {
      openLibraryId: work.key,
      title: work.title,
      authors: [],
      description: typeof work.description === 'string'
        ? work.description
        : work.description?.value,
      subjects: work.subjects?.slice(0, 10) || [],
    }
  }
}

// Types
interface RawOpenLibraryDoc {
  key: string
  title: string
  author_name?: string[]
  first_publish_year?: number
  subject?: string[]
  cover_i?: number
  isbn?: string[]
  language?: string[]
}

interface RawOpenLibraryWork {
  key: string
  title: string
  description?: string | { value: string }
  subjects?: string[]
}

export interface OpenLibraryBook {
  openLibraryId: string
  title: string
  authors: string[]
  firstPublishedYear?: number
  subjects: string[]
  coverImageUrl?: string
  isbn?: string
  languages?: string[]
  description?: string
}
