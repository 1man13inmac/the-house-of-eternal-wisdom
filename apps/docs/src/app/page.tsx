export default function DocsPage() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '2rem', marginBottom: '8px' }}>
        The Living Library — Developer Documentation
      </h1>
      <p style={{ color: '#666', marginBottom: '40px' }}>
        Technical reference for the platform architecture, APIs, and schema.
      </p>

      <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.5rem', marginBottom: '16px' }}>Quick Links</h2>
      <ul>
        <li><a href="/architecture">Architecture Overview</a></li>
        <li><a href="/database">Database Schema</a></li>
        <li><a href="/api">API Reference</a></li>
        <li><a href="/deployment">Deployment Guide</a></li>
        <li><a href="/content-policy">Content Policy</a></li>
      </ul>

      <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.5rem', marginTop: '40px', marginBottom: '16px' }}>
        Repository Structure
      </h2>
      <pre style={{ background: '#f5f5f5', padding: '20px', overflow: 'auto', fontSize: '0.875rem' }}>
{`/apps
  /web          — Main public platform (Next.js 14)
  /admin        — Admin dashboard (Next.js 14)
  /docs         — Developer documentation (this app)

/packages
  /config       — Shared ESLint & Tailwind config
  /types        — TypeScript type definitions
  /database     — Prisma schema & client
  /ui           — Shared UI components
  /ai           — AI integration layer
  /utils        — Shared utilities
  /content-engine — Content ingestion & processing
  /search-engine  — Search indexing & querying

/supabase       — Supabase migrations & RLS policies
/docs           — Enterprise documentation
/scripts        — Data ingestion & utility scripts`}
      </pre>
    </div>
  )
}
