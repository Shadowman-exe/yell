# YELL — Design System

**Young Entrepreneurs Learning Labz**
Visual identity, UI tokens, components, and tonality for every YELL surface — website, decks, brochures, social, and institutional documents.

> _Version 1.0 · 3 July 2026 · Primary audience lens: University / Institutional_

---

## 1. Company context

YELL (Young Entrepreneurs Learning Labz) positions itself as **India's first hands-on entrepreneurship programme**. The tagline is **Learn. Build. Sell.** Students don't study business — they run one: real customers, real markets, real pop-ups, real margins.

The brand holds a deliberate tension: **energy without chaos.** Poppy Red carries the ambition; Obsidian Black and generous whitespace carry the credibility. Institutional surfaces (partnership decks, reports) lean on the structure; student surfaces (Instagram, flyers) spend more of the red.

**Personality in one line:** Bold enough to excite a student, structured enough to convince a Dean.

### Two audience registers
- **Institutional (default):** Deans, registrars, innovation-cell heads. Proof before promise. Quantify everything.
- **Student (marketing/social):** College students, first-time founders. Direct, punchy, second-person, ALL-CAPS rallying lines allowed.

Both share the same four core traits: Empowering · Action-oriented · Professional · Practical.

### Pilot proof points (designed to be read across a room)
₹45K+ · 42% avg margin · 1,000+ · Rishihood pilot: 20 students, 4 live ventures.
> Note: ₹1.2 Cr annualised revenue is **pending public-use sign-off** — do not publish until confirmed.

---

## 2. Sources provided

- `uploads/YELL_Design_System.md` — the governing brand + tonality guide (reproduced and reconciled here).
- Logos: `Primary logo - YELL black.png`, `Primary logo - YELL White.png`, `Yell Logo Full Transparent white text.png` (the red-circle spark-bulb mark).
- 13 Instagram marketing images (`YELL Insta mar 0XX.jpg`) — documentary photography + red/cream flat illustrations on black textured fields.

No codebase or Figma file was provided. Components, UI kits, and slides here are authored from the brand guide and the marketing imagery.

---

## 3. Content fundamentals (how YELL sounds)

**Core voice (always true):**
- **Empowering** — students are founders, not attendees. Not cheerleading or empty motivation.
- **Action-oriented** — leads with verbs and outcomes; building and selling. Not passive or theoretical.
- **Professional** — structured, credible, backed by real numbers. Not stiff or jargon-heavy.
- **Practical** — concrete specifics: ₹, weeks, deliverables, real brands. Not vague promises.

**One-line test:** *Would this convince a university Dean and still excite an 18-year-old?* If it only does one, it's off-brand.

### Institutional register (default)
- Lead with credibility and evidence, then ambition. Proof before promise.
- Frame students as outcomes the institution produces ("your campus launches founders").
- Quantify everything; numbers as figures (₹45,000, 42%) so they scan.
- Sentence case, measured complete sentences, minimal exclamation.
- Example: _"The Rishihood pilot ran 20 students across 4 live ventures, generating a 42% average margin."_

### Student register (social/marketing)
- Direct, punchy, second-person. Short lines. Fragments allowed.
- Sells the *doing*, not the credential.
- ALL-CAPS rallying phrases allowed: _"DON'T JUST GRADUATE — GRADUATE AS FOUNDERS."_
- Examples: _"Stop studying business. Start running one." · "Profit is the only grade."_

### Vocabulary
- **Say:** founder, venture, build, launch, sell, real customers, hands-on, market immersion, pop-up, cohort, execution, Learn. Build. Sell.
- **Avoid:** synergy, holistic, leverage (filler), disrupt, world-class, cutting-edge, game-changer, revolutionary, "unlock your potential," any claim without a number behind it.
- **Handle with care:** "guaranteed," "#1," superlatives — only if literally true and sourced. "India's first hands-on entrepreneurship programme" is the approved lead claim.

### Casing & I/you
- Sentence case for institutional copy; ALL-CAPS reserved for short rallying phrases on student surfaces only.
- Second-person ("you," "your campus") throughout. **No emoji** on institutional surfaces; social uses the brand mark and photography instead of emoji.
- Empty states / errors: direct and forward-looking, never an apology. _"No cohorts yet. Launch your first one this semester."_

---

## 4. Visual foundations

