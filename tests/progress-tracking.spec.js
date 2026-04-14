import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('')
  await page.evaluate(() => localStorage.clear())
  await page.reload()
})

// PRG-01
test('PRG-01: Checking Week 01 updates Phase 1 counter to 1/4', async ({ page }) => {
  await page.locator('.week-card').first().locator('.week-card__check').click()
  await expect(page.locator('.phase-progress-count').first()).toHaveText('1/4')
})

// PRG-02
test('PRG-02: Checking Week 01 partially fills Phase 1 progress bar', async ({ page }) => {
  await page.locator('.week-card').first().locator('.week-card__check').click()
  const fill = page.locator('.phase-section').first().locator('.progress-bar__fill')
  const width = await fill.evaluate(el => parseFloat(el.style.width))
  expect(width).toBeGreaterThan(0)
  expect(width).toBeLessThan(100)
})

// PRG-03
test('PRG-03: Checking Week 01 updates overall progress to 1/52', async ({ page }) => {
  await page.locator('.week-card').first().locator('.week-card__check').click()
  await expect(page.locator('.overall-progress')).toContainText('1 of 52 weeks complete')
  const fill = page.locator('.overall-progress .progress-bar__fill')
  const width = await fill.evaluate(el => parseFloat(el.style.width))
  expect(width).toBeGreaterThan(0)
})

// PRG-04
test('PRG-04: Checking Week 01 updates nav counter to 1/52', async ({ page }) => {
  await page.locator('.week-card').first().locator('.week-card__check').click()
  await expect(page.locator('.nav__progress')).toContainText('1 / 52')
})

// PRG-05
test('PRG-05: Completed weeks persist after page refresh', async ({ page }) => {
  await page.locator('.week-card').nth(0).locator('.week-card__check').click()
  await page.locator('.week-card').nth(1).locator('.week-card__check').click()
  await page.reload()
  await expect(page.locator('.phase-progress-count').first()).toHaveText('2/4')
  await expect(page.locator('.overall-progress')).toContainText('2 of 52 weeks complete')
})

// PRG-06
test('PRG-06: Completed weeks persist after close/reopen (localStorage)', async ({ page }) => {
  await page.locator('.week-card').nth(0).locator('.week-card__check').click()
  await page.locator('.week-card').nth(2).locator('.week-card__check').click()

  // Simulate close + reopen by navigating away and back
  await page.goto('about:blank')
  await page.goto('')
  // No localStorage.clear() — simulating a fresh tab opening the same site
  await expect(page.locator('.phase-progress-count').first()).toHaveText('2/4')
})

// PRG-07
test('PRG-07: Completing all Phase 1 weeks shows 4/4', async ({ page }) => {
  const phase1 = page.locator('.phase-section').first()
  const checkboxes = phase1.locator('.week-card__check')
  for (const cb of await checkboxes.all()) {
    await cb.click()
  }
  await expect(page.locator('.phase-progress-count').first()).toHaveText('4/4')
  const fill = phase1.locator('.progress-bar__fill')
  const width = await fill.evaluate(el => el.style.width)
  expect(width).toBe('100%')
})

// PRG-08
test('PRG-08: Unchecking a week decrements phase counter', async ({ page }) => {
  const cb = page.locator('.week-card').first().locator('.week-card__check')
  await cb.click()
  await expect(page.locator('.phase-progress-count').first()).toHaveText('1/4')
  await cb.click()
  await expect(page.locator('.phase-progress-count').first()).toHaveText('0/4')
})

// PRG-09
test('PRG-09: Unchecking a week decrements overall counter', async ({ page }) => {
  const cb = page.locator('.week-card').first().locator('.week-card__check')
  await cb.click()
  await expect(page.locator('.overall-progress')).toContainText('1 of 52 weeks complete')
  await cb.click()
  await expect(page.locator('.overall-progress')).toContainText('0 of 52 weeks complete')
})

// PRG-10
test('PRG-10: Mark Complete toggle works in week view', async ({ page }) => {
  await page.goto('#/week/3')
  const btn = page.locator('.btn-primary')
  await expect(btn).toContainText('Mark Complete')
  await btn.click()
  await expect(btn).toContainText('Completed')
  await expect(page.locator('.week-view__sub')).toContainText('Completed')
})

// PRG-11
test('PRG-11: Mark Complete in week view reflects on home page', async ({ page }) => {
  await page.goto('#/week/3')
  await page.locator('.btn-primary').click()
  await page.locator('.week-view__back').click()
  const week3Card = page.locator('.week-card').nth(2)
  await expect(week3Card.locator('.week-card__check')).toHaveClass(/week-card__check--done/)
  await expect(page.locator('.phase-progress-count').first()).toHaveText('1/4')
})

// PRG-12
test('PRG-12: Unchecking from home updates week view state', async ({ page }) => {
  await page.goto('#/week/4')
  await page.locator('.btn-primary').click()
  await page.locator('.week-view__back').click()
  // Uncheck via home card
  await page.locator('.week-card').nth(3).locator('.week-card__check').click()
  // Re-open week view
  await page.locator('.week-card').nth(3).click()
  await expect(page.locator('.week-view__sub')).toContainText('Not yet complete')
  await expect(page.locator('.btn-primary')).toContainText('Mark Complete')
})

// PRG-13
test('PRG-13: Progress is stored in localStorage under vunafx_progress', async ({ page }) => {
  await page.locator('.week-card').nth(9).locator('.week-card__check').click() // Week 10
  const stored = await page.evaluate(() => localStorage.getItem('vunafx_progress'))
  expect(stored).not.toBeNull()
  const parsed = JSON.parse(stored)
  expect(parsed['10']).toBe(true)
})
