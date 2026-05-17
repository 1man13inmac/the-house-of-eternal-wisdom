import { AdminPageShell } from '../_components/admin-page-shell'

const TAXONOMY_GROUPS = [
  { group: 'Traditions', count: 0 },
  { group: 'Civilisations', count: 0 },
  { group: 'Themes', count: 0 },
  { group: 'Difficulty Levels', count: 6 },
]

export default function AdminTaxonomyPage() {
  return (
    <AdminPageShell
      title="Taxonomy"
      description="Maintain canonical vocabularies, aliases, and graph link integrity."
      quickActions={[
        { label: 'Open Civilisations', href: '/content/civilizations' },
        { label: 'Open Books', href: '/content/books' },
        { label: 'Open Settings', href: '/settings' },
      ]}
    >
      <section className="admin-card mb-6">
        <h2 className="admin-card-title">Taxonomy Groups</h2>
        <ul className="space-y-3">
          {TAXONOMY_GROUPS.map((item) => (
            <li key={item.group} className="flex items-center justify-between border border-gray-100 rounded px-4 py-3">
              <span className="text-sm">{item.group}</span>
              <span className="text-xs text-gray-500">{item.count} terms</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="admin-grid-2 mb-6">
        <section className="admin-card">
          <h2 className="admin-card-title">Term Governance</h2>
          <form>
            <div className="admin-field">
              <label className="admin-label">Namespace</label>
              <input className="admin-input" defaultValue="civilizations" />
            </div>
            <div className="admin-field">
              <label className="admin-label">Canonical Term</label>
              <input className="admin-input" defaultValue="Neoplatonic" />
            </div>
            <div className="admin-field">
              <label className="admin-label">Aliases</label>
              <input className="admin-input" defaultValue="Neoplatonism,Plotinian" />
            </div>
            <div className="admin-field">
              <label className="admin-label">Description</label>
              <textarea className="admin-textarea" defaultValue="Late antique philosophical and spiritual current influenced by Plotinus and successors." />
            </div>
          </form>
        </section>

        <section className="admin-card">
          <h2 className="admin-card-title">Graph Integrity</h2>
          <ul className="space-y-2 text-sm text-gray-700 mb-4">
            <li>Unlinked terms: 14</li>
            <li>Orphaned entities: 3</li>
            <li>Duplicate aliases: 5</li>
            <li>Invalid references: 0</li>
          </ul>
          <div className="space-y-2 text-sm text-gray-700">
            <label className="flex items-center gap-2"><input type="checkbox" defaultChecked /> Auto-normalize aliases on import</label>
            <label className="flex items-center gap-2"><input type="checkbox" defaultChecked /> Prevent duplicate canonical term creation</label>
            <label className="flex items-center gap-2"><input type="checkbox" defaultChecked /> Require review for destructive merge operations</label>
          </div>
        </section>
      </div>

      <section className="admin-card">
        <h2 className="admin-card-title">Bulk Operations</h2>
        <div className="admin-grid-2">
          <form>
            <div className="admin-field">
              <label className="admin-label">Import Source</label>
              <select className="admin-select" defaultValue="csv">
                <option value="csv">CSV Upload</option>
                <option value="json">JSON Payload</option>
                <option value="api">External API</option>
              </select>
            </div>
            <div className="admin-field">
              <label className="admin-label">Conflict Strategy</label>
              <select className="admin-select" defaultValue="merge">
                <option value="merge">Merge Existing</option>
                <option value="replace">Replace Existing</option>
                <option value="skip">Skip Existing</option>
              </select>
            </div>
          </form>

          <div className="flex items-end gap-2">
            <button type="button" className="admin-button-primary">Save Taxonomy Settings</button>
            <button type="button" className="admin-button">Run Integrity Scan</button>
            <button type="button" className="admin-button">Export Namespace</button>
          </div>
        </div>
      </section>
    </AdminPageShell>
  )
}
