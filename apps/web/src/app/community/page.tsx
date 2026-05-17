import type { Metadata } from 'next'
import Link from 'next/link'
import { createPageMetadata } from '../seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Community Discussions',
  path: '/community',
  description:
    'Join citation-backed community discussions, study circles, and moderated scholarly conversation across philosophy, religion, symbolism, and history.',
  keywords: [
    'scholarly discussion forum',
    'citation based community',
    'study circles',
    'philosophy discussion',
    'comparative religion community',
    'moderated intellectual community',
  ],
})

const CHANNELS = [
  { name: 'Text Study Circles', description: 'Slow-reading groups organized around primary sources.' },
  { name: 'Comparative Debates', description: 'Structured discussions with source-first evidence requirements.' },
  { name: 'Translation Notes', description: 'Collaborative philology and variant comparison.' },
  { name: 'Research Requests', description: 'Ask for reading lists and scholarly references by topic.' },
]

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border py-6 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="font-serif text-xl">The Living Library</Link>
        </div>
      </header>
      <main className="container mx-auto px-6 py-12 max-w-5xl">
        <h1 className="text-4xl font-serif font-light mb-4">Community</h1>
        <p className="text-muted-foreground font-sans leading-relaxed mb-10">
          Discussion spaces are designed for rigor, generosity, and citation-backed dialogue.
        </p>
        <div className="mb-8 border border-border bg-card p-5 text-sm text-muted-foreground font-sans leading-relaxed">
          Community participation emphasizes source references, charitable reading, and long-form reflection.
          Low-effort claims, fabricated quotes, and inflammatory engagement patterns are filtered through
          moderation and governance rules aligned to the canon standard.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CHANNELS.map((channel) => (
            <article key={channel.name} className="border border-border bg-card p-6">
              <h2 className="font-serif text-xl mb-2">{channel.name}</h2>
              <p className="text-sm font-sans text-muted-foreground leading-relaxed">{channel.description}</p>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}
