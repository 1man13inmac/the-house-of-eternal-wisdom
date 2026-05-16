import Link from 'next/link'

const SAMPLE_TERMS = [
  { term: 'Tao', language: 'Chinese', definition: 'The Way; the underlying principle of reality in Taoist philosophy.', slug: 'tao' },
  { term: 'Logos', language: 'Greek', definition: 'Reason, word, discourse; the rational principle governing the cosmos in Greek philosophy.', slug: 'logos' },
  { term: 'Dharma', language: 'Sanskrit', definition: 'Cosmic order, duty, and righteousness; the fundamental principles of reality in Hindu and Buddhist thought.', slug: 'dharma' },
  { term: 'Ma\'at', language: 'Egyptian', definition: 'Truth, justice, balance, and cosmic order; the foundational principle of Egyptian cosmology.', slug: 'maat' },
  { term: 'Ṛta', language: 'Sanskrit', definition: 'Cosmic order and truth in Vedic religion; the natural law underlying all reality.', slug: 'rta' },
  { term: 'Pneuma', language: 'Greek', definition: 'Breath, spirit; the vital force animating all living beings in Stoic philosophy.', slug: 'pneuma' },
  { term: 'Atman', language: 'Sanskrit', definition: 'The individual self or soul, identical with Brahman (universal consciousness) in Advaita Vedanta.', slug: 'atman' },
  { term: 'Samsara', language: 'Sanskrit', definition: 'The cycle of birth, death, and rebirth; the wheel of conditioned existence in Hindu and Buddhist thought.', slug: 'samsara' },
  { term: 'Noesis', language: 'Greek', definition: 'Pure intellectual intuition; direct apprehension of intelligible forms in Neoplatonic philosophy.', slug: 'noesis' },
  { term: 'Sunyata', language: 'Sanskrit', definition: 'Emptiness; the absence of inherent existence in all phenomena in Buddhist philosophy.', slug: 'sunyata' },
  { term: 'Heka', language: 'Egyptian', definition: 'Magic; the divine power underlying creation and transformation in Egyptian cosmology.', slug: 'heka' },
  { term: 'Pleroma', language: 'Greek', definition: 'The Fullness; the totality of divine powers in Gnostic cosmology.', slug: 'pleroma' },
]

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
          {SAMPLE_TERMS.map((item) => (
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
