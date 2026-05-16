#!/usr/bin/env ts-node
/**
 * Gutenberg Ingestion Script
 * Fetches public domain book metadata from Project Gutenberg
 * and imports it into The Living Library database.
 * 
 * Usage: ts-node scripts/ingest-gutenberg.ts [--limit 50]
 */

import { GutenbergIngester } from '@living-library/content-engine'

const WISDOM_SEARCHES = [
  'Plato philosophy',
  'Aristotle',
  'Marcus Aurelius stoic',
  'Epictetus',
  'Confucius',
  'Lao Tzu Tao',
  'Upanishads',
  'Buddhist philosophy',
  'Egyptian mythology',
  'Plotinus Neoplatonism',
  'Hermes Trismegistus',
  'Kabbalah mysticism',
]

async function main() {
  const ingester = new GutenbergIngester()
  const results: unknown[] = []

  console.log('📚 Starting Gutenberg metadata ingestion...\n')

  for (const query of WISDOM_SEARCHES) {
    console.log(`  Searching: "${query}"`)
    try {
      const books = await ingester.searchBooks(query, ['en'])
      console.log(`    Found ${books.length} books`)
      results.push(...books)
      // Rate limiting
      await new Promise((resolve) => setTimeout(resolve, 1000))
    } catch (error) {
      console.error(`    Error searching "${query}":`, error)
    }
  }

  // Deduplicate by Gutenberg ID
  const unique = Array.from(
    new Map(results.map((b) => [(b as { gutenbergId: string }).gutenbergId, b])).values()
  )

  console.log(`\n✅ Found ${unique.length} unique books`)
  console.log('\nTo import into database, pipe this output to your database import script.')
  console.log('Sample (first 3):')
  console.log(JSON.stringify(unique.slice(0, 3), null, 2))
}

main().catch(console.error)
