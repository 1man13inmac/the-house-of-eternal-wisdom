import Link from 'next/link'

export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border py-6 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="font-serif text-xl">The Living Library</Link>
        </div>
      </header>

      <div className="container mx-auto px-6 py-16 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-light mb-4">Membership</h1>
          <p className="text-muted-foreground font-sans max-w-xl mx-auto">
            Support the preservation of humanity's wisdom. Access advanced tools, annotations, 
            AI guidance, and exclusive content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free */}
          <div className="border border-border bg-card p-8">
            <h2 className="font-serif text-2xl mb-2">Seeker</h2>
            <p className="text-3xl font-sans font-light mb-1">Free</p>
            <p className="text-muted-foreground font-sans text-sm mb-8">Forever</p>
            <ul className="space-y-3 mb-8">
              {[
                'Browse the full library',
                'Access public texts',
                'Read public journals',
                'Join discussions',
                'Basic search',
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm font-sans">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/register"
              className="block text-center px-6 py-3 border border-border font-sans text-sm hover:border-primary hover:text-primary transition-colors"
            >
              Begin for Free
            </Link>
          </div>

          {/* Member */}
          <div className="border border-primary bg-card p-8 relative">
            <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs px-3 py-1 font-sans">
              Most Popular
            </div>
            <h2 className="font-serif text-2xl mb-2">Member</h2>
            <p className="text-3xl font-sans font-light mb-1">$9<span className="text-lg text-muted-foreground">/mo</span></p>
            <p className="text-muted-foreground font-sans text-sm mb-8">or $90/year</p>
            <ul className="space-y-3 mb-8">
              {[
                'Everything in Seeker',
                'Personal journal & annotations',
                'AI Study Assistant',
                'Reading progress tracking',
                'Personal collections',
                'Advanced search & filters',
                'Reading path tracking',
                'Member-only discussions',
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm font-sans">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="block w-full text-center px-6 py-3 bg-primary text-primary-foreground font-sans text-sm hover:bg-primary/90 transition-colors">
              Become a Member
            </button>
          </div>

          {/* Scholar */}
          <div className="border border-border bg-card p-8">
            <h2 className="font-serif text-2xl mb-2">Scholar</h2>
            <p className="text-3xl font-sans font-light mb-1">$25<span className="text-lg text-muted-foreground">/mo</span></p>
            <p className="text-muted-foreground font-sans text-sm mb-8">or $240/year</p>
            <ul className="space-y-3 mb-8">
              {[
                'Everything in Member',
                'Scholar verification',
                'Private study circles',
                'Advanced AI tools',
                'Rare archive access',
                'Exclusive content',
                'Early access features',
                'Direct curator access',
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm font-sans">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="block w-full text-center px-6 py-3 border border-border font-sans text-sm hover:border-primary hover:text-primary transition-colors">
              Apply as Scholar
            </button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground font-sans text-sm">
            All memberships support the preservation and expansion of the archive. 
            No addictive mechanics. No data selling. No compromises on intellectual integrity.
          </p>
        </div>
      </div>
    </div>
  )
}
