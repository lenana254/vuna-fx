# VunaFX — Manual End-to-End Test Cases

**App URL (live):** https://lenana254.github.io/vuna-fx/
**App URL (local):** http://localhost:5173/vuna-fx/
**Last updated:** 2026-04-14

## How to use this document

Run these tests against either the local dev server (`npm run dev`) or the deployed GitHub Pages URL. Record Pass or Fail in the final column. Note any defects with a short description in the same cell.

Fresh-load means: open a private/incognito window, navigate to the app URL, and clear `localStorage` if needed (`DevTools → Application → Local Storage → Clear All`).

---

## 1. Navigation

| ID | Description | Steps | Expected Result | Pass / Fail |
|---|---|---|---|---|
| NAV-01 | Curriculum link loads home page | 1. Open the app. 2. Click **Curriculum** in the nav. | Home page loads. All 5 phase sections are visible. URL hash is `#/` or empty. | |
| NAV-02 | Reference link loads Reference page | 1. From any page, click **Reference** in the nav. | Reference page loads. Page heading reads "Reference". URL hash is `#/reference`. | |
| NAV-03 | Appendices link loads Appendices page | 1. From any page, click **Appendices** in the nav. | Appendices page loads. Page heading reads "Appendices". URL hash is `#/appendices`. | |
| NAV-04 | Active nav link is highlighted on home | 1. Navigate to `#/`. | **Curriculum** link has visually distinct active styling (lighter colour). Other links are muted. | |
| NAV-05 | Active nav link is highlighted on Reference | 1. Navigate to `#/reference`. | **Reference** link has active styling. Curriculum and Appendices links are muted. | |
| NAV-06 | Active nav link is highlighted on Appendices | 1. Navigate to `#/appendices`. | **Appendices** link has active styling. Other links are muted. | |
| NAV-07 | Active nav link is highlighted on Week view | 1. Click any week card to open a week. | No nav link shows as active (week view is not a top-level nav destination). | |
| NAV-08 | Browser back from week view returns to home | 1. Open home page. 2. Click any week card. 3. Press browser Back button. | Home page is restored. Scroll position is at or near the top. | |
| NAV-09 | Browser forward re-opens week view | 1. Complete NAV-08. 2. Press browser Forward button. | The week view that was open before Back is restored. | |
| NAV-10 | Browser back from Reference returns to previous page | 1. Open home. 2. Click Reference. 3. Press Back. | Home page is restored. | |
| NAV-11 | VunaFX brand link returns to home | 1. Navigate to any week or reference page. 2. Click **VunaFX** in the top-left of the nav. | Home page loads. | |

---

## 2. Curriculum Page

