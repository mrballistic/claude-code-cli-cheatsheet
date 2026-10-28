/**
 * @module constants
 * Central content data layer for the Claude Code CLI companion site.
 * All text, commands, URLs, and descriptions are defined here as typed
 * objects — components import from this file and never hardcode strings.
 *
 * Facts verified against https://code.claude.com/docs on 2026-10-27.
 * Rendered copy uses curly quotes/apostrophes; code strings stay straight.
 */

// ─── Type Definitions ───────────────────────────────────────────────────────

/** Where a command is typed: a system shell (`$`) or the Claude Code prompt (`>`). */
export type PromptKind = 'shell' | 'repl';

/** A command with its description, rendered as a table row or copy row. */
export interface Command {
  command: string;
  description: string;
  /** Defaults to the containing table's prompt kind. */
  prompt?: PromptKind;
}

/** A keyboard shortcut with its key combo and description. */
export interface KeyboardShortcut {
  keys: string;
  description: string;
}

/** A section of the page; drives the map, the nav, and scroll-spy order. */
export interface SectionLink {
  id: string;
  label: string;
  /** One-line purpose shown in the slash-menu map. */
  purpose: string;
}

/** A Claude Code permission mode. */
export interface PermissionMode {
  id: string;
  label: string;
  flag: string;
  behavior: string;
  useWhen: string;
  /** Rendered as a warning (bypassPermissions). */
  danger?: boolean;
  /** Not reachable with Shift+Tab. */
  offCycle?: string;
}

/** A state of the Shift+Tab demo: the status-line text and what the mode does. */
export interface CycleState {
  id: string;
  status: string;
  summary: string;
}

/** A titled paragraph, used for tips and concept notes. */
export interface Note {
  title: string;
  description: string;
}

/** A file path with what it is for. */
export interface PathNote {
  path: string;
  description: string;
}

/** A named code example (shown with its filename instead of window chrome). */
export interface CodeExample {
  title: string;
  description: string;
  filename: string;
  code: string;
}

/** A single step in the Superpowers workflow. */
export interface WorkflowStep {
  name: string;
  description: string;
}

/** A named skill with a one-line description. */
export interface NamedItem {
  name: string;
  description: string;
}

/** A common MCP server with its install command. */
export interface MCPServer {
  name: string;
  description: string;
  installCommand: string;
}

/** An MCP server configuration scope. */
export interface MCPScope {
  scope: string;
  flag: string;
  location: string;
  description: string;
}

/** An external link. */
export interface Resource {
  title: string;
  url: string;
  description: string;
}

/** A file available for download from `/public`. */
export interface DownloadableSkill {
  name: string;
  description: string;
  filename: string;
}

// ─── Site metadata ──────────────────────────────────────────────────────────

/** Page metadata used by the layout for <title>, OG/Twitter tags, and JSON-LD. */
export const SITE = {
  title: 'Claude Code CLI cheat sheet',
  description:
    'Every Claude Code command, permission mode, and config file from Todd Greco’s meetup talk, on one page and kept current.',
  ogTitle: 'Claude Code CLI, on one page',
  ogDescription:
    'Install, commands, permission modes, CLAUDE.md, skills, plugins, MCP, hooks, and subagents. Copy-ready and checked against the current docs.',
  ogImageAlt: 'Claude Code CLI cheat sheet: a terminal welcome box with the install command',
  author: 'Todd Greco',
  authorUrl: 'https://mrballistic.com',
  siteName: 'mrballistic.com',
  datePublished: '2026-05-01',
  dateModified: '2026-10-27',
  keywords: [
    'Claude Code',
    'Claude Code CLI',
    'cheat sheet',
    'CLAUDE.md',
    'MCP',
    'hooks',
    'subagents',
    'skills',
    'permission modes',
  ],
};

// ─── Map (sections in reading order) ────────────────────────────────────────

