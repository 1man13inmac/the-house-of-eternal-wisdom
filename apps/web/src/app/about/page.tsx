import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border py-6 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="font-serif text-xl">The Living Library</Link>
        </div>
      </header>

      <div className="container mx-auto px-6 py-16 max-w-3xl">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs tracking-widest uppercase font-sans text-muted-foreground">About</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-light mb-8">The Mission</h1>
          
          <div className="prose prose-neutral font-sans max-w-none space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg text-foreground font-serif font-light">
              The Living Library is a civilisational wisdom archive — part digital monastery, 
              part curated canon, part scholarly index, part modern mystery school.
            </p>
            
            <p>
              We are building a serious, beautiful, and disciplined preservation and exploration 
              system for humanity's philosophical, spiritual, scientific, symbolic, and initiatory inheritance.
            </p>

            <h2 className="text-2xl font-serif text-foreground font-light mt-12">What We Are</h2>
            <ul className="space-y-2 list-none pl-0">
              {[
                'A civilisational memory system',
                'A structured learning platform',
                'A digital humanities project',
                'A philosophical and contemplative study system',
                'A personal knowledge management platform',
                'A scholarly resource hub',
                'A social journaling and annotation platform',
                'A semantic discovery engine',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-primary mt-1.5 text-xs">◆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-serif text-foreground font-light mt-12">What We Are Not</h2>
            <ul className="space-y-2 list-none pl-0">
              {[
                'A conspiracy platform',
                'A pseudo-history website',
                'A low-quality occult site',
                'A "new age" content farm',
                'An AI-generated misinformation system',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-destructive mt-1.5 text-xs">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-serif text-foreground font-light mt-12">The Canon Standard</h2>
            <p>
              Every text in the Library is classified according to our Canon Standard. 
              This ensures intellectual integrity and prevents the signal-to-noise collapse 
              that has afflicted similar platforms.
            </p>
            
            <div className="border border-border overflow-hidden mt-6">
              <table className="w-full text-sm">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-4 font-sans font-medium">Classification</th>
                    <th className="text-left p-4 font-sans font-medium">Meaning</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ['Primary Source', 'Original historical text'],
                    ['Classical Commentary', 'Traditional commentary on primary sources'],
                    ['Modern Scholarship', 'Academic interpretation and analysis'],
                    ['Comparative Analysis', 'Cross-cultural comparative study'],
                    ['Speculative', 'Clearly marked interpretive speculation'],
                    ['Community Commentary', 'User-generated content and discussion'],
                  ].map(([type, meaning]) => (
                    <tr key={type} className="hover:bg-muted/30">
                      <td className="p-4 font-sans font-medium">{type}</td>
                      <td className="p-4 text-muted-foreground font-sans">{meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-serif text-foreground font-light mt-12">Our Principles</h2>
            <ul className="space-y-2 list-none pl-0">
              {[
                'Primary sources first · Commentary second · Modern interpretation third',
                'Always distinguish interpretation from historical fact',
                'Preserve cultural context and historical specificity',
                'Respect the traditions we study',
                'Cite sources. Always.',
                'Maintain intellectual integrity above all else',
              ].map((principle) => (
                <li key={principle} className="flex items-start gap-3">
                  <span className="text-primary mt-1.5 text-xs">◆</span>
                  <span>{principle}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
