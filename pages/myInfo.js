const { expect } = require('@playwright/test');

class MyInfoPage {
    constructor(page) {
        this.page = page;
        this.myInfoButton = "//span[normalize-space()='My Info']"
        this.firstNameInput = "//input[@placeholder='First Name']";
        this.lastNameInput = "//input[@placeholder='Last Name']";
        this.middleNameInput = "//input[@placeholder='Middle Name']";
        this.employeeIDInput = "(//input[@class='oxd-input oxd-input--active'])[2]";
        this.otherIDInput = "(//input[@class='oxd-input oxd-input--active'])[3]";
        this.driverLicenseInput = "(//input[@class='oxd-input oxd-input--active'])[4]";
        this.licenseExpiryInput = "//input[@class='oxd-input oxd-input--focus']";
        this.nationality = "(//div[@class='oxd-select-text oxd-select-text--active'] )[1]";
        this.maritalStatus = "(//div[@class='oxd-select-wrapper'])[2]";
        this.dateOfBirthInput = "(//input[@placeholder='yyyy-mm-dd'])[2]";
        this.genderMale = "//label[normalize-space()='Male']";
        this.nationalityPakistanOption = "//span[normalize-space()='Pakistani']"
        this.maritalStatusSingleOption = "//span[normalize-space()='Single']" 
        this.saveButton = "(//button[@type='submit'])[1]";
    }

   async clickMyInfo() {
        await this.page.click(this.myInfoButton);
    }

    async updateEmployeeInfo(FName, LName, MName, EID, OID, DL, LE, DOB) {
        await this.page.fill(this.firstNameInput, FName);
        await this.page.fill(this.lastNameInput, LName);
        await this.page.fill(this.middleNameInput, MName);
        await this.page.fill(this.employeeIDInput, EID);
        await this.page.fill(this.otherIDInput, OID);
        await this.page.fill(this.driverLicenseInput, DL);
        await this.page.fill(this.licenseExpiryInput, LE);
        await this.page.fill(this.dateOfBirthInput, DOB);
        await this.page.eq(0).click(this.nationality);
        await this.page.click(this.nationalityPakistanOption);
        await this.page.click(this.maritalStatus);
        await this.page.click(this.maritalStatusSingleOption);
        await this.page.click(this.genderMale);
    }

    async save() {
        await this.page.click(this.saveButton);
    }

    async expectSuccessMessage() {
        await expect(this.page.locator('.oxd-toast')).toBeVisible();
    }
}

module.exports =  MyInfoPage;