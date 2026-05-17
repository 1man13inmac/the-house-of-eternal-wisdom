import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BOOKS, GLOSSARY_TERMS } from '../../content'
import { createPageMetadata } from '../../seo'

type Props = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return GLOSSARY_TERMS.map((term) => ({ slug: term.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const term = GLOSSARY_TERMS.find((item) => item.slug === params.slug)
  if (!term) {
    return { title: 'Glossary Entry Not Found' }
  }

  return createPageMetadata({
    title: `${term.term} Definition and Context`,
    path: `/glossary/${term.slug}`,
    description: `${term.definition} Includes contextual notes, related terms, and recommended reading.`,
    keywords: [
      term.term,
      `${term.language} term`,
      'concept definition',
      'comparative glossary',
      'philosophy terminology',
    ],
  })
}

export default function GlossaryDetailPage({ params }: Props) {
  const term = GLOSSARY_TERMS.find((item) => item.slug === params.slug)

  if (!term) {
    notFound()
  }

  const relatedTerms = GLOSSARY_TERMS.filter((item) => (term.relatedTermSlugs || []).includes(item.slug))
  const recommendedBooks = BOOKS.filter((book) => (term.recommendedBookSlugs || []).includes(book.slug))

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border py-6 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="font-serif text-xl">The Living Library</Link>
          <Link href="/glossary" className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors">
            Back to Glossary
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <p className="text-xs tracking-widest uppercase text-muted-foreground font-sans mb-2">{term.language}</p>
        <h1 className="text-4xl font-serif font-light mb-6">{term.term}</h1>
        <p className="font-sans text-muted-foreground leading-relaxed mb-6">{term.definition}</p>

        <section className="border border-border bg-card p-6 mb-8">
          <h2 className="text-2xl font-serif mb-3">Context</h2>
          <p className="font-sans text-sm text-muted-foreground leading-relaxed">{term.context}</p>
        </section>

        <section className="border border-border bg-card p-6 mb-8">
          <h2 className="text-2xl font-serif mb-3">Related Terms</h2>
          <div className="flex flex-wrap gap-3">
            {relatedTerms.map((item) => (
              <Link
                key={item.slug}
                href={`/glossary/${item.slug}`}
                className="border border-border px-3 py-1.5 text-sm font-sans hover:border-primary hover:text-primary transition-colors"
              >
                {item.term}
              </Link>
            ))}
          </div>
        </section>

        <section className="border border-border bg-card p-6">
          <h2 className="text-2xl font-serif mb-3">Further Reading</h2>
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
      </main>
    </div>
  )
}