/** Every section, in page order. The hero map and the nav both render this. */
export const SECTIONS: SectionLink[] = [
  { id: 'start', label: 'Install', purpose: 'Get it running' },
  { id: 'commands', label: 'Commands', purpose: 'What you type every day' },
  { id: 'modes', label: 'Modes', purpose: 'How much Claude may do unasked' },
  { id: 'claude-md', label: 'CLAUDE.md', purpose: 'What the project is' },
  { id: 'skills', label: 'Skills', purpose: 'Know-how, loaded when relevant' },
  { id: 'plugins', label: 'Plugins', purpose: 'Whole workflows, installed at once' },
  { id: 'mcp', label: 'MCP', purpose: 'Systems outside the repo' },
  { id: 'hooks', label: 'Hooks', purpose: 'What runs every time, no exceptions' },
  { id: 'subagents', label: 'Subagents', purpose: 'Helpers with their own context' },
  { id: 'resources', label: 'Links', purpose: 'Docs, repos, downloads' },
];

/** Labels for the page chrome (nav, map, copy buttons). */
export const UI = {
  brand: 'claude-code-cli',
  skipLink: 'Skip to content',
  mapTitle: 'On this page',
  menuOpen: 'Sections',
  menuClose: 'Close',
  copy: 'Copy',
  copied: 'Copied',
  copyFailed: 'Copy failed. Select the text and copy it manually.',
  copyAria: 'Copy command',
  sectionLinkAria: 'Link to this section',
};

// ─── Hero ───────────────────────────────────────────────────────────────────

/** First viewport: welcome box, install command, and the promise. */
export const HERO = {
  welcome: '/help for help · Welcome to the Claude Code cheat sheet',
  title: 'Claude Code CLI, on one page',
  promise:
    'Every command, mode, and file from the talk, checked against the current docs. Copy a line, paste it, and it runs.',
  installLabel: 'Install (macOS, Linux, WSL)',
  installCommand: 'curl -fsSL https://claude.ai/install.sh | bash',
  insight: 'Prompts get you a draft. Specs get you the build.',
  cwd: 'cwd: mrballistic.com/claude-code-cli-cheatsheet',
  mapHint: 'Jump to a section',
};

// ─── Getting Started ────────────────────────────────────────────────────────

/** Install alternatives, launch commands, and upkeep. */
export const GETTING_STARTED = {
  title: 'Install and launch',
  intro: 'One native binary. It updates itself in the background.',
  installs: [
    { command: 'curl -fsSL https://claude.ai/install.sh | bash', description: 'macOS, Linux, WSL' },
    { command: 'brew install --cask claude-code', description: 'Homebrew' },
    { command: 'irm https://claude.ai/install.ps1 | iex', description: 'Windows PowerShell' },
  ] as Command[],
  launchTitle: 'Launch',
  launchCommands: [
    { command: 'claude', description: 'Start an interactive session' },
    { command: 'claude "fix the failing test"', description: 'Start with a first prompt' },
    { command: 'claude -c', description: 'Continue the most recent conversation' },
    { command: 'claude -r auth-refactor', description: 'Resume a session by name or ID' },
    { command: 'claude -p "explain this repo"', description: 'Print one answer and exit (scripts, CI)' },
    { command: 'cat error.log | claude -p "what broke?"', description: 'Pipe input into a one-shot query' },
    { command: 'claude --version', description: 'Check the installed version' },
  ] as Command[],
};

// ─── Commands ───────────────────────────────────────────────────────────────

/** The slash commands worth knowing first. */
export const SLASH_COMMANDS: Command[] = [
  { command: '/init', description: 'Write a starter CLAUDE.md from your codebase' },
  { command: '/help', description: 'List every command' },
  { command: '/model', description: 'Switch models' },
  { command: '/effort', description: 'Set how hard the model thinks' },
  { command: '/context', description: 'See what’s filling the context window' },
  { command: '/compact', description: 'Summarize the conversation to free up context' },
  { command: '/clear', description: 'Start fresh in the same session' },
  { command: '/resume', description: 'Pick up an earlier session' },
  { command: '/rewind', description: 'Roll back the conversation and file edits to an earlier point' },
  { command: '/btw', description: 'Ask a side question without adding it to the context' },
  { command: '/code-review', description: 'Review pending changes (alias /review); add --fix to apply' },
  { command: '/usage', description: 'Session cost, plan limits, activity (alias /cost)' },
  { command: '/memory', description: 'Edit the CLAUDE.md files in play' },
  { command: '/powerup', description: 'Interactive lessons on features you haven’t tried' },
  { command: '/doctor', description: 'Diagnose your install and settings' },
];

