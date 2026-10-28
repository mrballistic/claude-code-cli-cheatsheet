/**
 * /llms.txt: the cheat sheet as plain markdown, built from the same constants
 * as the page, so agents can read it without parsing HTML.
 */
import type { APIRoute } from 'astro';
import {
  AUTO_MODE,
  CLAUDE_MD,
  GETTING_STARTED,
  HOOKS,
  IMPECCABLE,
  KEYBOARD_SHORTCUTS,
  MCP,
  PERMISSION_MODES,
  RESOURCES,
  SITE,
  SKILLS,
  SLASH_COMMANDS,
  SUBAGENTS,
  SUPERPOWERS,
  type Command,
} from '@/lib/constants';

const list = (rows: Command[]) => rows.map((c) => `- \`${c.command}\`: ${c.description}`).join('\n');

export const GET: APIRoute = ({ site }) => {
  const url = new URL(`${import.meta.env.BASE_URL.replace(/\/$/, '')}/`, site).toString();
  const body = `# ${SITE.title}

> ${SITE.description}

Source: ${url} · Author: ${SITE.author} (${SITE.authorUrl}) · Updated ${SITE.dateModified}

## Install and launch
${list(GETTING_STARTED.installs)}
${list(GETTING_STARTED.launchCommands)}

## Slash commands
${list(SLASH_COMMANDS)}

## Keyboard shortcuts
${KEYBOARD_SHORTCUTS.map((k) => `- ${k.keys}: ${k.description}`).join('\n')}

## Permission modes
${PERMISSION_MODES.map((m) => `- ${m.label} (\`${m.flag}\`): ${m.behavior}. Use when: ${m.useWhen}.`).join('\n')}
${list(AUTO_MODE.commands)}

## CLAUDE.md
${CLAUDE_MD.description}
${CLAUDE_MD.locations.map((p) => `- \`${p.path}\`: ${p.description}`).join('\n')}

## Skills
${SKILLS.description}
${SKILLS.locations.map((p) => `- \`${p.path}\`: ${p.description}`).join('\n')}

## Plugins
- ${SUPERPOWERS.title} (${SUPERPOWERS.url}): ${SUPERPOWERS.summary} Install: \`${SUPERPOWERS.installCommands.join('`, then `')}\`
- ${IMPECCABLE.title} (${IMPECCABLE.url}): ${IMPECCABLE.summary} Install: \`${IMPECCABLE.installCommands.join('`, then `')}\`

## MCP servers
${list(MCP.addServerExamples)}
${MCP.scopes.map((s) => `- ${s.scope} scope (${s.flag}): stored in \`${s.location}\`; ${s.description}`).join('\n')}
${MCP.commonServers.map((s) => `- ${s.name}: \`${s.installCommand}\``).join('\n')}

## Hooks
${HOOKS.description}
${HOOKS.events.map((e) => `- ${e.name}: ${e.description}`).join('\n')}

## Subagents
${SUBAGENTS.description}
${SUBAGENTS.builtInTypes.map((t) => `- ${t.name}: ${t.description}`).join('\n')}

## Links
${RESOURCES.map((r) => `- [${r.title}](${r.url}): ${r.description}`).join('\n')}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
