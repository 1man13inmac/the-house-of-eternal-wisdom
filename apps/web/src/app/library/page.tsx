import type { Metadata } from 'next'
import Link from 'next/link'
import { BOOKS, DIFFICULTY_LABELS, getAmazonLink } from '../content'

export const metadata: Metadata = {
  title: 'Library of Civilisational Texts',
  description:
    'Explore curated primary sources and foundational classics across civilisations, with summaries, themes, and affiliate-ready purchase links.',
}

export default function LibraryPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border py-6 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="font-serif text-xl">The Living Library</Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-sans text-muted-foreground">
            <Link href="/library" className="text-foreground">Library</Link>
            <Link href="/civilizations" className="hover:text-foreground transition-colors">Civilisations</Link>
            <Link href="/learning-paths" className="hover:text-foreground transition-colors">Learning Paths</Link>
            <Link href="/journal" className="hover:text-foreground transition-colors">Journal</Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs tracking-widest uppercase font-sans text-muted-foreground">The Canon</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-light mb-4">The Library</h1>
          <p className="text-muted-foreground font-sans max-w-3xl">
            Primary sources and classical works from civilisations across the world, each with context,
            reading difficulty, thematic orientation, and recommended next reads.
          </p>
        </div>

        <div className="border border-border bg-card p-6 mb-10 max-w-3xl">
          <h2 className="font-serif text-base mb-2">Canon Classification Standard</h2>
          <p className="text-xs text-muted-foreground font-sans leading-relaxed">
            Every text is indexed as primary source, commentary, scholarship, comparative analysis,
            or speculative interpretation to preserve source integrity and transparent methodology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BOOKS.map((book) => (
            <article
              key={book.id}
              className="group border border-border bg-card hover:border-primary/50 hover:shadow-sm transition-all duration-300 p-6"
            >
              <img
                src={book.amazonImage}
                alt={`Cover for ${book.title}`}
                loading="lazy"
                className="w-full h-64 object-cover border border-border mb-5 bg-muted/20"
              />

              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <span className="text-xs font-sans text-muted-foreground tracking-widest uppercase">
                    {book.civilization}
                  </span>
                  <h3 className="text-xl font-serif mt-1 group-hover:text-primary transition-colors">
                    <Link href={`/library/${book.slug}`}>{book.title}</Link>
                  </h3>
                  <p className="text-sm text-muted-foreground font-sans mt-1">{book.author}</p>
                </div>
                <span className="text-xs border border-border px-2 py-1 font-sans text-muted-foreground ml-4 shrink-0">
                  Amazon
                </span>
              </div>

              <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-4">{book.summary}</p>

              <div className="flex items-center justify-between text-xs font-sans text-muted-foreground mb-4">
                <span>{book.estimatedDate}</span>
                <span className="border border-border px-2 py-1">{DIFFICULTY_LABELS[book.difficulty]}</span>
              </div>

              <div className="flex items-center justify-between gap-3">
                <Link href={`/library/${book.slug}`} className="text-sm font-sans text-primary hover:underline">
                  Read overview
                </Link>
                <a
                  href={getAmazonLink(book.asin, process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_ID)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-sans border border-border px-3 py-1.5 hover:border-primary hover:text-primary transition-colors"
                >
                  Buy on Amazon
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground font-sans text-sm mb-4">Showing {BOOKS.length} curated texts in this release</p>
        </div>
      </div>
    </div>
  )
}
