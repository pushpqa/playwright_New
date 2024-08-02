import { test, expect } from '@playwright/test';
//import {HRMdashboard} from '../pages/dashboardHRM'
const HRMdashboard = require("../pages/dashboardHRM")
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    result += characters[randomIndex];
  }
  return result;
}


test('test', async ({ page }) => {
 // const HRMDashboard = new HRMdashboard(page)
  const HRMDashboard=new HRMdashboard(page)
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  //await page.getByRole('link', { name: 'PIM' }).click();
  await HRMDashboard.clickOnPIM();
  await page.getByRole('button', { name: ' Add' }).click();
  const randomString = generateRandomString(10);
  await page.getByPlaceholder('First Name').fill(randomString);
  await page.getByPlaceholder('Middle Name').fill(randomString);
  await page.getByPlaceholder('Last Name').fill(randomString);
  await page.locator('form').getByRole('textbox').nth(4).click();
  await page.locator('form').getByRole('textbox').nth(4).fill('');
  const randomNumber = getRandomNumber(1, 100);
  await page.locator('form').getByRole('textbox').nth(4).fill(randomNumber.toString());
  await page.locator('form span').click();
  //await page.locator('div').filter({ hasText: /^Create Login Details$/ }).click();
  await page.locator('div').filter({ hasText: /^Create Login Details$/ }).locator('span').click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('heading', { name: 'Personal Details' }).click();
  await page.getByRole('heading', { name: 'Personal Details' }).click();
});