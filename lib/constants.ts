/**
 * @module constants
 * Central content data layer for the Claude Code CLI companion site.
 * All text, commands, URLs, and descriptions are defined here as typed
 * objects — components import from this file and never hardcode strings.
 */

// ─── Type Definitions ───────────────────────────────────────────────────────

/** A navigation link rendered in the sticky top navbar. */
export interface NavItem {
  label: string;
  href: string;
}

/** A generic CLI command with its description. */
export interface Command {
  command: string;
  description: string;
}

/** A Claude Code slash command, optionally flagged as new. */
export interface SlashCommand {
  command: string;
  description: string;
  isNew?: boolean;
}

/** A keyboard shortcut with its key combo and description. */
export interface KeyboardShortcut {
  keys: string;
  description: string;
}

/** A Claude Code permission mode with its CLI flag and use case. */
export interface PermissionMode {
  mode: string;
  flag: string;
  behavior: string;
  useWhen: string;
}

/** A titled detail block within the Auto Mode deep-dive card. */
export interface AutoModeDetail {
  title: string;
  description: string;
}

/** A tip card for the CLAUDE.md section. */
export interface ClaudeMdTip {
  title: string;
  description: string;
}

/** A key concept card in the Skills section. */
export interface SkillConcept {
  title: string;
  description: string;
}

/** A single step in the Superpowers workflow pipeline. */
export interface WorkflowStep {
  name: string;
  description: string;
}

/** A common MCP server with its install command. */
export interface MCPServer {
  name: string;
  description: string;
  installCommand: string;
}

/** An MCP server configuration scope (local, project, or user). */
export interface MCPScope {
  scope: string;
  location: string;
  description: string;
}

/** A Claude Code lifecycle event that hooks can subscribe to. */
export interface HookEvent {
  event: string;
  description: string;
}

/** A hook configuration example with JSON code snippet. */
export interface HookExample {
  title: string;
  description: string;
  code: string;
}

/** A built-in subagent type with its specialization. */
export interface SubagentType {
  name: string;
  description: string;
}

/** A layer in the "Big Picture" system diagram. */
export interface BigPictureItem {
  layer: string;
  description: string;
}

/** An external resource link card. */
export interface Resource {
  title: string;
  url: string;
  description: string;
}

// ─── Navigation ─────────────────────────────────────────────────────────────

/** Sticky navbar section links. Order determines render and scroll-spy order. */
export const NAV_ITEMS: NavItem[] = [
  { label: "Start", href: "#getting-started" },
  { label: "CLI", href: "#cli-essentials" },
  { label: "Modes", href: "#permission-modes" },
  { label: "CLAUDE.md", href: "#claude-md" },
  { label: "Skills", href: "#skills" },
  { label: "Superpowers", href: "#superpowers" },
  { label: "MCP", href: "#mcp-servers" },
  { label: "Hooks", href: "#hooks-subagents" },
  { label: "Big Picture", href: "#big-picture" },
  { label: "Resources", href: "#resources" },
];

// ─── Hero ───────────────────────────────────────────────────────────────────

/** Hero section content: title, subtitle, core insight quote, and quick-jump buttons. */
export const HERO = {
  title: "Claude Code CLI",
  subtitle:
    "The complete reference — from first launch to autonomous agents.",
  insight:
    "The real skill isn't prompting — it's specification.",
  quickJumps: [
    { label: "CLI Essentials", href: "#cli-essentials" },
    { label: "Permission Modes", href: "#permission-modes" },
    { label: "CLAUDE.md", href: "#claude-md" },
    { label: "Skills & Superpowers", href: "#skills" },
  ],
};

// ─── Getting Started ────────────────────────────────────────────────────────

/** Install command, launch commands, and version check for the Getting Started section. */
export const GETTING_STARTED = {
  installCommand: "curl -fsSL https://claude.ai/install.sh | bash",
  requirement: "Works on macOS, Linux, and WSL",
  launchCommands: [
    { command: "claude", description: "Start interactive REPL" },
    { command: 'claude "task"', description: "Start with an initial prompt" },
    { command: "claude -c", description: "Resume most recent conversation" },
    { command: "claude -c <session-id>", description: "Resume specific session" },
    { command: "cat file | claude", description: "Pipe input for processing" },
  ] as Command[],
  versionCheck: "claude --version",
};

