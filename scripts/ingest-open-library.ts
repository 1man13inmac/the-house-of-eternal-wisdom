#!/usr/bin/env ts-node
/**
 * Open Library Ingestion Script
 * Fetches book metadata from the Open Library API.
 * Only imports metadata — respects copyright for full texts.
 * 
 * Usage: ts-node scripts/ingest-open-library.ts
 */

import { OpenLibraryIngester } from '@living-library/content-engine'

const WISDOM_BOOKS = [
  'Tao Te Ching',
  'The Republic Plato',
  'Upanishads',
  'Bhagavad Gita',
  'Book of the Dead Egyptian',
  'Enneads Plotinus',
  'Meditations Marcus Aurelius',
  'The Divine Comedy Dante',
  'Corpus Hermeticum',
  'Zohar Kabbalah',
  'Mahabharata',
  'Ramayana',
  'Epic of Gilgamesh',
  'I Ching',
  'Zhuangzi',
  'Diamond Sutra',
  'Tibetan Book of the Dead',
  'Analects Confucius',
  'Avesta Zoroastrian',
  'Rigveda',
]

async function main() {
  const ingester = new OpenLibraryIngester()
  const results: unknown[] = []

  console.log('📚 Starting Open Library metadata ingestion...\n')

  for (const query of WISDOM_BOOKS) {
    console.log(`  Searching: "${query}"`)
    try {
      const books = await ingester.searchBooks(query, 5)
      console.log(`    Found ${books.length} results`)
      results.push(...books)
      // Respectful rate limiting
      await new Promise((resolve) => setTimeout(resolve, 500))
    } catch (error) {
      console.error(`    Error:`, error)
    }
  }

  console.log(`\n✅ Retrieved ${results.length} book records`)
  console.log('\nMetadata ingestion complete. Import into database manually or via seed script.')
}

main().catch(console.error)
