import { defineConfig, devices } from '@playwright/test'

// When BASE_URL is set, tests run against that URL (e.g. the live GitHub Pages site).
// Otherwise, a local preview server is started automatically from the production build.
const LOCAL_URL = 'http://localhost:4173/vuna-fx/'
const baseURL = process.env.BASE_URL ?? LOCAL_URL

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html'], ['list']],
  timeout: 30000,

  use: {
    baseURL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  // Start a local preview server unless an external BASE_URL is provided.
  webServer: process.env.BASE_URL
    ? undefined
    : {
        command: 'npm run build && npx vite preview --port 4173',
        url: LOCAL_URL,
        reuseExistingServer: !process.env.CI,
        timeout: 120_000,
      },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // Uncomment to add more browsers in CI:
    // { name: 'firefox',  use: { ...devices['Desktop Firefox'] } },
    // { name: 'webkit',   use: { ...devices['Desktop Safari'] } },
    {
      name: 'mobile',
      use: { ...devices['iPhone SE'] },
      testMatch: '**/mobile.spec.js',
    },
  ],
})
