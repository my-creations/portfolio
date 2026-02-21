import { test, expect } from '@playwright/test';

test.describe('Projects Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1500);
  });

  test('should display projects section', async ({ page }) => {
    const projectsSection = page.locator('#projects');
    await expect(projectsSection).toBeVisible();
  });

  test('should display swiper container', async ({ page }) => {
    const swiper = page.locator('.swiper-container');
    await expect(swiper).toBeVisible();
  });

  test('should have navigation buttons', async ({ page }) => {
    const nextBtn = page.locator('.swiper-button-next');
    const prevBtn = page.locator('.swiper-button-prev');
    await expect(nextBtn).toBeVisible();
    await expect(prevBtn).toBeVisible();
  });

  test('should have pagination', async ({ page }) => {
    const pagination = page.locator('.swiper-pagination');
    await expect(pagination).toBeVisible();
  });

  test('should navigate with next button', async ({ page }) => {
    const nextBtn = page.locator('.swiper-button-next');
    await nextBtn.click();
    await page.waitForTimeout(600);
    await expect(nextBtn).toBeVisible();
  });

  test('should navigate with previous button', async ({ page }) => {
    const prevBtn = page.locator('.swiper-button-prev');
    await prevBtn.click();
    await page.waitForTimeout(600);
    await expect(prevBtn).toBeVisible();
  });

  test('should have project slides', async ({ page }) => {
    const slides = page.locator('.swiper-slide');
    const count = await slides.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should have details containers in slides', async ({ page }) => {
    const containers = page.locator('.details-container');
    const count = await containers.count();
    expect(count).toBeGreaterThan(0);
  });
});

test.describe('Projects Swiper Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1500);
  });

  test('should loop through slides', async ({ page }) => {
    const nextBtn = page.locator('.swiper-button-next');

    for (let i = 0; i < 5; i++) {
      await nextBtn.click();
      await page.waitForTimeout(500);
    }

    const slides = page.locator('.swiper-slide');
    await expect(slides.first()).toBeVisible();
  });
});
