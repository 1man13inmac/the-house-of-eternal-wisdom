export const SEARCHABLE_TYPES = [
  'BOOK',
  'CONCEPT',
  'FIGURE',
  'CIVILIZATION',
  'LEARNING_PATH',
  'ARTICLE',
  'JOURNAL_ENTRY',
  'GLOSSARY_TERM',
] as const

export const SEARCH_FIELDS = {
  BOOK: ['title', 'originalTitle', 'summary', 'historicalContext'],
  CONCEPT: ['name', 'definition', 'extendedDesc'],
  FIGURE: ['name', 'biography', 'significance'],
  CIVILIZATION: ['name', 'overview', 'philosophy'],
  GLOSSARY_TERM: ['term', 'definition', 'etymology'],
  ARTICLE: ['title', 'content', 'excerpt'],
} as const
