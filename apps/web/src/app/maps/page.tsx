import Link from 'next/link'

const SACRED_MAPS = [
  { name: 'Ancient Egypt', focus: 'Temple networks, Nile knowledge centers, funerary landscapes' },
  { name: 'Classical Greece', focus: 'Philosophical schools, mystery sites, and civic academies' },
  { name: 'Nalanda and India', focus: 'Monastic universities, Vedic centers, and pilgrimage corridors' },
  { name: 'Baghdad and Andalusia', focus: 'Islamic transmission routes for mathematics, medicine, and philosophy' },
]

export default function MapsPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border py-6 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="font-serif text-xl">The Living Library</Link>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 max-w-5xl">
        <h1 className="text-4xl font-serif font-light mb-4">Sacred Maps</h1>
        <p className="text-muted-foreground font-sans leading-relaxed mb-10">
          Sacred Maps trace civilizational memory through geography: where schools formed,
          manuscripts traveled, and symbolic systems became embodied in architecture and ritual sites.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SACRED_MAPS.map((map) => (
            <article key={map.name} className="border border-border bg-card p-6">
              <h2 className="font-serif text-xl mb-2">{map.name}</h2>
              <p className="text-sm font-sans text-muted-foreground leading-relaxed">{map.focus}</p>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}