| ID | Description | Steps | Expected Result | Pass / Fail |
|---|---|---|---|---|
| CUR-01 | All 5 phase sections render | 1. Fresh-load the app. | Five phase sections are visible: Phase 1 — Compressed Foundations, Phase 2 — Demo with Rigor, Phase 3 — Live Micro-Size, Phase 4 — Scale on Demonstrated Edge, Phase 5 — Compounding & Honest Assessment. | |
| CUR-02 | Phase labels render correctly | 1. Inspect each phase section header. | Each phase displays its badge label (PHASE 1 through PHASE 5) and full phase name. | |
| CUR-03 | Phase descriptions render | 1. Inspect each phase section header. | Each phase shows a one-line description below the title. No description is blank or shows raw placeholder text. | |
| CUR-04 | Phase 1 contains exactly 4 week cards | 1. Count week cards in Phase 1 section. | 4 cards: Week 01–04. | |
| CUR-05 | Phase 2 contains exactly 8 week cards | 1. Count week cards in Phase 2 section. | 8 cards: Week 05–12. | |
| CUR-06 | Phase 3 contains exactly 14 week cards | 1. Count week cards in Phase 3 section. | 14 cards: Week 13–26. | |
| CUR-07 | Phase 4 contains exactly 13 week cards | 1. Count week cards in Phase 4 section. | 13 cards: Week 27–39. | |
| CUR-08 | Phase 5 contains exactly 13 week cards | 1. Count week cards in Phase 5 section. | 13 cards: Week 40–52. | |
| CUR-09 | Total week card count is 52 | 1. Count all week cards across all phases. | Exactly 52 cards are present. | |
| CUR-10 | Phase progress counters show 0/n on fresh load | 1. Fresh-load the app. 2. Check each phase's progress counter. | Phase 1 shows 0/4, Phase 2 shows 0/8, Phase 3 shows 0/14, Phase 4 shows 0/13, Phase 5 shows 0/13. | |
| CUR-11 | Phase progress bars are empty on fresh load | 1. Fresh-load the app. 2. Inspect each phase progress bar. | All 5 phase progress bars show 0% fill (empty). | |
| CUR-12 | Overall progress shows 0/52 on fresh load | 1. Fresh-load the app. 2. Check the overall progress section at the top of the page. | Text reads "0 of 52 weeks complete". Progress bar is empty. | |
| CUR-13 | Nav shows 0 / 52 weeks on fresh load | 1. Fresh-load the app. | Nav bar right-hand side shows "0 / 52 weeks". | |
| CUR-14 | Week card titles match curriculum | 1. Check Week 01 card title. 2. Check Week 07 card title. 3. Check Week 52 card title. | Week 01: "Forex Market Fundamentals". Week 07: "Defining Your ONE Setup". Week 52: "The Month 12 Assessment (Week 4 of 4): Close Out Year 1". | |
| CUR-15 | Week card shows week number | 1. Inspect any week card. | Card displays the zero-padded week number (e.g. "Week 01", "Week 26"). | |

---

## 3. Week View

| ID | Description | Steps | Expected Result | Pass / Fail |
|---|---|---|---|---|
| WEK-01 | Clicking a week card opens the correct week | 1. Click the Week 01 card. | Week view opens. Title reads "Week 01 — Forex Market Fundamentals". URL hash changes to `#/week/1`. | |
| WEK-02 | Week title in view matches card title | 1. Note the title on the Week 05 card. 2. Click it. | The week view heading matches the card title exactly. | |
| WEK-03 | Phase badge is shown in week view | 1. Open any week view. | A phase badge (e.g. "PHASE 1 · COMPRESSED FOUNDATIONS") is displayed above the week title. | |
| WEK-04 | Completion status is shown | 1. Open a week that has not been marked complete. | Status text below the title reads "Not yet complete". | |
| WEK-05 | Learning objectives section renders | 1. Open Week 01. 2. Scroll to the content area. | A "Learning objectives" heading is present with a bulleted list beneath it. | |
| WEK-06 | Core concepts section renders | 1. Open Week 01. | A "Core concepts" heading (or equivalent) is present with concept definitions. | |
| WEK-07 | Practical exercises section renders | 1. Open Week 01. | A "Practical exercises" heading is present with a numbered list of exercises. | |
| WEK-08 | Trainer check-in topics render | 1. Open Week 01. | A "Trainer check-in topics" heading is present with bullet points. | |
| WEK-09 | Self-assessment questions render | 1. Open Week 01. | A "Self-assessment questions" heading is present with questions. | |
| WEK-10 | Common pitfalls section renders | 1. Open Week 01. | A "Common pitfalls" heading is present. | |
| WEK-11 | Week 06 renders correctly (eval week — minimal content) | 1. Open Week 06. | Page renders without error. Content explains the Part A Eval and scoring summary. No blank page. | |
| WEK-12 | Mark Complete button is visible | 1. Open any week. | A green "Mark Complete" button is visible in the actions row. | |
| WEK-13 | Study with Claude button is visible | 1. Open any week. | A "✦ Study with Claude" button is visible in the actions row. | |
| WEK-14 | Back button is visible and functional | 1. Open any week. | A "← Curriculum" back button is visible at the top. Clicking it returns to the home page. | |
| WEK-15 | Previous week navigation works | 1. Open Week 05. 2. Click the "← Week 4" button at the bottom. | Week 04 view opens. | |
| WEK-16 | Next week navigation works | 1. Open Week 05. 2. Click the "Week 6 →" button at the bottom. | Week 06 view opens. | |
| WEK-17 | Week 01 has no Previous button | 1. Open Week 01. | The Previous navigation button is disabled or absent. | |
| WEK-18 | Week 52 has no Next button | 1. Open Week 52. | The Next navigation button is disabled or absent. | |
| WEK-19 | Direct URL navigation works | 1. Paste `http://localhost:5173/vuna-fx/#/week/27` into the browser address bar. | Week 27 view loads correctly. | |

