export const PHASES = [
  {
    id: 1,
    name: 'Compressed Foundations',
    label: 'Phase 1',
    weeks: [1, 2, 3, 4],
    description: 'Build the conceptual and mechanical foundation. No live money. Pure study and setup.',
  },
  {
    id: 2,
    name: 'Demo with Rigor',
    label: 'Phase 2',
    weeks: [5, 6, 7, 8, 9, 10, 11, 12],
    description: 'Accumulate 50–100 journaled demo trades on one setup. Prove potential edge before risking real money.',
  },
  {
    id: 3,
    name: 'Live Micro-Size',
    label: 'Phase 3',
    weeks: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
    description: 'Translate demo edge to live trading at tiny size. Goal is execution proof, not income.',
  },
  {
    id: 4,
    name: 'Scale on Demonstrated Edge',
    label: 'Phase 4',
    weeks: [27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
    description: 'Scale capital first, then risk %, only on demonstrated positive expectancy.',
  },
  {
    id: 5,
    name: 'Compounding & Honest Assessment',
    label: 'Phase 5',
    weeks: [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
    description: 'Compound the demonstrated edge. Prepare for the Month 12 honest assessment.',
  },
]

export const WEEKS = [
  { number: 1,  title: 'Forex Market Fundamentals',                               phase: 1 },
  { number: 2,  title: 'Leverage, Margin, and the Mathematics of Risk',            phase: 1 },
  { number: 3,  title: 'Position Sizing and Broker Mechanics',                     phase: 1 },
  { number: 4,  title: 'SMC Foundations: Market Structure',                        phase: 1 },
  { number: 5,  title: 'Liquidity Concepts',                                       phase: 2 },
  { number: 6,  title: 'The Part A Eval',                                          phase: 2 },
  { number: 7,  title: 'Defining Your ONE Setup',                                  phase: 2 },
  { number: 8,  title: 'Demo Trading: First 5 Trades',                             phase: 2 },
  { number: 9,  title: 'Demo Trading: Trades 6–15',                                phase: 2 },
  { number: 10, title: 'Demo Trading: Trades 16–25',                               phase: 2 },
  { number: 11, title: 'Demo Trading: Trades 26–40',                               phase: 2 },
  { number: 12, title: 'Demo Trading: Trades 41–50+ (Phase 2 Gate)',               phase: 2 },
  { number: 13, title: 'First Live Trades (Week 1 of 2)',                          phase: 3 },
  { number: 14, title: 'First Live Trades (Week 2 of 2)',                          phase: 3 },
  { number: 15, title: 'Building the Live Sample (Week 1 of 8)',                   phase: 3 },
  { number: 16, title: 'Building the Live Sample (Week 2 of 8)',                   phase: 3 },
  { number: 17, title: 'Building the Live Sample (Week 3 of 8)',                   phase: 3 },
  { number: 18, title: 'Building the Live Sample (Week 4 of 8)',                   phase: 3 },
  { number: 19, title: 'Building the Live Sample (Week 5 of 8)',                   phase: 3 },
  { number: 20, title: 'Building the Live Sample (Week 6 of 8)',                   phase: 3 },
  { number: 21, title: 'Building the Live Sample (Week 7 of 8)',                   phase: 3 },
  { number: 22, title: 'Building the Live Sample (Week 8 of 8)',                   phase: 3 },
  { number: 23, title: 'Mid-Phase Review and Adjustment (Week 1 of 4)',            phase: 3 },
  { number: 24, title: 'Mid-Phase Review and Adjustment (Week 2 of 4)',            phase: 3 },
  { number: 25, title: 'Mid-Phase Review and Adjustment (Week 3 of 4)',            phase: 3 },
  { number: 26, title: 'Mid-Phase Review: Phase 3 Decision (Week 4 of 4)',         phase: 3 },
  { number: 27, title: 'Scaling Capital (Week 1 of 6)',                            phase: 4 },
  { number: 28, title: 'Scaling Capital (Week 2 of 6)',                            phase: 4 },
  { number: 29, title: 'Scaling Capital (Week 3 of 6)',                            phase: 4 },
  { number: 30, title: 'Scaling Capital (Week 4 of 6)',                            phase: 4 },
  { number: 31, title: 'Scaling Capital (Week 5 of 6)',                            phase: 4 },
  { number: 32, title: 'Scaling Capital (Week 6 of 6)',                            phase: 4 },
  { number: 33, title: 'Scaling Risk (Week 1 of 7)',                               phase: 4 },
  { number: 34, title: 'Scaling Risk (Week 2 of 7)',                               phase: 4 },
  { number: 35, title: 'Scaling Risk (Week 3 of 7)',                               phase: 4 },
  { number: 36, title: 'Scaling Risk (Week 4 of 7): 0.75% → 1% Decision',         phase: 4 },
  { number: 37, title: 'Scaling Risk (Week 5 of 7): First Weeks at 1%',           phase: 4 },
  { number: 38, title: 'Scaling Risk (Week 6 of 7)',                               phase: 4 },
  { number: 39, title: 'Scaling Risk (Week 7 of 7): Phase 4 Completion',          phase: 4 },
  { number: 40, title: 'Steady State Execution (Week 1 of 9)',                     phase: 5 },
  { number: 41, title: 'Steady State Execution (Week 2 of 9)',                     phase: 5 },
  { number: 42, title: 'Steady State Execution (Week 3 of 9)',                     phase: 5 },
  { number: 43, title: 'Steady State Execution (Week 4 of 9)',                     phase: 5 },
  { number: 44, title: 'Steady State Execution (Week 5 of 9)',                     phase: 5 },
  { number: 45, title: 'Steady State Execution (Week 6 of 9)',                     phase: 5 },
  { number: 46, title: 'Steady State Execution (Week 7 of 9)',                     phase: 5 },
  { number: 47, title: 'Steady State Execution (Week 8 of 9)',                     phase: 5 },
  { number: 48, title: 'Steady State Execution (Week 9 of 9)',                     phase: 5 },
  { number: 49, title: 'The Month 12 Assessment (Week 1 of 4)',                    phase: 5 },
  { number: 50, title: 'The Month 12 Assessment (Week 2 of 4): Formal Assessment', phase: 5 },
  { number: 51, title: 'The Month 12 Assessment (Week 3 of 4): Year 2 Planning',  phase: 5 },
  { number: 52, title: 'The Month 12 Assessment (Week 4 of 4): Close Out Year 1', phase: 5 },
]

export function getPhaseForWeek(weekNumber) {
  return PHASES.find(p => p.weeks.includes(weekNumber))
}

export function getWeek(weekNumber) {
  return WEEKS.find(w => w.number === weekNumber)
}

export function getClaudeStudyUrl(weekNumber, weekTitle, markdownContent) {
  const snippet = markdownContent
    ? markdownContent.slice(0, 1200).replace(/\n{3,}/g, '\n\n')
    : ''

  const prompt = `I'm working through the VunaFX 52-week forex trading curriculum.

I'm on Week ${weekNumber}: ${weekTitle}.

Here's the week content:

${snippet}

Please be my study partner. Summarise the key points for this week in 3–4 bullet points, then ask me one question to test my understanding. If I answer correctly, move to the next concept. If not, explain it more clearly.`

  return `https://claude.ai/new?q=${encodeURIComponent(prompt)}`
}
