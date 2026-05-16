import Link from 'next/link'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border py-6 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="font-serif text-xl">The Living Library</Link>
        </div>
      </header>
      <main className="container mx-auto px-6 py-12 max-w-3xl">
        <h1 className="text-4xl font-serif font-light mb-4">Contact</h1>
        <p className="text-muted-foreground font-sans leading-relaxed mb-8">
          Reach the team for scholarly collaboration, technical issues, and archive partnerships.
        </p>
        <div className="border border-border bg-card p-6 space-y-3 text-sm font-sans text-muted-foreground">
          <p>General: contact@livinglibrary.org</p>
          <p>Scholar submissions: scholars@livinglibrary.org</p>
          <p>Partnerships: partnerships@livinglibrary.org</p>
        </div>
      </main>
    </div>
  )
}
