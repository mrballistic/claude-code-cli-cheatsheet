---
name: Claude Code CLI, on one page
description: A desk reference drawn in Claude Code’s own terminal interface language.
colors:
  ground: "#1a1816"
  surface: "#221f1c"
  raised: "#2b2723"
  rule: "#3b3631"
  rule-strong: "#554e47"
  ink: "#ede8e1"
  ink-2: "#bdb5ab"
  ink-3: "#9a9187"
  accent: "#d97757"
  accent-ink: "#1a1210"
  accent-wash: "rgba(217, 119, 87, 0.12)"
  mode-edits: "#b49cf0"
  mode-plan: "#6fbfae"
  danger: "#f25c6a"
  ok: "#8fc77a"
typography:
  display:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "clamp(2.125rem, 1.4rem + 3vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "clamp(1.5rem, 1.2rem + 1.2vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "1.375rem"
    fontWeight: 700
    letterSpacing: "-0.02em"
  subtitle:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.9375rem"
    fontWeight: 500
    letterSpacing: "0"
  body:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Hyperlegible, ui-sans-serif, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  code:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "\"liga\" 0, \"calt\" 0"
  label:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Hyperlegible, ui-sans-serif, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
rounded:
  key: "4px"
  sm: "6px"
  box: "10px"
spacing:
  gutter: "1.25rem"
  gutter-md: "2rem"
  row: "0.5rem"
  stack: "2rem"
  section: "clamp(3.5rem, 2.5rem + 4vw, 6rem)"
  measure: "68ch"
  container: "72rem"
components:
  command-row:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.code}"
    rounded: "{rounded.sm}"
    padding: "0.625rem 0.25rem 0.625rem 0.875rem"
  command-row-repl:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.code}"
    rounded: "{rounded.box}"
    padding: "0.625rem 0.25rem 0.625rem 0.875rem"
  copy-button:
    textColor: "{colors.ink-3}"
    padding: "0 0.75rem"
    height: "2.75rem"
    width: "2.75rem"
  copy-button-hover:
    backgroundColor: "{colors.raised}"
    textColor: "{colors.ink}"
  file-block:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.875rem"
  box-callout:
    textColor: "{colors.ink}"
    rounded: "{rounded.box}"
    padding: "1rem 1.125rem"
  welcome-box:
    textColor: "{colors.ink}"
    rounded: "{rounded.box}"
    padding: "2rem 2.25rem 1.5rem"
  button-download:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    rounded: "{rounded.sm}"
    padding: "0 1rem"
    height: "2.75rem"
  button-download-hover:
    backgroundColor: "#e48b6c"
    textColor: "{colors.accent-ink}"
  kbd:
    backgroundColor: "{colors.raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.key}"
    padding: "0.0625rem 0.375rem"
  inline-code:
    backgroundColor: "{colors.raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.key}"
    padding: "0.0625rem 0.3125rem"
  slash-item:
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.4375rem 0.75rem"
  slash-item-active:
    backgroundColor: "{colors.accent-wash}"
    textColor: "{colors.accent}"
  nav-link-current:
    backgroundColor: "{colors.accent-wash}"
    textColor: "{colors.accent}"
    rounded: "{rounded.sm}"
    padding: "0.3125rem 0.75rem"
  danger-tag:
    textColor: "{colors.danger}"
    rounded: "{rounded.key}"
    padding: "0 0.375rem"
---

# Design System: Claude Code CLI, on one page

## Overview

**Creative North Star: "The Terminal Itself"**

The page is rendered in Claude Code’s own interface language rather than a generic developer-tool template. Its parts are the TUI’s parts: the rounded welcome box, the `>` input prompt, the status line that cycles permission modes, the slash menu, the `⏺` response bullet, markdown headings that keep their `## `. A reader should know within a second that this is Claude Code, and every device on the page should be something Claude Code itself draws.

The ground is a warm charcoal, the ink a warm off-white, and a single Claude-terracotta accent marks what is active or actionable. Structure comes from 1px rules and rounded box-drawing borders, never from cards, shadows, glows or gradients. Density is that of a reference sheet: ruled tables, stacked command rows, prose held to a readable measure. Motion is limited to a one-time fade-up on reveal, a blinking block cursor, and short colour transitions.

The world refuses the centred neon hero, fake macOS windows with traffic lights, and the card grid as structure.

**Key Characteristics:**
- Warm charcoal ground, warm off-white ink, one terracotta accent.
- JetBrains Mono for anything typed or rendered by the TUI; Atkinson Hyperlegible Next for prose.
- The prompt glyph carries meaning: `$` is a system shell, `>` is the Claude Code REPL.
- Rounded boxes (10px) echo Claude Code’s input and output boxes; plain command rows and files use 6px.
- Flat: depth comes from three tonal steps and rules, not shadows.

## Colors

