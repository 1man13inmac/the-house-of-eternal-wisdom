import { AdminPageShell } from '../../../_components/admin-page-shell'

export default function AdminCivilizationsPage() {
  return (
    <AdminPageShell
      title="Civilisations"
      description="Curate civilisational records, source reliability, and narrative consistency."
      quickActions={[
        { label: 'Open Taxonomy', href: '/taxonomy' },
        { label: 'Open Books', href: '/content/books' },
        { label: 'Open Settings', href: '/settings' },
      ]}
    >
      <div className="admin-grid-2 mb-6">
        <section className="admin-card">
          <h2 className="admin-card-title">Civilisation Registry</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center justify-between rounded border border-gray-100 px-3 py-2">
              <span>Egyptian</span>
              <span className="text-xs text-emerald-700">Published</span>
            </li>
            <li className="flex items-center justify-between rounded border border-gray-100 px-3 py-2">
              <span>Mesopotamian</span>
              <span className="text-xs text-emerald-700">Published</span>
            </li>
            <li className="flex items-center justify-between rounded border border-gray-100 px-3 py-2">
              <span>Neoplatonic</span>
              <span className="text-xs text-amber-700">Editorial Review</span>
            </li>
          </ul>
        </section>

        <section className="admin-card">
          <h2 className="admin-card-title">Coverage Alerts</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Timeline gaps detected for 1200-900 BCE in Near Eastern records.</li>
            <li>2 entries missing primary language metadata.</li>
            <li>5 entries missing archaeological source citations.</li>
          </ul>
        </section>
      </div>

      <div className="admin-grid-2 mb-6">
        <section className="admin-card">
          <h2 className="admin-card-title">Identity & Classification</h2>
          <form>
            <div className="admin-field">
              <label className="admin-label">Display Name</label>
              <input className="admin-input" defaultValue="Egyptian" />
            </div>
            <div className="admin-field">
              <label className="admin-label">Canonical Slug</label>
              <input className="admin-input" defaultValue="egyptian" />
            </div>
            <div className="admin-field">
              <label className="admin-label">Region</label>
              <input className="admin-input" defaultValue="Nile River Basin" />
            </div>
            <div className="admin-field">
              <label className="admin-label">Time Period</label>
              <input className="admin-input" defaultValue="c. 3100 BCE - 30 BCE" />
            </div>
            <div className="admin-field">
              <label className="admin-label">Knowledge Domains</label>
              <input className="admin-input" defaultValue="Cosmology,Ritual Architecture,Afterlife Ethics" />
            </div>
          </form>
        </section>

        <section className="admin-card">
          <h2 className="admin-card-title">Research Quality Controls</h2>
          <form>
            <div className="admin-field">
              <label className="admin-label">Evidence Confidence</label>
              <select className="admin-select" defaultValue="high">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <div className="admin-field">
              <label className="admin-label">Primary Source Count</label>
              <input className="admin-input" defaultValue="42" />
            </div>
            <div className="admin-field">
              <label className="admin-label">Scholar Reviewers</label>
              <input className="admin-input" defaultValue="2 required" />
            </div>
            <div className="space-y-2 text-sm text-gray-700">
              <label className="flex items-center gap-2">
                <input type="checkbox" defaultChecked />
                Require citation before publish
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" defaultChecked />
                Enable public timeline visualization
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" defaultChecked />
                Include in recommendation engine
              </label>
            </div>
          </form>
        </section>
      </div>

      <section className="admin-card">
        <h2 className="admin-card-title">SEO & Schema</h2>
        <div className="admin-grid-2">
          <div>
            <div className="admin-field">
              <label className="admin-label">SEO Title</label>
              <input className="admin-input" defaultValue="Egyptian Civilization Overview | The Living Library" />
            </div>
            <div className="admin-field">
              <label className="admin-label">Meta Description</label>
              <textarea className="admin-textarea" defaultValue="A research-grade overview of Egyptian civilization, texts, teachings, and influence." />
            </div>
          </div>
          <div>
            <div className="admin-field">
              <label className="admin-label">Open Graph Image</label>
              <input className="admin-input" defaultValue="https://cdn.livinglibrary.org/og/civilizations/egyptian.jpg" />
            </div>
            <div className="admin-field">
              <label className="admin-label">Schema Type</label>
              <select className="admin-select" defaultValue="defined-term-set">
                <option value="defined-term-set">DefinedTermSet</option>
                <option value="creative-work">CreativeWork</option>
                <option value="collection-page">CollectionPage</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mt-2 flex gap-2">
          <button type="button" className="admin-button-primary">Save Civilisation Record</button>
          <button type="button" className="admin-button">Validate Timeline Links</button>
        </div>
      </section>
    </AdminPageShell>
  )
}
