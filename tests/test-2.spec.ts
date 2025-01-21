import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('Admin123');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('-- Select --').first().click();
  await page.getByText('Full-Time Contract').click();
  await page.locator('form').getByText('Full-Time Contract').click();
  await page.getByText('Full-Time Permanent').click();
});