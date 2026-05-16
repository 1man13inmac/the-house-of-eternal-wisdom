import Link from 'next/link'

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border py-6 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="font-serif text-xl">The Living Library</Link>
        </div>
      </header>
      <main className="container mx-auto px-6 py-12 max-w-xl">
        <h1 className="text-4xl font-serif font-light mb-4">Create Your Account</h1>
        <p className="text-muted-foreground font-sans leading-relaxed mb-8">
          Registration is currently in staged rollout. Join the waitlist to receive early access.
        </p>
        <form className="border border-border bg-card p-6 space-y-4">
          <label className="block text-sm font-sans text-muted-foreground">
            Email
            <input type="email" className="mt-1 w-full border border-border bg-background px-3 py-2" placeholder="you@example.com" />
          </label>
          <label className="block text-sm font-sans text-muted-foreground">
            Focus Area
            <input type="text" className="mt-1 w-full border border-border bg-background px-3 py-2" placeholder="Greek philosophy, Taoism, comparative mysticism..." />
          </label>
          <button type="button" className="w-full bg-primary text-primary-foreground px-4 py-2 font-sans text-sm hover:bg-primary/90 transition-colors">
            Join Waitlist
          </button>
        </form>
      </main>
    </div>
  )
}
