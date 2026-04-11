# PRD: Claude Code CLI — Talk Companion Site

## Overview

A single-page Next.js application that serves as a companion reference for a live Meetup talk on Claude Code CLI. The site is the digital version of the cheat sheet — every command, concept, and link from the talk, organized for quick reference during and after the session. Deployed to Vercel.

## Target Audience

Developers attending the Claude Code CLI Meetup talk. They'll pull this up on laptops/phones during the session and bookmark it for later.

## Core Thesis

The site reinforces the talk's central message: **"The real skill isn't prompting — it's specification."** Every section maps to the talk's four-layer narrative arc.

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4
- **Fonts:** Google Fonts — load via `next/font/google`
  - Display: **JetBrains Mono** (monospace, fits the CLI theme)
  - Body: **Outfit** (geometric sans, modern, NOT Inter/Roboto)
- **Icons:** lucide-react
- **Animations:** CSS-first (scroll-triggered reveals via Intersection Observer, no heavy libraries)
- **Deployment:** Vercel via CLI (`npx vercel --prod`)
- **Package manager:** npm

No database. No API routes. No auth. Pure static site (can be `output: 'export'` if needed, but standard Next.js SSG is fine).

---

## Aesthetic Direction: "Terminal Luxe"

Dark mode only. The vibe is a high-end developer tool documentation site — think Vercel's design language crossed with a retro terminal aesthetic.

### Color System (CSS variables)

```
--bg-primary: #0a0a0f          /* Near-black with blue undertone */
--bg-secondary: #12121a        /* Card/section backgrounds */
--bg-tertiary: #1a1a28         /* Elevated surfaces */
--text-primary: #e8e8ed         /* High contrast body text */
--text-secondary: #8888a0       /* Muted text, labels */
--text-tertiary: #55556a        /* Subtle text, line numbers */
--accent-primary: #22d3ee       /* Cyan — primary accent (commands, links) */
--accent-secondary: #a78bfa     /* Violet — secondary accent (highlights, badges) */
--accent-tertiary: #34d399      /* Emerald — success states, "NEW" badges */
--accent-warn: #fbbf24          /* Amber — caution, destructive action callouts */
--border-primary: #222235       /* Subtle borders */
--border-glow: rgba(34, 211, 238, 0.15)  /* Cyan glow for focus/hover */
```

### Design Details

- **Background:** Subtle dot grid pattern overlay on `--bg-primary` (CSS radial-gradient, very low opacity ~0.03)
- **Code blocks:** Monospace with syntax-highlighted-style coloring, left border accent in cyan, slight background elevation
- **Cards:** `--bg-secondary` with `--border-primary` border, subtle hover glow effect using `--border-glow`
- **Section transitions:** Horizontal gradient dividers (cyan → violet → transparent)
- **"NEW" badges:** Pill-shaped, `--accent-tertiary` background, uppercase, tiny
- **Copy buttons:** On every code block — click to copy, brief checkmark confirmation
- **Scroll behavior:** Smooth scroll, sticky nav with blur backdrop

### Typography Scale

- Hero heading: JetBrains Mono, 3rem, bold, slight letter-spacing
- Section headings: Outfit, 1.75rem, semibold
- Subsection headings: JetBrains Mono, 1.125rem, medium, cyan accent color
- Body: Outfit, 1rem, regular, `--text-primary`
- Code: JetBrains Mono, 0.875rem
- Captions/labels: Outfit, 0.75rem, `--text-secondary`, uppercase tracking

---

## Site Structure

Single page with a sticky top nav and smooth-scroll sections. The nav highlights the active section on scroll.

### Sections (in order)

#### 1. Hero
- Title: "Claude Code CLI"
- Subtitle: "The complete reference — from first launch to autonomous agents."
- Subtext: The talk's core insight: *"The real skill isn't prompting — it's specification."*
- A subtle terminal-cursor blink animation on the title
- Quick-jump buttons for the four layers

#### 2. Getting Started
- Install command with copy button
- Launch commands (`claude`, `claude "task"`, `claude -c`, etc.)
- Version check
- Brief note on requirements (Node.js 20+)

#### 3. Layer 1: CLI Essentials
- **Slash Commands Table:** All commands from the cheat sheet (`/help`, `/cost`, `/compact`, `/effort`, `/powerup`, `/mcp`, `/agents`, `/hooks`, `/plugins`, `/fast`, `/clear`, `/usage`) — rendered as a styled table or card grid
- **Keyboard Shortcuts:** `Shift+Tab` mode cycling with visual indicator showing: normal → auto-accept → auto → plan
- **`/powerup` callout:** Highlighted box — "If you remember one command, remember this one."

#### 4. Layer 2: Permission Modes
- Permission mode table (all 5 modes: default, acceptEdits, auto, plan, bypassPermissions) with behavior and "use when" columns
- **Auto Mode deep-dive card:**
  - How it works (Sonnet 4.6 classifier, two-stage check, escalation rules)
  - Launch commands (interactive + headless)
  - Availability note
  - "Seatbelts, not a force field" callout quote

#### 5. Layer 3: CLAUDE.md
- What it is and where it goes
- Template/example block (the recommended structure from the cheat sheet)
- Tips section (be specific, include constraints, update it)

#### 6. Layer 4: Skills
- What skills are, where they live (`.claude/skills/` project, `~/.claude/skills/` global)
- Skill file format with YAML frontmatter example
- Key concepts (auto-invocation, cross-tool compatibility, `disable-model-invocation`)
- Where to find skills: links to official repo, community repos, antigravity CLI install command

