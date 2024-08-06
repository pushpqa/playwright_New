const { test, expect } = require('@playwright/test'); 

import { LoginPage } from '../pages/loginpage'
//const LoginPage = require("../pages/loginpage")

//import { PIMEmployee } from '../pages/pimPage'

const HRMdashboard = require("../pages/dashboardHRM")

const PIMEmployee = require("../pages/pimPage")

const testdata=JSON.parse(JSON.stringify(require("../testdata.json")))


test.beforeEach( async ({ page }) => {
  
 const loginPage=new LoginPage(page)
 const HRMDashboard=new HRMdashboard(page)

 await loginPage.goToHRMLoginPage()

 //await page.pause()

 await loginPage.signinButtonIsVisible()

 //await page.pause()

 await loginPage.loginToHRM(testdata.username, testdata.password)

 

 await HRMDashboard.DashboardTextIsVisible()

})

// test.afterAll( async ({ page })=>{
// await page.close()
// })


test('Logout @regression',async ({ page }) => {

    const loginPage=new LoginPage(page)
    const HRMDashboard=new HRMdashboard(page)

 expect(await HRMDashboard.logoutButtonIsVisible()).toBeTruthy();

 await HRMDashboard.logout()

 await loginPage.loginTextIsVisible()

 await loginPage.verifyCurrentURL()

 await loginPage.verifyPageTitle()

})

test('Add Employee @regression',async ({ page }) => {

    const PIMemployee =new PIMEmployee(page)

    //await page.pause()

    await PIMemployee.clickOnPIM()

    await PIMemployee.clickOnemployeeAddButton()

    await PIMemployee.addEmployee()

    // await PIMemployee.clickOnemployeeFirstName()

    // await PIMemployee.clickOnemployeeMiddleName()

    // await PIMemployee.clickOnemployeLastName()

    // await PIMemployee.clickOnemployeeIDButton()

    // await PIMemployee.clickOnemployeeSaveButton()

    // await PIMemployee.AddEmployeeSuccessMSGIsVisible()


  })

  test('Search Employee by Name and Cancel record delete option @smoke',async ({ page }) => {

    const PIMemployee =new PIMEmployee(page)

    await PIMemployee.clickOnPIM()

   // await page.pause()

    //await PIMemployee.clickOnemployeeAddButton()

   // await PIMemployee.addEmployee

   // await PIMemployee.clickOnemployeeSearchDropdown()

    await PIMemployee.employeeSearchByName()

    await PIMemployee.cancelDeleteRecordOption()

  })

  test('Search Employee by Name and Confirm record delete option @regression',async ({ page }) => {

    const PIMemployee =new PIMEmployee(page)

    await PIMemployee.clickOnPIM()

   // await PIMemployee.clickOnemployeeSearchDropdown()

    await PIMemployee.employeeSearchByName()

    await PIMemployee.acceptDeleteRecordOption()

  })

  

  test('Search Employee by Status @smoke',
  async ({ page }) => {

    const PIMemployee =new PIMEmployee(page)

    await PIMemployee.clickOnPIM()

    await PIMemployee.employeeSearchByStatus("Full-Time Contract")

  })