/** Keyboard shortcuts inside a session. */
export const KEYBOARD_SHORTCUTS: KeyboardShortcut[] = [
  { keys: 'Shift+Tab', description: 'Cycle permission modes' },
  { keys: 'Esc', description: 'Interrupt Claude or close a dialog' },
  { keys: 'Esc Esc', description: 'Clear the draft, or open rewind when it’s empty' },
  { keys: 'Ctrl+R', description: 'Search prompt history' },
  { keys: 'Ctrl+B', description: 'Send a running task to the background' },
  { keys: 'Ctrl+O', description: 'Open the full transcript' },
  { keys: 'Ctrl+G', description: 'Edit the prompt in your $EDITOR' },
  { keys: 'Option+P', description: 'Switch model (Alt+P on Windows/Linux)' },
  { keys: 'Option+T', description: 'Toggle extended thinking (Alt+T)' },
  { keys: 'Option+O', description: 'Toggle fast mode (Alt+O)' },
];

/** Section labels for the commands section. */
export const COMMANDS_COPY = {
  title: 'Everyday commands',
  intro: 'Slash commands go in the Claude Code prompt. Type / to see them all as you go.',
  slashTitle: 'Slash commands',
  shortcutsTitle: 'Keyboard shortcuts',
  commandHeader: 'Command',
  keysHeader: 'Keys',
  descriptionHeader: 'What it does',
};

/** Callout for fast mode. */
export const FAST_CALLOUT = {
  title: 'Fast mode',
  command: '/fast',
  description:
    'Faster replies from the same Opus model (Opus 5.5, 5, and 4.8). Use it for quick back-and-forth; subscription plans spend usage credits on it.',
};

// ─── Permission Modes ───────────────────────────────────────────────────────

/** The six permission modes. Set any of them with --permission-mode. */
export const PERMISSION_MODES: PermissionMode[] = [
  {
    id: 'default',
    label: 'Manual',
    flag: '--permission-mode default',
    behavior: 'Asks before edits and commands',
    useWhen: 'Learning a codebase, or anything risky',
  },
  {
    id: 'acceptEdits',
    label: 'Edit automatically',
    flag: '--permission-mode acceptEdits',
    behavior: 'Edits files and runs basic file commands (mkdir, mv, cp) without asking; asks for everything else',
    useWhen: 'You trust the edits but want to see commands',
  },
  {
    id: 'plan',
    label: 'Plan',
    flag: '--permission-mode plan',
    behavior: 'Reads and plans; no edits until you approve the plan',
    useWhen: 'Before a big change, or to understand code',
  },
  {
    id: 'auto',
    label: 'Auto',
    flag: '--permission-mode auto',
    behavior: 'A classifier reviews each action and blocks risky ones; no prompts for the rest',
    useWhen: 'Well-scoped work with a good CLAUDE.md',
  },
  {
    id: 'dontAsk',
    label: 'Don’t ask',
    flag: '--permission-mode dontAsk',
    behavior: 'Runs only pre-approved tools; denies anything that would prompt',
    useWhen: 'Scripts and CI with an allowlist',
    offCycle: 'Flag or settings only',
  },
  {
    id: 'bypassPermissions',
    label: 'Bypass permissions',
    flag: '--dangerously-skip-permissions',
    behavior: 'No prompts, no checks. Deny rules still apply.',
    useWhen: 'Throwaway containers and VMs only',
    danger: true,
    offCycle: 'In the cycle only once enabled',
  },
];

/** The Shift+Tab demo: the order the real cycle visits, with status-line text. */
export const MODE_CYCLE: CycleState[] = [
  { id: 'default', status: '? for shortcuts', summary: 'Claude asks before every edit and command.' },
  { id: 'acceptEdits', status: '⏵⏵ edit automatically', summary: 'File edits go through; commands still ask.' },
  { id: 'plan', status: '⏸ plan mode', summary: 'Read-only until you approve a plan.' },
  { id: 'auto', status: '⏵⏵ auto mode', summary: 'A classifier approves safe actions and blocks risky ones.' },
];

