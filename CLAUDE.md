# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

YELL (Young Entrepreneurs Learning Labz) marketing website — a static, multi-page site for an entrepreneurship programme targeting two audiences: **students** (B2C) and **universities** (B2B). The site is at yellindia.in and operated by E-Bibil Technologies Pvt. Ltd.

## Running locally

```bash
npx serve -l 5500 .
```

A launch config exists at `.claude/launch.json` (server name: `static-server`, port 5500). No build step — all files are plain HTML/CSS/JS served statically.

## Architecture

**Page files** — each page is a `.dc.html` file (Design Component HTML format) at the project root: `Home.dc.html`, `Program.dc.html`, `Pricing.dc.html`, `Universities.dc.html`, `Proof.dc.html`, `Mentors.dc.html`, `About.dc.html`, `Apply.dc.html`, `Nav.dc.html`, `Footer.dc.html`. Pages use `<x-dc>` wrappers and `<dc-import>` for shared components (Nav, Footer).

**Design system** — lives in `_ds/yell-design-system-*/`. Contains:
- `tokens/` — CSS custom properties for colors, typography, spacing, fonts
- `styles.css` — global styles entry point
- `_ds_bundle.js` — runtime for design system components
- `_ds_manifest.json` — component registry and token inventory

**Shared scripts:**
- `support.js` — DC runtime (generated, do not edit manually)
- `animations.js` — scroll-reveal, counter animation, parallax, roadmap progress, hover effects. Uses `data-anim`, `data-counter`, `data-parallax` attributes
- `animations.css` — keyframe definitions for scroll-reveal animations
- `image-slot.js` — drag-and-drop image placeholder component (`<image-slot>`)

**Assets** — `assets/` contains logo PNGs (black wordmark, white wordmark, red mark).

## Design system tokens (key CSS variables)

Colors: `--yell-red` (#FF0000), `--yell-black` (#111), `--yell-white`, `--yell-chalk` (#F1F0EE), `--yell-linen` (#FAEFE0). Semantic aliases: `--surface-base`, `--surface-soft`, `--surface-warm`, `--surface-dark`, `--text-primary`, `--text-secondary`, `--text-muted`.

Fonts: `--font-display` (Manrope) for headlines, `--font-body` (Inter) for body text.

Spacing scale: `--space-1` (4px) through `--space-9` (96px). Content max-width: `--content-max` (1200px).

## Brand rules to follow

- **60/30/10 color rule:** ~60% white/chalk, ~30% ink/black, ~10% red. Red is a spotlight — never a wash.
- Never set body text in Poppy Red. White text only on black or red fills.
- Buttons: 8px radius, 14-16px vertical padding. Hover = `--yell-red-hover` on primary, black fill on secondary.
- Cards: white/chalk bg, 1px `--yell-line` border, 12px radius. No heavy drop shadows.
- Numbered markers (01/02/03) only for genuine sequences — never for unordered lists.
- No emoji on institutional surfaces. Icons use Lucide via CDN.
- `prefers-reduced-motion` must be respected — `animations.js` already handles this.

## Content rules

- The `₹1.2 Cr` annualised revenue figure is **withheld** — do not publish until sign-off is confirmed.
- Official name is "Young Entrepreneurs Learning Labz" — never "Leadership Lab" or "Launchpad" (Launchpad is a tier name only).
- Dual CTAs on every page: **Apply now** (students, Poppy Red fill) + **Book a call** (universities, outline).
- WCAG 2.1 AA compliance required: one `<h1>` per page, landmark regions, visible focus rings, descriptive alt text, `aria-describedby` on form errors.

## Content & structure spec

`uploads/YELL_Website_Structure.md` is the authoritative spec for page structure, section content, and copy. The design system readme at `_ds/*/readme.md` governs visual and verbal identity.
