import type { Metadata } from 'next'
import Link from 'next/link'
import { createPageMetadata } from '../seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Editorial Articles',
  path: '/articles',
  description:
    'Read editorial essays on canon standards, comparative philosophy methods, textual interpretation, and civilizational literacy.',
  keywords: [
    'digital humanities articles',
    'comparative philosophy essays',
    'canon standards',
    'how to read primary sources',
    'civilizational literacy',
    'scholarly commentary',
  ],
})

const ARTICLES = [
  {
    slug: 'why-canon-standards-matter',
    title: 'Why Canon Standards Matter in Digital Humanities',
    summary: 'How clear classification protects scholarship quality at scale.',
  },
  {
    slug: 'comparing-tao-and-logos',
    title: 'Tao and Logos: Parallel Concepts Without False Equivalence',
    summary: 'A method for comparison that preserves historical specificity.',
  },
  {
    slug: 'how-to-read-primary-sources',
    title: 'How to Read Primary Sources Before Commentary',
    summary: 'A practical workflow for source-first study and note taking.',
  },
]

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border py-6 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="font-serif text-xl">The Living Library</Link>
        </div>
      </header>
      <main className="container mx-auto px-6 py-12 max-w-5xl">
        <h1 className="text-4xl font-serif font-light mb-4">Articles</h1>
        <p className="text-muted-foreground font-sans leading-relaxed mb-10">
          Editorial essays on method, interpretation, and civilizational literacy.
        </p>
        <div className="border border-border bg-card p-5 mb-8 text-sm text-muted-foreground font-sans leading-relaxed">
          The article archive is optimized for readers searching for source-critical methods, disciplined
          comparative analysis, and practical study systems for ancient texts, religious traditions,
          philosophy, symbolism, and history of ideas.
        </div>
        <div className="grid grid-cols-1 gap-6">
          {ARTICLES.map((article) => (
            <article key={article.slug} className="border border-border bg-card p-6">
              <h2 className="font-serif text-2xl mb-2">{article.title}</h2>
              <p className="text-sm font-sans text-muted-foreground leading-relaxed mb-3">{article.summary}</p>
              <Link href="/about" className="text-sm font-sans text-primary hover:underline">Read editorial principles</Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}