// ─── Layer 1: CLI Essentials ────────────────────────────────────────────────

/** All Claude Code slash commands. Items with `isNew` get a "NEW" badge. */
export const SLASH_COMMANDS: SlashCommand[] = [
  { command: "/help", description: "Show all available commands" },
  { command: "/cost", description: "Display token usage and cost for the current session" },
  { command: "/compact", description: "Compress conversation context to save tokens" },
  { command: "/mcp", description: "View and manage MCP server connections" },
  { command: "/agents", description: "List available subagent types" },
  { command: "/hooks", description: "View configured automation hooks" },
  { command: "/plugin", description: "Manage installed plugins and marketplaces", isNew: true },
  { command: "/fast", description: "Toggle fast mode on Opus — same model, faster output", isNew: true },
  { command: "/review", description: "Run a code review on pending changes" },
  { command: "/clear", description: "Clear conversation history" },
];

/** Keyboard shortcuts for the CLI Essentials section. */
export const KEYBOARD_SHORTCUTS: KeyboardShortcut[] = [
  { keys: "Shift+Tab", description: "Cycle permission modes: normal → auto-accept → auto → plan" },
  { keys: "Esc", description: "Cancel current generation / clear input" },
  { keys: "Up Arrow", description: "Cycle through input history" },
];

/** Highlighted callout box for the `/fast` command. */
export const FAST_CALLOUT = {
  text: "Same model, faster output.",
  command: "/fast",
  description:
    "Toggles fast mode on Opus — same intelligence, faster generation. Great for iterative work where you want quick turnarounds.",
};

// ─── Layer 2: Permission Modes ──────────────────────────────────────────────

/** All five Claude Code permission modes with flags and use cases. */
export const PERMISSION_MODES: PermissionMode[] = [
  {
    mode: "Default",
    flag: "(none)",
    behavior: "Asks permission for file writes and commands",
    useWhen: "Learning, exploring unfamiliar code",
  },
  {
    mode: "Auto-accept Edits",
    flag: "(none)",
    behavior: "Auto-approves file edits, still asks for commands",
    useWhen: "Trusted file changes, want command oversight",
  },
  {
    mode: "Auto",
    flag: "(none)",
    behavior: "Runs autonomously with safety classifier",
    useWhen: "Well-scoped tasks with clear CLAUDE.md",
  },
  {
    mode: "Plan",
    flag: "(none)",
    behavior: "Read-only analysis, no file modifications",
    useWhen: "Architecture review, understanding code",
  },
  {
    mode: "Bypass Permissions",
    flag: "--dangerously-skip-permissions",
    behavior: "No safety checks — full autonomous execution",
    useWhen: "CI/CD, sandboxed containers only",
  },
];

/** The four modes cycled through by Shift+Tab in the interactive demo widget. */
export const MODE_CYCLE_ORDER = ["Default", "Auto-accept Edits", "Auto", "Plan"];

/** Auto Mode deep-dive card: how it works, launch commands, and availability. */
export const AUTO_MODE = {
  title: "Auto Mode Deep Dive",
  subtitle: "\"Seatbelts, not a force field.\"",
  details: [
    {
      title: "How It Works",
      description:
        "A Sonnet 4.6 classifier evaluates every action before execution. Two-stage safety check: first classifies the action, then applies escalation rules for anything potentially destructive.",
    },
    {
      title: "Launch Commands",
      description: "Interactive: claude --auto\nHeadless: claude -p \"task\" --auto",
    },
    {
      title: "Availability",
      description:
        "Available on all plans. The classifier runs alongside your main model — no additional cost.",
    },
  ] as AutoModeDetail[],
};

// ─── Layer 3: CLAUDE.md ─────────────────────────────────────────────────────

