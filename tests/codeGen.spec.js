import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('admin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Leave' }).click();
  await page.locator('.oxd-date-input > .oxd-icon').first().click();
  await page.getByText('2', { exact: true }).click();
  await page.locator('div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon').click();
  await page.getByText('13').first().click();
  await page.locator('.oxd-select-text--after > .oxd-icon').first().click();
  await page.getByText('Rejected').click();
  await page.locator('.oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').first().click();
  await page.getByText('US - Personal').click();
  await page.getByPlaceholder('Type for hints...').click();
  await page.getByPlaceholder('Type for hints...').fill('anik');
  await page.getByText('aniket Ashok patil').click();
  await page.locator('div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
  await page.getByText('Development').click();
  await page.locator('div').filter({ hasText: /^Include Past Employees$/ }).locator('span').click();
  await page.getByRole('button', { name: 'Search' }).click();
});