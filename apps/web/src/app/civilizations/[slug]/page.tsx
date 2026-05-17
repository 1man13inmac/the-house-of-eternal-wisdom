import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BOOKS, CIVILIZATIONS, getAmazonLink } from '../../content'
import { createPageMetadata } from '../../seo'

type Props = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return CIVILIZATIONS.map((civ) => ({ slug: civ.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const civ = CIVILIZATIONS.find((item) => item.slug === params.slug)
  if (!civ) {
    return { title: 'Civilization Not Found' }
  }

  return createPageMetadata({
    title: `${civ.name} Civilization Overview`,
    path: `/civilizations/${civ.slug}`,
    description: `${civ.summary} Includes key teachings, canonical texts, recommended books, and similar traditions.`,
    keywords: [
      `${civ.name} civilization`,
      `${civ.name} philosophy`,
      `${civ.name} texts`,
      'civilizational knowledge',
      'comparative tradition study',
    ],
  })
}

export default function CivilizationDetailPage({ params }: Props) {
  const civ = CIVILIZATIONS.find((item) => item.slug === params.slug)

  if (!civ) {
    notFound()
  }

  const recommendedBooks = BOOKS.filter((book) => (civ.recommendedBookSlugs || []).includes(book.slug))
  const similarCivilizations = CIVILIZATIONS.filter((item) => (civ.relatedCivilizationSlugs || []).includes(item.slug))

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border py-6 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="font-serif text-xl">The Living Library</Link>
          <Link href="/civilizations" className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors">
            Back to Civilisations
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 max-w-5xl">
        <p className="text-xs tracking-widest uppercase text-muted-foreground font-sans mb-2">{civ.region}</p>
        <h1 className="text-4xl font-serif font-light mb-2">{civ.name}</h1>
        <p className="text-sm text-muted-foreground font-sans mb-8">{civ.period}</p>
        <p className="font-sans text-muted-foreground leading-relaxed mb-8">{civ.summary}</p>

        <section className="border border-border bg-card p-6 mb-8">
          <h2 className="text-2xl font-serif mb-4">Foundational Text Corpus</h2>
          <ul className="space-y-2">
            {civ.texts.map((text) => (
              <li key={text} className="font-sans text-sm text-muted-foreground">• {text}</li>
            ))}
          </ul>
        </section>

        <section className="border border-border bg-card p-6 mb-8">
          <h2 className="text-2xl font-serif mb-4">Core Teachings</h2>
          <ul className="space-y-2">
            {civ.teachings.map((teaching) => (
              <li key={teaching} className="font-sans text-sm text-muted-foreground">• {teaching}</li>
            ))}
          </ul>
        </section>

        <section className="border border-border bg-card p-6 mb-8">
          <h2 className="text-2xl font-serif mb-4">Recommended Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recommendedBooks.map((book) => (
              <article key={book.slug} className="border border-border p-4">
                <h3 className="font-serif text-lg mb-1">{book.title}</h3>
                <p className="text-xs text-muted-foreground font-sans mb-3">{book.author}</p>
                <p className="text-sm text-muted-foreground font-sans mb-3">{book.summary}</p>
                <div className="flex items-center gap-3 text-sm font-sans">
                  <Link href={`/library/${book.slug}`} className="text-primary hover:underline">Overview</Link>
                  <a href={getAmazonLink(book.asin, process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_ID)} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Amazon</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border border-border bg-card p-6">
          <h2 className="text-2xl font-serif mb-4">Similar Topics</h2>
          <div className="flex flex-wrap gap-3">
            {similarCivilizations.map((item) => (
              <Link
                key={item.slug}
                href={`/civilizations/${item.slug}`}
                className="border border-border px-3 py-1.5 text-sm font-sans hover:border-primary hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link href="/learning-paths" className="border border-border px-3 py-1.5 text-sm font-sans hover:border-primary hover:text-primary transition-colors">
              Related learning paths
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
