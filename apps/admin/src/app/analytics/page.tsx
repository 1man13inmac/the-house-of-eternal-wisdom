import { AdminPageShell } from '../_components/admin-page-shell'

export default function AdminAnalyticsPage() {
  return (
    <AdminPageShell
      title="Analytics"
      description="Monitor growth, engagement, funnel health, and event pipeline reliability."
      quickActions={[
        { label: 'Open Dashboard', href: '/dashboard' },
        { label: 'Open Taxonomy', href: '/taxonomy' },
        { label: 'Open Settings', href: '/settings' },
      ]}
    >
      <section className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2 lg:grid-cols-4">
        <article className="admin-card">
          <p className="text-xs text-gray-500 mb-2">Sessions (7d)</p>
          <p className="text-2xl font-serif">18,942</p>
        </article>
        <article className="admin-card">
          <p className="text-xs text-gray-500 mb-2">Avg. Session</p>
          <p className="text-2xl font-serif">7m 41s</p>
        </article>
        <article className="admin-card">
          <p className="text-xs text-gray-500 mb-2">Search Queries</p>
          <p className="text-2xl font-serif">52,304</p>
        </article>
        <article className="admin-card">
          <p className="text-xs text-gray-500 mb-2">Conversions</p>
          <p className="text-2xl font-serif">4.8%</p>
        </article>
      </section>

      <div className="admin-grid-2 mb-6">
        <section className="admin-card">
          <h2 className="admin-card-title">Funnel Snapshot</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Landing views: 31,442</li>
            <li>Library detail visits: 19,308</li>
            <li>Member registration starts: 1,201</li>
            <li>Completed subscriptions: 451</li>
          </ul>
        </section>

        <section className="admin-card">
          <h2 className="admin-card-title">Event Pipeline Health</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Ingestion lag: 22s</li>
            <li>Dropped events: 0.03%</li>
            <li>Schema mismatches: 2 (non-blocking)</li>
            <li>Last backfill: 2026-05-16 23:14 UTC</li>
          </ul>
        </section>
      </div>

      <section className="admin-card">
        <h2 className="admin-card-title">Reporting Controls</h2>
        <div className="admin-grid-2">
          <form>
            <div className="admin-field">
              <label className="admin-label">Default Reporting Window</label>
              <select className="admin-select" defaultValue="30d">
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
              </select>
            </div>
            <div className="admin-field">
              <label className="admin-label">Attribution Model</label>
              <select className="admin-select" defaultValue="data-driven">
                <option value="first-touch">First touch</option>
                <option value="last-touch">Last touch</option>
                <option value="data-driven">Data driven</option>
              </select>
            </div>
          </form>

          <form className="space-y-2 text-sm text-gray-700">
            <label className="flex items-center gap-2"><input type="checkbox" defaultChecked /> Include bot-filtered metrics</label>
            <label className="flex items-center gap-2"><input type="checkbox" defaultChecked /> Include anonymous cohort metrics</label>
            <label className="flex items-center gap-2"><input type="checkbox" defaultChecked /> Trigger weekly KPI digest email</label>
          </form>
        </div>

        <div className="mt-2 flex gap-2">
          <button type="button" className="admin-button-primary">Save Analytics Settings</button>
          <button type="button" className="admin-button">Run Fresh Aggregation</button>
        </div>
      </section>
    </AdminPageShell>
  )
}
