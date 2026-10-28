---
target: cheatsheet homepage
total_score: 19
max_score: 40
na_heuristics: 
p0_count: 1
p1_count: 3
target_identity: "file:/Users/todd.greco/current_work/claude-code-cli-cheatsheet/src/pages/index.astro"
target_fingerprint: "sha256:b5022a6845d66fc727017c696e9eecb4c77263c3a4e3701bc2231de2d181e262"
target_path: /Users/todd.greco/current_work/claude-code-cli-cheatsheet/src/pages/index.astro
timestamp: 2026-10-27T23-32-29Z
slug: src-pages-index-astro
---
# Critique: Claude Code CLI cheat sheet (src/pages/index.astro)
Method: dual-agent. Heuristics 19/40 (Poor): H1 2, H2 2, H3 3, H4 1, H5 2, H6 2, H7 1, H8 2, H9 1, H10 3.
Specificity: a generic dark dev-tool template. Fake macOS terminal chrome on 23 blocks, 38 glow cards, a cyan-to-violet divider, a dot grid, an 80vh centred hero. Detector: 187 browser findings (152 ai-color-palette, 13 line-length, 6 all-caps, 4 undersized text, 3 dark-glow, em-dash overuse, blinking cursor); CLI scan clean.
Priority: P0 copy buttons hidden except on hover (global.css:210-224). P1 commands truncated or hidden (MCP cards, hooks JSON, mobile launch descriptions). P1 Layer numbering contradicts The Big Picture. P1 template sameness, cycler inert and inaccurate. P2 a11y: tertiary text 2.4–2.7:1, no reduced-motion, blank page without JS, 375px overflow, missing aria-current/expanded.
Copy: 23+ spaced em-dashes, straight quotes, "isn't X, it's Y" tell, "— subtitle" headings, "Here's…" x7, /fast repeated three times.
