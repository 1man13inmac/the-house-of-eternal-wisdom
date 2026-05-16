import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-parchment-50 to-background overflow-hidden">
        <div className="absolute inset-0 manuscript-texture pointer-events-none" />
        
        <div className="container mx-auto px-6 text-center max-w-4xl">
          {/* Ornamental divider */}
          <div className="flex items-center justify-center gap-4 mb-8 opacity-60">
            <div className="h-px w-16 bg-primary" />
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-sans">Est. MMXXIV</span>
            <div className="h-px w-16 bg-primary" />
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-light text-foreground mb-6 leading-tight">
            The Living Library
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground font-sans font-light leading-relaxed mb-4 max-w-2xl mx-auto">
            A civilisational wisdom archive preserving and exploring humanity's philosophical, 
            spiritual, scientific, symbolic, and initiatory inheritance.
          </p>

          <p className="text-sm text-muted-foreground/70 font-serif italic mb-12">
            Part digital monastery · Part curated canon · Part scholarly index · Part modern mystery school
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/library"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-sans text-sm tracking-wide hover:bg-primary/90 transition-colors"
            >
              Enter the Library
            </Link>
            <Link
              href="/learning-paths"
              className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary font-sans text-sm tracking-wide hover:bg-accent transition-colors"
            >
              Begin a Learning Path
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-12 bg-foreground animate-pulse" />
          <span className="text-xs tracking-widest uppercase font-sans">Scroll</span>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">Explore the Archive</h2>
          <p className="text-muted-foreground font-sans max-w-xl mx-auto">
            Navigate humanity's wisdom through civilisations, traditions, and disciplines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'The Canon',
              description: '100+ foundational texts from across civilisations, carefully curated and contextualised.',
              href: '/library',
              icon: '📜',
            },
            {
              title: 'Civilisations',
              description: 'Explore 20+ ancient and classical civilisations through their texts, symbols, and traditions.',
              href: '/civilizations',
              icon: '🏛️',
            },
            {
              title: 'Learning Paths',
              description: 'Structured journeys from introduction to mastery across philosophy, mysticism, and more.',
              href: '/learning-paths',
              icon: '🗺️',
            },
            {
              title: 'Timelines',
              description: 'Multi-layered civilisational timelines: political, philosophical, scientific, and literary.',
              href: '/timelines',
              icon: '📅',
            },
            {
              title: 'Glossary',
              description: '1000+ terms with etymologies, definitions, and cross-tradition connections.',
              href: '/glossary',
              icon: '📖',
            },
            {
              title: 'AI Study Guide',
              description: 'An AI companion that explains concepts, compares traditions, and guides your learning.',
              href: '/ai-guide',
              icon: '🔮',
            },
          ].map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="group block p-8 border border-border bg-card hover:border-primary/50 hover:shadow-sm transition-all duration-300"
            >
              <div className="text-3xl mb-4">{section.icon}</div>
              <h3 className="text-xl font-serif mb-3 group-hover:text-primary transition-colors">
                {section.title}
              </h3>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                {section.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Traditions Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">Traditions & Schools</h2>
            <p className="text-muted-foreground font-sans max-w-xl mx-auto">
              From the Presocratics to the Vedic Rishis, from Taoist mountain archives to Islamic Houses of Wisdom.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Sumerian', 'Babylonian', 'Egyptian', 'Greek', 'Hindu', 'Buddhist', 'Taoist', 'Islamic',
              'Norse', 'Celtic', 'Hebrew', 'Mesopotamian', 'Persian', 'Roman', 'Mayan',
              'Hermetic', 'Neoplatonic', 'Confucian', 'Tibetan', 'Sufi', 'Stoic',
            ].map((tradition) => (
              <Link
                key={tradition}
                href={`/civilizations/${tradition.toLowerCase()}`}
                className="px-4 py-2 border border-border font-sans text-sm hover:border-primary hover:text-primary transition-colors"
              >
                {tradition}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <section className="py-24 container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-6">
            Begin Your Journey
          </h2>
          <p className="text-muted-foreground font-sans leading-relaxed mb-8">
            Join a community of serious scholars, seekers, and students exploring humanity's deepest wisdom traditions. 
            Track your reading, annotate texts, journal your insights, and engage in thoughtful discourse.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/membership"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-sans text-sm tracking-wide hover:bg-primary/90 transition-colors"
            >
              View Membership Plans
            </Link>
            <Link
              href="/library"
              className="inline-flex items-center justify-center px-8 py-3 border border-border font-sans text-sm hover:bg-accent transition-colors"
            >
              Browse Free Content
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-serif text-sm mb-4">The Library</h4>
              <ul className="space-y-2 text-sm text-muted-foreground font-sans">
                <li><Link href="/library" className="hover:text-foreground transition-colors">Canon</Link></li>
                <li><Link href="/civilizations" className="hover:text-foreground transition-colors">Civilisations</Link></li>
                <li><Link href="/learning-paths" className="hover:text-foreground transition-colors">Learning Paths</Link></li>
                <li><Link href="/glossary" className="hover:text-foreground transition-colors">Glossary</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-sm mb-4">Explore</h4>
              <ul className="space-y-2 text-sm text-muted-foreground font-sans">
                <li><Link href="/timelines" className="hover:text-foreground transition-colors">Timelines</Link></li>
                <li><Link href="/maps" className="hover:text-foreground transition-colors">Sacred Maps</Link></li>
                <li><Link href="/figures" className="hover:text-foreground transition-colors">Historical Figures</Link></li>
                <li><Link href="/symbols" className="hover:text-foreground transition-colors">Symbols</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-sm mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-muted-foreground font-sans">
                <li><Link href="/journal" className="hover:text-foreground transition-colors">Journal</Link></li>
                <li><Link href="/community" className="hover:text-foreground transition-colors">Discussions</Link></li>
                <li><Link href="/articles" className="hover:text-foreground transition-colors">Articles</Link></li>
                <li><Link href="/scholars" className="hover:text-foreground transition-colors">Scholars</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-sm mb-4">About</h4>
              <ul className="space-y-2 text-sm text-muted-foreground font-sans">
                <li><Link href="/about" className="hover:text-foreground transition-colors">About</Link></li>
                <li><Link href="/membership" className="hover:text-foreground transition-colors">Membership</Link></li>
                <li><Link href="/canon-policy" className="hover:text-foreground transition-colors">Canon Policy</Link></li>
                <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
            <p className="font-serif text-sm text-muted-foreground">
              The Living Library · A civilisational wisdom archive
            </p>
            <p className="text-xs text-muted-foreground font-sans mt-4 md:mt-0">
              © {new Date().getFullYear()} The Living Library. Preserving wisdom for future generations.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
