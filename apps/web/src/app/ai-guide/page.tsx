import Link from 'next/link'

export default function AIGuidePage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border py-6 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="font-serif text-xl">The Living Library</Link>
          <Link href="/library" className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors">Library</Link>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <h1 className="text-4xl font-serif font-light mb-4">AI Study Guide</h1>
        <p className="text-muted-foreground font-sans leading-relaxed mb-8">
          The AI Study Guide helps you compare traditions responsibly, surface canonical references,
          and distinguish consensus scholarship from speculative interpretation.
        </p>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {[
            ['Citation Integrity', 'Every explanation is expected to anchor to identified texts.'],
            ['Confidence Labels', 'Responses are tagged as consensus, debated, traditional, or speculative.'],
            ['Comparative Safety', 'Parallels are mapped without flattening distinct traditions.'],
            ['Reading Progression', 'Recommendations adapt to your current path and difficulty.'],
          ].map(([title, text]) => (
            <article key={title} className="border border-border bg-card p-6">
              <h2 className="font-serif text-xl mb-2">{title}</h2>
              <p className="text-sm font-sans text-muted-foreground leading-relaxed">{text}</p>
            </article>
          ))}
        </section>

        <section className="border border-border bg-card p-6">
          <h2 className="font-serif text-2xl mb-3">How to Use the Guide</h2>
          <ol className="space-y-2 text-sm font-sans text-muted-foreground">
            <li>1. Begin from a library text or learning path page.</li>
            <li>2. Ask focused questions on terms, argument structure, or historical context.</li>
            <li>3. Validate citations before accepting interpretive claims.</li>
            <li>4. Save your notes in Journal for long-term study continuity.</li>
          </ol>
        </section>
      </main>
    </div>
  )
}