**Color.** Five core: Poppy Red `#FF0000`, Obsidian Black `#111111`, Pure White `#FFFFFF`, Chalk White `#F1F0EE`, Classic Linen `#FAEFE0`. Functional extensions for states/hierarchy stay within brand temperature (no new hues). **60/30/10 rule** — ~60% white/chalk, ~30% ink, ~10% red. Red is a spotlight, never a wash; red is for *one thing per view*. Warm Linen backgrounds signal a feature/proof zone. Never set body text in Poppy Red. White text only on Obsidian Black or Poppy Red fills — never on Chalk or Linen.

**Typography.** One display face (Galano Grotesque Alt → **Manrope** substitute, 600/700) carries the personality; **Inter** stays neutral underneath. Numbers are a brand feature — key metrics set large in the display face, often in Poppy Red. Type scale from Display 56/60 down to Eyebrow 12/16 (uppercase, +8% tracking). Headlines sentence case (institutional) or ALL-CAPS rallying (student).

**Spacing & layout.** 4·8·12·16·24·32·48·64·96 scale. 12-column grid, 1200px content max. Corner radius: cards/buttons 8–12px, photography 12–16px, pill only for tags/chips. Numbered markers (01/02/03) only for genuine sequences.

**Backgrounds.** Three moods: clean white/chalk (institutional structure), warm Linen (proof/feature zones), and full black or full Poppy Red fields (student/social energy, often with a subtle crumpled-paper / charcoal texture behind flat red-and-cream illustrations). No gradients as brand wash.

**Imagery.** Documentary, not stock — real students, real markets, real pop-ups. Warm, candid, in-the-field. Photo surfaces carry white ALL-CAPS display headlines and the white logo top-right. Illustration style (when used): flat, grainy, red/coral + cream palette on charcoal-textured black.

**Dividers.** Hairline `--yell-line`, or a short ~64px Poppy Red rule as a section-opener accent.

**Motion & states.** Restrained. Hover = darker (`--yell-red-hover` on red fills; black fill on secondary). No bounces or decorative loops. Buttons 8px radius, 14–16px vertical padding.

**Cards.** White or chalk bg, 1px `--yell-line` border, 12px radius, 24–32px padding. Feature cards may use Linen or a black fill. No heavy drop shadows — the system is border-and-whitespace led, not shadow-led.

---

## 5. Iconography

The brand's only fixed mark is the **spark-bulb logo** — a filament that forms the YELL "Y" inside a Poppy Red circle. No proprietary icon set was provided.

- **Logo assets** live in `assets/` (black wordmark, white wordmark, red-circle mark).
- **UI icons:** no brand icon font exists. This system uses **Lucide** (CDN) as the substitute — a clean, medium-stroke line set that matches YELL's structured-modern feel. *Flagged substitution: replace with YELL's own set if one is adopted.*
- **No emoji** as UI iconography. Numbered markers (01/02/03) act as the brand's signature "iconography" for sequences.
- **Do not** redraw or reconstruct the spark-bulb mark — only use the supplied PNGs.

---

## 6. Index / manifest

**Root**
- `styles.css` — global entry (import list only).
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`.
- `assets/` — logos + documentary photography.
- `SKILL.md` — Agent Skill wrapper.

**Components** (`components/`) — reusable primitives from the brand guide's baseline specs:
`Button`, `Card`, `StatBlock`, `EyebrowLabel`, `SectionRule`, `Tag`, `NumberedMarker`, `Logo`.

**UI kits** (`ui_kits/`)
- `website/` — institutional marketing site (hero, proof stats, curriculum, partnership CTA).
- `social/` — student-register Instagram post templates.

**Slides** (`slides/`) — 16:9 (1280×720) deck samples: title, stat/proof, section divider, comparison, big quote.

**Templates** (`templates/`) — reusable Design Components consuming projects can copy:
- `partnership-report/` — institutional partnership one-pager / brochure.

**Foundation cards** — specimen `.html` across the project, tagged `@dsCard`, populate the Design System tab.

---

## 7. Caveats / substitutions
- **Galano Grotesque Alt** is not web-licensed → **Manrope** used (the guide's own approved substitute; confirmed by the brand owner). Swap in the licensed face for print/owned surfaces.
- **Lucide** icons substitute for an absent brand icon set.
- No source codebase/Figma — components are authored from written specs, so props/inventory reflect the guide, not an existing library.

---

## Governance
This document + the brand guide are the visual + verbal authority. Facts (names, prices, figures) defer to the source-of-truth. Official name: **Young Entrepreneurs Learning Labz** — never "Leadership Lab" or "Launchpad." Don't introduce colors, typefaces, or claims outside this system without updating it here.