/** Copy for the modes section and its demo widget. */
export const MODES_COPY = {
  title: 'Permission modes',
  intro:
    'How much Claude may do without asking. Press Shift+Tab in a session to cycle, or start in a mode with --permission-mode.',
  demoLabel: 'Try it: focus the box and press Shift+Tab',
  demoButton: 'Shift+Tab',
  demoPlaceholder: 'Try “add a dark mode toggle”',
  demoNote: 'Simulated. Bypass appears in the real cycle only after you enable it.',
  tableMode: 'Mode',
  tableBehavior: 'What it does',
  tableUse: 'Use when',
  dangerLabel: 'Danger',
};

/** Auto mode details. */
export const AUTO_MODE = {
  title: 'Auto mode',
  quote: '“Seatbelts, not a force field.”',
  details: [
    {
      title: 'How it works',
      description:
        'Before each action runs, a classifier (Sonnet 5 by default) checks it against your request and blocks anything destructive or out of scope. It’s a safety net, not a sandbox.',
    },
    {
      title: 'Who gets it',
      description:
        'All plans, on supported models. On by default for Team and Enterprise; admins can turn it off. Recent versions start interactive sessions in auto mode.',
    },
  ] as Note[],
  commands: [
    { command: 'claude --permission-mode auto', description: 'Interactive' },
    { command: 'claude -p "run the tests and fix failures" --permission-mode auto', description: 'Headless' },
  ] as Command[],
};

// ─── CLAUDE.md ──────────────────────────────────────────────────────────────

/** CLAUDE.md section. */
export const CLAUDE_MD = {
  title: 'CLAUDE.md',
  description:
    'A markdown file Claude reads at the start of every session: what the project is, how to build it, and what not to touch. Run /init to draft one.',
  locationsTitle: 'Where it lives',
  locations: [
    { path: './CLAUDE.md', description: 'Project, committed with the repo (or ./.claude/CLAUDE.md)' },
    { path: './CLAUDE.local.md', description: 'Project, just for you (gitignored)' },
    { path: '~/.claude/CLAUDE.md', description: 'You, across every project' },
    { path: '.claude/rules/*.md', description: 'Topic rules, optionally scoped to paths' },
  ] as PathNote[],
  importNote: 'Pull other files in with @path/to/file. A CLAUDE.md in a subfolder loads when Claude works there.',
  templateFilename: 'CLAUDE.md',
  template: `# CLAUDE.md

## Project Overview
What this project does, in two sentences.

## Build & Run
\`\`\`bash
npm run dev        # Development
npm run build      # Production build
npm test           # Run tests
\`\`\`

## Architecture
Key patterns, file layout, data flow.

## Conventions
- Naming, imports, file organization
- See @docs/style-guide.md

## What NOT To Do
- Anti-patterns specific to this project
- Files and directories never to touch`,
  tipsTitle: 'What makes one good',
  tips: [
    {
      title: 'Be specific',
      description: '“Use snake_case for database columns” beats “follow our conventions.”',
    },
    {
      title: 'Say what not to do',
      description: 'Constraints prevent more mistakes than instructions do.',
    },
    {
      title: 'Keep it current',
      description: 'When Claude gets something wrong twice, the fix belongs here.',
    },
  ] as Note[],
};

// ─── Skills ─────────────────────────────────────────────────────────────────

/** Skills section. */
export const SKILLS = {
  title: 'Skills',
  description:
    'A folder with a SKILL.md: instructions, and optionally scripts and reference files. Claude loads one when its description matches the task, or you run it as /skill-name.',
  locationsTitle: 'Where they live',
  locations: [
    { path: '.claude/skills/<name>/SKILL.md', description: 'This project' },
    { path: '~/.claude/skills/<name>/SKILL.md', description: 'Every project' },
  ] as PathNote[],
  formatFilename: '.claude/skills/release-notes/SKILL.md',
  skillFormat: `---
name: release-notes
description: Draft release notes from merged PRs. Use when the user asks for a changelog or release notes.
disable-model-invocation: false
---

# Release notes

1. List PRs merged since the last tag.
2. Group them: features, fixes, chores.
3. Write one plain sentence per change.`,
  concepts: [
    {
      title: 'The description is the trigger',
      description: 'Claude decides whether to load a skill from its description alone, so say when to use it.',
    },
    {
      title: 'Skills are slash commands',
      description:
        'Every skill can be run as /name. Add disable-model-invocation: true for skills you only want to run by hand.',
    },
    {
      title: 'An open standard',
      description: 'Skills follow the Agent Skills format, so the same folder works in other tools that support it.',
    },
  ] as Note[],
  resourcesTitle: 'Find more',
  resources: [
    { title: 'anthropics/skills', url: 'https://github.com/anthropics/skills', description: 'Official skills from Anthropic' },
    { title: 'agentskills.io', url: 'https://agentskills.io', description: 'The Agent Skills standard' },
    {
      title: 'awesome-claude-code',
      url: 'https://github.com/hesreallyhim/awesome-claude-code',
      description: 'Community skills, hooks, and plugins',
    },
  ] as Resource[],
};

