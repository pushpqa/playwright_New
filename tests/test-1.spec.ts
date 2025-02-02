import { test, expect } from '@playwright/test';

test('test-1', async ({ page }) => {
  console.log('test-1');
  await page.goto('https://www.google.com/');
  await expect(page.getByRole('img', { name: 'Google' })).toBeVisible();
  await page.getByRole('combobox', { name: 'Search' }).click();
});

test('test-2', async ({ page }) => {
  console.log('test-2');
  await page.goto('https://www.google.com/');
  await expect(page.getByRole('img', { name: 'Google' })).toBeVisible();
  await page.getByRole('combobox', { name: 'Search' }).click();
});