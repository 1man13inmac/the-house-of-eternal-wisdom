import Link from 'next/link'

const CIVILIZATIONS = [
  { name: 'Egyptian', period: '~3100–30 BCE', region: 'North Africa', slug: 'egyptian', textCount: 45, emoji: '𓂀' },
  { name: 'Greek', period: '~800–146 BCE', region: 'Mediterranean', slug: 'greek', textCount: 120, emoji: '⚡' },
  { name: 'Hindu / Vedic', period: '~1500 BCE–present', region: 'Indian Subcontinent', slug: 'hindu', textCount: 95, emoji: '🕉️' },
  { name: 'Buddhist', period: '~500 BCE–present', region: 'Asia', slug: 'buddhist', textCount: 80, emoji: '☸️' },
  { name: 'Taoist', period: '~600 BCE–present', region: 'East Asia', slug: 'taoist', textCount: 40, emoji: '☯️' },
  { name: 'Mesopotamian', period: '~3500–539 BCE', region: 'Ancient Near East', slug: 'mesopotamian', textCount: 30, emoji: '🏺' },
  { name: 'Roman', period: '~753 BCE–476 CE', region: 'Mediterranean', slug: 'roman', textCount: 75, emoji: '🦅' },
  { name: 'Persian / Zoroastrian', period: '~1500 BCE–651 CE', region: 'Iran', slug: 'persian', textCount: 25, emoji: '🔥' },
  { name: 'Hebrew / Kabbalistic', period: '~1200 BCE–present', region: 'Levant', slug: 'hebrew', textCount: 55, emoji: '✡️' },
  { name: 'Islamic', period: '~622 CE–present', region: 'Middle East & Beyond', slug: 'islamic', textCount: 85, emoji: '☪️' },
  { name: 'Norse', period: '~793–1066 CE', region: 'Northern Europe', slug: 'norse', textCount: 20, emoji: '⚡' },
  { name: 'Celtic', period: '~600 BCE–500 CE', region: 'Western Europe', slug: 'celtic', textCount: 15, emoji: '🍀' },
  { name: 'Renaissance Hermetic', period: '~1400–1700 CE', region: 'Europe', slug: 'hermetic', textCount: 35, emoji: '🔮' },
  { name: 'Confucian', period: '~500 BCE–present', region: 'East Asia', slug: 'confucian', textCount: 30, emoji: '📚' },
  { name: 'African Traditions', period: 'Ancient–present', region: 'Africa', slug: 'african', textCount: 20, emoji: '🌍' },
  { name: 'Indigenous Wisdom', period: 'Prehistoric–present', region: 'Global', slug: 'indigenous', textCount: 15, emoji: '🌀' },
]

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
                {civ.emoji}
              </div>
              <h3 className="text-lg font-serif mb-1 group-hover:text-primary transition-colors">
                {civ.name}
              </h3>
              <p className="text-xs text-muted-foreground font-sans mb-1">{civ.period}</p>
              <p className="text-xs text-muted-foreground font-sans mb-4">{civ.region}</p>
              <div className="text-xs font-sans text-muted-foreground border-t border-border pt-3">
                {civ.textCount}+ texts in archive
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
