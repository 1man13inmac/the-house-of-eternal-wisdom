import Link from 'next/link'

type QuickAction = {
  label: string
  href: string
}

type AdminPageShellProps = {
  title: string
  description: string
  quickActions?: QuickAction[]
  children?: React.ReactNode
}

export function AdminPageShell({ title, description, quickActions = [], children }: AdminPageShellProps) {
  return (
    <div className="p-8">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-2xl font-serif mb-2">{title}</h1>
          <p className="text-gray-500 text-sm">{description}</p>
        </div>
        {quickActions.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {quickActions.map((action) => (
              <Link
                key={action.href}
                href={action.href}
                className="inline-flex items-center rounded border border-gray-300 bg-white px-3 py-1.5 text-xs text-gray-700 hover:border-gray-400 hover:text-gray-900"
              >
                {action.label}
              </Link>
            ))}
          </div>
        ) : null}
      </div>

      {children}
    </div>
  )
}
