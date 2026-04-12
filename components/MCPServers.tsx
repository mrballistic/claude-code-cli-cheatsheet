import { MCP } from '@/lib/constants';
import SectionHeading from './SectionHeading';
import CodeBlock from './CodeBlock';
import CommandTable from './CommandTable';
import ScrollReveal from './ScrollReveal';
import { ExternalLink } from 'lucide-react';

/** Layer 6 section: adding servers, scopes table, common servers, managing commands, and FastMCP example. */
export default function MCPServers() {
  return (
    <section className="px-6 py-16 max-w-4xl mx-auto">
      <ScrollReveal>
        <SectionHeading
          id="mcp-servers"
          title="Layer 6: MCP Servers"
          subtitle={MCP.description}
        />

        <div className="space-y-8">
          <div>
            <h3
              className="text-[1.125rem] font-medium mb-4"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)' }}
            >
              Adding a Server
            </h3>
            <div className="space-y-4">
              {MCP.addServerExamples.map((example) => (
                <div key={example.title}>
                  <p
                    className="text-xs uppercase tracking-wider mb-2"
                    style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
                  >
                    {example.title}
                  </p>
                  <CodeBlock code={example.code} language="bash" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3
              className="text-[1.125rem] font-medium mb-4"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)' }}
            >
              Scopes
            </h3>
            <div className="overflow-x-auto rounded-lg" style={{ border: '1px solid var(--border-primary)' }}>
              <table className="w-full text-left">
                <thead>
                  <tr style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                    <th className="px-4 py-3 text-xs uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>Scope</th>
                    <th className="px-4 py-3 text-xs uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>Location</th>
                    <th className="px-4 py-3 text-xs uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {MCP.scopes.map((scope) => (
                    <tr key={scope.scope} style={{ borderTop: '1px solid var(--border-primary)' }}>
                      <td className="px-4 py-3 text-sm font-medium" style={{ color: 'var(--accent-primary)' }}>
                        {scope.scope}
                      </td>
                      <td className="px-4 py-3">
                        <code className="text-sm" style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>
                          {scope.location}
                        </code>
                      </td>
                      <td className="px-4 py-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                        {scope.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3
              className="text-[1.125rem] font-medium mb-4"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)' }}
            >
              Common Servers
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MCP.commonServers.map((server) => (
                <div key={server.name} className="card">
                  <h4
                    className="text-sm font-medium mb-1"
                    style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)' }}
                  >
                    {server.name}
                  </h4>
                  <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>
                    {server.description}
                  </p>
                  <CodeBlock code={server.installCommand} />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3
              className="text-[1.125rem] font-medium mb-4"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)' }}
            >
              Managing Servers
            </h3>
            <CommandTable commands={MCP.managingCommands} />
          </div>

          <div>
            <h3
              className="text-[1.125rem] font-medium mb-4"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)' }}
            >
              Build Your Own — FastMCP
            </h3>
            <CodeBlock code={MCP.fastmcpExample} language="python" />
            <a
              href={MCP.protocolLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm transition-colors"
              style={{ color: 'var(--accent-primary)' }}
            >
              <ExternalLink size={14} />
              modelcontextprotocol.io
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
