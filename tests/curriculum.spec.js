import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('')
  await page.evaluate(() => localStorage.clear())
  await page.reload()
})

// CUR-01
test('CUR-01: All 5 phase sections render', async ({ page }) => {
  await expect(page.locator('.phase-section')).toHaveCount(5)
})

// CUR-02
test('CUR-02: Phase labels and names render correctly', async ({ page }) => {
  const phases = [
    { badge: 'PHASE 1', name: 'Compressed Foundations' },
    { badge: 'PHASE 2', name: 'Demo with Rigor' },
    { badge: 'PHASE 3', name: 'Live Micro-Size' },
    { badge: 'PHASE 4', name: 'Scale on Demonstrated Edge' },
    { badge: 'PHASE 5', name: 'Compounding & Honest Assessment' },
  ]

  for (const { badge, name } of phases) {
    await expect(page.locator('.phase-badge', { hasText: badge })).toBeVisible()
    await expect(page.locator('.phase-name', { hasText: name })).toBeVisible()
  }
})

// CUR-03
test('CUR-03: Phase descriptions render and are non-empty', async ({ page }) => {
  const descs = await page.locator('.phase-desc').all()
  expect(descs).toHaveLength(5)
  for (const desc of descs) {
    const text = await desc.innerText()
    expect(text.trim().length).toBeGreaterThan(10)
  }
})

// CUR-04
test('CUR-04: Phase 1 contains exactly 4 week cards', async ({ page }) => {
  const phase1 = page.locator('.phase-section').nth(0)
  await expect(phase1.locator('.week-card')).toHaveCount(4)
})

// CUR-05
test('CUR-05: Phase 2 contains exactly 8 week cards', async ({ page }) => {
  const phase2 = page.locator('.phase-section').nth(1)
  await expect(phase2.locator('.week-card')).toHaveCount(8)
})

// CUR-06
test('CUR-06: Phase 3 contains exactly 14 week cards', async ({ page }) => {
  const phase3 = page.locator('.phase-section').nth(2)
  await expect(phase3.locator('.week-card')).toHaveCount(14)
})

// CUR-07
test('CUR-07: Phase 4 contains exactly 13 week cards', async ({ page }) => {
  const phase4 = page.locator('.phase-section').nth(3)
  await expect(phase4.locator('.week-card')).toHaveCount(13)
})

// CUR-08
test('CUR-08: Phase 5 contains exactly 13 week cards', async ({ page }) => {
  const phase5 = page.locator('.phase-section').nth(4)
  await expect(phase5.locator('.week-card')).toHaveCount(13)
})

// CUR-09
test('CUR-09: Total week card count is 52', async ({ page }) => {
  await expect(page.locator('.week-card')).toHaveCount(52)
})

// CUR-10
test('CUR-10: Phase progress counters show 0/n on fresh load', async ({ page }) => {
  const expected = ['0/4', '0/8', '0/14', '0/13', '0/13']
  const counters = page.locator('.phase-progress-count')
  await expect(counters).toHaveCount(5)
  for (let i = 0; i < 5; i++) {
    await expect(counters.nth(i)).toHaveText(expected[i])
  }
})

// CUR-11
test('CUR-11: Phase progress bars are empty on fresh load', async ({ page }) => {
  const fills = page.locator('.phase-section .progress-bar__fill')
  for (const fill of await fills.all()) {
    const width = await fill.evaluate(el => el.style.width)
    expect(width).toBe('0%')
  }
})

// CUR-12
test('CUR-12: Overall progress shows 0/52 on fresh load', async ({ page }) => {
  await expect(page.locator('.overall-progress')).toContainText('0 of 52 weeks complete')
  const overallFill = page.locator('.overall-progress .progress-bar__fill')
  const width = await overallFill.evaluate(el => el.style.width)
  expect(width).toBe('0%')
})

// CUR-13
test('CUR-13: Nav shows 0 / 52 weeks on fresh load', async ({ page }) => {
  await expect(page.locator('.nav__progress')).toContainText('0 / 52')
})

// CUR-14
test('CUR-14: Spot-check week card titles match curriculum', async ({ page }) => {
  const cards = page.locator('.week-card')

  // Week 01
  await expect(cards.nth(0).locator('.week-card__title'))
    .toHaveText('Forex Market Fundamentals')

  // Week 07 (index 6)
  await expect(cards.nth(6).locator('.week-card__title'))
    .toHaveText('Defining Your ONE Setup')

  // Week 52 (index 51)
  await expect(cards.nth(51).locator('.week-card__title'))
    .toContainText('Close Out Year 1')
})

// CUR-15
test('CUR-15: Week cards show zero-padded week numbers', async ({ page }) => {
  const cards = page.locator('.week-card')
  await expect(cards.nth(0).locator('.week-card__number')).toHaveText('Week 01')
  await expect(cards.nth(25).locator('.week-card__number')).toHaveText('Week 26')
  await expect(cards.nth(51).locator('.week-card__number')).toHaveText('Week 52')
})
