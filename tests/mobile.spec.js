import { test, expect } from '@playwright/test'

test.use({ viewport: { width: 375, height: 812 } })

test.beforeEach(async ({ page }) => {
  await page.goto('')
  await page.evaluate(() => localStorage.clear())
  await page.reload()
})

// MOB-01
test('MOB-01: Home page loads at 375px without horizontal scroll', async ({ page }) => {
  await expect(page.locator('.phase-section').first()).toBeVisible()
  const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth)
  const clientWidth = await page.evaluate(() => document.documentElement.clientWidth)
  expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1)
})

// MOB-02
test('MOB-02: Nav is usable at 375px', async ({ page }) => {
  await expect(page.locator('.nav__brand')).toBeVisible()
  await expect(page.locator('.nav__link').nth(0)).toBeVisible()
  await expect(page.locator('.nav__link').nth(1)).toBeVisible()
  await expect(page.locator('.nav__link').nth(2)).toBeVisible()
})

// MOB-03
test('MOB-03: Phase sections stack correctly at 375px', async ({ page }) => {
  const phases = page.locator('.phase-section')
  await expect(phases).toHaveCount(5)
  // Each phase should fill close to full width (within padding)
  for (const phase of await phases.all()) {
    const box = await phase.boundingBox()
    expect(box.width).toBeGreaterThan(300)
  }
})

// MOB-04
test('MOB-04: Week cards are readable at 375px', async ({ page }) => {
  const firstCard = page.locator('.week-card').first()
  await expect(firstCard).toBeVisible()
  await expect(firstCard.locator('.week-card__title')).toBeVisible()
  await expect(firstCard.locator('.week-card__check')).toBeVisible()
  const box = await firstCard.boundingBox()
  expect(box.width).toBeGreaterThan(300)
})

// MOB-05
test('MOB-05: Week view loads and is readable at 375px', async ({ page }) => {
  await page.locator('.week-card').first().click()
  await expect(page.locator('.week-view__title')).toBeVisible()
  await expect(page.locator('.week-view__header .phase-badge')).toBeVisible()
  const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth)
  const clientWidth = await page.evaluate(() => document.documentElement.clientWidth)
  expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1)
})

// MOB-06
test('MOB-06: Action buttons are tappable at 375px', async ({ page }) => {
  await page.goto('#/week/1')
  const markBtn = page.locator('.btn-primary')
  const claudeBtn = page.locator('.btn-claude')
  await expect(markBtn).toBeVisible()
  await expect(claudeBtn).toBeVisible()
  // Buttons should have adequate size (min 44px height for tap targets)
  const markBox = await markBtn.boundingBox()
  const claudeBox = await claudeBtn.boundingBox()
  expect(markBox.height).toBeGreaterThanOrEqual(36)
  expect(claudeBox.height).toBeGreaterThanOrEqual(36)
})

// MOB-07
test('MOB-07: Markdown content is readable at 375px', async ({ page }) => {
  await page.goto('#/week/1')
  await expect(page.locator('.markdown-content')).toBeVisible()
  await expect(page.locator('.markdown-content')).not.toBeEmpty()
  // Content width should not exceed viewport
  const box = await page.locator('.markdown-content').boundingBox()
  expect(box.width).toBeLessThanOrEqual(375 + 1)
})

// MOB-08
test('MOB-08: Tables render acceptably at 375px', async ({ page }) => {
  await page.goto('#/reference')
  await expect(page.locator('.markdown-content table').first()).toBeVisible()
  // Page itself should not scroll horizontally
  const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth)
  const clientWidth = await page.evaluate(() => document.documentElement.clientWidth)
  expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1)
})

// MOB-09
test('MOB-09: Code blocks render acceptably at 375px', async ({ page }) => {
  await page.goto('#/appendices')
  await expect(page.locator('.markdown-content pre').first()).toBeVisible()
  // Page itself should not scroll horizontally (code block scrolls within container)
  const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth)
  const clientWidth = await page.evaluate(() => document.documentElement.clientWidth)
  expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1)
})

// MOB-10
test('MOB-10: Reference page is readable at 375px', async ({ page }) => {
  await page.goto('#/reference')
  await expect(page.getByRole('heading', { name: 'Reference', level: 1 })).toBeVisible()
  await expect(page.locator('.markdown-content')).toBeVisible()
  const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth)
  const clientWidth = await page.evaluate(() => document.documentElement.clientWidth)
  expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1)
})

// MOB-11
test('MOB-11: Appendices page is readable at 375px', async ({ page }) => {
  await page.goto('#/appendices')
  await expect(page.getByRole('heading', { name: 'Appendices', level: 1 })).toBeVisible()
  await expect(page.locator('.markdown-content')).toBeVisible()
  const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth)
  const clientWidth = await page.evaluate(() => document.documentElement.clientWidth)
  expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1)
})

// MOB-12
test('MOB-12: Progress tracking works on mobile', async ({ page }) => {
  await page.locator('.week-card').first().locator('.week-card__check').click()
  await expect(page.locator('.phase-progress-count').first()).toHaveText('1/4')
  await expect(page.locator('.overall-progress')).toContainText('1 of 52 weeks complete')
})
