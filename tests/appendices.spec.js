import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('#/appendices')
})

// APP-01
test('APP-01: Page heading and subtitle render', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'Appendices', level: 1 })).toBeVisible()
  await expect(page.locator('.ref-header p')).toBeVisible()
})

// APP-02
test('APP-02: Appendix A renders with all 6 section headings', async ({ page }) => {
  await expect(page.locator('.markdown-content', { hasText: /appendix a/i })).toBeVisible()
  const sectionPatterns = [
    /risk math/i,
    /drawdown.*expectancy/i,
    /market structure.*smc/i,
    /your edge/i,
    /pre-mortem/i,
    /hfm broker/i,
  ]
  for (const pattern of sectionPatterns) {
    await expect(page.locator('.markdown-content', { hasText: pattern })).toBeVisible()
  }
})

// APP-03
test('APP-03: Appendix A scoring table renders', async ({ page }) => {
  // The scoring summary table should exist with score ranges
  await expect(page.locator('.markdown-content', { hasText: /90.?100/i })).toBeVisible()
  await expect(page.locator('.markdown-content', { hasText: /80.?89/i })).toBeVisible()
  await expect(page.locator('.markdown-content', { hasText: /below 70/i })).toBeVisible()
})

// APP-04
test('APP-04: Appendix B renders with Month 4 content', async ({ page }) => {
  await expect(page.locator('.markdown-content', { hasText: /appendix b/i })).toBeVisible()
  await expect(page.locator('.markdown-content', { hasText: /month 4/i })).toBeVisible()
  await expect(page.locator('.markdown-content', { hasText: /month 4 checklist/i })).toBeVisible()
})

// APP-05
test('APP-05: Appendix C renders with all resource subsections', async ({ page }) => {
  await expect(page.locator('.markdown-content', { hasText: /appendix c/i })).toBeVisible()
  await expect(page.locator('.markdown-content', { hasText: /books/i })).toBeVisible()
  await expect(page.locator('.markdown-content', { hasText: /free online resources/i })).toBeVisible()
  await expect(page.locator('.markdown-content', { hasText: /what not to use/i })).toBeVisible()
})

// APP-06
test('APP-06: Appendix D glossary renders with bold terms', async ({ page }) => {
  await expect(page.locator('.markdown-content', { hasText: /appendix d/i })).toBeVisible()
  // Bold terms should render as <strong> elements, not raw **text**
  const strongCount = await page.locator('.markdown-content strong').count()
  expect(strongCount).toBeGreaterThan(10)
  await expect(page.locator('.markdown-content strong', { hasText: /forex/i }).first()).toBeVisible()
  await expect(page.locator('.markdown-content strong', { hasText: /pip/i }).first()).toBeVisible()
  await expect(page.locator('.markdown-content strong', { hasText: /drawdown/i }).first()).toBeVisible()
})

// APP-07
test('APP-07: Appendix E renders with all three template elements', async ({ page }) => {
  await expect(page.locator('.markdown-content', { hasText: /appendix e/i })).toBeVisible()
  await expect(page.locator('.markdown-content', { hasText: /folder structure/i })).toBeVisible()
  await expect(page.locator('.markdown-content', { hasText: /spreadsheet columns/i })).toBeVisible()
  await expect(page.locator('.markdown-content', { hasText: /monthly stats template/i })).toBeVisible()
})

// APP-08
test('APP-08: Appendix E folder structure code block renders', async ({ page }) => {
  const preBlocks = page.locator('.markdown-content pre')
  await expect(preBlocks.first()).toBeVisible()
  const firstPre = await preBlocks.first().innerText()
  expect(firstPre).toContain('TradingJournal')
})

// APP-09
test('APP-09: Appendix E spreadsheet table renders with headers', async ({ page }) => {
  const tables = page.locator('.markdown-content table')
  const count = await tables.count()
  expect(count).toBeGreaterThanOrEqual(3)
  // Find the table with Date/Pair headers
  const allHeaders = await page.locator('.markdown-content th').allInnerTexts()
  const headerText = allHeaders.join(' ')
  expect(headerText).toMatch(/date/i)
  expect(headerText).toMatch(/pair/i)
  expect(headerText).toMatch(/session/i)
})

// APP-10
test('APP-10: Appendix E monthly stats table renders with all rows', async ({ page }) => {
  const allText = await page.locator('.markdown-content').innerText()
  expect(allText).toMatch(/total trades/i)
  expect(allText).toMatch(/win rate/i)
  expect(allText).toMatch(/expectancy/i)
  expect(allText).toMatch(/rule adherence/i)
})

// APP-11
test('APP-11: Appendix E Sunday accountability code block renders', async ({ page }) => {
  const preBlocks = page.locator('.markdown-content pre')
  let found = false
  for (const pre of await preBlocks.all()) {
    const text = await pre.innerText()
    if (text.includes('Week ending')) {
      found = true
      break
    }
  }
  expect(found).toBe(true)
})

// APP-12
test('APP-12: Appendix F one-page summary renders all sections', async ({ page }) => {
  await expect(page.locator('.markdown-content', { hasText: /appendix f/i })).toBeVisible()
  await expect(page.locator('.markdown-content', { hasText: /the goal/i })).toBeVisible()
  await expect(page.locator('.markdown-content', { hasText: /the path/i })).toBeVisible()
  await expect(page.locator('.markdown-content', { hasText: /the rules/i })).toBeVisible()
  await expect(page.locator('.markdown-content', { hasText: /the mindset/i })).toBeVisible()
})

// APP-13
test('APP-13: No raw markdown symbols visible in rendered output', async ({ page }) => {
  const bodyText = await page.locator('.markdown-content').innerText()
  expect(bodyText).not.toMatch(/^##\s/m)
  expect(bodyText).not.toMatch(/\*\*[^*]+\*\*/)
  expect(bodyText).not.toMatch(/^\|\s*---|/m)
})
