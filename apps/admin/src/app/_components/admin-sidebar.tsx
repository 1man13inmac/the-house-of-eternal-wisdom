'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavItem = {
  label: string
  href: string
  icon: string
}

type NavGroup = {
  label: string
  items: NavItem[]
}

const NAV_GROUPS: NavGroup[] = [
  {
    label: 'Overview',
    items: [{ label: 'Dashboard', href: '/dashboard', icon: '📊' }],
  },
  {
    label: 'Content',
    items: [
      { label: 'Books & Texts', href: '/content/books', icon: '📚' },
      { label: 'Civilisations', href: '/content/civilizations', icon: '🏛️' },
      { label: 'Learning Paths', href: '/content/learning-paths', icon: '🗺️' },
      { label: 'Taxonomy', href: '/taxonomy', icon: '🏷️' },
    ],
  },
  {
    label: 'Operations',
    items: [
      { label: 'Members', href: '/members', icon: '👥' },
      { label: 'Moderation', href: '/moderation', icon: '🛡️' },
      { label: 'Analytics', href: '/analytics', icon: '📈' },
      { label: 'Settings', href: '/settings', icon: '⚙️' },
    ],
  },
]

function isItemActive(pathname: string, href: string) {
  if (pathname === href) {
    return true
  }

  if (href === '/dashboard') {
    return pathname === '/'
  }

  return pathname.startsWith(`${href}/`)
}

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-72 bg-gray-900 text-white flex flex-col">
      <div className="p-6 border-b border-gray-700">
        <Link href="/dashboard" className="font-serif text-lg">
          Living Library
        </Link>
        <p className="text-xs text-gray-400 mt-1">Admin Control Plane</p>
      </div>

      <nav className="flex-1 p-4 space-y-6 overflow-auto">
        {NAV_GROUPS.map((group) => (
          <section key={group.label}>
            <p className="mb-2 px-2 text-[11px] uppercase tracking-wide text-gray-500">{group.label}</p>
            <div className="space-y-1">
              {group.items.map((item) => {
                const active = isItemActive(pathname, item.href)
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={
                      active
                        ? 'flex items-center gap-3 rounded px-3 py-2 text-sm bg-white text-gray-900'
                        : 'flex items-center gap-3 rounded px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors'
                    }
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </div>
          </section>
        ))}
      </nav>
    </aside>
  )
}
