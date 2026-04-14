import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('#/week/1')
  await page.evaluate(() => localStorage.clear())
})

// STU-01
test('STU-01: Study with Claude button opens a new tab', async ({ page, context }) => {
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.locator('.btn-claude').click(),
  ])
  expect(newPage).toBeTruthy()
  await newPage.close()
})

// STU-02
test('STU-02: New tab navigates to claude.ai', async ({ page, context }) => {
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.locator('.btn-claude').click(),
  ])
  // URL may resolve or show an error page in test env — we only check the target domain
  expect(newPage.url()).toContain('claude.ai')
  await newPage.close()
})

// STU-03
test('STU-03: Button href contains pre-filled prompt query param', async ({ page }) => {
  const href = await page.locator('.btn-claude').getAttribute('href')
  expect(href).toContain('claude.ai/new?q=')
})

// STU-04
test('STU-04: Pre-filled prompt contains correct week number for Week 07', async ({ page }) => {
  await page.goto('#/week/7')
  const href = await page.locator('.btn-claude').getAttribute('href')
  const decoded = decodeURIComponent(href)
  expect(decoded).toContain('Week 7')
})

// STU-05
test('STU-05: Pre-filled prompt contains correct week title for Week 07', async ({ page }) => {
  await page.goto('#/week/7')
  const href = await page.locator('.btn-claude').getAttribute('href')
  const decoded = decodeURIComponent(href)
  expect(decoded).toContain('Defining Your ONE Setup')
})

// STU-06
test('STU-06: Pre-filled prompt contains curriculum content excerpt', async ({ page }) => {
  await page.goto('#/week/1')
  const href = await page.locator('.btn-claude').getAttribute('href')
  const decoded = decodeURIComponent(href)
  // Should contain some meaningful excerpt from the week content
  expect(decoded.length).toBeGreaterThan(200)
  // Curriculum-specific terms should appear
  expect(decoded).toMatch(/forex|currency|trading|pip|leverage|session/i)
})

// STU-07
test('STU-07: Prompt instructs Claude to act as study partner', async ({ page }) => {
  await page.goto('#/week/1')
  const href = await page.locator('.btn-claude').getAttribute('href')
  const decoded = decodeURIComponent(href)
  expect(decoded).toMatch(/study partner|summarise|question/i)
})

// STU-08
test('STU-08: Different weeks produce different prompts', async ({ page }) => {
  await page.goto('#/week/1')
  const href1 = await page.locator('.btn-claude').getAttribute('href')

  await page.goto('#/week/10')
  const href10 = await page.locator('.btn-claude').getAttribute('href')

  expect(href1).not.toBe(href10)
  expect(decodeURIComponent(href1)).toContain('Week 1')
  expect(decodeURIComponent(href10)).toContain('Week 10')
})
