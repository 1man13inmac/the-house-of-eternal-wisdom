import Link from 'next/link'

const LEARNING_PATHS = [
  {
    id: '1',
    title: 'Introduction to Taoism',
    difficulty: 'SEED',
    estimatedHours: 20,
    description: 'Begin with the Tao Te Ching and journey through the major Taoist texts, philosophy, and contemplative practices.',
    tradition: 'Taoist',
    steps: 8,
    slug: 'introduction-to-taoism',
  },
  {
    id: '2',
    title: 'Foundations of Greek Philosophy',
    difficulty: 'FOUNDATION',
    estimatedHours: 40,
    description: 'From the Presocratics through Plato, Aristotle, and the Stoics — the foundations of Western thought.',
    tradition: 'Greek',
    steps: 12,
    slug: 'foundations-of-greek-philosophy',
  },
  {
    id: '3',
    title: 'The Egyptian Mysteries',
    difficulty: 'STRUCTURAL',
    estimatedHours: 35,
    description: 'Explore the cosmology, mythology, and esoteric systems of ancient Egypt from the Pyramid Texts to Hermetic philosophy.',
    tradition: 'Egyptian',
    steps: 10,
    slug: 'the-egyptian-mysteries',
  },
  {
    id: '4',
    title: 'Sacred Geometry Foundations',
    difficulty: 'STRUCTURAL',
    estimatedHours: 25,
    description: 'The mathematical and geometric principles underlying sacred architecture, art, and cosmology across traditions.',
    tradition: 'Cross-Traditional',
    steps: 9,
    slug: 'sacred-geometry-foundations',
  },
  {
    id: '5',
    title: 'Comparative Cosmology',
    difficulty: 'STRUCTURAL',
    estimatedHours: 30,
    description: 'How different civilisations understood the origin, structure, and purpose of the cosmos.',
    tradition: 'Cross-Traditional',
    steps: 10,
    slug: 'comparative-cosmology',
  },
  {
    id: '6',
    title: 'The Hero\'s Journey Across Civilisations',
    difficulty: 'FOUNDATION',
    estimatedHours: 20,
    description: "The universal initiatory narrative from Homer's Odyssey to the Mahabharata and beyond.",
    tradition: 'Comparative',
    steps: 8,
    slug: 'heros-journey',
  },
  {
    id: '7',
    title: 'Alchemy & Inner Transformation',
    difficulty: 'ESOTERIC',
    estimatedHours: 45,
    description: 'The history and symbolism of alchemical transformation across Egyptian, Islamic, and European traditions.',
    tradition: 'Hermetic',
    steps: 14,
    slug: 'alchemy-inner-transformation',
  },
  {
    id: '8',
    title: 'Death & Afterlife Traditions',
    difficulty: 'FOUNDATION',
    estimatedHours: 25,
    description: "How humanity's great traditions understood death, the soul's journey, and what lies beyond.",
    tradition: 'Comparative',
    steps: 9,
    slug: 'death-and-afterlife',
  },
]

const DIFFICULTY_COLORS = {
  SEED: 'text-green-700 border-green-200 bg-green-50',
  FOUNDATION: 'text-blue-700 border-blue-200 bg-blue-50',
  STRUCTURAL: 'text-amber-700 border-amber-200 bg-amber-50',
  ESOTERIC: 'text-purple-700 border-purple-200 bg-purple-50',
  SCHOLARLY: 'text-red-700 border-red-200 bg-red-50',
  SPECIALIST: 'text-gray-700 border-gray-200 bg-gray-50',
}

const DIFFICULTY_LABELS = {
  SEED: 'Introductory',
  FOUNDATION: 'Foundation',
  STRUCTURAL: 'Intermediate',
  ESOTERIC: 'Advanced',
  SCHOLARLY: 'Scholarly',
  SPECIALIST: 'Specialist',
}

export default function LearningPathsPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border py-6 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="font-serif text-xl">The Living Library</Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-sans text-muted-foreground">
            <Link href="/library" className="hover:text-foreground transition-colors">Library</Link>
            <Link href="/civilizations" className="hover:text-foreground transition-colors">Civilisations</Link>
            <Link href="/learning-paths" className="text-foreground">Learning Paths</Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs tracking-widest uppercase font-sans text-muted-foreground">Education</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-light mb-4">Learning Paths</h1>
          <p className="text-muted-foreground font-sans max-w-2xl">
            Structured journeys through humanity's wisdom traditions. Each path provides context, 
            reading order, prerequisites, and milestone tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LEARNING_PATHS.map((path) => (
            <Link
              key={path.id}
              href={`/learning-paths/${path.slug}`}
              className="group block border border-border bg-card hover:border-primary/50 hover:shadow-sm transition-all duration-300 p-8"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs font-sans text-muted-foreground tracking-widest uppercase">
                  {path.tradition}
                </span>
                <span className={`text-xs border px-2 py-1 font-sans ${DIFFICULTY_COLORS[path.difficulty as keyof typeof DIFFICULTY_COLORS]}`}>
                  {DIFFICULTY_LABELS[path.difficulty as keyof typeof DIFFICULTY_LABELS]}
                </span>
              </div>
              
              <h3 className="text-xl font-serif mb-3 group-hover:text-primary transition-colors">
                {path.title}
              </h3>
              
              <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-6">
                {path.description}
              </p>

              <div className="flex items-center gap-6 text-xs font-sans text-muted-foreground border-t border-border pt-4">
                <span>{path.steps} steps</span>
                <span>~{path.estimatedHours} hours</span>
                <span className="ml-auto text-primary group-hover:underline">Begin Path →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