/** CLAUDE.md section: description, file locations, template, and tips. */
export const CLAUDE_MD = {
  title: "CLAUDE.md — Your Project's Instruction Manual",
  description:
    "A markdown file at your project root that tells Claude everything it needs to know about your codebase. Think of it as a README for your AI pair programmer.",
  locations: [
    { path: "./CLAUDE.md", description: "Project root — checked into the repo" },
    { path: "~/.claude/CLAUDE.md", description: "User-level — personal preferences across projects" },
  ],
  template: `# CLAUDE.md

## Project Overview
Brief description of what this project does.

## Tech Stack
- Framework, language, key libraries

## Build & Run
\`\`\`bash
npm run dev        # Development
npm run build      # Production build
npm test           # Run tests
\`\`\`

## Architecture
Key patterns, file structure conventions, data flow.

## Coding Conventions
- Style rules, naming conventions
- Import ordering, file organization

## What NOT To Do
- Anti-patterns specific to this project
- Common mistakes to avoid`,
  tips: [
    {
      title: "Be Specific",
      description:
        "\"Use snake_case for database columns\" beats \"follow our conventions.\"",
    },
    {
      title: "Include Constraints",
      description:
        "List what NOT to do. Constraints prevent common AI mistakes.",
    },
    {
      title: "Update It",
      description:
        "Treat CLAUDE.md like living documentation. Update it when patterns change.",
    },
  ] as ClaudeMdTip[],
};

// ─── Layer 4: Skills ────────────────────────────────────────────────────────

/** Skills section: locations, file format example, key concepts, and resource links. */
export const SKILLS = {
  title: "Skills — Domain Expertise on Demand",
  description:
    "Skills are reusable prompt modules that give Claude specialized knowledge. They live as markdown files with YAML frontmatter and are auto-invoked when relevant.",
  locations: [
    { path: ".claude/skills/", description: "Project-level skills" },
    { path: "~/.claude/skills/", description: "Global skills (available everywhere)" },
  ],
  skillFormat: `---
name: my-skill
description: When and how to use this skill
---

# Skill Content

Instructions, patterns, and expertise
that Claude will follow when this skill
is auto-invoked.`,
  concepts: [
    {
      title: "Auto-Invocation",
      description:
        "Skills are automatically triggered when their description matches the current task — no manual activation needed.",
    },
    {
      title: "Cross-Tool Compatible",
      description:
        "Skills work across Claude Code, Copilot CLI, and Gemini CLI via platform adapters.",
    },
    {
      title: "disable-model-invocation",
      description:
        "Add this flag to prevent a skill from being auto-invoked. Useful for skills that should only be explicitly called.",
    },
  ] as SkillConcept[],
  resources: [
    { title: "Official Skills Repo", url: "https://github.com/anthropics/skills" },
    { title: "Community Skills", url: "https://github.com/hesreallyhim/awesome-claude-code" },
  ],
};

// ─── Layer 5: Superpowers Plugin ────────────────────────────────────────────

/** Superpowers plugin: install commands, 8-step workflow, key skills, and power combo callout. */
export const SUPERPOWERS = {
  title: "Superpowers Plugin",
  subtitle: "By Jesse Vincent / Prime Radiant — a complete development methodology as a plugin.",
  installCommands: [
    "/plugin marketplace add obra/superpowers",
    "/plugin install superpowers@superpowers",
  ],
  workflow: [
    { name: "Brainstorm", description: "Explore ideas and requirements" },
    { name: "Design Doc", description: "Write a technical specification" },
    { name: "Git Worktree", description: "Isolate work in a clean branch" },
    { name: "Plan", description: "Break spec into implementation steps" },
    { name: "TDD", description: "Write tests first, then implement" },
    { name: "Subagent Execution", description: "Delegate tasks to parallel agents" },
    { name: "Review", description: "Automated code review against plan" },
    { name: "Finalize", description: "Clean up, commit, and prepare PR" },
  ] as WorkflowStep[],
  keySkills: [
    "brainstorming — Structured ideation before coding",
    "writing-plans — Architecture-first design documents",
    "test-driven-development — Red-green-refactor with Claude",
    "subagent-driven-development — Parallel agent orchestration",
    "requesting-code-review — Automated review against plan",
    "finishing-a-development-branch — Clean merge preparation",
  ],
  powerCombo: {
    text: "Auto Mode + Superpowers = safety guardrails + methodology guardrails",
    description:
      "Auto mode keeps Claude safe. Superpowers keeps Claude disciplined. Together, they enable truly autonomous development workflows.",
  },
};

