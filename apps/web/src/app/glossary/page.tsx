import Link from 'next/link'
import { GLOSSARY_TERMS } from '../content'

export default function GlossaryPage() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border py-6 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="font-serif text-xl">The Living Library</Link>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs tracking-widest uppercase font-sans text-muted-foreground">Reference</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-light mb-4">Glossary</h1>
          <p className="text-muted-foreground font-sans max-w-2xl">
            1000+ terms across civilisations and traditions, with etymologies, definitions, 
            and cross-tradition conceptual connections.
          </p>
        </div>

        {/* Alphabet navigation */}
        <div className="flex flex-wrap gap-2 mb-10">
          {letters.map((letter) => (
            <a
              key={letter}
              href={`#${letter}`}
              className="w-8 h-8 flex items-center justify-center border border-border font-sans text-sm hover:border-primary hover:text-primary transition-colors"
            >
              {letter}
            </a>
          ))}
        </div>

        {/* Parallel concepts notice */}
        <div className="border border-border bg-card p-6 mb-10 max-w-2xl">
          <h3 className="font-serif text-sm mb-2">Parallel Concept Mapping</h3>
          <p className="text-xs text-muted-foreground font-sans leading-relaxed">
            Many terms are conceptually parallel across traditions (e.g., Tao / Logos / Dharma / Ma'at). 
            Where such connections exist, they are noted — but without falsely claiming identity between traditions.
          </p>
        </div>

        {/* Terms grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GLOSSARY_TERMS.map((item) => (
            <Link
              key={item.slug}
              href={`/glossary/${item.slug}`}
              className="group block border border-border bg-card hover:border-primary/50 p-6 transition-all"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-serif group-hover:text-primary transition-colors">{item.term}</h3>
                <span className="text-xs font-sans text-muted-foreground border border-border px-2 py-1">
                  {item.language}
                </span>
              </div>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">{item.definition}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