---

## 4. Progress Tracking

| ID | Description | Steps | Expected Result | Pass / Fail |
|---|---|---|---|---|
| PRG-01 | Checking a week updates the phase counter | 1. Fresh-load the app. 2. Click the checkbox on Week 01. | Phase 1 counter changes from 0/4 to 1/4. | |
| PRG-02 | Checking a week updates the phase progress bar | 1. Fresh-load the app. 2. Check Week 01. | Phase 1 progress bar fills to approximately 25%. | |
| PRG-03 | Checking a week updates the overall progress bar | 1. Fresh-load. 2. Check Week 01. | Overall progress shows "1 of 52 weeks complete". Progress bar fills slightly. | |
| PRG-04 | Checking a week updates the nav counter | 1. Fresh-load. 2. Check Week 01. | Nav right-hand counter changes from "0 / 52 weeks" to "1 / 52 weeks". | |
| PRG-05 | Completed weeks persist after page refresh | 1. Check Week 01 and Week 02. 2. Refresh the page. | Both Week 01 and Week 02 checkboxes are still checked. Phase and overall counters reflect 2 completed. | |
| PRG-06 | Completed weeks persist after closing and reopening the tab | 1. Check several weeks. 2. Close the browser tab. 3. Reopen the app URL. | Previously checked weeks are still checked. | |
| PRG-07 | Completing all weeks in Phase 1 shows 4/4 | 1. Check Week 01, 02, 03, and 04. | Phase 1 counter shows 4/4. Phase 1 progress bar is full. | |
| PRG-08 | Unchecking a week decrements the phase counter | 1. Check Week 01. 2. Uncheck Week 01. | Phase 1 counter returns to 0/4. | |
| PRG-09 | Unchecking a week decrements the overall counter | 1. Check Week 01. 2. Uncheck Week 01. | Overall counter returns to "0 of 52 weeks complete". | |
| PRG-10 | Checkbox can be toggled from the week view | 1. Open Week 03. 2. Click "Mark Complete". | Button changes to "✓ Completed". Status line changes to "✓ Completed". | |
| PRG-11 | Mark Complete in week view reflects on home page | 1. Open Week 03. 2. Click "Mark Complete". 3. Click "← Curriculum". | Week 03 card checkbox is checked on the home page. Phase 1 counter shows 1/4. | |
| PRG-12 | Unchecking from home does not break week view state | 1. Mark Week 04 complete via week view. 2. Return home. 3. Uncheck Week 04 via the home card checkbox. 4. Re-open Week 04. | Week 04 view shows "Not yet complete". "Mark Complete" button is active (not "✓ Completed"). | |
| PRG-13 | Progress stored in localStorage under correct key | 1. Check Week 10. 2. Open DevTools → Application → Local Storage. | Key `vunafx_progress` exists. Its value is a JSON object containing `"10": true`. | |

---

## 5. Study with Claude

