import { test, expect } from '@playwright/test'

test.describe('Accessibility', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
  })

  test('should have proper page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Pedro Robalo/)
  })

  test('should have alt text on profile image', async ({ page }) => {
    const profileImg = page.locator('[data-test="profile-image"]')
    await expect(profileImg).toHaveAttribute('alt', /Pedro Robalo/)
  })

  test('should have semantic HTML structure', async ({ page }) => {
    const nav = page.locator('nav')
    await expect(nav.first()).toBeVisible()

    const sections = page.locator('section')
    const count = await sections.count()
    expect(count).toBeGreaterThanOrEqual(4)

    const footer = page.locator('footer')
    await expect(footer).toBeVisible()
  })

  test('should have headings', async ({ page }) => {
    const h1 = page.locator('h1')
    const count = await h1.count()
    expect(count).toBeGreaterThan(0)
  })

  test('should have accessible contact email link', async ({ page }) => {
    const emailLink = page.locator('[href^="mailto:"]')
    await expect(emailLink.first()).toBeVisible()
  })

  test('should have language attribute on html', async ({ page }) => {
    const htmlLang = await page.locator('html').getAttribute('lang')
    expect(htmlLang).toBe('en')
  })

  test('should have viewport meta tag', async ({ page }) => {
    const viewport = page.locator('meta[name="viewport"]')
    await expect(viewport).toHaveAttribute('content', /width=device-width/)
  })

  test('should have charset meta tag', async ({ page }) => {
    const charset = page.locator('meta[charset]')
    await expect(charset).toHaveAttribute('charset', 'UTF-8')
  })
})

test.describe('Keyboard Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
  })

  test('should be able to focus buttons', async ({ page }) => {
    const langToggle = page.locator('#desktop-lang-toggle')
    await langToggle.focus()
    await expect(langToggle).toBeFocused()
  })

  test('should have focusable CV download button', async ({ page }) => {
    const cvButton = page.locator('[data-test="download-cv-button"]')
    await cvButton.focus()
    await expect(cvButton).toBeFocused()
  })
})
