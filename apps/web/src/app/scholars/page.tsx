import type { Metadata } from 'next'
import Link from 'next/link'
import { createPageMetadata } from '../seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Scholars and Curators',
  path: '/scholars',
  description:
    'Meet the scholars, curators, translators, and reviewers who maintain canon quality, source integrity, and editorial governance.',
  keywords: [
    'scholars and curators',
    'translation advisors',
    'editorial governance',
    'knowledge archive curation',
    'peer review content platform',
  ],
})

const SCHOLARS = [
  { name: 'Archive Curators', role: 'Primary source indexing and lineage tracking.' },
  { name: 'Translation Advisors', role: 'Edition comparison and philological quality control.' },
  { name: 'Comparative Researchers', role: 'Cross-tradition mapping with methodological safeguards.' },
  { name: 'Community Mentors', role: 'Guide discussion standards and study circles.' },
]

export default function ScholarsPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border py-6 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="font-serif text-xl">The Living Library</Link>
        </div>
      </header>
      <main className="container mx-auto px-6 py-12 max-w-5xl">
        <h1 className="text-4xl font-serif font-light mb-4">Scholars</h1>
        <p className="text-muted-foreground font-sans leading-relaxed mb-10">
          Scholars and curators sustain quality through review, sourcing discipline, and editorial governance.
        </p>
        <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-8">
          This role structure supports transparent quality assurance for textual lineage, citation standards,
          comparative interpretation, and community moderation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SCHOLARS.map((item) => (
            <article key={item.name} className="border border-border bg-card p-6">
              <h2 className="font-serif text-xl mb-2">{item.name}</h2>
              <p className="text-sm font-sans text-muted-foreground leading-relaxed">{item.role}</p>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}
