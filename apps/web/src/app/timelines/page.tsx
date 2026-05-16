import Link from 'next/link'

const TIMELINE_EVENTS = [
  { date: '~3100 BCE', event: 'Unification of Egypt; beginning of pharaonic tradition', layer: 'POLITICAL', civ: 'Egyptian' },
  { date: '~2700 BCE', event: 'Pyramid Texts composed — earliest religious texts', layer: 'RELIGIOUS', civ: 'Egyptian' },
  { date: '~2000 BCE', event: 'Epic of Gilgamesh compiled in Akkadian', layer: 'LITERARY', civ: 'Mesopotamian' },
  { date: '~1500 BCE', event: 'Composition of the Rigveda begins', layer: 'RELIGIOUS', civ: 'Hindu/Vedic' },
  { date: '~800 BCE', event: 'Homer composes the Iliad and Odyssey', layer: 'LITERARY', civ: 'Greek' },
  { date: '~600 BCE', event: 'Laozi writes the Tao Te Ching', layer: 'PHILOSOPHICAL', civ: 'Taoist' },
  { date: '~563 BCE', event: 'Birth of Siddhartha Gautama (the Buddha)', layer: 'RELIGIOUS', civ: 'Buddhist' },
  { date: '~500 BCE', event: 'Parmenides: Being and Non-Being; foundations of ontology', layer: 'PHILOSOPHICAL', civ: 'Greek' },
  { date: '~470 BCE', event: 'Birth of Socrates; beginning of classical Greek philosophy', layer: 'PHILOSOPHICAL', civ: 'Greek' },
  { date: '~400 BCE', event: 'Plato writes The Republic and the dialogues', layer: 'PHILOSOPHICAL', civ: 'Greek' },
  { date: '~336 BCE', event: 'Aristotle founds the Lyceum', layer: 'PHILOSOPHICAL', civ: 'Greek' },
  { date: '~300 BCE', event: 'Euclid writes Elements — foundations of geometry', layer: 'SCIENTIFIC', civ: 'Greek' },
  { date: '~250 BCE', event: "Ashoka's Edicts — Buddhist ethics in governance", layer: 'POLITICAL', civ: 'Buddhist' },
  { date: '~46 BCE', event: 'Julius Caesar\'s calendar reform', layer: 'SCIENTIFIC', civ: 'Roman' },
  { date: '~50 CE', event: 'Paul\'s letters — earliest Christian writings', layer: 'RELIGIOUS', civ: 'Christian' },
  { date: '~200 CE', event: 'Plotinus founds Neoplatonism', layer: 'PHILOSOPHICAL', civ: 'Greek' },
  { date: '~400 CE', event: 'Augustine writes Confessions and City of God', layer: 'RELIGIOUS', civ: 'Christian' },
  { date: '~622 CE', event: 'Hijra — beginning of Islamic calendar', layer: 'RELIGIOUS', civ: 'Islamic' },
  { date: '~830 CE', event: 'House of Wisdom founded in Baghdad — golden age of Islamic science', layer: 'SCIENTIFIC', civ: 'Islamic' },
  { date: '~1000 CE', event: 'Ibn Sina writes Canon of Medicine', layer: 'SCIENTIFIC', civ: 'Islamic' },
]

const LAYER_COLORS: Record<string, string> = {
  POLITICAL: 'bg-red-100 text-red-700 border-red-200',
  PHILOSOPHICAL: 'bg-blue-100 text-blue-700 border-blue-200',
  SCIENTIFIC: 'bg-green-100 text-green-700 border-green-200',
  RELIGIOUS: 'bg-amber-100 text-amber-700 border-amber-200',
  LITERARY: 'bg-purple-100 text-purple-700 border-purple-200',
  ARCHITECTURAL: 'bg-orange-100 text-orange-700 border-orange-200',
  LINGUISTIC: 'bg-teal-100 text-teal-700 border-teal-200',
}

export default function TimelinesPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border py-6 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="font-serif text-xl">The Living Library</Link>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs tracking-widest uppercase font-sans text-muted-foreground">History</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-light mb-4">Civilisational Timelines</h1>
          <p className="text-muted-foreground font-sans max-w-2xl">
            Multi-layered timelines across civilisations — political, philosophical, scientific, 
            religious, literary, architectural, and linguistic events overlaid and interconnected.
          </p>
        </div>

        {/* Layer filters */}
        <div className="flex flex-wrap gap-3 mb-10">
          {['All Layers', 'Political', 'Philosophical', 'Scientific', 'Religious', 'Literary'].map((layer) => (
            <button
              key={layer}
              className="px-4 py-2 border border-border font-sans text-sm hover:border-primary hover:text-primary transition-colors first:border-primary first:text-primary"
            >
              {layer}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-32 top-0 bottom-0 w-px bg-border" />
          
          <div className="space-y-6">
            {TIMELINE_EVENTS.map((event, index) => (
              <div key={index} className="flex gap-8 items-start">
                <div className="w-28 text-right shrink-0">
                  <span className="text-xs font-sans text-muted-foreground">{event.date}</span>
                </div>
                <div className="relative">
                  <div className="absolute -left-[1.65rem] top-2 w-3 h-3 rounded-full border-2 border-primary bg-background" />
                </div>
                <div className="flex-1 pb-2 border-b border-border/50">
                  <div className="flex items-center gap-3 mb-1">
                    <span className={`text-xs border px-2 py-0.5 font-sans ${LAYER_COLORS[event.layer] || 'bg-gray-100 text-gray-700 border-gray-200'}`}>
                      {event.layer.toLowerCase().replace('_', ' ')}
                    </span>
                    <span className="text-xs text-muted-foreground font-sans">{event.civ}</span>
                  </div>
                  <p className="font-sans text-sm">{event.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
