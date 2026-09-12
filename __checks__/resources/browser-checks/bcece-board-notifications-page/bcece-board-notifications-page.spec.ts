import { test, expect } from '@playwright/test'

const TARGET_URL = process.env.ENVIRONMENT_URL ?? 'https://bceceboard.bihar.gov.in/BCECE[LE]Index.php'

test('BCECE Board notifications page loads with content', async ({ page }) => {
  // Navigate to the BCECE Board page
  const response = await page.goto(TARGET_URL, { waitUntil: 'domcontentloaded', timeout: 30000 })

  // Verify the page loaded successfully
  expect(response?.status()).toBeLessThan(400)

  // Verify the page has meaningful content (not blank/error)
  const bodyText = await page.locator('body').innerText()
  expect(bodyText.length).toBeGreaterThan(100)

  // Check that notification-related content is present on the page
  // Government boards typically have sections for notifications, circulars, results, etc.
  const contentLower = bodyText.toLowerCase()
  const hasRelevantContent =
    contentLower.includes('notification') ||
    contentLower.includes('circular') ||
    contentLower.includes('result') ||
    contentLower.includes('admission') ||
    contentLower.includes('bcece') ||
    contentLower.includes('notice') ||
    contentLower.includes('download')
  expect(hasRelevantContent).toBe(true)

  // Verify there are clickable links on the page (notifications are usually linked)
  const links = page.locator('a[href]')
  const linkCount = await links.count()
  expect(linkCount).toBeGreaterThan(3)
})
