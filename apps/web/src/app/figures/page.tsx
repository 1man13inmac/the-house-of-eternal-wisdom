import type { Metadata } from 'next'
import Link from 'next/link'
import { createPageMetadata } from '../seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Historical Figures',
  path: '/figures',
  description:
    'Explore influential historical figures, philosophers, sages, and scholars across civilizational traditions and text lineages.',
  keywords: [
    'historical philosophers',
    'civilizational figures',
    'major scholars in history',
    'wisdom traditions leaders',
    'philosophy biographies',
  ],
})

const FIGURES = [
  { name: 'Laozi', tradition: 'Taoist', summary: 'Attributed author of the Tao Te Ching and archetype of the sage in withdrawal.' },
  { name: 'Plato', tradition: 'Greek', summary: 'Architect of dialogical philosophy and enduring metaphysical inquiry.' },
  { name: 'Confucius', tradition: 'Confucian', summary: 'Teacher of ritual ethics, humane governance, and character cultivation.' },
  { name: 'Nagarjuna', tradition: 'Buddhist', summary: 'Philosopher of emptiness and relational ontology in Madhyamaka.' },
  { name: 'Ibn Sina', tradition: 'Islamic', summary: 'Physician and philosopher integrating Aristotelian and Islamic thought.' },
  { name: 'Hypatia', tradition: 'Alexandrian', summary: 'Scholar of mathematics and philosophy in late antique Alexandria.' },
]

export default function FiguresPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border py-6 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="font-serif text-xl">The Living Library</Link>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 max-w-5xl">
        <h1 className="text-4xl font-serif font-light mb-4">Historical Figures</h1>
        <p className="text-muted-foreground font-sans leading-relaxed mb-10">
          Profiles of teachers, commentators, rulers, and scholars whose work shaped the civilizational canon.
        </p>
        <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-8">
          Each profile is designed to connect biography with primary texts, historical influence, and
          cross-civilizational relevance for deeper comparative study.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FIGURES.map((figure) => (
            <article key={figure.name} className="border border-border bg-card p-6">
              <p className="text-xs tracking-widest uppercase text-muted-foreground font-sans mb-2">{figure.tradition}</p>
              <h2 className="font-serif text-xl mb-2">{figure.name}</h2>
              <p className="text-sm font-sans text-muted-foreground leading-relaxed">{figure.summary}</p>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}