| ID | Description | Steps | Expected Result | Pass / Fail |
|---|---|---|---|---|
| STU-01 | Button opens a new tab | 1. Open any week view. 2. Click "✦ Study with Claude". | A new browser tab opens. The current tab remains on the week view. | |
| STU-02 | New tab opens claude.ai | 1. Click the Study with Claude button on Week 01. | The new tab navigates to `claude.ai`. | |
| STU-03 | URL contains a pre-filled prompt | 1. Before clicking, inspect the button's `href` attribute (right-click → Inspect). | The href begins with `https://claude.ai/new?q=` followed by URL-encoded text. | |
| STU-04 | Pre-filled prompt contains the correct week number | 1. Decode the `q` parameter from the Study with Claude URL on Week 07. | The decoded prompt contains "Week 7" or "Week 07". | |
| STU-05 | Pre-filled prompt contains the correct week title | 1. Decode the `q` parameter from the Study with Claude URL on Week 07. | The decoded prompt contains "Defining Your ONE Setup". | |
| STU-06 | Pre-filled prompt contains curriculum context | 1. Decode the `q` parameter from the Study with Claude URL on Week 01. | The decoded prompt contains a excerpt of the week's content (learning objectives or core concepts). | |
| STU-07 | Prompt instructs Claude to act as study partner | 1. Decode the `q` parameter from any week. | The prompt includes an instruction for Claude to act as a study partner, summarise key points, and ask a question. | |
| STU-08 | Different weeks produce different prompts | 1. Note the `href` on the Study with Claude button for Week 01. 2. Navigate to Week 10. 3. Note its `href`. | The two URLs are different. The week number and content excerpt differ between them. | |

---

## 6. Reference Page

| ID | Description | Steps | Expected Result | Pass / Fail |
|---|---|---|---|---|
| REF-01 | Page heading renders | 1. Navigate to Reference. | Page heading reads "Reference". Subtitle is present. | |
| REF-02 | Operating Principles section renders | 1. Scroll through the Reference page. | A section headed "Operating Principles" is present with 8 numbered principles. | |
| REF-03 | Three-Layer Stack section renders | 1. Scroll through the Reference page. | A section headed "The Three-Layer Stack" is present with Layer 1, 2, and 3 described. | |
| REF-04 | Kill Switches section renders | 1. Scroll through the Reference page. | A section headed "Kill Switches" is present. | |
| REF-05 | Kill Switches table renders correctly | 1. Locate the Kill Switches table on the Reference page. | A two-column table (Trigger / Action) renders with 6 rows. Column headers are visible. Borders render correctly. | |
| REF-06 | Journaling System section renders | 1. Scroll to the Journaling System section. | Section is present. Sub-sections "Per-Trade Capture" and "Weekly Review" and "Monthly Stats Review" are present. | |
| REF-07 | Journaling spreadsheet table renders | 1. Locate the spreadsheet columns table in the Journaling System section. | Table renders with column headers (Date, Pair, Session, Setup, etc.) and example rows. | |
| REF-08 | Code block (folder path) renders | 1. Locate the folder path example (`/TradingJournal/YYYY-MM/...`) in the Journaling System section. | Text renders in a monospace code block with visible background differentiation from body text. | |
| REF-09 | No raw markdown symbols visible | 1. Scan the entire Reference page. | No raw `##`, `**`, `|`, or backtick characters are visible in the rendered text. All markdown has been converted to HTML. | |

---

## 7. Appendices Page

