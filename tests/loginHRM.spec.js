const { test, expect } = require('@playwright/test');

import { forgotPassword } from '../pages/forgotPassword';
// Importing pages from pages folder
import { LoginPage } from '../pages/loginpage'
//const LoginPage = require("../pages/loginpage")
const HRMdashboard = require("../pages/dashboardHRM")
const PIMEmployee = require("../pages/pimPage")
import { Utils } from '../pages/Utils';

//Importing test data from testdata.json file
//const testdata =JSON.parse(JSON.stringify (require("../testData/testdata.json")))
const testdata = require("../testData/testdata.json")

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page)
  const HRMDashboard = new HRMdashboard(page)
  const utils = new Utils(page);

  await loginPage.goToHRMLoginPage(testdata.login.loginURL)
  await loginPage.signinButtonIsVisible()

  await loginPage.loginToHRM(testdata.login.username, testdata.login.password)
  await HRMDashboard.DashboardTextIsVisible()
})

// test.afterAll( async ({ page })=>{
// await page.close()
// })


test('Logout @regression', async ({ page }) => {

  const loginPage = new LoginPage(page)
  const HRMDashboard = new HRMdashboard(page)
  const utils = new Utils(page);

  expect(await HRMDashboard.logoutButtonIsVisible()).toBeTruthy();

  // await HRMDashboard.logout()
  await utils.clickElement(HRMDashboard.logoutButton)
  // await loginPage.loginTextIsVisible()
  await utils.isVisible(loginPage.loginText)
  //await loginPage.verifyCurrentURL(testdata.Dashboard.currentURL)
  await utils.verifyCurrentURL(testdata.login.loginURL)
  await loginPage.verifyPageTitle(testdata.Dashboard.pageTitle)

})

test.only('Add Employee @regression', async ({ page }) => {

  const PIMemployee = new PIMEmployee(page)

  await PIMemployee.clickOnPIM()

  await PIMemployee.clickOnemployeeAddButton()

  await PIMemployee.addEmployee()
})

test('Search Employee by Name and Cancel record delete option @smoke', async ({ page }) => {

  const PIMemployee = new PIMEmployee(page)

  await PIMemployee.clickOnPIM()

  await PIMemployee.employeeSearchByName()

  await PIMemployee.cancelDeleteRecordOption()

})

test('Search Employee by Name and Confirm record delete option @regression', async ({ page }) => {

  const PIMemployee = new PIMEmployee(page)

  await PIMemployee.clickOnPIM()

  await PIMemployee.employeeSearchByName()

  await PIMemployee.acceptDeleteRecordOption()

})



test('Search Employee by Status @smoke', async ({ page }) => {

  const PIMemployee = new PIMEmployee(page)

  await PIMemployee.clickOnPIM()

  await PIMemployee.employeeSearchByStatus("Full-Time Contract")

})

test('forgotPassword', async ({ page }) => {
  const forgotpassword = new forgotPassword(page)
  await forgotpassword.clickForgotPassword()
  await forgotpassword.enterUsername(testdata.login.username)
  await forgotpassword.clickResetPassword()
  await forgotpassword.verifySuccessMessage()
})