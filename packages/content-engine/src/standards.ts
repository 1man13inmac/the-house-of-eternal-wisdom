/**
 * The Living Library Content Standards
 * These define what content can and cannot be ingested into the archive.
 */
export const CONTENT_STANDARDS = {
  // Permitted content
  permitted: [
    'Public domain texts (published before 1928 in most jurisdictions)',
    'Creative Commons licensed content',
    'Metadata from open APIs (Open Library, Wikipedia, Gutenberg)',
    'Citation-safe excerpts with proper attribution',
    'Summaries and descriptions',
    'Original commentary and analysis',
  ],

  // Prohibited content
  prohibited: [
    'Copyrighted full texts without permission',
    'AI-generated "ancient" texts presented as authentic',
    'Fabricated quotes attributed to historical figures',
    'Content from conspiracy or pseudo-historical sources',
    'Content that misrepresents cultural traditions',
  ],

  // Quality standards
  quality: {
    requireCitation: true,
    requireHistoricalContext: true,
    requireDifficultyRating: true,
    requireSourceClassification: true,
    requireConfidenceLevel: true,
  },

  // Source classification
  sourceTypes: {
    PRIMARY_SOURCE: 'Original historical text',
    CLASSICAL_COMMENTARY: 'Traditional commentary by recognized authorities',
    MODERN_SCHOLARSHIP: 'Academic interpretation and analysis',
    COMPARATIVE_ANALYSIS: 'Cross-cultural scholarly comparison',
    SPECULATIVE: 'Clearly marked interpretive speculation',
    COMMUNITY_COMMENTARY: 'User-generated discussion and commentary',
  },
} as const
