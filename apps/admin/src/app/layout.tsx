import type { Metadata } from 'next'
import { AdminSidebar } from './_components/admin-sidebar'
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
          <AdminSidebar />
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
      </body>
    </html>
  )
}
