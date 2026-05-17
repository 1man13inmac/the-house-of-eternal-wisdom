import { AdminPageShell } from '../_components/admin-page-shell'

export default function AdminMembersPage() {
  return (
    <AdminPageShell
      title="Members"
      description="Manage member lifecycle, roles, subscriptions, and access policy."
      quickActions={[
        { label: 'Open Moderation', href: '/moderation' },
        { label: 'Open Analytics', href: '/analytics' },
        { label: 'Platform Settings', href: '/settings' },
      ]}
    >
      <section className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
        <article className="admin-card">
          <h2 className="font-serif text-lg mb-3">Active Members</h2>
          <p className="text-3xl font-serif">2,341</p>
        </article>
        <article className="admin-card">
          <h2 className="font-serif text-lg mb-3">Trial Accounts</h2>
          <p className="text-3xl font-serif">183</p>
        </article>
        <article className="admin-card">
          <h2 className="font-serif text-lg mb-3">Cancelled</h2>
          <p className="text-3xl font-serif">41</p>
        </article>
      </section>

      <div className="admin-grid-2 mb-6">
        <section className="admin-card">
          <h2 className="admin-card-title">Account Controls</h2>
          <form>
            <div className="admin-field">
              <label className="admin-label">Search Member</label>
              <input className="admin-input" placeholder="name, email, member id" />
            </div>
            <div className="admin-field">
              <label className="admin-label">Default Member Role</label>
              <select className="admin-select" defaultValue="reader">
                <option value="reader">Reader</option>
                <option value="scholar">Scholar</option>
                <option value="moderator">Moderator</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div className="admin-field">
              <label className="admin-label">Session Timeout (minutes)</label>
              <input className="admin-input" type="number" defaultValue="120" />
            </div>
          </form>
        </section>

        <section className="admin-card">
          <h2 className="admin-card-title">Subscription Policy</h2>
          <form>
            <div className="admin-field">
              <label className="admin-label">Trial Length (days)</label>
              <input className="admin-input" type="number" defaultValue="14" />
            </div>
            <div className="admin-field">
              <label className="admin-label">Grace Period (days)</label>
              <input className="admin-input" type="number" defaultValue="7" />
            </div>
            <div className="space-y-2 text-sm text-gray-700">
              <label className="flex items-center gap-2"><input type="checkbox" defaultChecked /> Require email verification before premium access</label>
              <label className="flex items-center gap-2"><input type="checkbox" defaultChecked /> Enforce 2FA for staff accounts</label>
              <label className="flex items-center gap-2"><input type="checkbox" defaultChecked /> Enable account risk scoring</label>
            </div>
          </form>
        </section>
      </div>

      <section className="admin-card">
        <h2 className="admin-card-title">Permissions Matrix</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-left text-gray-500">
                <th className="py-2 pr-3">Capability</th>
                <th className="py-2 pr-3">Reader</th>
                <th className="py-2 pr-3">Scholar</th>
                <th className="py-2 pr-3">Moderator</th>
                <th className="py-2 pr-3">Admin</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100"><td className="py-2 pr-3">View premium library</td><td>Yes</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 pr-3">Create journal posts</td><td>No</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 pr-3">Moderate community</td><td>No</td><td>No</td><td>Yes</td><td>Yes</td></tr>
              <tr><td className="py-2 pr-3">Publish content</td><td>No</td><td>No</td><td>No</td><td>Yes</td></tr>
            </tbody>
          </table>
        </div>
        <div className="mt-3 flex gap-2">
          <button type="button" className="admin-button-primary">Save Member Policies</button>
          <button type="button" className="admin-button">Export Access Audit</button>
        </div>
      </section>
    </AdminPageShell>
  )
}
