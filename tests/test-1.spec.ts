import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
 
  await page.goto('https://www.google.com/');
  await expect(page.getByRole('img', { name: 'Google' })).toBeVisible();
  await page.getByRole('combobox', { name: 'Search' }).click();
  });