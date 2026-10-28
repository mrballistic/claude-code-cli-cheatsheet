# CLAUDE.md — Claude Code CLI cheat sheet

## Project Overview

A single-page Astro static site: a desk reference for the Claude Code CLI, originally the companion to Todd Greco's May 2026 meetup talk. Dark only. Builds to a static `dist/` served at https://mrballistic.com/claude-code-cli-cheatsheet/ (Astro `base` is `/claude-code-cli-cheatsheet`). Product truth is in `PRODUCT.md`; visual system in `DESIGN.md`.

## Tech Stack

- Astro 7 (static output, TypeScript strict). TypeScript stays on 6.x until `@astrojs/check` accepts 7 (`npm view @astrojs/check peerDependencies`).
- Tailwind CSS 4 via `@tailwindcss/vite`; CSS variables in `src/styles/global.css` for every colour
- `astro-icon` + `@iconify-json/lucide`
- Google Fonts via `<link>`: JetBrains Mono (code, headings, UI chrome) + Atkinson Hyperlegible Next (prose)
- No animation libraries, no client framework: plain `<script>` blocks in `.astro` files

## Critical Rules

### Content
- All copy, commands, URLs, and metadata live in `src/lib/constants.ts` as typed objects. Never hardcode strings in markup.
- Facts must match https://code.claude.com/docs. When updating, re-verify commands, flags, file paths, and package names (`npm view <pkg>`) rather than trusting memory.
- Rendered copy uses curly quotes/apostrophes; em-dashes are rare and closed up. Code strings stay straight.
- `/llms.txt` is generated from the same constants (`src/pages/llms.txt.ts`); keep it in step when adding sections.

### Design (see DESIGN.md)
- The world is Claude Code's own TUI: warm charcoal ground, warm off-white ink, one terracotta accent (#d97757) for the active and actionable. Mode colours (edits violet, plan teal, danger red) only where Claude Code uses them.
- `$` prefixes shell commands, `>` prefixes Claude Code prompt input (rounded box). Multi-line examples are headed by their real filename. No macOS window chrome, glows, gradients, or cards-as-structure.
- Every code block and command has an always-visible copy button (44px target).
- Every text colour must clear 4.5:1; respect `prefers-reduced-motion`; content must be visible with JS off (`.js .reveal`).

### Components
- Each section is its own `.astro` component in `src/components/`; keep components under 150 lines.
- Primitives: `Cmd.astro` (one command), `FileBlock.astro` (file example), `CommandTable.astro`, `PathList.astro`, `LinkList.astro`, `CopyButton.astro`, `SectionHeading.astro`.
- `SECTIONS` in constants drives the hero slash-menu map, the lg sidebar, the mobile menu, and scroll-spy. Section `id`s must match each `SectionHeading` id.
- No `any` types.

## Build & Deploy

```bash
npm run dev        # astro dev
npm run check      # astro check, must be 0 errors / 0 warnings
npm run build      # static build to dist/, must be warning-free
npm run build:og   # regenerate public/og-image.png (sharp)
```

Deploys only on a pushed `v*` tag that is on `main` and equals `v<package.json version>` (`.github/workflows/deploy.yml`). It rsyncs `dist/` to `/var/www/html/claude-code-cli-cheatsheet/` as `mrballistic-deploy` (mrballistic.com's key), additive except for a `--delete` scoped to `_astro/`. That directory sits inside mrballistic.com's shared web root; never widen the destination or add `--delete` to the main sync. CI for pushes/PRs: `.github/workflows/ci.yml`.

## What NOT To Do

- No light mode or theme toggle
- No search, auth, or CMS (Google Analytics is intentional, matching mrballistic.com)
- No animation libraries
- No hardcoded copy in components
- No code block without a copy button
- No default Tailwind colours; use the CSS variables
