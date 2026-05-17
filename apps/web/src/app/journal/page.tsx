import type { Metadata } from 'next'
import Link from 'next/link'
import { createPageMetadata } from '../seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Study Journal',
  path: '/journal',
  description:
    'Use the study journal for reflective writing, reading notes, annotation synthesis, and long-term intellectual development.',
  keywords: [
    'study journal',
    'reading journal',
    'philosophy reflection prompts',
    'annotation workflow',
    'knowledge management for learning',
  ],
})

const PROMPTS = [
  'Which concept challenged your assumptions today?',
  'What passage deserves a second reading and why?',
  'How does this text define a good life?',
  'Where do two traditions converge and diverge?',
]

export default function JournalPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border py-6 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="font-serif text-xl">The Living Library</Link>
        </div>
      </header>
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <h1 className="text-4xl font-serif font-light mb-4">Journal</h1>
        <p className="text-muted-foreground font-sans leading-relaxed mb-8">
          Journal entries connect reading to reflection, helping long-term retention and intellectual honesty.
        </p>
        <section className="border border-border bg-card p-6 mb-8">
          <h2 className="font-serif text-2xl mb-3">Member Journal Features</h2>
          <p className="text-sm font-sans text-muted-foreground leading-relaxed mb-4">
            Journal tools are scaffolded for private and public entries, source-linked notes, reflective prompts,
            and long-term study continuity across texts, timelines, and learning paths.
          </p>
          <div className="rounded border border-border bg-background p-4 text-sm font-sans text-muted-foreground">
            Comments and threaded reflections are available in staged rollout for member and scholar tiers.
          </div>
        </section>
        <section className="border border-border bg-card p-6">
          <h2 className="font-serif text-2xl mb-4">Study Prompts</h2>
          <ul className="space-y-2 text-sm font-sans text-muted-foreground">
            {PROMPTS.map((prompt) => (
              <li key={prompt}>• {prompt}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}
