import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Developer Docs — The Living Library',
  description: 'Technical documentation for The Living Library platform',
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, sans-serif', margin: 0 }}>
        {children}
      </body>
    </html>
  )
}
