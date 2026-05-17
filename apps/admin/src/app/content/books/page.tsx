import { AdminPageShell } from '../../../_components/admin-page-shell'

const BOOK_COLUMNS = ['Title', 'Author', 'Civilization', 'Difficulty', 'Status']

export default function AdminBooksPage() {
  return (
    <AdminPageShell
      title="Books & Texts"
      description="Manage canonical text records, quality controls, and publishing workflow."
      quickActions={[
        { label: 'New Draft', href: '/content/books' },
        { label: 'Learning Paths', href: '/content/learning-paths' },
        { label: 'Taxonomy', href: '/taxonomy' },
      ]}
    >
      <section className="admin-card mb-6">
        <h2 className="admin-card-title">Catalog Table</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-left text-gray-500">
                {BOOK_COLUMNS.map((column) => (
                  <th key={column} className="py-2 pr-4 font-medium">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4">Meditations</td>
                <td className="py-3 pr-4">Marcus Aurelius</td>
                <td className="py-3 pr-4">Roman</td>
                <td className="py-3 pr-4">SEED</td>
                <td className="py-3 pr-4 text-emerald-700">Published</td>
              </tr>
              <tr>
                <td className="py-3 pr-4">Enneads</td>
                <td className="py-3 pr-4">Plotinus</td>
                <td className="py-3 pr-4">Neoplatonic</td>
                <td className="py-3 pr-4">ESOTERIC</td>
                <td className="py-3 pr-4 text-amber-700">In Review</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="admin-grid-2 mb-6">
        <section className="admin-card">
          <h2 className="admin-card-title">Editorial Metadata</h2>
          <form>
            <div className="admin-field">
              <label className="admin-label">Internal Record ID</label>
              <input className="admin-input" defaultValue="book-000129" />
            </div>
            <div className="admin-field">
              <label className="admin-label">Canonical Slug</label>
              <input className="admin-input" defaultValue="meditations" />
            </div>
            <div className="admin-field">
              <label className="admin-label">Title</label>
              <input className="admin-input" defaultValue="Meditations" />
            </div>
            <div className="admin-field">
              <label className="admin-label">Author Attribution</label>
              <input className="admin-input" defaultValue="Marcus Aurelius" />
            </div>
            <div className="admin-field">
              <label className="admin-label">Short Description</label>
              <textarea className="admin-textarea" defaultValue="A practical Stoic handbook for self-governance, clarity, and ethical discipline." />
            </div>
          </form>
        </section>

        <section className="admin-card">
          <h2 className="admin-card-title">Publishing & Compliance</h2>
          <form>
            <div className="admin-field">
              <label className="admin-label">Publication State</label>
              <select className="admin-select" defaultValue="published">
                <option value="draft">Draft</option>
                <option value="review">In Review</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
              </select>
            </div>
            <div className="admin-field">
              <label className="admin-label">Primary Citation</label>
              <input className="admin-input" defaultValue="Penguin Classics, 2006" />
            </div>
            <div className="admin-field">
              <label className="admin-label">Rights & License</label>
              <select className="admin-select" defaultValue="public-domain">
                <option value="public-domain">Public Domain</option>
                <option value="licensed">Licensed</option>
                <option value="restricted">Restricted</option>
              </select>
            </div>
            <div className="space-y-2 text-sm text-gray-700">
              <label className="flex items-center gap-2">
                <input type="checkbox" defaultChecked />
                Include in global search index
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" defaultChecked />
                Include in public API response
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" defaultChecked />
                Require editor sign-off before publish
              </label>
            </div>
          </form>
        </section>
      </div>

      <section className="admin-card">
        <h2 className="admin-card-title">SEO & Discovery Settings</h2>
        <div className="admin-grid-2">
          <form>
            <div className="admin-field">
              <label className="admin-label">SEO Title</label>
              <input className="admin-input" defaultValue="Meditations by Marcus Aurelius | The Living Library" />
            </div>
            <div className="admin-field">
              <label className="admin-label">Meta Description</label>
              <textarea className="admin-textarea" defaultValue="Overview, context, and recommended reading for Meditations by Marcus Aurelius." />
            </div>
            <div className="admin-field">
              <label className="admin-label">Canonical URL</label>
              <input className="admin-input" defaultValue="https://livinglibrary.org/library/meditations" />
            </div>
          </form>

          <form>
            <div className="admin-field">
              <label className="admin-label">Open Graph Image</label>
              <input className="admin-input" defaultValue="https://cdn.livinglibrary.org/og/library/meditations.jpg" />
            </div>
            <div className="admin-field">
              <label className="admin-label">Keywords</label>
              <input className="admin-input" defaultValue="stoicism,marcus aurelius,roman philosophy,ethical discipline" />
            </div>
            <div className="admin-field">
              <label className="admin-label">Structured Data Type</label>
              <select className="admin-select" defaultValue="book">
                <option value="book">Book</option>
                <option value="creative-work">CreativeWork</option>
                <option value="scholarly-article">ScholarlyArticle</option>
              </select>
            </div>
          </form>
        </div>

        <div className="mt-2 flex flex-wrap gap-2">
          <button type="button" className="admin-button-primary">Save Book Record</button>
          <button type="button" className="admin-button">Save as Draft</button>
          <button type="button" className="admin-button">Run Metadata Validation</button>
        </div>
      </section>
    </AdminPageShell>
  )
}
