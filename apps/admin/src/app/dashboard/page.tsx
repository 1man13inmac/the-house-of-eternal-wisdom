import { AdminPageShell } from '../_components/admin-page-shell'

const STATS = [
  { label: 'Total Books', value: '128', trend: '+12 this month', color: 'bg-blue-50 border-blue-200' },
  { label: 'Active Members', value: '2,341', trend: '+8.4% MoM', color: 'bg-green-50 border-green-200' },
  { label: 'Pending Review', value: '19', trend: 'Needs triage today', color: 'bg-amber-50 border-amber-200' },
  { label: 'Published Paths', value: '34', trend: '+3 this week', color: 'bg-purple-50 border-purple-200' },
]

export default function DashboardPage() {
  return (
    <AdminPageShell
      title="Admin Dashboard"
      description="Operational command center for content, growth, and trust signals"
      quickActions={[
        { label: 'Open Books', href: '/content/books' },
        { label: 'Open Members', href: '/members' },
        { label: 'Open Moderation', href: '/moderation' },
        { label: 'Platform Settings', href: '/settings' },
      ]}
    >
      <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className={`admin-kpi ${stat.color}`}>
            <p className="text-sm font-sans text-gray-600 mb-1">{stat.label}</p>
            <p className="text-3xl font-serif mb-1">{stat.value}</p>
            <p className="text-xs text-gray-500">{stat.trend}</p>
          </div>
        ))}
      </div>

      <div className="admin-grid-2 mb-6">
        <section className="admin-card">
          <h2 className="admin-card-title">Readiness Checklist</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Content publish workflow: Ready</li>
            <li>Member access controls: Ready</li>
            <li>Search index freshness: Warning (17 min lag)</li>
            <li>Backup cadence: Ready</li>
            <li>Security scan baseline: Ready</li>
          </ul>
        </section>

        <section className="admin-card">
          <h2 className="admin-card-title">Release Controls</h2>
          <form className="space-y-3">
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input type="checkbox" defaultChecked />
              Enable staged publishing for critical pages
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input type="checkbox" defaultChecked />
              Enforce metadata quality gate on publish
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input type="checkbox" />
              Pause public sync jobs during migration window
            </label>
            <div className="pt-1">
              <button type="button" className="admin-button-primary">
                Save Release Controls
              </button>
            </div>
          </form>
        </section>
      </div>

      <section className="admin-card">
        <h2 className="admin-card-title">Priority Queues</h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <article className="rounded border border-gray-100 p-4">
            <h3 className="mb-1 text-sm font-semibold text-gray-900">Content QA</h3>
            <p className="text-xs text-gray-500">8 drafts require canonical citation verification.</p>
          </article>
          <article className="rounded border border-gray-100 p-4">
            <h3 className="mb-1 text-sm font-semibold text-gray-900">Member Support</h3>
            <p className="text-xs text-gray-500">3 unresolved tickets with billing escalation tags.</p>
          </article>
          <article className="rounded border border-gray-100 p-4">
            <h3 className="mb-1 text-sm font-semibold text-gray-900">Data Integrity</h3>
            <p className="text-xs text-gray-500">2 entities missing slug normalization in taxonomy sync.</p>
          </article>
        </div>
      </section>
    </AdminPageShell>
  )
}
