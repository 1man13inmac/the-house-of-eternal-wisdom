import type { Metadata } from 'next'
import './globals.css'
import { SiteFooter } from './_components/site-footer'
import { SiteHeader } from './_components/site-header'

export const metadata: Metadata = {
  title: {
    default: 'The Living Library — Civilisational Wisdom Archive',
    template: '%s | The Living Library',
  },
  description:
    'A civilisational wisdom archive preserving and exploring humanity\'s philosophical, spiritual, scientific, symbolic, and initiatory inheritance.',
  keywords: [
    'wisdom',
    'philosophy',
    'ancient texts',
    'civilization',
    'spiritual traditions',
    'library',
    'mysticism',
    'scholarship',
  ],
  authors: [{ name: 'The Living Library' }],
  creator: 'The Living Library',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_APP_URL,
    title: 'The Living Library — Civilisational Wisdom Archive',
    description:
      'A civilisational wisdom archive preserving humanity\'s philosophical, spiritual, and scholarly inheritance.',
    siteName: 'The Living Library',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Living Library',
    description: 'A civilisational wisdom archive',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-background antialiased">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="page-content flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}
