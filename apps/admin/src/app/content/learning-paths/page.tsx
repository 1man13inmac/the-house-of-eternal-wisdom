import { AdminPageShell } from '../../../_components/admin-page-shell'

export default function AdminLearningPathsPage() {
  return (
    <AdminPageShell
      title="Learning Paths"
      description="Design curriculum journeys, competency gates, and completion outcomes."
      quickActions={[
        { label: 'Open Members', href: '/members' },
        { label: 'Open Books', href: '/content/books' },
        { label: 'Open Analytics', href: '/analytics' },
      ]}
    >
      <div className="admin-grid-2 mb-6">
        <section className="admin-card">
          <h2 className="admin-card-title">Path Builder</h2>
          <form>
            <div className="admin-field">
              <label className="admin-label">Path Name</label>
              <input className="admin-input" defaultValue="Foundations of Stoic Practice" />
            </div>
            <div className="admin-field">
              <label className="admin-label">Path Slug</label>
              <input className="admin-input" defaultValue="foundations-of-stoic-practice" />
            </div>
            <div className="admin-field">
              <label className="admin-label">Difficulty Tier</label>
              <select className="admin-select" defaultValue="foundation">
                <option value="seed">SEED</option>
                <option value="foundation">FOUNDATION</option>
                <option value="structural">STRUCTURAL</option>
                <option value="esoteric">ESOTERIC</option>
              </select>
            </div>
            <div className="admin-field">
              <label className="admin-label">Estimated Hours</label>
              <input className="admin-input" type="number" defaultValue="18" />
            </div>
          </form>
        </section>

        <section className="admin-card">
          <h2 className="admin-card-title">Progression Rules</h2>
          <form>
            <div className="admin-field">
              <label className="admin-label">Completion Requirement</label>
              <select className="admin-select" defaultValue="all-steps">
                <option value="all-steps">All steps completed</option>
                <option value="minimum-score">Minimum score</option>
                <option value="time-based">Minimum time-on-content</option>
              </select>
            </div>
            <div className="admin-field">
              <label className="admin-label">Assessment Threshold</label>
              <input className="admin-input" defaultValue="80" type="number" />
            </div>
            <div className="space-y-2 text-sm text-gray-700">
              <label className="flex items-center gap-2">
                <input type="checkbox" defaultChecked />
                Lock next step until reflection submitted
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" defaultChecked />
                Trigger mentor recommendation on completion
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" defaultChecked />
                Emit analytics milestone events
              </label>
            </div>
          </form>
        </section>
      </div>

      <section className="admin-card mb-6">
        <h2 className="admin-card-title">Step Sequencing</h2>
        <ol className="space-y-2 text-sm text-gray-700">
          <li className="rounded border border-gray-100 px-3 py-2">1. Read historical context and terms</li>
          <li className="rounded border border-gray-100 px-3 py-2">2. Primary text close reading session</li>
          <li className="rounded border border-gray-100 px-3 py-2">3. Comparative analysis prompt</li>
          <li className="rounded border border-gray-100 px-3 py-2">4. Reflection journal checkpoint</li>
          <li className="rounded border border-gray-100 px-3 py-2">5. Knowledge synthesis and review</li>
        </ol>
      </section>

      <section className="admin-card">
        <h2 className="admin-card-title">SEO & Distribution</h2>
        <div className="admin-grid-2">
          <div>
            <div className="admin-field">
              <label className="admin-label">SEO Title</label>
              <input className="admin-input" defaultValue="Foundations of Stoic Practice Learning Path" />
            </div>
            <div className="admin-field">
              <label className="admin-label">Meta Description</label>
              <textarea className="admin-textarea" defaultValue="A guided Stoic learning path with readings, prompts, and milestone assessments." />
            </div>
          </div>
          <div>
            <div className="admin-field">
              <label className="admin-label">Audience Segment</label>
              <select className="admin-select" defaultValue="public">
                <option value="public">Public</option>
                <option value="member">Members Only</option>
                <option value="cohort">Cohort Only</option>
              </select>
            </div>
            <div className="admin-field">
              <label className="admin-label">Feature Flag</label>
              <input className="admin-input" defaultValue="lp_stoic_foundations_v2" />
            </div>
          </div>
        </div>
        <div className="mt-2 flex gap-2">
          <button type="button" className="admin-button-primary">Save Learning Path</button>
          <button type="button" className="admin-button">Publish to Members</button>
        </div>
      </section>
    </AdminPageShell>
  )
}
