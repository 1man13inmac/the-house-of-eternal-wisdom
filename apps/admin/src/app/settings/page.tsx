import { AdminPageShell } from '../_components/admin-page-shell'

export default function AdminSettingsPage() {
  return (
    <AdminPageShell
      title="Platform Settings"
      description="Configure global SEO, security posture, integrations, and PWA behavior."
      quickActions={[
        { label: 'Open Dashboard', href: '/dashboard' },
        { label: 'Open Analytics', href: '/analytics' },
      ]}
    >
      <div className="admin-grid-2 mb-6">
        <section className="admin-card">
          <h2 className="admin-card-title">Global SEO</h2>
          <form>
            <div className="admin-field">
              <label className="admin-label">Site Name</label>
              <input className="admin-input" defaultValue="The Living Library" />
            </div>
            <div className="admin-field">
              <label className="admin-label">Default Meta Title Template</label>
              <input className="admin-input" defaultValue="%s | The Living Library" />
            </div>
            <div className="admin-field">
              <label className="admin-label">Default Meta Description</label>
              <textarea className="admin-textarea" defaultValue="A civilisational wisdom archive preserving humanity's philosophical and scholarly inheritance." />
            </div>
            <div className="admin-field">
              <label className="admin-label">Canonical Base URL</label>
              <input className="admin-input" defaultValue="https://livinglibrary.org" />
            </div>
          </form>
        </section>

        <section className="admin-card">
          <h2 className="admin-card-title">PWA & Delivery</h2>
          <form>
            <div className="admin-field">
              <label className="admin-label">App Name</label>
              <input className="admin-input" defaultValue="The Living Library" />
            </div>
            <div className="admin-field">
              <label className="admin-label">Theme Color</label>
              <input className="admin-input" defaultValue="#111827" />
            </div>
            <div className="admin-field">
              <label className="admin-label">Offline Strategy</label>
              <select className="admin-select" defaultValue="stale-while-revalidate">
                <option value="cache-first">Cache first</option>
                <option value="network-first">Network first</option>
                <option value="stale-while-revalidate">Stale while revalidate</option>
              </select>
            </div>
            <div className="space-y-2 text-sm text-gray-700">
              <label className="flex items-center gap-2"><input type="checkbox" defaultChecked /> Enable install prompt</label>
              <label className="flex items-center gap-2"><input type="checkbox" defaultChecked /> Enable background sync</label>
              <label className="flex items-center gap-2"><input type="checkbox" defaultChecked /> Cache article pages for offline read</label>
            </div>
          </form>
        </section>
      </div>

      <div className="admin-grid-2 mb-6">
        <section className="admin-card">
          <h2 className="admin-card-title">Security & Access</h2>
          <form>
            <div className="admin-field">
              <label className="admin-label">Session Max Age (minutes)</label>
              <input className="admin-input" type="number" defaultValue="120" />
            </div>
            <div className="admin-field">
              <label className="admin-label">Password Policy</label>
              <select className="admin-select" defaultValue="strong">
                <option value="standard">Standard</option>
                <option value="strong">Strong</option>
                <option value="very-strong">Very Strong</option>
              </select>
            </div>
            <div className="space-y-2 text-sm text-gray-700">
              <label className="flex items-center gap-2"><input type="checkbox" defaultChecked /> Enforce 2FA for privileged roles</label>
              <label className="flex items-center gap-2"><input type="checkbox" defaultChecked /> Enable suspicious login alerts</label>
              <label className="flex items-center gap-2"><input type="checkbox" defaultChecked /> Require step-up auth for billing changes</label>
            </div>
          </form>
        </section>

        <section className="admin-card">
          <h2 className="admin-card-title">Integrations</h2>
          <form>
            <div className="admin-field">
              <label className="admin-label">Supabase Project Ref</label>
              <input className="admin-input" defaultValue="living-library-prod" />
            </div>
            <div className="admin-field">
              <label className="admin-label">Stripe Webhook Version</label>
              <input className="admin-input" defaultValue="2026-02-01" />
            </div>
            <div className="admin-field">
              <label className="admin-label">OpenAI Model Alias</label>
              <input className="admin-input" defaultValue="study-assistant-v3" />
            </div>
            <div className="admin-field">
              <label className="admin-label">Search Index Environment</label>
              <select className="admin-select" defaultValue="production">
                <option value="staging">Staging</option>
                <option value="production">Production</option>
              </select>
            </div>
          </form>
        </section>
      </div>

      <section className="admin-card">
        <h2 className="admin-card-title">Change Management</h2>
        <div className="admin-grid-2">
          <div>
            <div className="admin-field">
              <label className="admin-label">Release Channel</label>
              <select className="admin-select" defaultValue="stable">
                <option value="canary">Canary</option>
                <option value="stable">Stable</option>
              </select>
            </div>
            <div className="admin-field">
              <label className="admin-label">Require Approval For</label>
              <input className="admin-input" defaultValue="SEO, billing policy, role matrix, public content model" />
            </div>
          </div>
          <div className="flex items-end gap-2">
            <button type="button" className="admin-button-primary">Save Platform Settings</button>
            <button type="button" className="admin-button">Create Config Snapshot</button>
            <button type="button" className="admin-button">Run Readiness Audit</button>
          </div>
        </div>
      </section>
    </AdminPageShell>
  )
}
