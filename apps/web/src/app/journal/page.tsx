import Link from 'next/link'

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
