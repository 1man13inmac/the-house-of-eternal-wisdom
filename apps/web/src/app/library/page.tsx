import Link from 'next/link'

const DIFFICULTY_LABELS = {
  SEED: 'Introductory',
  FOUNDATION: 'Foundation',
  STRUCTURAL: 'Intermediate',
  ESOTERIC: 'Advanced',
  SCHOLARLY: 'Scholarly',
  SPECIALIST: 'Specialist',
}

const SAMPLE_BOOKS = [
  {
    id: '1',
    title: 'Tao Te Ching',
    author: 'Laozi',
    civilization: 'Taoist',
    difficulty: 'SEED',
    estimatedDate: '~600 BCE',
    summary: 'The foundational text of Taoist philosophy, presenting the Tao as the underlying principle of reality.',
    isPublicDomain: true,
    slug: 'tao-te-ching',
  },
  {
    id: '2',
    title: 'The Republic',
    author: 'Plato',
    civilization: 'Greek',
    difficulty: 'FOUNDATION',
    estimatedDate: '~375 BCE',
    summary: "Plato's masterwork exploring justice, the ideal state, and the nature of knowledge.",
    isPublicDomain: true,
    slug: 'the-republic',
  },
  {
    id: '3',
    title: 'Meditations',
    author: 'Marcus Aurelius',
    civilization: 'Roman',
    difficulty: 'SEED',
    estimatedDate: '~170 CE',
    summary: 'Personal philosophical reflections by the Roman Emperor, a cornerstone of Stoic practice.',
    isPublicDomain: true,
    slug: 'meditations',
  },
  {
    id: '4',
    title: 'Upanishads',
    author: 'Various Sages',
    civilization: 'Hindu',
    difficulty: 'STRUCTURAL',
    estimatedDate: '~800–200 BCE',
    summary: 'The philosophical culmination of the Vedas, exploring Brahman, Atman, and the nature of consciousness.',
    isPublicDomain: true,
    slug: 'upanishads',
  },
  {
    id: '5',
    title: 'The Book of the Dead',
    author: 'Ancient Egyptian Scribes',
    civilization: 'Egyptian',
    difficulty: 'STRUCTURAL',
    estimatedDate: '~1550 BCE',
    summary: 'The ancient Egyptian funerary text guiding the soul through the afterlife journey.',
    isPublicDomain: true,
    slug: 'book-of-the-dead',
  },
  {
    id: '6',
    title: 'Enneads',
    author: 'Plotinus',
    civilization: 'Greek',
    difficulty: 'ESOTERIC',
    estimatedDate: '~254 CE',
    summary: 'The foundational text of Neoplatonism, tracing the emanation of all reality from The One.',
    isPublicDomain: true,
    slug: 'enneads',
  },
]

export default function LibraryPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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
          <p className="text-muted-foreground font-sans max-w-2xl">
            Primary sources, classical commentaries, and foundational texts from across humanity's wisdom traditions. 
            Each text is contextualised, rated for difficulty, and linked to related concepts.
          </p>
        </div>

        {/* Canon Standard Notice */}
        <div className="border border-border bg-card p-6 mb-10 max-w-2xl">
          <h3 className="font-serif text-sm mb-2">Canon Classification Standard</h3>
          <p className="text-xs text-muted-foreground font-sans leading-relaxed">
            Every text is classified as: Primary Source · Classical Commentary · Modern Scholarship · 
            Comparative Analysis · Speculative · Community Commentary. This maintains the intellectual 
            integrity of the archive.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-10">
          {['All Texts', 'Primary Sources', 'Greek', 'Hindu', 'Taoist', 'Egyptian', 'Islamic', 'Introductory', 'Advanced'].map(
            (filter) => (
              <button
                key={filter}
                className="px-4 py-2 border border-border font-sans text-sm hover:border-primary hover:text-primary transition-colors first:border-primary first:text-primary"
              >
                {filter}
              </button>
            )
          )}
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAMPLE_BOOKS.map((book) => (
            <Link
              key={book.id}
              href={`/library/${book.slug}`}
              className="group block border border-border bg-card hover:border-primary/50 hover:shadow-sm transition-all duration-300 p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <span className="text-xs font-sans text-muted-foreground tracking-widest uppercase">
                    {book.civilization}
                  </span>
                  <h3 className="text-xl font-serif mt-1 group-hover:text-primary transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-sans mt-1">{book.author}</p>
                </div>
                {book.isPublicDomain && (
                  <span className="text-xs border border-border px-2 py-1 font-sans text-muted-foreground ml-4 shrink-0">
                    Free
                  </span>
                )}
              </div>
              
              <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-4">
                {book.summary}
              </p>

              <div className="flex items-center justify-between text-xs font-sans text-muted-foreground">
                <span>{book.estimatedDate}</span>
                <span className="border border-border px-2 py-1">
                  {DIFFICULTY_LABELS[book.difficulty as keyof typeof DIFFICULTY_LABELS]}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground font-sans text-sm mb-4">
            Showing 6 of 100+ foundational texts
          </p>
          <button className="px-8 py-3 border border-border font-sans text-sm hover:border-primary hover:text-primary transition-colors">
            Load More Texts
          </button>
        </div>
      </div>
    </div>
  )
}
