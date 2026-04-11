# CLAUDE.md — Claude Code CLI Talk Companion Site

## Project Overview

A single-page Next.js 15 companion site for a Claude Code CLI Meetup talk. Dark mode only. Deployed to Vercel. All content comes from the PRD.md in the repo root — read it thoroughly before writing any code.

## Tech Stack

- Next.js 15 (App Router, TypeScript strict)
- Tailwind CSS v4
- lucide-react for icons
- Google Fonts via `next/font/google`: JetBrains Mono (display/code) + Outfit (body)
- No animation libraries — CSS transitions + Intersection Observer only

## Critical Rules

### Architecture
- All text content, commands, URLs, and descriptions live in `lib/constants.ts` as typed objects — NEVER hardcode strings in JSX
- Every section is its own component in `components/`
- Shared UI primitives: `CodeBlock.tsx` (with copy button), `SectionHeading.tsx`, `ScrollReveal.tsx` (Intersection Observer fade-in wrapper)
- `app/page.tsx` imports and composes all section components in order
- `app/globals.css` contains CSS variables for the color system, base styles, and utility classes

### Styling
- Dark mode only — no theme toggle
- Use the exact CSS variable color system from the PRD (--bg-primary through --border-glow)
- Tailwind for layout and spacing; CSS variables for all colors
- Background: subtle dot grid pattern via CSS radial-gradient at ~0.03 opacity on body
- Code blocks: monospace, left cyan border, elevated bg, copy button top-right
- Cards: --bg-secondary bg, --border-primary border, hover glow with --border-glow
- Section dividers: horizontal gradient line (cyan → violet → transparent)
- "NEW" badges: pill-shaped, --accent-tertiary bg, uppercase, text-xs

### Typography
- Hero title: JetBrains Mono, 3rem, bold
- Section headings: Outfit, 1.75rem, semibold
- Subsection headings: JetBrains Mono, 1.125rem, cyan
- Body: Outfit, 1rem, --text-primary
- Code: JetBrains Mono, 0.875rem
- Labels: Outfit, 0.75rem, --text-secondary, uppercase tracking-wider

### Interactive Features
1. **Copy button on every code block** — Clipboard API, icon swap (clipboard → check → revert after 2s)
2. **Sticky nav** — backdrop-blur, scroll-spy via Intersection Observer, hamburger on mobile
3. **Scroll reveals** — each section fades in + translateY(20px→0) on first intersection, CSS transition
4. **Mode cycler widget** — in Permission Modes section, interactive Shift+Tab demo that cycles through mode pills

### Responsive
- Mobile-first breakpoints: default < 768px, md: 768px, lg: 1024px
- Hamburger nav on mobile
- Code blocks: horizontal scroll on overflow, no wrapping
- Stack all multi-column layouts on mobile

### Component Patterns
- Use `'use client'` only on components that need interactivity (CodeBlock, Navbar, ScrollReveal, ModeCycler)
- Server components by default for all section content
- No `any` types — define interfaces for all data structures
- Keep components under 150 lines — extract sub-components if needed

## File Structure

Follow the exact file structure from the PRD. Do not deviate.

## Content Source

The complete content for every section is defined in the PRD.md file. Read the "Sections" portion of the PRD carefully — it specifies exactly what goes in each section, including commands, tables, descriptions, and callout text. Transcribe all of it into `lib/constants.ts` and render from there.

The cheat sheet source files (claude-code-talk-cheat-sheet.md and claude-code-talk-demo-script.md) are the canonical source for all commands, descriptions, and links. If the PRD references content, pull the exact commands and text from these source docs.

## Build & Deploy

```bash
npm run dev        # Local development
npm run build      # Production build (must pass with zero errors)
npx vercel --prod  # Deploy to Vercel
```

## Quality Gates

- `npm run build` must complete with zero errors and zero warnings
- TypeScript strict mode — no type errors
- All code blocks must have working copy buttons
- Smooth scroll must work on all section nav links
- No hydration mismatches
- Responsive: test at 375px, 768px, 1024px, 1440px

## What NOT To Do

- Do NOT add a light mode or theme toggle
- Do NOT use Inter, Roboto, Arial, or system fonts
- Do NOT use purple-on-white gradients
- Do NOT add analytics, search, auth, or a CMS
- Do NOT use framer-motion or any animation library
- Do NOT hardcode content strings in component JSX
- Do NOT skip the copy button on any code block
- Do NOT use default Tailwind colors — use the CSS variable system
