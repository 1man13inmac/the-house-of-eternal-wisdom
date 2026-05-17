import { AdminPageShell } from '../_components/admin-page-shell'

export default function AdminModerationPage() {
  return (
    <AdminPageShell
      title="Moderation"
      description="Run trust and safety workflows, escalation paths, and moderation policy rules."
      quickActions={[
        { label: 'Open Members', href: '/members' },
        { label: 'Open Dashboard', href: '/dashboard' },
        { label: 'Open Settings', href: '/settings' },
      ]}
    >
      <div className="admin-grid-2 mb-6">
        <section className="admin-card">
          <h2 className="admin-card-title">Review Queue</h2>
          <ul className="space-y-3 text-sm">
            <li className="rounded border border-gray-100 p-3">
              <p className="font-medium text-gray-900">Report #MR-5821</p>
              <p className="text-gray-500">Community comment flagged for abuse language pattern.</p>
            </li>
            <li className="rounded border border-gray-100 p-3">
              <p className="font-medium text-gray-900">Report #MR-5822</p>
              <p className="text-gray-500">Citation quality dispute on civilization article draft.</p>
            </li>
            <li className="rounded border border-gray-100 p-3">
              <p className="font-medium text-gray-900">Report #MR-5823</p>
              <p className="text-gray-500">Member appeal on temporary posting restriction.</p>
            </li>
          </ul>
        </section>

        <section className="admin-card">
          <h2 className="admin-card-title">Auto-Moderation Rules</h2>
          <form className="space-y-2 text-sm text-gray-700">
            <label className="flex items-center gap-2"><input type="checkbox" defaultChecked /> Toxicity threshold screening</label>
            <label className="flex items-center gap-2"><input type="checkbox" defaultChecked /> External link spam detection</label>
            <label className="flex items-center gap-2"><input type="checkbox" defaultChecked /> Repeated-account behavior scoring</label>
            <label className="flex items-center gap-2"><input type="checkbox" defaultChecked /> Scholar citation integrity checks</label>
          </form>
        </section>
      </div>

      <section className="admin-card">
        <h2 className="admin-card-title">Escalation Policy</h2>
        <div className="admin-grid-2">
          <div>
            <div className="admin-field">
              <label className="admin-label">First Response SLA (hours)</label>
              <input className="admin-input" type="number" defaultValue="12" />
            </div>
            <div className="admin-field">
              <label className="admin-label">Critical Escalation Contact</label>
              <input className="admin-input" defaultValue="trust-safety@livinglibrary.org" />
            </div>
          </div>
          <div>
            <div className="admin-field">
              <label className="admin-label">Appeal Window (days)</label>
              <input className="admin-input" type="number" defaultValue="14" />
            </div>
            <div className="admin-field">
              <label className="admin-label">Retention for Case Logs (days)</label>
              <input className="admin-input" type="number" defaultValue="365" />
            </div>
          </div>
        </div>
        <div className="mt-2 flex gap-2">
          <button type="button" className="admin-button-primary">Save Moderation Policy</button>
          <button type="button" className="admin-button">Export Incident Ledger</button>
        </div>
      </section>
    </AdminPageShell>
  )
}