A near-monochrome warm-neutral palette with one ember accent and a small set of product-truth signal hues.

### Primary
- **Claude Terracotta** (`accent`): the active and the actionable. Used only for: the welcome box border; the large `✻` mark leading the H1 and the `✻` in the top bar brand; prompt glyphs (`>` in REPL rows, the input box and the slash input); the `⏺` response bullets (Claude Code’s own response glyph); the active mode in the status line (auto mode); the current nav item and the selected slash-menu row; link and control hover; the focus ring; text selection; the skip link; and the download action, the only filled button. Text on a terracotta fill uses **Ember Ink** (`accent-ink`).
- **Terracotta Wash** (`accent-wash`): the background of the selected slash-menu row and the current sidebar item; never a general tint.

### Secondary
- **Edits Violet** (`mode-edits`) and **Plan Teal** (`mode-plan`): Claude Code’s own status-line colours for accept-edits and plan mode. They appear only on the active mode in the status line.

### Tertiary
- **Signal Red** (`danger`): the bypass-permissions mode row, its tag, failed copy, and the danger callout border.
- **Copied Green** (`ok`): the copy button’s confirmed state, nothing else.

### Neutral
- **Charcoal Ground** (`ground`): page background, top bar (92% with blur), theme colour.
- **Surface** (`surface`): command rows and file blocks.
- **Raised** (`raised`): inline code, keycaps, copy-button hover.
- **Rule** (`rule`): section dividers, table row rules, command and file borders.
- **Strong Rule** (`rule-strong`): box borders, table header rule, keycap border, REPL row border, scrollbar thumb.
- **Ink** (`ink`): primary text and code.
- **Ink 2** (`ink-2`): ledes, descriptions, table description cells.
- **Ink 3** (`ink-3`): labels, `$` glyphs, `## ` prefixes, URLs, step numbers, copy-button rest state. All three inks clear 4.5:1 on every surface.

### Named Rules
**The One Ember Rule.** Terracotta appears only on the uses listed under Primary. Anything else that wants emphasis gets weight or Ink, not the accent.

**The Product-Truth Hue Rule.** Violet and teal exist because Claude Code’s status line uses them. They never decorate anything outside the mode status line.

## Typography

**Display Font:** JetBrains Mono (with ui-monospace, SFMono-Regular, Menlo)
**Body Font:** Atkinson Hyperlegible Next (with Atkinson Hyperlegible, ui-sans-serif)

**Character:** The monospace carries the TUI’s voice: headings read as markdown rendered in the terminal. The hyperlegible sans carries everything a person reads rather than types.

### Hierarchy
- **Display** (700, clamp 2.125–3.5rem, 1.04, -0.035em): the H1 inside the welcome box, led by a terracotta `✻` at weight 400.
- **Headline** (700, clamp 1.5–2rem, 1.15, -0.02em, balanced): section H2s, with a hover-revealed `#` anchor in Ink 3.
- **Title** (700, 1.375rem, -0.02em): plugin names.
- **Subtitle** (500, 0.9375rem): H3/H4 sub-headings, always prefixed with a `## ` in Ink 3.
- **Body** (400, 1.0625rem, 1.6): prose; ledes and long descriptions capped at 68ch.
- **Code** (400, 0.875rem, 1.55, ligatures off): command rows, table command cells; file contents at 0.8125rem.
- **Label** (400, 0.8125rem, Ink 3, sentence case): labels above commands and demos, table headers (700), hints.

### Named Rules
**The Typed-Versus-Read Rule.** If the TUI would render it or a user would type it (headings, commands, paths, slash names, status line), it is mono. Labels, table headers, bylines, descriptions and callout titles are Atkinson.

**The No-Ligature Rule.** Code turns ligatures off so every command copies and reads exactly as typed.

## Layout

A single page inside a 72rem container with 1.25rem gutters (2rem from 768px). The hero splits about 60/40 at 1024px: welcome box, install command, mode demo and response line on the left; the slash-menu map on the right, stacking below on smaller screens. Below the hero, a 1px rule opens a two-column body at 1024px: an 11rem sticky sidebar (top 5rem) styled as the slash menu, and the content column. Below 1024px the sidebar becomes a "Sections" disclosure in the sticky 56px top bar.

Sections are separated by a 1px rule and fluid vertical padding (clamp 3.5–6rem). Section headers sit 2rem above their content. Commands stack with 0.75–1rem gaps; tables use 0.5rem row padding. Below 640px, command tables stack into command-over-description rows with the copy button pinned right, and the modes table becomes one block per mode, so nothing scrolls sideways. Long commands scroll inside their own row with a right-edge fade that drops at the scroll end. Anchor targets clear the top bar with 4.5rem scroll padding.

## Elevation & Depth