| ID | Description | Steps | Expected Result | Pass / Fail |
|---|---|---|---|---|
| APP-01 | Page heading renders | 1. Navigate to Appendices. | Page heading reads "Appendices". Subtitle is present. | |
| APP-02 | Appendix A renders (Part A Eval) | 1. Scroll through the page. | A section for Appendix A is present. Section headings for all 6 sections (Risk Math, Drawdown, Market Structure, Edge, Pre-Mortem, Broker Mechanics) are present. | |
| APP-03 | Appendix A scoring table renders | 1. Locate the Scoring Summary in Appendix A. | A table with score ranges (90–100, 80–89, etc.) and result descriptions renders correctly. | |
| APP-04 | Appendix B renders (Month 4 Survival Guide) | 1. Scroll to Appendix B. | Section is present with "What Month 4 typically looks like" and the Month 4 checklist. | |
| APP-05 | Appendix C renders (Resources) | 1. Scroll to Appendix C. | Books list, free online resources, SMC-specific resources, tools, and "What NOT to use" sections are all present. | |
| APP-06 | Appendix D renders (Glossary) | 1. Scroll to Appendix D. | Glossary terms render as bold term + definition pairs (e.g. **Forex (FX):**, **Pip:**, **Drawdown:**). | |
| APP-07 | Appendix E renders (Journaling Templates) | 1. Scroll to Appendix E. | Folder structure code block, spreadsheet columns table, and monthly stats template table all render. | |
| APP-08 | Appendix E folder structure code block renders | 1. Locate the folder tree in Appendix E. | Renders in a monospace code block. Tree structure is intact and readable. | |
| APP-09 | Appendix E spreadsheet table renders | 1. Locate the spreadsheet columns table in Appendix E. | Table renders with all column headers (Date, Pair, Session, etc.). | |
| APP-10 | Appendix E monthly stats table renders | 1. Locate the monthly stats template in Appendix E. | Table renders with Metric and Value columns. All rows present (Total trades through Notes). | |
| APP-11 | Appendix E Sunday accountability code block renders | 1. Locate the Sunday accountability message template. | Renders in a code block. Template variables ([date], [#], etc.) are visible. | |
| APP-12 | Appendix F renders (One-Page Summary) | 1. Scroll to Appendix F. | The Goal, The Path, The Rules, and The Mindset sections are all present. | |
| APP-13 | No raw markdown visible | 1. Scan the entire Appendices page. | No raw `##`, `**`, `|`, or backtick characters visible outside code blocks. | |

---

## 8. Mobile (375px viewport)

Test these using browser DevTools device emulation (Chrome: DevTools → Toggle device toolbar → select iPhone SE or set width to 375px) or a physical device.

| ID | Description | Steps | Expected Result | Pass / Fail |
|---|---|---|---|---|
| MOB-01 | Home page loads at 375px | 1. Set viewport to 375px wide. 2. Navigate to home. | Page loads without horizontal scroll. No content is clipped. | |
| MOB-02 | Nav is usable at 375px | 1. At 375px, inspect the nav bar. | VunaFX brand and all 3 nav links are visible and tappable. Links do not overlap. (Week counter may be hidden — acceptable.) | |
| MOB-03 | Phase sections stack correctly | 1. At 375px, scroll through the home page. | Each phase section fills the full width. Phase name, description, and progress bar are readable. | |
| MOB-04 | Week cards are readable at 375px | 1. At 375px, inspect the week cards. | Cards display in a single column. Week number and title are legible. Checkboxes are tappable. | |
| MOB-05 | Week view loads and is readable at 375px | 1. At 375px, tap any week card. | Week view loads. Title, phase badge, and action buttons are visible without horizontal scroll. | |
| MOB-06 | Action buttons are tappable at 375px | 1. At 375px, open any week view. | "Mark Complete" and "Study with Claude" buttons are fully visible and have adequate tap target size. They do not overlap or overflow the screen edge. | |
| MOB-07 | Markdown content is readable at 375px | 1. At 375px, scroll through a week view. | Body text is readable (no font below ~13px). Lists, headings, and blockquotes are legible. No text is clipped. | |
| MOB-08 | Tables render acceptably at 375px | 1. At 375px, navigate to the Reference page and locate the Kill Switches table. | Table either scrolls horizontally within its container or reflows. Table text is legible. Page does not scroll horizontally. | |
| MOB-09 | Code blocks render acceptably at 375px | 1. At 375px, navigate to Appendices and locate the folder structure code block. | Code block scrolls horizontally within its container. Page itself does not scroll horizontally. | |
| MOB-10 | Reference page is readable at 375px | 1. At 375px, scroll through the Reference page. | All sections render. No content is hidden or overflowing the viewport. | |
| MOB-11 | Appendices page is readable at 375px | 1. At 375px, scroll through the Appendices page. | All appendix sections render. Page is usable end-to-end. | |
| MOB-12 | Progress tracking works on mobile | 1. At 375px, tap a week card checkbox on the home page. | Checkbox toggles. Phase counter and overall counter update correctly. | |

---

## Test run log

Use this table to record test runs.

| Run date | Tester | Environment | URL tested | Total tests | Passed | Failed | Notes |
|---|---|---|---|---|---|---|---|
| | | | | 107 | | | |
