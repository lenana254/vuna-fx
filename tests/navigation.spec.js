import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('')
  await page.evaluate(() => localStorage.clear())
  await page.reload()
})

// NAV-01
test('NAV-01: Curriculum link loads home page', async ({ page }) => {
  await page.goto('#/reference')
  await page.getByRole('link', { name: 'Curriculum' }).click()
  await expect(page.locator('.phase-section')).toHaveCount(5)
  expect(page.url()).toMatch(/#\/?$|\/vuna-fx\/$|\/vuna-fx\/#\/$/)
})

// NAV-02
test('NAV-02: Reference link loads Reference page', async ({ page }) => {
  await page.getByRole('link', { name: 'Reference' }).click()
  await expect(page.getByRole('heading', { name: 'Reference', level: 1 })).toBeVisible()
  expect(page.url()).toContain('#/reference')
})

// NAV-03
test('NAV-03: Appendices link loads Appendices page', async ({ page }) => {
  await page.getByRole('link', { name: 'Appendices' }).click()
  await expect(page.getByRole('heading', { name: 'Appendices', level: 1 })).toBeVisible()
  expect(page.url()).toContain('#/appendices')
})

// NAV-04
test('NAV-04: Curriculum nav link is active on home', async ({ page }) => {
  const curriculumLink = page.locator('.nav__link', { hasText: 'Curriculum' })
  await expect(curriculumLink).toHaveClass(/nav__link--active/)
  await expect(page.locator('.nav__link', { hasText: 'Reference' })).not.toHaveClass(/nav__link--active/)
  await expect(page.locator('.nav__link', { hasText: 'Appendices' })).not.toHaveClass(/nav__link--active/)
})

// NAV-05
test('NAV-05: Reference nav link is active on Reference page', async ({ page }) => {
  await page.goto('#/reference')
  await expect(page.locator('.nav__link', { hasText: 'Reference' })).toHaveClass(/nav__link--active/)
  await expect(page.locator('.nav__link', { hasText: 'Curriculum' })).not.toHaveClass(/nav__link--active/)
})

// NAV-06
test('NAV-06: Appendices nav link is active on Appendices page', async ({ page }) => {
  await page.goto('#/appendices')
  await expect(page.locator('.nav__link', { hasText: 'Appendices' })).toHaveClass(/nav__link--active/)
  await expect(page.locator('.nav__link', { hasText: 'Curriculum' })).not.toHaveClass(/nav__link--active/)
})

// NAV-07
test('NAV-07: No nav link is active on week view', async ({ page }) => {
  await page.goto('#/week/1')
  for (const name of ['Curriculum', 'Reference', 'Appendices']) {
    await expect(page.locator('.nav__link', { hasText: name })).not.toHaveClass(/nav__link--active/)
  }
})

// NAV-08
test('NAV-08: Browser back from week view returns to home', async ({ page }) => {
  await page.goto('')
  await page.locator('.week-card').first().click()
  await expect(page.locator('.week-view__title')).toBeVisible()
  await page.goBack()
  await expect(page.locator('.phase-section')).toHaveCount(5)
})

// NAV-09
test('NAV-09: Browser forward re-opens week view', async ({ page }) => {
  await page.goto('')
  await page.locator('.week-card').first().click()
  await page.goBack()
  await page.goForward()
  await expect(page.locator('.week-view__title')).toBeVisible()
})

// NAV-10
test('NAV-10: Browser back from Reference returns to home', async ({ page }) => {
  await page.goto('')
  await page.getByRole('link', { name: 'Reference' }).click()
  await expect(page.getByRole('heading', { name: 'Reference', level: 1 })).toBeVisible()
  await page.goBack()
  await expect(page.locator('.phase-section')).toHaveCount(5)
})

// NAV-11
test('NAV-11: VunaFX brand link returns to home', async ({ page }) => {
  await page.goto('#/reference')
  await page.locator('.nav__brand').click()
  await expect(page.locator('.phase-section')).toHaveCount(5)
})