// ─── Plugins ────────────────────────────────────────────────────────────────

/** Plugins section intro plus the two plugins from the talk. */
export const PLUGINS = {
  title: 'Plugins',
  description:
    'A plugin bundles skills, commands, hooks, agents, and MCP servers into one install. Browse with /plugin. These two are the author’s picks.',
  installHeading: 'Install',
};

/** Superpowers: development methodology. */
export const SUPERPOWERS = {
  title: 'Superpowers',
  byline: 'By Jesse Vincent and Prime Radiant',
  summary: 'Makes Claude brainstorm, plan, and test before it writes code, then review before it ships.',
  url: 'https://github.com/obra/superpowers',
  installCommands: ['/plugin install superpowers@claude-plugins-official'],
  workflowTitle: 'The workflow it enforces',
  workflow: [
    { name: 'Brainstorm', description: 'Pin down what you actually want' },
    { name: 'Design doc', description: 'Write the spec down' },
    { name: 'Worktree', description: 'Isolate the work on a branch' },
    { name: 'Plan', description: 'Break the spec into small steps' },
    { name: 'TDD', description: 'Failing test first, then the code' },
    { name: 'Subagents', description: 'Hand steps to fresh agents' },
    { name: 'Review', description: 'Check the work against the plan' },
    { name: 'Finish', description: 'Merge, PR, or clean up' },
  ] as WorkflowStep[],
  keySkillsTitle: 'Skills you’ll see it use',
  keySkills: [
    { name: 'brainstorming', description: 'Questions before code' },
    { name: 'writing-plans', description: 'Specs broken into bite-size tasks' },
    { name: 'test-driven-development', description: 'Red, green, refactor' },
    { name: 'subagent-driven-development', description: 'One fresh agent per task' },
    { name: 'requesting-code-review', description: 'Review against the plan' },
    { name: 'finishing-a-development-branch', description: 'Merge or PR, then clean up' },
  ] as NamedItem[],
};

/** Impeccable: design skill. */
export const IMPECCABLE = {
  title: 'Impeccable',
  byline: 'By Paul Bakaus',
  summary:
    'Gives Claude a design vocabulary: critique a page, audit it for accessibility, then polish, simplify, or push it bolder.',
  url: 'https://impeccable.style',
  installCommands: ['/plugin marketplace add pbakaus/impeccable', '/plugin install impeccable@impeccable'],
  commandsTitle: 'Commands worth starting with',
  commands: [
    { command: '/impeccable critique', description: 'Scored design review with priority fixes' },
    { command: '/impeccable audit', description: 'Accessibility, performance, responsive checks' },
    { command: '/impeccable polish', description: 'Final pass before shipping' },
  ] as Command[],
  nod: 'This page’s redesign started with /impeccable critique. It scored the old version 19 out of 40.',
};

/** The two plugins together. */
export const POWER_COMBO = {
  title: 'Auto mode + Superpowers',
  description:
    'Auto mode decides what Claude may run. Superpowers decides the order it works in. With both, you can leave a well-specified task running.',
};

// ─── MCP Servers ────────────────────────────────────────────────────────────

