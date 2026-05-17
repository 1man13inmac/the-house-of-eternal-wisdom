import type { Metadata } from 'next'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://livinglibrary.org'

type SeoConfig = {
  title: string
  description: string
  path: string
  keywords?: string[]
}

export function createPageMetadata(config: SeoConfig): Metadata {
  const canonical = `${APP_URL}${config.path}`

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${config.title} | The Living Library`,
      description: config.description,
      url: canonical,
      siteName: 'The Living Library',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${config.title} | The Living Library`,
      description: config.description,
    },
  }
}
