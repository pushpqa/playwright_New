const { expect, default: test } = require("@playwright/test");
const { Utils } = require('../pages/Utils');
const { testdata } = require('../testdata/testdata');

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

let value = "";
let employeeFirstName = "";
let employeeLastName = "";
let employeeMiddleName = "";
let employeeID = "";

const randomString = generateRandomString(10);
const randomNumber = getRandomNumber(1, 100);
class PIMEmployee {

    constructor(page) {
        this.page = page
        this.PIM = "//span[normalize-space()='PIM']"
        this.employeeAddButton = "//button[normalize-space()='Add']"
        this.employeeFirstName = "//input[@placeholder='First Name']"
        this.employeLastName = "//input[@placeholder='Last Name']"
        this.employeeMiddleName = "//input[@placeholder='Middle Name']"
        this.employeeIDButton = "(//input[@class='oxd-input oxd-input--active'])[2]"
        this.employeeSaveButton = "//button[normalize-space()='Save']"
        this.addEmployeeSuccessMsg = "(//div[@id='oxd-toaster_1'])[1]"
        //Search by Employee Name
        this.searchByName = "(//input[@placeholder='Type for hints...'])[1]"
        this.employeeSearchDropdown = '//i[@class="oxd-icon bi-caret-down-fill"]'
        this.searchByID = "(//input[@class='oxd-input oxd-input--active'])[2]"
        //Search by Employee Status
        this.employeeStatusSearchDropdown = "//div[text()='-- Select --'][1]"
        this.fullTimeContractor = "//span[normalize-space()='Full-Time Permanent']"
        this.searchByEmployeeStatus = "(//div[@class='oxd-select-text-input'][normalize-space()='Full-Time Permanent'])[1]"
        this.employeeSearchButton = '//button[normalize-space()="Search"]'
        this.JobTypeFullTimeContractor = '//div[contains(text(),"Full-Time Contract")]'
        this.employeeRecordFoundText = '//div[@class="orangehrm-horizontal-padding orangehrm-vertical-padding"]'
        this.recordCheckBox = '//div[@class="oxd-table-card-cell-checkbox"]//i[@class="oxd-icon bi-check oxd-checkbox-input-icon"]'
        this.deleteSelectedButton = '//button[normalize-space()="Delete Selected"]'
    }


    async clickOnPIM() {
        await this.page.click(this.PIM)
    }

    async clickOnemployeeAddButton() {
        await this.page.click(this.employeeAddButton)
    }

    async addEmployee() {
        const employeeFirstName = randomString
        const employeeLastName = randomString
        const employeeMiddleName = randomString 
        const employeeID = randomString
        await this.page.fill(this.employeeFirstName, employeeFirstName)
        
        await this.page.fill(this.employeLastName, employeeLastName)

        await this.page.fill(this.employeeMiddleName, employeeMiddleName)

        await this.page.fill(this.employeeIDButton, employeeID)

        await this.page.click(this.employeeSaveButton)

        await expect(this.page.locator(this.addEmployeeSuccessMsg)).toBeVisible()


    }

    async clickOnemployeLastName() {

        await this.page.fill(this.employeLastName, employeeLastName)

    }

    async clickOnemployeeFirstName() {
        await this.page.fill(this.employeeFirstName, employeeFirstName)

        const inputField = this.page.locator(this.employeeFirstName);

        const value = await inputField.inputValue();
    }

    async clickOnemployeeMiddleName() {
        await this.page.fill(this.employeeMiddleName, employeeMiddleName)
    }

    async clickOnemployeeIDButton() {
        await this.page.fill(this.employeeIDButton, employeeID)
    }

    async clickOnemployeeSaveButton() {
        await this.page.click(this.employeeSaveButton)
    }

    async AddEmployeeSuccessMSGIsVisible() {
        await expect(this.page.locator(this.addEmployeeSuccessMsg)).toBeVisible()

    }

    async clickOnemployeeSearchDropdown() {

        await this.page.evaluate(() => {
            window.scrollTo(0, 0);

        });

        await this.page.click(this.employeeSearchDropdown)
    }

    async employeeSearchByName(Employee) {
        await this.page.fill(this.searchByName, employeeFirstName)

        await this.page.click(this.employeeSearchButton)

        await expect(this.page.locator(this.employeeRecordFoundText)).toBeVisible()

    }

    async cancelDeleteRecordOption() {
        await this.page.click(this.recordCheckBox)

        this.page.on('dialog', async dialog => {
            // Verify dialog type and message (optional)
            expect(dialog.type()).toBe('Yes, Delete');
            expect(dialog.message()).toBe('Are you Sure?');

            // Dismiss the dialog (select No)
            await dialog.dismiss();
        });

    }

    async acceptDeleteRecordOption() {
        await this.page.click(this.recordCheckBox)

        await this.page.click(this.recordCheckBox)

        this.page.on('dialog', async dialog => {
            // Verify dialog type and message (optional)
            expect(dialog.type()).toBe('Yes, Delete');
            expect(dialog.message()).toBe('Are you Sure?');

            // Dismiss the dialog (select No)
            await dialog.accept();
        });

    }

    async employeeSearchByStatus(Status) {
        await this.page.click(this.employeeStatusSearchDropdown)

        await this.page.click(this.fullTimeContractor)

        await this.page.click(this.employeeSearchButton)

        await expect(this.page.locator(this.employeeRecordFoundText)).toBeVisible()

    }

    async employeeSearchByStatus1(Status) {
        const options = await this.page.$$(this.searchByEmployeeStatus)

        await expect(options.length).toBe(0);

        let status = false;
        for (const option of options) {
            console.log(await option.textContent())
            let value = await option.textContent();
            if (value.includes(Status)) {
                await this.page.click(option)
                status = true;
                break;
            }
        }

        // expect(status).toBeTruthy();

        await expect(this.page.locator(this.employeeRecordFoundText)).toBeVisible()


    }

}

module.exports = PIMEmployee