Flat. There are no shadows anywhere. Depth is three tonal steps (ground, surface, raised) plus rules: a command row sits on Surface with a Rule border; inline code and keycaps sit on Raised. The only layered element is the sticky top bar, at 92% ground with an 8px backdrop blur and a bottom rule. The keycap’s 2px bottom border is the one physical cue, and it belongs to the key.

### Named Rules
**The No-Glow Rule.** No box-shadow, glow or gradient fill. Hover and selection are expressed through colour, the accent wash, or a border shift.

## Shapes

Three radii. Keycaps, inline code and small tags use 4px. Command rows, file blocks, buttons, nav items and slash rows use 6px. Boxes drawn the way Claude Code draws them (the welcome box, callouts, the input box, the slash input and REPL command rows) use 10px with a Strong Rule border, or a terracotta border for the welcome box and an armed input. Borders are always 1px, except the keycap bottom (2px) and the active-mode underscore (2px). File blocks are named by filename in a ruled header strip, with no window chrome.

## Components

### Command Row
Every copyable command, and the core object of the page.
- **Shape:** 6px for shell (`$`), 10px with a Strong Rule border for REPL (`>`).
- **Color:** Surface fill, Rule border, Ink text; the `$` glyph is Ink 3 and the `>` glyph is terracotta.
- **Copy button:** always visible, joined by a left rule, 44px square minimum, "Copy" label shown from 768px. Hover lifts to Raised and Ink; copied turns green, failure turns red.
- **Overflow:** scrolls horizontally inside the row with a right-edge fade; never wraps.

### File Block
- **Style:** Surface fill, Rule border, 6px, a ruled header strip with the filename (mono, 0.8125rem, Ink 2) and the copy button on the right; contents at 0.8125rem / 1.6.

### Buttons
- **Download (primary):** the only filled button. Terracotta fill, Ember Ink text, 700, 6px, 44px tall, a 16px Lucide download icon; hover lifts to a lighter terracotta.
- **Keycap button:** the Shift+Tab control is a `kbd` on Raised with a Strong Rule border and 2px bottom; hover turns its border and text terracotta.
- **Menu button:** Strong Rule border, 6px, mono 0.8125rem; expanded turns terracotta.

### Boxes / Callouts
- **Corner Style:** 10px. **Border:** 1px Strong Rule; terracotta for the welcome box; Signal Red for danger. **Background:** none (ground shows through). **Padding:** 1rem 1.125rem; the welcome box 2rem 2.25rem 1.5rem from 768px.

### Navigation
- **Top bar:** sticky, 56px, `✻` brand in mono 500, byline in Ink 3 at 1024px.
- **Slash menu (hero map):** a `> /` input box with a blinking block cursor, then rows of `/id` (mono, Ink) and a purpose (Ink 3). Hover and focus strike the row forward: accent wash, terracotta name, Ink 2 purpose.
- **Sidebar:** `/id` links in mono 0.8125rem, Ink 3; hover Ink; current (scroll-spy) terracotta on the accent wash.

### Mode Status Line (signature)
Claude Code’s input box and status line. Every mode is present as a ghost (Ink 3 at 30% opacity); the active one is struck forward at full strength, bold, underscored 2px in its own colour (default Ink, edits violet, plan teal, auto terracotta). The input box border turns terracotta when armed. The status line is decorative and hidden from assistive tech; the live summary line beside the keycap carries the meaning in readable Ink 2.

### Response Line
A `⏺` in terracotta followed by mono text: Claude Code’s response bullet, used for the page’s one-line insights and asides.

### Reference Table
Ruled rows, no fills. Headers are Atkinson 700 at 0.8125rem in Ink 3 over a Strong Rule; rows are divided by Rule, the last row unruled; command cells in mono, descriptions in Ink 2.

## Do's and Don'ts

### Do:
- **Do** draw new surfaces from Claude Code’s own vocabulary: rounded boxes, prompt glyphs, the status line, the slash menu, `⏺` responses, `## ` headings.
- **Do** mark every shell command with `$` and every REPL input with a terracotta `>`, and give every command and file a visible copy button with a 44px target.
- **Do** keep terracotta to the listed uses (welcome border, `✻` marks, prompt glyphs, `⏺` bullets, active mode, current nav, hover, focus, download).
- **Do** keep every text colour at 4.5:1 or better on ground, surface and raised.
- **Do** let long commands scroll inside their row with the edge fade rather than wrapping or widening the page.
- **Do** keep motion optional: content visible by default, reveal and cursor blink only under `prefers-reduced-motion: no-preference`.

### Don't:
- **Don't** add shadows, glows or gradient fills; depth is tone and rules.
- **Don't** draw macOS window chrome or traffic lights around code; files are named by filename only.
- **Don't** use cards as structure or lay content out as a card grid; use ruled rows, tables and boxes.
- **Don't** use violet or teal outside the mode status line.
- **Don't** introduce a light theme or a second accent.
- **Don't** set prose in mono or headings in the sans.
