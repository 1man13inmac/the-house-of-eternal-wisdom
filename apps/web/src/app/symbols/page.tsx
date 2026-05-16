import Link from 'next/link'

const SYMBOLS = [
  { symbol: 'Yin-Yang', tradition: 'Taoist', meaning: 'Dynamic complementarity and cyclical balance.' },
  { symbol: 'Ankh', tradition: 'Egyptian', meaning: 'Life, vitality, and continuity through realms.' },
  { symbol: 'Dharma Wheel', tradition: 'Buddhist', meaning: 'The path of teaching and liberation.' },
  { symbol: 'Tree of Life', tradition: 'Hebrew/Kabbalistic', meaning: 'Ordered emanation and return.' },
  { symbol: 'Pentagram', tradition: 'Pythagorean/Hermetic', meaning: 'Proportion, harmony, and embodied order.' },
  { symbol: 'Fire Altar', tradition: 'Zoroastrian', meaning: 'Truth, purification, and sacred witnessing.' },
]

export default function SymbolsPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border py-6 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="font-serif text-xl">The Living Library</Link>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 max-w-5xl">
        <h1 className="text-4xl font-serif font-light mb-4">Symbol Atlas</h1>
        <p className="text-muted-foreground font-sans leading-relaxed mb-10">
          Symbol entries preserve original context before comparison, helping readers distinguish historical use
          from modern reinterpretation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SYMBOLS.map((item) => (
            <article key={item.symbol} className="border border-border bg-card p-6">
              <p className="text-xs tracking-widest uppercase text-muted-foreground font-sans mb-2">{item.tradition}</p>
              <h2 className="font-serif text-xl mb-2">{item.symbol}</h2>
              <p className="text-sm font-sans text-muted-foreground leading-relaxed">{item.meaning}</p>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}
