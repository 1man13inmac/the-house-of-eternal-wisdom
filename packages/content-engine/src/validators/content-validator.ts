import { CONTENT_STANDARDS } from '../standards'

export interface ContentValidationResult {
  isValid: boolean
  errors: string[]
  warnings: string[]
}

export interface ContentToValidate {
  title: string
  sourceType: string
  hasHistoricalContext: boolean
  hasCitation: boolean
  hasDifficultyRating: boolean
  hasConfidenceLevel: boolean
  content?: string
}

/**
 * Validate content against The Living Library's Canon Standard.
 * Ensures intellectual integrity before content enters the archive.
 */
export function validateContent(content: ContentToValidate): ContentValidationResult {
  const errors: string[] = []
  const warnings: string[] = []

  // Required fields
  if (!content.title?.trim()) {
    errors.push('Title is required')
  }

  if (!content.sourceType) {
    errors.push('Source type classification is required')
  } else if (!Object.keys(CONTENT_STANDARDS.sourceTypes).includes(content.sourceType)) {
    errors.push(`Invalid source type: ${content.sourceType}`)
  }

  if (CONTENT_STANDARDS.quality.requireHistoricalContext && !content.hasHistoricalContext) {
    errors.push('Historical context is required for all archive entries')
  }

  if (CONTENT_STANDARDS.quality.requireCitation && !content.hasCitation) {
    warnings.push('Content lacks citations — please add references before publishing')
  }

  if (CONTENT_STANDARDS.quality.requireDifficultyRating && !content.hasDifficultyRating) {
    warnings.push('Difficulty rating is recommended for reader guidance')
  }

  if (CONTENT_STANDARDS.quality.requireConfidenceLevel && !content.hasConfidenceLevel) {
    warnings.push('Knowledge confidence level is recommended for AI context')
  }

  // Content quality checks
  if (content.content) {
    const redFlags = ['secret society', 'hidden truth', "they don't want you to know", 'suppressed knowledge']
    const lowerContent = content.content.toLowerCase()
    for (const flag of redFlags) {
      if (lowerContent.includes(flag)) {
        warnings.push(`Content may contain pseudo-historical language: "${flag}"`)
      }
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  }
}
