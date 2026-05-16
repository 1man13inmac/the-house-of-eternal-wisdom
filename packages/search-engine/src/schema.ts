import { z } from 'zod'

export const SearchFiltersSchema = z.object({
  q: z.string().min(1).max(500),
  type: z.enum([
    'BOOK', 'CONCEPT', 'FIGURE', 'CIVILIZATION',
    'LEARNING_PATH', 'ARTICLE', 'JOURNAL_ENTRY', 'GLOSSARY_TERM'
  ]).optional(),
  civilizationId: z.string().uuid().optional(),
  difficulty: z.array(
    z.enum(['SEED', 'FOUNDATION', 'STRUCTURAL', 'ESOTERIC', 'SCHOLARLY', 'SPECIALIST'])
  ).optional(),
  language: z.string().optional(),
  isPublicDomain: z.boolean().optional(),
  page: z.number().int().min(1).default(1),
  perPage: z.number().int().min(1).max(100).default(20),
})

export type SearchFiltersInput = z.infer<typeof SearchFiltersSchema>
