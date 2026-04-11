interface CommandTableProps {
  commands: { command: string; description: string; isNew?: boolean }[];
}

export default function CommandTable({ commands }: CommandTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg" style={{ border: '1px solid var(--border-primary)' }}>
      <table className="w-full text-left">
        <thead>
          <tr style={{ backgroundColor: 'var(--bg-tertiary)' }}>
            <th
              className="px-4 py-3 text-xs uppercase tracking-wider"
              style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
            >
              Command
            </th>
            <th
              className="px-4 py-3 text-xs uppercase tracking-wider"
              style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
            >
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {commands.map((cmd) => (
            <tr
              key={cmd.command}
              className="command-table-row transition-colors"
              style={{ borderTop: '1px solid var(--border-primary)' }}
            >
              <td className="px-4 py-3 whitespace-nowrap">
                <code
                  className="text-sm"
                  style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)' }}
                >
                  {cmd.command}
                </code>
                {cmd.isNew && <span className="badge-new">NEW</span>}
              </td>
              <td className="px-4 py-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                {cmd.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
