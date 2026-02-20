import { test, expect } from '@playwright/test'

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
  })

  test('should display desktop navigation', async ({ page }) => {
    const desktopNav = page.locator('#desktop-nav')
    await expect(desktopNav).toBeVisible()
  })

  test('should have all navigation links', async ({ page }) => {
    const navLinks = page.locator('#desktop-nav .nav-links a')
    await expect(navLinks).toHaveCount(4)
  })

  test('should scroll to about section on click', async ({ page }) => {
    await page.locator('a[href="#about"]').first().click()
    await page.waitForTimeout(500)
    const aboutSection = page.locator('#about')
    await expect(aboutSection).toBeInViewport()
  })

  test('should scroll to experience section on click', async ({ page }) => {
    await page.locator('a[href="#experience"]').first().click()
    await page.waitForTimeout(500)
    const experienceSection = page.locator('#experience')
    await expect(experienceSection).toBeInViewport()
  })

  test('should scroll to projects section on click', async ({ page }) => {
    await page.locator('a[href="#projects"]').first().click()
    await page.waitForTimeout(500)
    const projectsSection = page.locator('#projects')
    await expect(projectsSection).toBeInViewport()
  })

  test('should scroll to contact section on click', async ({ page }) => {
    await page.locator('a[href="#contact"]').first().click()
    await page.waitForTimeout(500)
    const contactSection = page.locator('#contact')
    await expect(contactSection).toBeInViewport()
  })
})

test.describe('Mobile Navigation', () => {
  test.use({ viewport: { width: 375, height: 667 } })

  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
  })

  test('should display hamburger menu on mobile', async ({ page }) => {
    const hamburgerNav = page.locator('#hamburger-nav')
    await expect(hamburgerNav).toBeVisible()
  })

  test('should have hamburger icon visible', async ({ page }) => {
    const hamburgerIcon = page.locator('.hamburger-icon')
    await expect(hamburgerIcon).toBeVisible()
  })

  test('should have mobile language toggle in menu', async ({ page }) => {
    const hamburgerIcon = page.locator('.hamburger-icon')
    await hamburgerIcon.click()
    await page.waitForTimeout(300)
    
    const langToggle = page.locator('#mobile-lang-toggle')
    await expect(langToggle).toBeVisible()
  })
})