// ─── Layer 6: MCP Servers ───────────────────────────────────────────────────

/** MCP Servers section: add-server examples, scopes, common servers, managing commands, and FastMCP example. */
export const MCP = {
  title: "MCP Servers — External Systems on Tap",
  description:
    "Model Context Protocol lets Claude connect to external tools and data sources. Add servers via HTTP, stdio, or JSON config.",
  addServerExamples: [
    {
      title: "HTTP Server",
      code: "claude mcp add --transport http my-server https://api.example.com/mcp",
    },
    {
      title: "Stdio Server",
      code: "claude mcp add --transport stdio my-server -- npx my-mcp-server",
    },
    {
      title: "JSON Config",
      code: `claude mcp add-json my-server '{
  "type": "stdio",
  "command": "npx",
  "args": ["my-mcp-server"],
  "env": { "API_KEY": "..." }
}'`,
    },
  ],
  scopes: [
    { scope: "Local", location: ".claude/mcp.json", description: "This project only (gitignored)" },
    { scope: "Project", location: ".claude/mcp-servers.json", description: "Shared with team (committed)" },
    { scope: "User", location: "~/.claude/mcp.json", description: "All your projects" },
  ] as MCPScope[],
  commonServers: [
    {
      name: "GitHub",
      description: "Issues, PRs, repos, code search",
      installCommand: "claude mcp add --transport stdio github -- npx @modelcontextprotocol/server-github",
    },
    {
      name: "Filesystem",
      description: "Read/write files outside project",
      installCommand: "claude mcp add --transport stdio filesystem -- npx @modelcontextprotocol/server-filesystem /path",
    },
    {
      name: "Sequential Thinking",
      description: "Structured reasoning for complex problems",
      installCommand: "claude mcp add --transport stdio thinking -- npx @modelcontextprotocol/server-sequential-thinking",
    },
    {
      name: "Brave Search",
      description: "Web search via Brave API",
      installCommand: "claude mcp add --transport stdio brave -- npx @modelcontextprotocol/server-brave-search",
    },
    {
      name: "Context7",
      description: "Up-to-date library documentation",
      installCommand: "claude mcp add --transport stdio context7 -- npx @context7/mcp-server",
    },
    {
      name: "Playwright",
      description: "Browser automation and testing",
      installCommand: "claude mcp add --transport stdio playwright -- npx @playwright/mcp-server",
    },
  ] as MCPServer[],
  managingCommands: [
    { command: "claude mcp list", description: "List all configured servers" },
    { command: "claude mcp remove <name>", description: "Remove a server" },
    { command: "/mcp", description: "View server status in REPL" },
  ] as Command[],
  fastmcpExample: `from fastmcp import FastMCP

mcp = FastMCP("my-tools")

@mcp.tool()
def search_docs(query: str) -> str:
    """Search project documentation."""
    # Your implementation here
    return results

mcp.run()`,
  protocolLink: "https://modelcontextprotocol.io",
};

// ─── Hooks & Subagents ──────────────────────────────────────────────────────

