export default function AdminPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-serif mb-2">Admin Dashboard</h1>
      <p className="text-gray-500 text-sm mb-8">The Living Library — Administration</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Total Books', value: '0', trend: '— awaiting content', color: 'bg-blue-50 border-blue-200' },
          { label: 'Members', value: '0', trend: '— platform launching', color: 'bg-green-50 border-green-200' },
          { label: 'Pending Review', value: '0', trend: '— no queue', color: 'bg-amber-50 border-amber-200' },
          { label: 'Active Paths', value: '0', trend: '— building library', color: 'bg-purple-50 border-purple-200' },
        ].map((stat) => (
          <div key={stat.label} className={`border p-6 rounded ${stat.color}`}>
            <p className="text-sm font-sans text-gray-600 mb-1">{stat.label}</p>
            <p className="text-3xl font-serif mb-1">{stat.value}</p>
            <p className="text-xs text-gray-500">{stat.trend}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="border border-gray-200 bg-white p-6 rounded">
          <h2 className="font-serif text-lg mb-4">Recent Activity</h2>
          <p className="text-gray-500 text-sm">No recent activity. Platform is in setup phase.</p>
        </div>
        <div className="border border-gray-200 bg-white p-6 rounded">
          <h2 className="font-serif text-lg mb-4">Content Queue</h2>
          <p className="text-gray-500 text-sm">No content pending approval.</p>
        </div>
      </div>
    </div>
  )
}
