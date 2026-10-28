# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Developers who use, or are about to start using, Claude Code in the terminal. Primary situation (confirmed 2026-10-27): a public desk reference, reached from mrballistic.com's writing grid or a shared link, read on a laptop beside a terminal while working. Secondary: people who saw the original meetup talk and come back to look something up, sometimes on a phone.

## Product Purpose

One page that holds every command, mode, file and concept from Todd Greco's Claude Code CLI meetup talk (May 2026), kept current with how Claude Code actually works today. Success: a reader finds the command or config they need within seconds, copies it, and it works as written.

## Positioning

A practitioner's map rather than the docs: it orders Claude Code as layers you add (CLAUDE.md, skills, hooks, plugins, MCP, subagents, permission modes) and says when to reach for each, with copy-ready commands. It is opinionated about the plugins its author actually uses (Superpowers, Impeccable).

## Operating Context

- Read alongside a running terminal; the core action is copy a command, paste it into Claude Code or a shell.
- Facts must track the official docs at https://code.claude.com/docs; stale commands are the main failure mode.
- Static site under https://mrballistic.com/claude-code-cli-cheatsheet/, deployed by tagged release from GitHub Actions.

## Capabilities and Constraints

- Astro static build, no client framework; all copy lives in `src/lib/constants.ts`.
- Every code block has a copy button.
- Google Analytics stays (consistent with mrballistic.com).
- No search, auth, CMS, or theme toggle.

## Brand Commitments

- Author: Todd Greco, byline linking to https://mrballistic.com.
- Footer states the origin and freshness: from a May 2026 meetup talk, updated October 2026.
- Must still feel like Claude Code CLI.
- User-facing copy uses curly quotes and apostrophes; em-dashes are rare and closed up.

## Evidence on Hand

- The talk's content (sections, commands, the hooks and CLAUDE.md examples) in `src/lib/constants.ts`.
- `public/prd-writer-skill.md`: a downloadable skill from the talk.
- No testimonials, metrics, or demo apps; do not invent any.

## Product Principles

1. Correct beats complete: every command must run as written today.
2. The command is the content; everything else supports finding and copying it.
3. Show the layers in the order you'd adopt them.
4. Opinions are labelled as the author's picks, not as official guidance.
