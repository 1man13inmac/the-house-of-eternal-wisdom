import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BOOKS, DIFFICULTY_LABELS, LEARNING_PATHS } from '../../content'
import { createPageMetadata } from '../../seo'

type Props = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return LEARNING_PATHS.map((path) => ({ slug: path.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const path = LEARNING_PATHS.find((item) => item.slug === params.slug)
  if (!path) {
    return { title: 'Learning Path Not Found' }
  }

  return createPageMetadata({
    title: `${path.title} | Guided Path`,
    path: `/learning-paths/${path.slug}`,
    description: `${path.description} Includes outcomes, recommended reading, and related topics.`,
    keywords: [
      path.title,
      `${path.tradition} learning path`,
      'guided study plan',
      'structured curriculum',
      'self-paced study',
    ],
  })
}

export default function LearningPathDetailPage({ params }: Props) {
  const path = LEARNING_PATHS.find((item) => item.slug === params.slug)

  if (!path) {
    notFound()
  }

  const recommendedBooks = BOOKS.filter((book) => (path.recommendedBookSlugs || []).includes(book.slug))
  const relatedPaths = LEARNING_PATHS.filter((item) => (path.relatedPathSlugs || []).includes(item.slug))

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border py-6 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="font-serif text-xl">The Living Library</Link>
          <Link href="/learning-paths" className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors">
            Back to Learning Paths
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <p className="text-xs tracking-widest uppercase text-muted-foreground font-sans mb-2">{path.tradition}</p>
        <h1 className="text-4xl font-serif font-light mb-4">{path.title}</h1>
        <p className="text-muted-foreground font-sans mb-8 leading-relaxed">{path.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="border border-border bg-card p-4">
            <p className="text-xs text-muted-foreground font-sans">Difficulty</p>
            <p className="font-serif mt-1">{DIFFICULTY_LABELS[path.difficulty]}</p>
          </div>
          <div className="border border-border bg-card p-4">
            <p className="text-xs text-muted-foreground font-sans">Duration</p>
            <p className="font-serif mt-1">~{path.estimatedHours} hours</p>
          </div>
          <div className="border border-border bg-card p-4">
            <p className="text-xs text-muted-foreground font-sans">Structure</p>
            <p className="font-serif mt-1">{path.steps} steps</p>
          </div>
        </div>

        <section className="border border-border bg-card p-6 mb-8">
          <h2 className="text-2xl font-serif mb-4">Learning Outcomes</h2>
          <ul className="space-y-2">
            {path.outcomes.map((outcome) => (
              <li key={outcome} className="font-sans text-sm text-muted-foreground">• {outcome}</li>
            ))}
          </ul>
        </section>

        <section className="border border-border bg-card p-6 mb-8">
          <h2 className="text-2xl font-serif mb-4">Recommended Reading</h2>
          <ul className="space-y-2 text-sm font-sans text-muted-foreground">
            {recommendedBooks.map((book) => (
              <li key={book.slug}>
                <Link href={`/library/${book.slug}`} className="hover:text-foreground transition-colors">
                  {book.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="border border-border bg-card p-6 mb-8">
          <h2 className="text-2xl font-serif mb-4">Further Reading and Study Flow</h2>
          <ol className="space-y-2 text-sm font-sans text-muted-foreground">
            <li>1. Read historical orientation before first primary source.</li>
            <li>2. Read one text deeply, then map recurring concepts in glossary.</li>
            <li>3. Compare across at least one parallel tradition.</li>
            <li>4. Capture synthesis in journal entries and topic notes.</li>
            <li>5. Continue to related paths for structural depth.</li>
          </ol>
        </section>

        <section className="border border-border bg-card p-6">
          <h2 className="text-2xl font-serif mb-4">Similar Topics</h2>
          <div className="flex flex-wrap gap-3">
            {relatedPaths.map((relatedPath) => (
              <Link
                key={relatedPath.slug}
                href={`/learning-paths/${relatedPath.slug}`}
                className="border border-border px-3 py-1.5 text-sm font-sans hover:border-primary hover:text-primary transition-colors"
              >
                {relatedPath.title}
              </Link>
            ))}
            <Link href="/civilizations" className="border border-border px-3 py-1.5 text-sm font-sans hover:border-primary hover:text-primary transition-colors">
              Browse civilizations
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
