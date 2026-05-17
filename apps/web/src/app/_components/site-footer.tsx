import Link from 'next/link'
import { BookOpenText, Github, Linkedin, Rss, Twitter } from 'lucide-react'

const FOOTER_SECTIONS = [
  {
    title: 'Library',
    links: [
      { href: '/library', label: 'Canon Library' },
      { href: '/civilizations', label: 'Civilizations' },
      { href: '/learning-paths', label: 'Learning Paths' },
      { href: '/glossary', label: 'Glossary' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { href: '/timelines', label: 'Timelines' },
      { href: '/maps', label: 'Maps' },
      { href: '/figures', label: 'Historical Figures' },
      { href: '/symbols', label: 'Symbol Atlas' },
    ],
  },
  {
    title: 'Community',
    links: [
      { href: '/journal', label: 'Journal' },
      { href: '/community', label: 'Discussions' },
      { href: '/articles', label: 'Articles' },
      { href: '/scholars', label: 'Scholars' },
    ],
  },
  {
    title: 'Platform',
    links: [
      { href: '/membership', label: 'Memberships' },
      { href: '/canon-policy', label: 'Canon Policy' },
      { href: '/about', label: 'About' },
      { href: '/contact', label: 'Contact' },
    ],
  },
]

const SOCIAL_LINKS = [
  { href: 'https://x.com', label: 'X', Icon: Twitter },
  { href: 'https://www.linkedin.com', label: 'LinkedIn', Icon: Linkedin },
  { href: 'https://github.com', label: 'GitHub', Icon: Github },
  { href: '/articles', label: 'RSS', Icon: Rss },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col gap-6 border-b border-border pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-primary">
              <BookOpenText className="h-5 w-5" aria-hidden="true" />
              <span className="font-serif text-xl">The Living Library</span>
            </div>
            <p className="max-w-xl text-sm text-muted-foreground">
              A civilizational wisdom archive for philosophy, comparative religion, textual scholarship,
              digital humanities, and contemplative learning.
            </p>
          </div>
          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                className="inline-flex h-9 w-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                aria-label={label}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 py-8 md:grid-cols-4">
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h2 className="mb-3 text-sm font-medium tracking-wide text-foreground">{section.title}</h2>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} The Living Library. Source-first scholarship and contemplative technology.</p>
          <p>Built for a modern 2026 PWA architecture with memberships, Supabase, Stripe, and semantic discovery.</p>
        </div>
      </div>
    </footer>
  )
}
