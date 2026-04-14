import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('')
  await page.evaluate(() => localStorage.clear())
  await page.reload()
})

// WEK-01
test('WEK-01: Clicking Week 01 card opens correct week view', async ({ page }) => {
  await page.locator('.week-card').first().click()
  await expect(page.locator('.week-view__title')).toContainText('Week 01')
  await expect(page.locator('.week-view__title')).toContainText('Forex Market Fundamentals')
  expect(page.url()).toContain('#/week/1')
})

// WEK-02
test('WEK-02: Week view title matches card title', async ({ page }) => {
  const cardTitle = await page.locator('.week-card').nth(4).locator('.week-card__title').innerText()
  await page.locator('.week-card').nth(4).click()
  await expect(page.locator('.week-view__title')).toContainText(cardTitle)
})

// WEK-03
test('WEK-03: Phase badge is shown in week view', async ({ page }) => {
  await page.goto('#/week/1')
  await expect(page.locator('.week-view__header .phase-badge')).toBeVisible()
  await expect(page.locator('.week-view__header .phase-badge')).toContainText('PHASE 1')
})

// WEK-04
test('WEK-04: Uncompleted week shows "Not yet complete"', async ({ page }) => {
  await page.goto('#/week/1')
  await expect(page.locator('.week-view__sub')).toContainText('Not yet complete')
})

// WEK-05
test('WEK-05: Learning objectives section renders on Week 01', async ({ page }) => {
  await page.goto('#/week/1')
  await expect(page.locator('.markdown-content h2', { hasText: /learning objectives/i })).toBeVisible()
  await expect(page.locator('.markdown-content ul').first()).toBeVisible()
})

// WEK-06
test('WEK-06: Core concepts section renders on Week 01', async ({ page }) => {
  await page.goto('#/week/1')
  await expect(page.locator('.markdown-content', { hasText: /core concepts/i })).toBeVisible()
})

// WEK-07
test('WEK-07: Practical exercises section renders on Week 01', async ({ page }) => {
  await page.goto('#/week/1')
  await expect(page.locator('.markdown-content h2', { hasText: /practical exercises/i })).toBeVisible()
  await expect(page.locator('.markdown-content ol')).toBeVisible()
})

// WEK-08
test('WEK-08: Trainer check-in topics render on Week 01', async ({ page }) => {
  await page.goto('#/week/1')
  await expect(page.locator('.markdown-content', { hasText: /trainer check-in/i })).toBeVisible()
})

// WEK-09
test('WEK-09: Self-assessment questions render on Week 01', async ({ page }) => {
  await page.goto('#/week/1')
  await expect(page.locator('.markdown-content', { hasText: /self-assessment/i })).toBeVisible()
})

// WEK-10
test('WEK-10: Common pitfalls section renders on Week 01', async ({ page }) => {
  await page.goto('#/week/1')
  await expect(page.locator('.markdown-content', { hasText: /common pitfalls/i })).toBeVisible()
})

// WEK-11
test('WEK-11: Week 06 renders without error (eval week)', async ({ page }) => {
  await page.goto('#/week/6')
  await expect(page.locator('.week-view__title')).toContainText('Week 06')
  await expect(page.locator('.markdown-content')).toBeVisible()
  await expect(page.locator('.markdown-content')).not.toBeEmpty()
  await expect(page.locator('.markdown-content')).toContainText(/eval|assessment/i)
})

// WEK-12
test('WEK-12: Mark Complete button is visible', async ({ page }) => {
  await page.goto('#/week/1')
  await expect(page.locator('.btn-primary')).toBeVisible()
  await expect(page.locator('.btn-primary')).toContainText('Mark Complete')
})

// WEK-13
test('WEK-13: Study with Claude button is visible', async ({ page }) => {
  await page.goto('#/week/1')
  await expect(page.locator('.btn-claude')).toBeVisible()
  await expect(page.locator('.btn-claude')).toContainText('Study with Claude')
})

// WEK-14
test('WEK-14: Back button is visible and returns to home', async ({ page }) => {
  await page.goto('#/week/1')
  await expect(page.locator('.week-view__back')).toBeVisible()
  await page.locator('.week-view__back').click()
  await expect(page.locator('.phase-section')).toHaveCount(5)
})

// WEK-15
test('WEK-15: Previous week button navigates correctly', async ({ page }) => {
  await page.goto('#/week/5')
  await page.locator('.week-view__nav-btn', { hasText: /week 4/i }).click()
  await expect(page.locator('.week-view__title')).toContainText('Week 04')
  expect(page.url()).toContain('#/week/4')
})

// WEK-16
test('WEK-16: Next week button navigates correctly', async ({ page }) => {
  await page.goto('#/week/5')
  await page.locator('.week-view__nav-btn', { hasText: /week 6/i }).click()
  await expect(page.locator('.week-view__title')).toContainText('Week 06')
  expect(page.url()).toContain('#/week/6')
})

// WEK-17
test('WEK-17: Week 01 previous button is disabled', async ({ page }) => {
  await page.goto('#/week/1')
  const prevBtn = page.locator('.week-view__nav-btn').first()
  await expect(prevBtn).toBeDisabled()
})

// WEK-18
test('WEK-18: Week 52 next button is disabled', async ({ page }) => {
  await page.goto('#/week/52')
  const nextBtn = page.locator('.week-view__nav-btn').last()
  await expect(nextBtn).toBeDisabled()
})

// WEK-19
test('WEK-19: Direct URL navigation to week 27 works', async ({ page }) => {
  await page.goto('#/week/27')
  await expect(page.locator('.week-view__title')).toContainText('Week 27')
  await expect(page.locator('.markdown-content')).toBeVisible()
})
