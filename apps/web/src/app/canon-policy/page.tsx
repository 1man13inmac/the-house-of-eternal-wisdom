import type { Metadata } from 'next'
import Link from 'next/link'
import { createPageMetadata } from '../seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Canon Policy and Editorial Standards',
  path: '/canon-policy',
  description:
    'Review canon policy rules for source classification, citation requirements, comparative methodology, and editorial quality control.',
  keywords: [
    'canon policy',
    'editorial standards',
    'citation policy',
    'comparative methodology',
    'source classification',
    'scholarly governance',
  ],
})

const RULES = [
  'Primary source claims must cite edition and translator when relevant.',
  'Comparative claims require explicit method and non-equivalence caveats.',
  'Speculative interpretations must be labeled as speculative.',
  'Community commentary cannot override source-critical standards.',
  'Editorial revisions preserve transparent change history.',
]

export default function CanonPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border py-6 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="font-serif text-xl">The Living Library</Link>
        </div>
      </header>
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <h1 className="text-4xl font-serif font-light mb-4">Canon Policy</h1>
        <p className="text-muted-foreground font-sans leading-relaxed mb-8">
          The Canon Policy defines how texts are classified, cited, compared, and governed.
        </p>
        <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-8">
          This framework supports search quality, content authenticity, and intellectual trust by enforcing
          provenance, interpretive boundaries, and transparent editorial revision workflows.
        </p>
        <section className="border border-border bg-card p-6">
          <h2 className="font-serif text-2xl mb-4">Core Rules</h2>
          <ul className="space-y-2 text-sm font-sans text-muted-foreground">
            {RULES.map((rule) => (
              <li key={rule}>• {rule}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}
