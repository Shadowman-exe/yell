# YELL — WEBSITE STRUCTURE & CONTENT

**Young Entrepreneurs Learning Labz** · yellindia.in

> Conversion-focused, WCAG 2.1 AA-compliant site map with section-by-section content.
> Facts reconciled against `README_SOURCE_OF_TRUTH.md`. Visual tokens and tonality live in
> the Claude Design system; this document governs structure, copy, and UX.
>
> Dual audience: **students** (B2C) and **universities** (B2B), routed clearly from Home.
> Dual primary CTA sitewide: **Apply now** (students) + **Book a call** (universities).

_Version 1.0 · 3 July 2026_

---

## GLOBAL ELEMENTS (every page)

### Header / navigation
- Logo (white lockup on the site's dark header) → links Home.
- Nav: **The Program · Pricing · For Universities · Proof · Mentors · About**
- Two persistent buttons, visually distinct:
  - Primary (Poppy Red fill): **Apply now**
  - Secondary (outline): **Book a call**
- Sticky on scroll. Collapses to an accessible hamburger on mobile (focus-trapped menu,
  ESC to close).

### Footer
- Tagline: *Learn. Build. Sell.*
- Quick links (all pages) · Contact block (yell@ebibil.com · +91 6299472740 · @yell.india)
- Legal: © E-Bibil Technologies Pvt. Ltd. 2026-27
- Repeated dual CTA above the footer on every page.

### Accessibility baseline (WCAG 2.1 AA — applies globally)
- Every page: one `<h1>`, logical heading order, landmark regions (`header/nav/main/footer`).
- Contrast: body text Obsidian Black on white/chalk/linen (never red text on light; never
  white text except on red or black fills).
- All interactive elements keyboard-reachable with visible focus rings; skip-to-content link.
- All images have descriptive `alt`; decorative images `alt=""`.
- Forms: visible labels (not placeholder-only), inline error text tied via `aria-describedby`,
  errors announced politely.
- Motion respects `prefers-reduced-motion`; no autoplay audio; no content flashing >3×/sec.
- Tap targets ≥ 44×44 px; text resizes to 200% without breaking layout.
- Video captions; transcripts for any audio.

### Trust signals (recurring, placed near decision points)
Rishihood University partnership · real pilot metrics · named mentors with real companies ·
real student brands · legal entity (E-Bibil Technologies Pvt. Ltd.) · guest judge (boAt) ·
scholarships. Place these adjacent to CTAs where hesitation is highest.

---

# PAGE 1 — HOME
**Type:** Landing page · **Structured on the CREATE format** · **Goal:** route + convert both audiences.

> CREATE = **C**apture · **R**elate · **E**xplain · **A**dvantages · **T**rust · **E**asy action.

### C — Capture (Hero)
- **H1:** Don't just graduate. Graduate as a founder.
- Subhead: India's first hands-on entrepreneurship programme. Students build a real
  business — source it, brand it, sell it to real customers, and pitch it live.
- Dual CTA: **Apply now** · **Book a call** (for universities)
- Eyebrow above H1: LEARN. BUILD. SELL.
- Visual: documentary photo of students selling at a pop-up (real, not stock). `alt`
  describing the scene.
- Micro-trust strip directly under CTAs: "In partnership with Rishihood University ·
  ₹45K+ single-day sales · 4 student brands launched."

### R — Relate (the problem)
- **H2:** Business is taught in theory. It's learned in the market.
- Short copy naming the gap: students graduate having *studied* business without ever
  running one — no real customers, no real revenue, no real stakes.
- Two-column contrast block: **Classroom** (case studies, exams, hypotheticals) vs
  **YELL** (real product, real customers, real profit). *Structural, not decorative.*

### E — Explain (how it works)
- **H2:** From idea to first sale — the YELL journey.
- The 4 modules as a **numbered sequence** (numbering is earned here — it's a real process):
  1. Business Foundation & Market Discovery
  2. Branding, AI Tools & Negotiation
  3. Digital Presence & Sales Execution
  4. Pitching, Storytelling & Demo Day
- One line each. CTA: **See the full program →** (→ Page 2)

### A — Advantages (why YELL)
- **H2:** What you walk away with.
- Benefit cards (outcomes, not features): a real registered-brand experience · first
  real revenue · mentorship from operators · a pitch-ready venture · a founder portfolio
  piece · Demo Day recognition.
- Each card is a concrete outcome, not a buzzword.

### T — Trust (proof)
- **H2:** It already works. Here's the proof.
- Stat band (large display numbers): 20 students · 4 brands · ₹45K+ best day · 42% avg
  margin · 1,000+ customers · 200+ mentor hours.
- Brand logos row: SnacQo · Nover Noir · Frags & Flavs · Ghar Sajaoo.
- One-line pilot caption + **Read the full story →** (→ Page 5).
- Guest-judge trust line: "Pitch Day judged by Arun Mittal, boAt."
- *(Do not display ₹1.2 Cr until public-use is confirmed.)*

### E — Easy action (dual conversion)
- **H2:** Two ways to start.
- Split panel:
  - **Students:** "Ready to build your first business?" → **Apply now**
  - **Universities:** "Bring YELL to your campus." → **Book a call**
- Reassurance under each: "No business background needed. We start from zero." /
  "No curriculum restructuring. Turnkey delivery."

---

# PAGE 2 — THE PROGRAM
**Type:** Product / detail · **Goal:** explain fully, drive Apply.

### Sections
1. **Hero** — H1: The programme where you build a real business. Subhead + **Apply now**.
2. **How it works** — the full student journey (Selection → Team Formation → Venture
   Creation → Validation → Sourcing → Branding → GTM → Pop-Up → Meta Session → Pitch Day →
   Report). Rendered as a stepped, numbered timeline.
3. **The 4 modules** — each expanded: what you learn + what you do + the real-world
   activity (e.g. Module 1 includes a Sadar Bazaar / Chawri Bazaar market visit).
4. **What you actually do** — checklist block: choose a product, visit wholesale markets,
   negotiate with vendors, build a brand, set up an online store + physical pop-up, sell
   to real customers, pitch on Demo Day.
5. **Format & commitment** — hybrid (weekday virtual + weekend on-ground, Delhi NCR).
   Duration varies by tier — link to Pricing.
6. **Certification & recognition** — Certificate of Completion, Demo Day awards (Top
   Brand / Best Team / Most Profitable Venture), Young CEO feature, a real venture for
   the portfolio.
7. **CTA band** — **Apply now** + "See pricing →".

---

# PAGE 3 — PRICING & TIERS
**Type:** Pricing · **Goal:** transparent tier choice, drive Apply. (Peer research: cost
and program length are top enrollment factors — lead with clarity.)

### Sections
1. **Hero** — H1: Pick how you want to build. Subhead: three ways in, one outcome — a real
   business.
2. **Tier table** — clean, scannable, one tagline per tier ("best for…"):

   | | Weekender | Bootcamp | Launchpad |
   |---|---|---|---|
   | Price | ₹4,790 / weekend | ₹1,49,997 | ₹2,29,999 |
   | Best for | Curious first-timers | Committed students | Serious founders |
   | Duration | 2 days/week · 1 module | 8 weeks · 10–12 hrs/wk | Self-paced |
   | Outcome | Learn one module, lean | Launch a full venture | 1-on-1 until first sale / MVP |

   - GST-inclusive noted. Each tier has its own **Apply** button.
3. **Scholarships** — up to 50% (Bootcamp): Women in Entrepreneurship · Merit-Based ·
   Differently Abled. Group-enrollment discounts. Reassuring, clear eligibility.
4. **What's included (all tiers)** — mentorship, market immersion, tools, Demo Day.
5. **FAQ (pricing-specific)** — refunds, what GST covers, group rates, payment.
6. **CTA band** — **Apply now** + "Questions? Contact us →".

---

# PAGE 4 — FOR UNIVERSITIES
**Type:** B2B landing · **Goal:** book a partnership call. Register = credible, structured,
evidence-first (institutional tonality).

### Sections
1. **Hero** — H1: Turn your campus into a launchpad for founders. Subhead: a turnkey
   experiential-entrepreneurship layer — no curriculum restructuring. CTA: **Book a call**.
2. **The institutional case** — lead with evidence: the Rishihood pilot outcomes framed as
   *what the institution produced*.
3. **Strategic advantages** — four blocks:
   - **NAAC & NIRF** — strengthens Innovation Ecosystem & Best Practices scores.
   - **NEP 2020** — satisfies the experiential / skill-based learning mandate.
   - **Brand leadership** — a "Startup-Driven Campus" identity.
   - **Admissions magnet** — a differentiating "Launch Your Own Business" proposition.
4. **What's included** — the ₹10,00,000 annual partnership: selection, delivery,
   mentorship, market immersion, pop-up execution, Pitch Day, Entrepreneurship Report.
   One cohort per semester.
5. **Partnership roadmap** — numbered: Alignment → Cohort launch → Execution → Showcase &
   reporting → Scale & renewal.
6. **Proof for decision-makers** — pilot metrics + named senior mentors (Accenture, J&J,
   DuPont, boAt) as institutional credibility.
7. **CTA band** — **Book a call** + brochure download.

---

# PAGE 5 — PROOF / RESULTS
**Type:** Trust / case study · **Goal:** remove doubt, feed both CTAs. This is the trust
engine of the site.

### Sections
1. **Hero** — H1: The proof is in the pop-up. Subhead: what 20 students built in one pilot.
2. **Pilot at a glance** — the stat band: 20 students · 4 brands · 8 market visits · 3-day
   pop-ups · 200+ mentor hours · 1,000+ customers · ₹45K+ best day · 42% avg margin ·
   ₹10K seed grant per team. *(₹1.2 Cr held pending sign-off.)*
3. **The brands** — a card per venture with real numbers:
   - **SnacQo** — healthy flavored snacks · 5 members · ₹47,200 sales · 38% margin.
   - **Nover Noir** — accessible premium perfume · 4 members · ₹65,000 sales · 72% margin.
   - **Frags & Flavs** — premium fragrance & food gifting.
   - **Ghar Sajaoo** — affordable aesthetic home décor.
4. **The journey in pictures** — documentary photo gallery (sourcing, pop-ups, Pitch Day),
   all with descriptive alt text.
5. **Pitch Day** — judged by Arun Mittal (boAt) & Jishnu Changkakoti. Awards recap.
6. **Social proof** — the content traction (5,501+ organic views, +213% profile views).
7. **CTA band** — dual: **Apply now** · **Book a call**.

---

# PAGE 6 — MENTORS
**Type:** Trust / team · **Goal:** credibility, drive Apply. (Real people with real
companies = trust.)

### Sections
1. **Hero** — H1: Learn from people who've built and scaled. Subhead: operators, founders,
   and specialists — not lecturers.
2. **Senior mentors** — Shubhonil (ex-MD, Accenture) · Jishnu (ex-Dir, Johnson & Johnson) ·
   Arun (PR Dir, boAt Lifestyle) · Philipp (ex-Principal Partner, DuPont).
3. **Core mentor team** — Anindya Singh (Business Strategist, dss+) · Om Sharan Singh
   (Design) · Karoline-Sophie Klenke (Healthcare) · Ekta Ruhamah (Program Manager, ex-Adobe)
   · Chaitnya (Litigation) · CA Sumit Kumar (Founder, Quantivon) · Catherine Kotsiopoulou
   (Founder, KÈOS) · Dimitris Vervitas (Foreign Trade) · Ravi (Business) · Ajay (PM,
   Microsoft) · Vinita (Google) · Fredrick (Apple).
   - Grid, **not numbered** (not a sequence). Photo + name + role. Consistent card sizing.
4. **How mentorship works** — 200+ mentor hours per cohort; weekly checkpoints; 1-on-1 in
   Launchpad.
5. **CTA band** — **Apply now**.

---

# PAGE 7 — ABOUT
**Type:** Story / trust · **Goal:** legitimacy + mission.

### Sections
1. **Hero** — H1: We believe every student deserves to build something of their own.
2. **The story** — why YELL exists: the gap between studying business and running one.
3. **Vision & mission** — Vision: a generation of execution-driven entrepreneurial
   thinkers. Mission: structured business-building environments inside universities.
4. **Operating principles** — learn by doing · build before perfection · customer-first ·
   ownership · feedback-driven iteration.
5. **The company** — E-Bibil Technologies Pvt. Ltd. (legitimacy: legal entity, contact).
6. **What's next** — growth plan across Delhi NCR universities.
7. **CTA band** — dual: **Apply now** · **Book a call**.

---

# PAGE 8 — APPLY / CONTACT
**Type:** Conversion · **Goal:** capture the application / partnership enquiry.

### Sections
1. **Hero** — H1: Start here. Subhead: two paths — building a business, or bringing YELL
   to your campus.
2. **Path toggle** — accessible tabs/radio: **I'm a student** / **I'm a university**.
   - **Student form:** name, email, phone, city, college (optional), tier of interest
     (Weekender/Bootcamp/Launchpad), "why you want in" (short). Solo or group.
   - **University form:** name, role, institution, email, phone, best time to call.
   - Both: visible labels, inline validation, `aria-describedby` errors, success confirmation.
3. **Reassurance** — "No business background needed." / "No curriculum restructuring."
4. **Contact block** — yell@ebibil.com · +91 6299472740 · @yell.india · yellindia.in.
5. **FAQ** — the public FAQ set:
   - Who can apply? Young hustlers, college students, professionals across India.
   - Is it hybrid? Yes — weekdays virtual, weekends on-ground in Delhi NCR.
   - Do I need prior business knowledge? No — we start from zero.
   - Can I apply with friends? Yes — solo or as a group.
   - Do students get certificates? Yes — plus social exposure, Demo Day awards, and a
     real business to grow.
6. **Final CTA** — submit + WhatsApp quick-contact option.

---

## SITE MAP SUMMARY

```
Home (CREATE) ──┬── The Program ── Pricing ──┐
                │                             ├──► Apply / Contact
                ├── For Universities ─────────┘        ▲
                ├── Proof / Results ───────────────────┤
                ├── Mentors ───────────────────────────┤
                └── About ─────────────────────────────┘
```

Every page ends in a CTA band. Student pages funnel to **Apply**; the universities page
funnels to **Book a call**; Home, Proof, and About offer both.

---

## CONVERSION & TRUST CHECKLIST

- [ ] Dual CTA visible in header on every page, above every footer.
- [ ] Trust signal placed within one screen of every primary CTA.
- [ ] Pricing transparent and scannable (top enrollment factor).
- [ ] Real names, real numbers, real brands — no stock, no vague claims.
- [ ] One clear goal per page; minimal competing links in body.
- [ ] Mobile: <3s load, tap targets ≥44px, sticky nav, no pinch-zoom needed.
- [ ] ₹1.2 Cr figure withheld until public-use confirmed.

## WCAG 2.1 AA CHECKLIST

- [ ] One H1 per page; logical heading order; landmark regions.
- [ ] Color contrast ≥ 4.5:1 body / 3:1 large; no red text on light backgrounds.
- [ ] Keyboard operable; visible focus; skip-to-content link.
- [ ] Form labels visible; errors announced and linked via aria.
- [ ] All meaningful images have alt; decorative images alt="".
- [ ] `prefers-reduced-motion` respected; no autoplay audio; no >3 flashes/sec.
- [ ] Text resizes to 200%; tap targets ≥ 44×44px; captions on video.

---

_End of Website Structure. Pair with the Claude Design system for visual execution and the
source-of-truth for all figures._
