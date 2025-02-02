// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

// "dependencies": {
//     "allure-js-commons": "^3.0.9",
//     "charenc": "^0.0.2",
//     "crypt": "^0.0.2",
//     "is-buffer": "^1.1.6",
//     "md5": "^2.3.0",
//     "playwright": "^1.45.3",
//     "playwright-core": "^1.45.3",
//     "undici-types": "^5.26.5"
//   },
