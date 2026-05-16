import Link from 'next/link'
import { CIVILIZATIONS } from '../content'

const EMOJIS: Record<string, string> = {
  egyptian: '𓂀',
  greek: '⚡',
  hindu: '🕉️',
  buddhist: '☸️',
  taoist: '☯️',
  mesopotamian: '🏺',
  sumerian: '🏛️',
  babylonian: '🧱',
  mayan: '🗿',
  roman: '🦅',
  persian: '🔥',
  hebrew: '✡️',
  islamic: '☪️',
  norse: '⚒️',
  celtic: '🍀',
  hermetic: '🔮',
  neoplatonic: '🜂',
  confucian: '📚',
  tibetan: '⛰️',
  sufi: '🕊️',
  stoic: '🧭',
}

export default function CivilizationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border py-6 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="font-serif text-xl">The Living Library</Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-sans text-muted-foreground">
            <Link href="/library" className="hover:text-foreground transition-colors">Library</Link>
            <Link href="/civilizations" className="text-foreground">Civilisations</Link>
            <Link href="/learning-paths" className="hover:text-foreground transition-colors">Learning Paths</Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs tracking-widest uppercase font-sans text-muted-foreground">Explorer</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-light mb-4">Civilisations</h1>
          <p className="text-muted-foreground font-sans max-w-2xl">
            Explore humanity's great wisdom civilisations through their primary texts, historical figures, 
            symbols, cosmologies, and philosophical schools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {CIVILIZATIONS.map((civ) => (
            <Link
              key={civ.slug}
              href={`/civilizations/${civ.slug}`}
              className="group block border border-border bg-card hover:border-primary/50 hover:shadow-sm transition-all duration-300 p-6"
            >
              <div className="text-4xl mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                {EMOJIS[civ.slug] || '📖'}
              </div>
              <h3 className="text-lg font-serif mb-1 group-hover:text-primary transition-colors">
                {civ.name}
              </h3>
              <p className="text-xs text-muted-foreground font-sans mb-1">{civ.period}</p>
              <p className="text-xs text-muted-foreground font-sans mb-4">{civ.region}</p>
              <div className="text-xs font-sans text-muted-foreground border-t border-border pt-3">
                {civ.texts.length}+ featured texts in this release
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
