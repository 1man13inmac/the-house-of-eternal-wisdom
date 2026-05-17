import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BOOKS, CIVILIZATION_SLUG_ALIASES, DIFFICULTY_LABELS, getAmazonLink } from '../../content'
import { createPageMetadata } from '../../seo'

type Props = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return BOOKS.map((book) => ({ slug: book.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const book = BOOKS.find((item) => item.slug === params.slug)
  if (!book) {
    return { title: 'Book Not Found' }
  }

  return createPageMetadata({
    title: `${book.title} | Library Overview`,
    path: `/library/${book.slug}`,
    description: `${book.summary} Explore themes, context, and recommended next reading paths.`,
    keywords: [
      book.title,
      book.author,
      `${book.civilization} text`,
      'primary source overview',
      'canonical text summary',
      ...book.themes,
    ],
  })
}

export default function LibraryDetailPage({ params }: Props) {
  const book = BOOKS.find((item) => item.slug === params.slug)

  if (!book) {
    notFound()
  }

  const relatedBooks = BOOKS.filter((candidate) =>
    (book.relatedBookSlugs || []).includes(candidate.slug)
  )
  const furtherReading = BOOKS.filter(
    (candidate) => candidate.civilization === book.civilization && candidate.slug !== book.slug
  ).slice(0, 3)
  const civilizationSlug = CIVILIZATION_SLUG_ALIASES[book.civilization.toLowerCase()]

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border py-6 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="font-serif text-xl">The Living Library</Link>
          <nav className="text-sm font-sans text-muted-foreground">
            <Link href="/library" className="hover:text-foreground transition-colors">Back to Library</Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10">
          <div>
            <img src={book.amazonImage} alt={`Cover for ${book.title}`} className="w-full border border-border" />
            <a
              href={getAmazonLink(book.asin, process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_ID)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full justify-center px-4 py-2 border border-border font-sans text-sm hover:border-primary hover:text-primary transition-colors"
            >
              Buy on Amazon
            </a>
          </div>

          <article>
            <p className="text-xs tracking-widest uppercase text-muted-foreground font-sans mb-2">{book.civilization}</p>
            <h1 className="text-4xl font-serif font-light mb-3">{book.title}</h1>
            <p className="text-muted-foreground font-sans mb-2">By {book.author}</p>
            <p className="text-xs text-muted-foreground font-sans mb-8">
              {book.estimatedDate} · {DIFFICULTY_LABELS[book.difficulty]}
            </p>

            <p className="font-sans leading-relaxed text-muted-foreground mb-6">{book.description}</p>

            <section className="border border-border bg-card p-6 mb-8">
              <h2 className="font-serif text-xl mb-3">Core Themes</h2>
              <div className="flex flex-wrap gap-2">
                {book.themes.map((theme) => (
                  <span key={theme} className="text-xs border border-border px-2 py-1 font-sans text-muted-foreground">
                    {theme}
                  </span>
                ))}
              </div>
            </section>

            <section className="border border-border bg-card p-6 mb-8">
              <h2 className="font-serif text-xl mb-3">Recommended Reading</h2>
              <ul className="space-y-2 text-sm font-sans text-muted-foreground">
                {relatedBooks.length > 0 ? (
                  relatedBooks.map((item) => (
                    <li key={item.slug}>
                      <Link href={`/library/${item.slug}`} className="hover:text-foreground transition-colors">
                        {item.title}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li>No direct recommendation entries yet for this text.</li>
                )}
              </ul>
            </section>

            <section className="border border-border bg-card p-6 mb-8">
              <h2 className="font-serif text-xl mb-3">Further Reading</h2>
              <ul className="space-y-2 text-sm font-sans text-muted-foreground">
                {furtherReading.length > 0 ? (
                  furtherReading.map((item) => (
                    <li key={item.slug}>
                      <Link href={`/library/${item.slug}`} className="hover:text-foreground transition-colors">
                        {item.title}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li>More texts from this tradition will be added in subsequent revisions.</li>
                )}
              </ul>
            </section>

            <section className="border border-border bg-card p-6">
              <h2 className="font-serif text-xl mb-3">Similar Topics</h2>
              <div className="flex flex-wrap gap-3 text-sm font-sans">
                {civilizationSlug ? (
                  <Link href={`/civilizations/${civilizationSlug}`} className="border border-border px-3 py-1.5 hover:border-primary hover:text-primary transition-colors">
                    {book.civilization} tradition
                  </Link>
                ) : null}
                <Link href="/learning-paths" className="border border-border px-3 py-1.5 hover:border-primary hover:text-primary transition-colors">
                  Guided learning paths
                </Link>
                <Link href="/glossary" className="border border-border px-3 py-1.5 hover:border-primary hover:text-primary transition-colors">
                  Glossary concepts
                </Link>
              </div>
            </section>
          </article>
        </div>
      </main>
    </div>
  )
}