/** MCP section. */
export const MCP = {
  title: 'MCP servers',
  description:
    'The Model Context Protocol connects Claude to tools and data outside the repo: GitHub, browsers, databases, docs. Remote servers use HTTP; local ones run as a process (stdio).',
  addTitle: 'Add a server',
  addServerExamples: [
    { command: 'claude mcp add --transport http my-server https://api.example.com/mcp', description: 'Remote (HTTP)' },
    { command: 'claude mcp add --transport stdio my-server -- npx -y my-mcp-server', description: 'Local process (stdio)' },
    {
      command: 'claude mcp add-json my-server \'{"type":"stdio","command":"npx","args":["-y","my-mcp-server"]}\'',
      description: 'From JSON',
    },
  ] as Command[],
  scopesTitle: 'Scopes',
  scopeHeaders: { scope: 'Scope', location: 'Stored in', description: 'Applies to' },
  scopes: [
    { scope: 'Local', flag: '(default)', location: '~/.claude.json', description: 'You, in this project only' },
    { scope: 'Project', flag: '--scope project', location: '.mcp.json', description: 'Everyone on the repo (commit it)' },
    { scope: 'User', flag: '--scope user', location: '~/.claude.json', description: 'You, in every project' },
  ] as MCPScope[],
  serversTitle: 'Popular servers',
  commonServers: [
    {
      name: 'GitHub',
      description: 'Issues, PRs, code search (GitHub’s hosted server)',
      installCommand:
        'claude mcp add --transport http github https://api.githubcopilot.com/mcp/ --header "Authorization: Bearer YOUR_GITHUB_PAT"',
    },
    {
      name: 'Playwright',
      description: 'Drive a real browser',
      installCommand: 'claude mcp add playwright -- npx @playwright/mcp@latest',
    },
    {
      name: 'Context7',
      description: 'Current docs for the libraries you use',
      installCommand: 'claude mcp add --transport stdio context7 -- npx -y @upstash/context7-mcp',
    },
    {
      name: 'Brave Search',
      description: 'Web search',
      installCommand:
        'claude mcp add --transport stdio --env BRAVE_API_KEY=YOUR_KEY brave -- npx -y @brave/brave-search-mcp-server',
    },
    {
      name: 'Filesystem',
      description: 'Files outside the project',
      installCommand: 'claude mcp add --transport stdio filesystem -- npx -y @modelcontextprotocol/server-filesystem ~/notes',
    },
    {
      name: 'Sequential Thinking',
      description: 'Step-by-step reasoning scratchpad',
      installCommand:
        'claude mcp add --transport stdio thinking -- npx -y @modelcontextprotocol/server-sequential-thinking',
    },
  ] as MCPServer[],
  manageTitle: 'Manage',
  managingCommands: [
    { command: 'claude mcp list', description: 'List configured servers', prompt: 'shell' },
    { command: 'claude mcp get <name>', description: 'Show one server’s config', prompt: 'shell' },
    { command: 'claude mcp remove <name>', description: 'Remove a server', prompt: 'shell' },
    { command: '/mcp', description: 'Status and sign-in, inside a session', prompt: 'repl' },
  ] as Command[],
  buildTitle: 'Build your own (Python, FastMCP)',
  fastmcpFilename: 'server.py',
  fastmcpExample: `from fastmcp import FastMCP

mcp = FastMCP("my-tools")

@mcp.tool
def search_docs(query: str) -> str:
    """Search project documentation."""
    return f"No results for {query!r} yet."

if __name__ == "__main__":
    mcp.run()`,
  protocolLabel: 'Spec and SDKs',
  protocolLink: 'https://modelcontextprotocol.io',
};

// ─── Hooks ──────────────────────────────────────────────────────────────────

/** Hooks section. */
export const HOOKS = {
  title: 'Hooks',
  description:
    'Commands that run on Claude Code events, every time, whatever the model decides. Configure them in .claude/settings.json or with /hooks.',
  eventsTitle: 'Events you’ll use most',
  eventHeader: 'Event',
  whenHeader: 'Fires',
  events: [
    { name: 'SessionStart', description: 'When a session starts or resumes' },
    { name: 'UserPromptSubmit', description: 'Before Claude sees your prompt' },
    { name: 'PreToolUse', description: 'Before a tool runs (can block it)' },
    { name: 'PermissionRequest', description: 'When a permission prompt would appear' },
    { name: 'PostToolUse', description: 'After a tool succeeds' },
    { name: 'Notification', description: 'When Claude needs your attention' },
    { name: 'Stop', description: 'When Claude finishes responding' },
    { name: 'PreCompact', description: 'Before the context is compacted' },
  ] as NamedItem[],
  moreEvents: 'There are about 30 more, from SubagentStop to FileChanged.',
  moreEventsLink: 'https://code.claude.com/docs/en/hooks',
  moreEventsLabel: 'Full list',
  handlerNote: 'Handlers can be a shell command, an HTTP call, an MCP tool, or a prompt for a model to judge.',
  examples: [
    {
      title: 'Format every edit',
      description: 'Runs Prettier on each file Claude writes. The file path arrives as JSON on stdin.',
      filename: '.claude/settings.json',
      code: `{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "jq -r '.tool_input.file_path' | xargs npx prettier --write"
          }
        ]
      }
    ]
  }
}`,
    },
    {
      title: 'Tell me when it’s done',
      description: 'A macOS notification each time Claude stops.',
      filename: '~/.claude/settings.json',
      code: `{
  "hooks": {
    "Stop": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "osascript -e 'display notification \\"Claude is done\\" with title \\"Claude Code\\"'"
          }
        ]
      }
    ]
  }
}`,
    },
  ] as CodeExample[],
};

