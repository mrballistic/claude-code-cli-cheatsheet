// ─── Type Definitions ───────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
}

export interface Command {
  command: string;
  description: string;
}

export interface SlashCommand {
  command: string;
  description: string;
  isNew?: boolean;
}

export interface KeyboardShortcut {
  keys: string;
  description: string;
}

export interface PermissionMode {
  mode: string;
  flag: string;
  behavior: string;
  useWhen: string;
}

export interface AutoModeDetail {
  title: string;
  description: string;
}

export interface ClaudeMdTip {
  title: string;
  description: string;
}

export interface SkillConcept {
  title: string;
  description: string;
}

export interface WorkflowStep {
  name: string;
  description: string;
}

export interface MCPServer {
  name: string;
  description: string;
  installCommand: string;
}

export interface MCPScope {
  scope: string;
  location: string;
  description: string;
}

export interface HookEvent {
  event: string;
  description: string;
}

export interface HookExample {
  title: string;
  description: string;
  code: string;
}

export interface SubagentType {
  name: string;
  description: string;
}

export interface BigPictureItem {
  layer: string;
  description: string;
}

export interface Resource {
  title: string;
  url: string;
  description: string;
}

// ─── Navigation ─────────────────────────────────────────────────────────────

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

export const GETTING_STARTED = {
  installCommand: "npm install -g @anthropic-ai/claude-code",
  requirement: "Requires Node.js 20+",
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

export const SLASH_COMMANDS: SlashCommand[] = [
  { command: "/help", description: "Show all available commands" },
  { command: "/cost", description: "Display token usage and cost for the current session" },
  { command: "/compact", description: "Compress conversation context to save tokens" },
  { command: "/effort", description: "Set thinking effort level (low / medium / high)" },
  { command: "/powerup", description: "Inject system prompt enhancements from community", isNew: true },
  { command: "/mcp", description: "View and manage MCP server connections" },
  { command: "/agents", description: "List available subagent types" },
  { command: "/hooks", description: "View configured automation hooks" },
  { command: "/plugins", description: "Manage installed plugins", isNew: true },
  { command: "/fast", description: "Toggle fast mode (same model, faster output)", isNew: true },
  { command: "/clear", description: "Clear conversation history" },
  { command: "/usage", description: "Show API usage statistics" },
];

export const KEYBOARD_SHORTCUTS: KeyboardShortcut[] = [
  { keys: "Shift+Tab", description: "Cycle permission modes: normal → auto-accept → auto → plan" },
  { keys: "Esc", description: "Cancel current generation / clear input" },
  { keys: "Up Arrow", description: "Cycle through input history" },
];

export const POWERUP_CALLOUT = {
  text: "If you remember one command, remember this one.",
  command: "/powerup",
  description:
    "Injects community-curated system prompt enhancements that dramatically improve Claude's output quality.",
};

// ─── Layer 2: Permission Modes ──────────────────────────────────────────────

export const PERMISSION_MODES: PermissionMode[] = [
  {
    mode: "Default",
    flag: "(none)",
    behavior: "Asks permission for file writes and commands",
    useWhen: "Learning, exploring unfamiliar code",
  },
  {
    mode: "Auto-accept Edits",
    flag: "--auto-accept-edits",
    behavior: "Auto-approves file edits, still asks for commands",
    useWhen: "Trusted file changes, want command oversight",
  },
  {
    mode: "Auto",
    flag: "--auto",
    behavior: "Runs autonomously with safety classifier",
    useWhen: "Well-scoped tasks with clear CLAUDE.md",
  },
  {
    mode: "Plan",
    flag: "--plan",
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

export const MODE_CYCLE_ORDER = ["Default", "Auto-accept Edits", "Auto", "Plan"];

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
    { title: "Official Skills Repo", url: "https://github.com/anthropics/claude-code-skills" },
    { title: "Community Skills", url: "https://github.com/anthropics/awesome-claude-code" },
    { title: "Install via CLI", url: "npx @anthropic-ai/claude-code-skills install" },
  ],
};

// ─── Layer 5: Superpowers Plugin ────────────────────────────────────────────

export const SUPERPOWERS = {
  title: "Superpowers Plugin",
  subtitle: "By Jesse Vincent / Prime Radiant — a complete development methodology as a plugin.",
  installCommands: [
    "claude plugins:add @anthropic-ai/superpowers",
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
      description: "Run Prettier after every file write",
      code: `{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "command": "npx prettier --write $CLAUDE_FILE_PATH"
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
        "command": "osascript -e 'display notification \\"Claude is done\\" with title \\"Claude Code\\"'"
      }
    ]
  }
}`,
    },
  ] as HookExample[],
};

export const SUBAGENTS = {
  title: "Subagents — Specialists on Call",
  description:
    "Claude can spawn specialized sub-agents to handle specific tasks in parallel, each with their own context and tools.",
  builtInTypes: [
    { name: "Explore", description: "Fast codebase exploration and search" },
    { name: "Plan", description: "Architecture and implementation planning" },
    { name: "Code Review", description: "Automated code review against standards" },
  ] as SubagentType[],
  customPath:
    "Define custom subagent types via skills or the Agent tool with specific prompts and tool restrictions.",
};

// ─── The Big Picture ────────────────────────────────────────────────────────

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

export interface DownloadableSkill {
  name: string;
  description: string;
  filename: string;
  href: string;
}

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

export interface DemoProject {
  title: string;
  description: string;
  liveUrl: string;
  repoUrl: string;
}

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

export const FOOTER = {
  builtWith: "Built with Claude Code CLI",
  deployedOn: "Deployed on Vercel",
  talkDate: "April 2025",
};
