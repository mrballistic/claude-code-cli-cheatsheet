# Claude Code CLI — Talk Companion Site

A single-page companion reference for the Claude Code CLI Meetup talk. Every command, concept, and link from the talk, organized for quick reference during and after the session.

**Live site:** [claude-code-cli-cheatsheet.vercel.app](https://claude-code-cli-cheatsheet.vercel.app)

## What's Inside

- **Getting Started** — Install, launch commands, version check
- **CLI Essentials** — Slash commands, keyboard shortcuts, `/powerup`
- **Permission Modes** — All 5 modes with interactive Shift+Tab cycling demo
- **CLAUDE.md** — Template, locations, and tips
- **Skills** — File format, auto-invocation, where to find them
- **Superpowers Plugin** — Full workflow pipeline visualization
- **MCP Servers** — Adding, scoping, common servers, building your own
- **Hooks & Subagents** — Lifecycle events, examples, built-in agent types
- **The Big Picture** — How all the layers fit together
- **Resources** — Downloadable skills, demo projects, and essential links

## Tech Stack

- Next.js 15 (App Router, TypeScript strict)
- Tailwind CSS v4
- lucide-react
- Google Fonts: JetBrains Mono + Outfit
- CSS-only animations (Intersection Observer scroll reveals)
- Deployed on Vercel

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # Production build (must pass with zero errors)
```

## Deploy

```bash
npx vercel --prod
```

## License

[MIT](LICENSE)