// ─── Subagents ──────────────────────────────────────────────────────────────

/** Subagents section. */
export const SUBAGENTS = {
  title: 'Subagents',
  description:
    'Claude can hand work to subagents. Each gets its own context window, tools, and instructions, and returns only a summary, so your main context stays clean.',
  builtInTitle: 'Built in',
  builtInTypes: [
    { name: 'Explore', description: 'Fast, read-only search across the codebase' },
    { name: 'Plan', description: 'Research for plan mode' },
    { name: 'general-purpose', description: 'Multi-step tasks that need every tool' },
  ] as NamedItem[],
  customTitle: 'Write your own',
  customDescription: 'A markdown file in .claude/agents/ (this project) or ~/.claude/agents/ (every project). Ask Claude to write one.',
  customFilename: '.claude/agents/test-runner.md',
  customExample: `---
name: test-runner
description: Runs the test suite and fixes failures. Use after code changes.
tools: Read, Edit, Bash
model: sonnet
---

Run the tests. For each failure, find the cause,
fix it, and re-run until the suite passes.
Report what you changed.`,
};

// ─── Resources ──────────────────────────────────────────────────────────────

/** Downloads from the talk. Files are served from `/public`. */
export const DOWNLOADABLE_SKILLS: DownloadableSkill[] = [
  {
    name: 'prd-writer',
    description:
      'Writes PRDs precise enough for Claude Code to build from unattended: structured sections, quality gates, stack defaults.',
    filename: 'prd-writer-skill.md',
  },
];

/** Copy for the resources section. */
export const RESOURCES_COPY = {
  title: 'Links',
  intro: 'The official docs, the repos mentioned above, and a skill from the talk.',
  downloadTitle: 'Download',
  downloadLabel: 'Download skill',
  linksTitle: 'Read more',
};

/** External links. */
export const RESOURCES: Resource[] = [
  { title: 'Claude Code docs', url: 'https://code.claude.com/docs', description: 'Commands, settings, and guides' },
  {
    title: 'Permission modes',
    url: 'https://code.claude.com/docs/en/permission-modes',
    description: 'Every mode and how auto mode decides',
  },
  { title: 'Superpowers', url: 'https://github.com/obra/superpowers', description: 'Jesse Vincent’s methodology plugin' },
  { title: 'Impeccable', url: 'https://impeccable.style', description: 'Paul Bakaus’s design skill' },
  {
    title: 'awesome-claude-code',
    url: 'https://github.com/hesreallyhim/awesome-claude-code',
    description: 'Community skills, hooks, and plugins',
  },
  { title: 'anthropics/skills', url: 'https://github.com/anthropics/skills', description: 'Official skills from Anthropic' },
  { title: 'Model Context Protocol', url: 'https://modelcontextprotocol.io', description: 'The spec and SDKs' },
  {
    title: 'MCP servers',
    url: 'https://github.com/modelcontextprotocol/servers',
    description: 'Reference servers and a directory of others',
  },
];

// ─── Footer ─────────────────────────────────────────────────────────────────

/** Footer lines. */
export const FOOTER = {
  origin: 'From a May 2026 meetup talk',
  updated: 'Updated October 2026',
  byline: 'By',
  author: 'Todd Greco',
  authorUrl: 'https://mrballistic.com',
  builtWith: 'Built with Claude Code',
  madeWith: 'Made with Astro',
  astroUrl: 'https://astro.build',
};
