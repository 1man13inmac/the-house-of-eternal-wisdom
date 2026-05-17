import type { Metadata } from 'next'
import Link from 'next/link'
import { DIFFICULTY_LABELS, LEARNING_PATHS } from '../content'
import { createPageMetadata } from '../seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Guided Learning Paths',
  path: '/learning-paths',
  description:
    'Follow structured learning paths across philosophy, mysticism, comparative religion, symbolism, and civilizational history.',
  keywords: [
    'guided learning paths',
    'philosophy curriculum',
    'comparative religion courses',
    'self paced wisdom studies',
    'structured reading paths',
  ],
})

const DIFFICULTY_COLORS = {
  SEED: 'text-green-700 border-green-200 bg-green-50',
  FOUNDATION: 'text-blue-700 border-blue-200 bg-blue-50',
  STRUCTURAL: 'text-amber-700 border-amber-200 bg-amber-50',
  ESOTERIC: 'text-purple-700 border-purple-200 bg-purple-50',
  SCHOLARLY: 'text-red-700 border-red-200 bg-red-50',
  SPECIALIST: 'text-gray-700 border-gray-200 bg-gray-50',
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
          <p className="text-sm text-muted-foreground font-sans max-w-3xl mt-4 leading-relaxed">
            Path design emphasizes progressive complexity, source literacy, and deep retention for modern
            learners who want coherent long-form study rather than fragmented content consumption.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LEARNING_PATHS.map((path) => (
            <Link
              key={path.slug}
              href={`/learning-paths/${path.slug}`}
              className="group block border border-border bg-card hover:border-primary/50 hover:shadow-sm transition-all duration-300 p-8"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs font-sans text-muted-foreground tracking-widest uppercase">
                  {path.tradition}
                </span>
                <span className={`text-xs border px-2 py-1 font-sans ${DIFFICULTY_COLORS[path.difficulty as keyof typeof DIFFICULTY_COLORS]}`}>
                  {DIFFICULTY_LABELS[path.difficulty]}
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