#### 7. Layer 5: Superpowers Plugin
- What it is (open-source plugin, Jesse Vincent / Prime Radiant)
- Install commands
- The workflow diagram — render as a horizontal pipeline/flow:
  `Brainstorm → Design Doc → Git Worktree → Plan → TDD → Subagent Execution → Review → Finalize`
- Brief description of each phase
- Key skills within Superpowers
- The "power combo" callout: `auto mode + Superpowers = safety + methodology guardrails`

#### 8. Layer 6: MCP Servers
- What MCP is (one sentence)
- Adding a server (HTTP, stdio, JSON config examples with copy buttons)
- Scopes table (local, project, user)
- Common servers table (GitHub, Filesystem, Sequential Thinking, Brave Search, Context7, Playwright) with install commands
- Managing servers commands
- Building your own — the FastMCP Python example
- Link to modelcontextprotocol.io

#### 9. Hooks & Subagents (combined, brief)
- Hooks: What they are, lifecycle events table, two examples (auto-format, desktop notification)
- Subagents: Built-in types, custom subagent creation path

#### 10. The Big Picture
- The "system diagram" mapping from the cheat sheet:
  ```
  CLAUDE.md       → "Here's what this project is"
  Skills          → "Here's domain expertise on demand"
  Hooks           → "Here's what always happens"
  Superpowers     → "Here's the methodology to follow"
  Auto Mode       → "Here's the safety net"
  MCP Servers     → "Here's external systems to reach"
  Subagents       → "Here's specialists to delegate to"
  ```
- Render this as a visual card grid or diagram, not just text

#### 11. Resources
- Links from the cheat sheet (Claude Code docs, auto mode deep-dive, Superpowers, Awesome Claude Code, Official Skills, MCP Protocol, MCP Server directory)
- Each link as a styled card with title + URL

#### 12. Footer
- "Built with Claude Code CLI" badge
- "Deployed on Vercel" badge
- Date of the talk

---

## Interactive Features

### Copy-to-Clipboard
Every code block and command has a copy button (top-right corner). On click:
1. Copy text to clipboard
2. Button icon changes from clipboard → checkmark
3. Reverts after 2 seconds
4. Use the native Clipboard API

### Sticky Navigation
- Fixed top bar with section links
- Active section highlighted based on scroll position (Intersection Observer)
- Backdrop blur effect
- Collapses to hamburger on mobile (< 768px)

### Scroll-Triggered Reveals
- Each section fades in + slides up slightly on first scroll into view
- Use Intersection Observer with `threshold: 0.1`
- CSS transitions only (opacity + transform), no JS animation libraries

### Mode Cycling Visualization
In the Permission Modes section, a small interactive widget:
- Shows the four modes as pills
- Clicking "Shift+Tab" button cycles through them with a highlight animation
- Visual only — no actual functionality

---

## Responsive Design

- **Desktop (1024px+):** Full layout, side-by-side content where appropriate
- **Tablet (768px–1023px):** Single column, slightly reduced spacing
- **Mobile (< 768px):** Stacked layout, hamburger nav, full-width code blocks with horizontal scroll

---

## File Structure

```
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Main page, imports all sections
│   └── globals.css         # CSS variables, base styles, utilities
├── components/
│   ├── Navbar.tsx           # Sticky nav with scroll spy
│   ├── Hero.tsx             # Hero section
│   ├── CodeBlock.tsx        # Reusable code block with copy button
│   ├── SectionHeading.tsx   # Consistent section header component
│   ├── CommandTable.tsx     # Styled table for commands
│   ├── ModeCard.tsx         # Permission mode card
│   ├── WorkflowPipeline.tsx # Superpowers workflow visualization
│   ├── BigPictureGrid.tsx   # The system diagram grid
│   ├── ResourceCard.tsx     # External link card
│   ├── ScrollReveal.tsx     # Intersection Observer wrapper
│   ├── ModeCycler.tsx       # Interactive Shift+Tab demo widget
│   ├── Footer.tsx           # Footer
│   ├── GettingStarted.tsx   # Getting started section
│   ├── CLIEssentials.tsx    # Slash commands section
│   ├── PermissionModes.tsx  # Permission modes + auto mode section
│   ├── ClaudeMd.tsx         # CLAUDE.md section
│   ├── Skills.tsx           # Skills section
│   ├── Superpowers.tsx      # Superpowers section
│   ├── MCPServers.tsx       # MCP section
│   ├── HooksSubagents.tsx   # Hooks + subagents section
│   ├── BigPicture.tsx       # Big picture section
│   └── Resources.tsx        # Resources + links section
├── lib/
│   └── constants.ts         # All content data (commands, links, descriptions)
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
├── package.json
└── README.md
```

---

## Content Data

All text content, commands, links, and descriptions should be defined in `lib/constants.ts` as typed objects/arrays — NOT hardcoded in JSX. This keeps the content layer separate from the presentation layer and makes it trivial to update.

---

## Deployment

### Vercel CLI

```bash
npm i -g vercel
vercel --prod
```

Include a `README.md` with:
1. Local dev instructions (`npm run dev`)
2. Build instructions (`npm run build`)
3. Deploy instructions (`npx vercel --prod`)

---

## Quality Bar

- **Lighthouse:** 90+ on Performance, Accessibility, Best Practices, SEO
- **TypeScript:** Strict mode, no `any` types
- **Responsive:** Looks great on 375px (iPhone SE) through 1440px+
- **Copy buttons:** Work on all code blocks
- **Smooth scroll:** No janky scroll behavior
- **No hydration errors:** Clean SSR/SSG

---

## Out of Scope

- No dark/light toggle (dark only)
- No search
- No analytics
- No CMS
- No user accounts
- No comments
- No PDF export