/** Hooks section: lifecycle events and configuration examples. */
export const HOOKS = {
  title: "Hooks — Automated Guardrails",
  description:
    "Shell commands that execute in response to Claude Code lifecycle events. Configure in .claude/settings.json.",
  events: [
    { event: "PreToolUse", description: "Before a tool is executed" },
    { event: "PostToolUse", description: "After a tool completes" },
    { event: "Notification", description: "When Claude sends a notification" },
    { event: "Stop", description: "When Claude finishes a response" },
  ] as HookEvent[],
  examples: [
    {
      title: "Auto-format on Save",
      description: "Run Prettier after every file write (file path read from stdin JSON)",
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
      title: "Desktop Notification",
      description: "Get notified when a long task finishes",
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
  ] as HookExample[],
};

/** Subagents section: built-in types and custom agent creation path. */
export const SUBAGENTS = {
  title: "Subagents — Specialists on Call",
  description:
    "Claude can spawn specialized sub-agents to handle specific tasks in parallel, each with their own context and tools.",
  builtInTypes: [
    { name: "Explore", description: "Fast read-only codebase search and file lookups" },
    { name: "Plan", description: "Architecture and implementation planning" },
    { name: "general-purpose", description: "Multi-step research and tasks across the codebase" },
  ] as SubagentType[],
  customPath:
    "Define custom subagent types via skills or the Agent tool with specific prompts and tool restrictions.",
};

// ─── The Big Picture ────────────────────────────────────────────────────────

/** The seven layers of the Claude Code system, rendered as a visual card grid. */
export const BIG_PICTURE: BigPictureItem[] = [
  { layer: "CLAUDE.md", description: "Here's what this project is" },
  { layer: "Skills", description: "Here's domain expertise on demand" },
  { layer: "Hooks", description: "Here's what always happens" },
  { layer: "Superpowers", description: "Here's the methodology to follow" },
  { layer: "Auto Mode", description: "Here's the safety net" },
  { layer: "MCP Servers", description: "Here's external systems to reach" },
  { layer: "Subagents", description: "Here's specialists to delegate to" },
];

// ─── Downloadable Skills ────────────────────────────────────────────────────

/** A skill file available for download from the public directory. */
export interface DownloadableSkill {
  name: string;
  description: string;
  filename: string;
  href: string;
}

/** Skills available for download in the Resources section. Files served from `/public`. */
export const DOWNLOADABLE_SKILLS: DownloadableSkill[] = [
  {
    name: "prd-writer",
    description:
      "Write zero-ambiguity PRDs and TDDs designed to drive autonomous Claude Code execution. Includes structured sections, quality gates, and stack defaults.",
    filename: "prd-writer-skill.md",
    href: "/prd-writer-skill.md",
  },
];

// ─── Demo Projects ──────────────────────────────────────────────────────────

/** A demo project showcased in the Resources section with live and source links. */
export interface DemoProject {
  title: string;
  description: string;
  liveUrl: string;
  repoUrl: string;
}

/** Projects built with Claude Code CLI, shown as demo cards with live/repo links. */
export const DEMO_PROJECTS: DemoProject[] = [
  {
    title: "Taco Tuesday App",
    description:
      "A live demo app built with Claude Code CLI — find tacos near you on an interactive map.",
    liveUrl: "https://ccc-demo-eight.vercel.app/#/map",
    repoUrl: "https://github.com/mrballistic-slalom/taco-tuesday-app",
  },
];

// ─── Resources ──────────────────────────────────────────────────────────────

/** External resource links rendered as cards at the bottom of the Resources section. */
export const RESOURCES: Resource[] = [
  {
    title: "Claude Code Documentation",
    url: "https://docs.anthropic.com/en/docs/claude-code",
    description: "Official docs — commands, configuration, and guides",
  },
  {
    title: "Permissions & Auto Mode",
    url: "https://docs.anthropic.com/en/docs/claude-code/permissions",
    description: "How permission modes and the safety classifier work",
  },
  {
    title: "Superpowers Plugin",
    url: "https://github.com/obra/superpowers",
    description: "The open-source development methodology plugin by Jesse Vincent",
  },
  {
    title: "Awesome Claude Code",
    url: "https://github.com/hesreallyhim/awesome-claude-code",
    description: "Community-curated skills, hooks, plugins, and resources",
  },
  {
    title: "Official Skills Repository",
    url: "https://github.com/anthropics/skills",
    description: "Agent Skills maintained by Anthropic",
  },
  {
    title: "Model Context Protocol",
    url: "https://modelcontextprotocol.io",
    description: "The open standard for AI ↔ tool communication",
  },
  {
    title: "MCP Server Directory",
    url: "https://github.com/modelcontextprotocol/servers",
    description: "Browse and discover available MCP servers",
  },
];

// ─── Footer ─────────────────────────────────────────────────────────────────

/** Footer badges and talk date. */
export const FOOTER = {
  builtWith: "Built with Claude Code CLI",
  deployedOn: "Deployed on Vercel",
  talkDate: "May 2026",
};
