---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

# Surface: cheat sheet homepage (src/pages/index.astro)

Mode: Read (a desk reference beside a running terminal). Job: find a command, copy it, and have it work. Constraints: all copy in src/lib/constants.ts, a copy button on every code block, GA stays, dark by use scene.

## Direction contract

THESIS: The page is rendered in Claude Code's own interface language, not a generic dev-tool template: the welcome box, the `>` input prompt, the status line, the slash menu. It refuses the centred neon hero, the fake macOS windows and the card grid.

OWN-WORLD: Warm charcoal terminal ground, warm off-white ink, one Claude-terracotta accent used only for the active and actionable. Rounded box-drawing borders the way Claude Code draws its input box. JetBrains Mono for anything typed; Atkinson Hyperlegible Next for prose. `$` marks shell commands and `>` marks REPL input, so the prompt glyph carries meaning. No glows, gradients, traffic lights or cards-as-structure.

STORY: The reader sees within a second that this is Claude Code, gets the install command, then uses the slash-menu map to jump to the layer they need. They copy commands that run as written.

FIRST VIEWPORT: Left, about 60%: the welcome box (✻ mark, title, one-line promise), the install command as a `$` row with a visible copy button, then a mock input box whose status line cycles the permission modes. Right, or below on mobile: the map, a slash-menu list of the layers with one-line purposes, which also serves as the table of contents.

FORM: The Claude Code TUI, a user-pinned world (the "Claude terminal" answer). Roll 8e196389 was advisory only; the raise taken from the declined "struck cathode" challenger: every mode is present as a ghost, and the active one is struck forward in terracotta.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Decisions recorded at the finish review

- Mode colours: the status line uses Claude Code's own per-mode colours (edits violet, plan teal, auto terracotta, default ink). This is product truth, not decoration, and the only place hues beyond the accent appear. The active mode is struck forward: full strength, bold, underscored in its colour, with the ghosts at 30% opacity.
- Display voice: H1, H2 and the `## ` sub-headings stay in JetBrains Mono as the TUI's markdown rendering; labels, table headers, bylines and callout titles use Atkinson Hyperlegible Next.
- Terracotta is limited to the welcome box border (Claude Code's own treatment), prompt glyphs, the active mode, the current nav item, hover, focus, and the download action.
