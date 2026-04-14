import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('#/reference')
})

// REF-01
test('REF-01: Page heading renders', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'Reference', level: 1 })).toBeVisible()
  await expect(page.locator('.ref-header p')).toBeVisible()
  const subtitle = await page.locator('.ref-header p').innerText()
  expect(subtitle.trim().length).toBeGreaterThan(10)
})

// REF-02
test('REF-02: Operating Principles section renders with 8 principles', async ({ page }) => {
  await expect(page.locator('.markdown-content', { hasText: /operating principles/i })).toBeVisible()
  // 8 numbered list items in the Operating Principles ordered list
  const items = page.locator('.markdown-content ol li')
  const count = await items.count()
  expect(count).toBeGreaterThanOrEqual(8)
})

// REF-03
test('REF-03: Three-Layer Stack section renders with all 3 layers', async ({ page }) => {
  await expect(page.locator('.markdown-content', { hasText: /three-layer stack/i })).toBeVisible()
  await expect(page.locator('.markdown-content', { hasText: /layer 1/i })).toBeVisible()
  await expect(page.locator('.markdown-content', { hasText: /layer 2/i })).toBeVisible()
  await expect(page.locator('.markdown-content', { hasText: /layer 3/i })).toBeVisible()
})

// REF-04
test('REF-04: Kill Switches section renders', async ({ page }) => {
  await expect(page.locator('.markdown-content', { hasText: /kill switches/i })).toBeVisible()
})

// REF-05
test('REF-05: Kill Switches table renders with 6 data rows and 2 columns', async ({ page }) => {
  const tables = page.locator('.markdown-content table')
  await expect(tables.first()).toBeVisible()
  const rows = tables.first().locator('tbody tr')
  await expect(rows).toHaveCount(6)
  // Each row should have 2 cells (Trigger | Action)
  const firstRowCells = rows.first().locator('td')
  await expect(firstRowCells).toHaveCount(2)
})

// REF-06
test('REF-06: Journaling System section with all 3 sub-sections renders', async ({ page }) => {
  await expect(page.locator('.markdown-content', { hasText: /journaling system/i })).toBeVisible()
  await expect(page.locator('.markdown-content', { hasText: /per-trade capture/i })).toBeVisible()
  await expect(page.locator('.markdown-content', { hasText: /weekly review/i })).toBeVisible()
  await expect(page.locator('.markdown-content', { hasText: /monthly stats review/i })).toBeVisible()
})

// REF-07
test('REF-07: Journaling spreadsheet table renders with expected columns', async ({ page }) => {
  const tables = page.locator('.markdown-content table')
  const tableCount = await tables.count()
  expect(tableCount).toBeGreaterThanOrEqual(2)
  // One table should contain "Date" and "Pair" in its headers
  const headerCells = page.locator('.markdown-content th')
  const allHeaders = await headerCells.allInnerTexts()
  expect(allHeaders.join(' ')).toMatch(/date/i)
  expect(allHeaders.join(' ')).toMatch(/pair/i)
})

// REF-08
test('REF-08: Code block for folder path renders in monospace block', async ({ page }) => {
  const codeBlocks = page.locator('.markdown-content code')
  const count = await codeBlocks.count()
  expect(count).toBeGreaterThan(0)
  // Pre blocks (fenced code) should also exist
  await expect(page.locator('.markdown-content pre')).toBeVisible()
})

// REF-09
test('REF-09: No raw markdown symbols visible in rendered output', async ({ page }) => {
  const bodyText = await page.locator('.markdown-content').innerText()
  // Raw heading markers should not appear as literal text
  expect(bodyText).not.toMatch(/^##\s/m)
  expect(bodyText).not.toMatch(/\*\*[^*]+\*\*/)
  // Raw pipe characters outside code should not appear as table delimiters at line start
  expect(bodyText).not.toMatch(/^\|\s*---|/m)
})
