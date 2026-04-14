# VunaFX

A structured, self-paced 52-week forex trading curriculum — built for traders who want a deliberate path to demonstrated edge, not signals or shortcuts.

**Live site:** https://lenana254.github.io/vuna-fx/

---

## What is VunaFX?

VunaFX is a 52-week forex trading curriculum tracker. It covers the full journey from zero — risk mathematics, broker mechanics, SMC (Smart Money Concepts) market structure, demo trading with journaling discipline, and a progressive live-trading scale-up — through to a Month 12 honest assessment of whether you've built a real, statistically provable edge.

The curriculum is structured across 5 phases:

| Phase | Weeks | Focus |
|---|---|---|
| 1 — Compressed Foundations | 1–4 | Risk math, position sizing, market structure. No trading. |
| 2 — Demo with Rigor | 5–12 | 50+ journaled demo trades on one defined setup. |
| 3 — Live Micro-Size | 13–26 | Live trading at 0.5% risk on 10–20% of capital. |
| 4 — Scale on Demonstrated Edge | 27–39 | Capital scaling, then risk % scaling, only if edge is proven. |
| 5 — Compounding & Honest Assessment | 40–52 | Steady-state execution and Month 12 review. |

**Who it's for:**

- Someone learning forex trading from scratch with a mentor
- A mentor who wants to give a student a structured, week-by-week framework
- Anyone who wants to replace "watching YouTube and guessing" with a system that builds skill deliberately

The curriculum is intentionally opinionated: one pair, one session, one setup — at least for Year 1. The reasoning is in the material.

---

## Using the live site

Visit **https://lenana254.github.io/vuna-fx/**

**Home — Curriculum tracker**

The home page shows all 52 weeks grouped into their 5 phases. Each phase has a progress bar. Each week card has:
- A checkbox to mark the week complete (saved in your browser's `localStorage` — no account needed)
- The week title and phase label
- A click-through to the full week content

**Week view**

Clicking any week opens the full content for that week: learning objectives, core concepts, practical exercises, trainer check-in topics, and self-assessment questions.

Two buttons are available on every week:
- **Mark Complete** — toggles completion. Saved locally. Survives page refresh.
- **Study with Claude** — opens a new Claude conversation with the week's content pre-loaded as context, so you can ask questions, work through exercises, and get explanations without copy-pasting.

**Reference**

The Reference page contains the curriculum's operating principles, kill switches (print these), and the full journaling system — the infrastructure that makes the curriculum work.

**Appendices**

The Appendices page contains the Part A Eval (taken at Week 6), the Month 4 Survival Guide, recommended resources, a full glossary, and journaling templates.

---

## Forking and customising for your own curriculum

The content and the app are fully decoupled. All curriculum content lives in plain markdown files in the `/curriculum` folder. The app reads them at build time — no database, no CMS.

**To use this as a template for your own curriculum:**

**1. Fork the repo**

```bash
git clone https://github.com/lenana254/vuna-fx.git my-curriculum
cd my-curriculum
npm install
```

**2. Replace the markdown content**

Edit the files in `/curriculum/`:

```
curriculum/
  meta.md          ← operating principles, kill switches, journaling system
  appendices.md    ← reference material, glossary, templates
  week-01.md       ← one file per week
  week-02.md
  ...
  week-52.md
```

Each week file is plain markdown. The app renders whatever is in these files. The only content it reads from code (not markdown) is the week titles and phase groupings — update those in `src/data/curriculum.js` to match your content.

**3. Update week titles and phase structure**

Open `src/data/curriculum.js` and edit the `PHASES` and `WEEKS` arrays:

```js
export const PHASES = [
  {
    id: 1,
    name: 'Your Phase Name',
    label: 'Phase 1',
    weeks: [1, 2, 3, 4],
    description: 'What this phase covers.',
  },
  // ...
]

export const WEEKS = [
  { number: 1, title: 'Your Week 1 Title', phase: 1 },
  // ...
]
```

The number of weeks doesn't have to be 52 — the app renders whatever weeks are defined in the `WEEKS` array.

**4. Update the repo name and base URL**

In `vite.config.js`, change the base to match your GitHub repo name:

```js
export default defineConfig({
  base: '/your-repo-name/',
})
```

In `package.json`, update the `name` field.

**5. Deploy**

```bash
npm run deploy
```

This builds the app and pushes the `dist/` folder to the `gh-pages` branch. Enable GitHub Pages on your fork under **Settings → Pages → Deploy from branch → `gh-pages`**.

---

## Tech stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | React 18 (Vite) | Fast build, simple component model |
| Styling | Plain CSS with custom properties | No dependencies, full control, easy to override |
| Markdown | `marked` | Lightweight, no runtime parser overhead |
| Routing | Hash-based (`#/week/1`) | Works on GitHub Pages with no server config |
| State | `localStorage` | No backend needed; progress survives refresh |
| Deployment | `gh-pages` npm package | One command deploy to GitHub Pages |

No UI component libraries. No Tailwind. No backend. No database. The entire app is a single static bundle — 94 kB gzipped.

---

## Running locally

**Requirements:** Node.js 18+

```bash
# Install dependencies
npm install

# Start dev server (hot reload)
npm run dev
```

Opens at `http://localhost:5173/vuna-fx/`

```bash
# Production build
npm run build

# Preview the production build locally
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

---

## Curriculum files

```
curriculum/
├── meta.md          Operating principles, kill switches, journaling system
├── appendices.md    Part A eval, Month 4 guide, resources, glossary, templates
├── week-01.md       Forex Market Fundamentals
├── week-02.md       Leverage, Margin, and the Mathematics of Risk
├── week-03.md       Position Sizing and Broker Mechanics
├── week-04.md       SMC Foundations: Market Structure
│   ...
├── week-12.md       Demo Trading: 50-Trade Gate (Phase 2 checkpoint)
│   ...
├── week-26.md       Phase 3 Decision
│   ...
└── week-52.md       Close Out Year 1
```

All content is plain markdown. Edit it directly in any text editor or on GitHub.

---

## License

MIT — fork it, adapt it, use it.
