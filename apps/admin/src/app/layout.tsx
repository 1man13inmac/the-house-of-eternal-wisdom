import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Admin — The Living Library',
  description: 'Administration dashboard for The Living Library',
  robots: { index: false, follow: false },
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="w-64 bg-gray-900 text-white flex flex-col">
            <div className="p-6 border-b border-gray-700">
              <h1 className="font-serif text-lg">Living Library</h1>
              <p className="text-xs text-gray-400 mt-1">Admin Dashboard</p>
            </div>
            <nav className="flex-1 p-4 space-y-1">
              {[
                { label: 'Dashboard', href: '/dashboard', icon: '📊' },
                { label: 'Books & Texts', href: '/content/books', icon: '📚' },
                { label: 'Civilisations', href: '/content/civilizations', icon: '🏛️' },
                { label: 'Learning Paths', href: '/content/learning-paths', icon: '🗺️' },
                { label: 'Members', href: '/members', icon: '👥' },
                { label: 'Moderation', href: '/moderation', icon: '🛡️' },
                { label: 'Analytics', href: '/analytics', icon: '📈' },
                { label: 'Taxonomy', href: '/taxonomy', icon: '🏷️' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2 rounded text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>
          </aside>
          {/* Main content */}
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
      </body>
    </html>
  )
}
