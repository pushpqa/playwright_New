const {expect}=require("@playwright/test")

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

const randomString = generateRandomString(10);
class PIMEmployee{

    

    constructor(page)
    {
        this.page=page
        this.PIM ="//span[normalize-space()='PIM']"
        this.employeeAddButton = "//button[normalize-space()='Add']"
        this.employeeFirstName="//input[@placeholder='First Name']"
       this.employeLastName="//input[@placeholder='Last Name']"
       this.employeeMiddleName="//input[@placeholder='Middle Name']"
       this.employeeIDButton="(//input[@class='oxd-input oxd-input--active'])[2]"
       this.employeeSaveButton="//button[normalize-space()='Save']"
       this.addEmployeeSuccessMsg="(//div[@id='oxd-toaster_1'])[1]"
       //Search by Employee Name
       this.searchByName="(//input[@placeholder='Type for hints...'])[1]"
       this.employeeSearchDropdown ='//i[@class="oxd-icon bi-caret-down-fill"]'
       this.searchByID ="(//input[@class='oxd-input oxd-input--active'])[2]"
       //Search by Employee Status
       this.searchByEmployeeStatus ="(//div[@class='oxd-select-text-input'][normalize-space()='Full-Time Permanent'])[1]"
       this.employeeSearchButton='//button[normalize-space()="Search"]'
       this.JobTypeFullTimeContractor ='//div[contains(text(),"Full-Time Contract")]'
       this.employeeRecordFoundText= '//div[@class="orangehrm-horizontal-padding orangehrm-vertical-padding"]'
       this.recordCheckBox='//div[@class="oxd-table-card-cell-checkbox"]//i[@class="oxd-icon bi-check oxd-checkbox-input-icon"]'
       this.deleteSelectedButton='//button[normalize-space()="Delete Selected"]'


       
    }

    
    async clickOnPIM()
    {
        await this.page.click(this.PIM)
    }

    async clickOnemployeeAddButton()
    {
        await this.page.click(this.employeeAddButton)
    }

    async addEmployee()
    {

        await this.page.fill(this.employeeFirstName, randomString)

        const inputField = this.page.locator(this.employeeFirstName);

        const value = await inputField.inputValue();

        await this.page.fill(this.employeLastName, randomString)

        await this.page.fill(this.employeeMiddleName, randomString)

        await this.page.fill(this.employeeIDButton, randomString)

        await this.page.click(this.employeeSaveButton)

        await expect (this.page.locator(this.addEmployeeSuccessMsg)).toBeVisible()
        

    }

    async clickOnemployeLastName()
    {

        await this.page.fill(this.employeLastName, randomString)
       
    }

    async clickOnemployeeFirstName()
    {
        await this.page.fill(this.employeeFirstName, randomString)

        const inputField = this.page.locator(this.employeeFirstName);

        const value = await inputField.inputValue();

        //await this.page.fill(this.searchByName, value)

        // await this.page.click(this.employeeSearchButton)

        // await expect (this.page.locator(this.employeeRecordFoundText)).toBeVisible()
        // await this.page.pause()
    }

    async clickOnemployeeMiddleName()
    {
        await this.page.fill(this.employeeMiddleName, randomString)
    }

    async clickOnemployeeIDButton()
    {
        await this.page.fill(this.employeeIDButton, randomString)
    }

    async clickOnemployeeSaveButton()
    {
        await this.page.click(this.employeeSaveButton)
    }

    async AddEmployeeSuccessMSGIsVisible()
    {await expect (this.page.locator(this.addEmployeeSuccessMsg)).toBeVisible()
        
    }

    async clickOnemployeeSearchDropdown()
    {

        await this.page.evaluate(() => {
            window.scrollTo(0, 0);

        });

        
        // const element = this.page.locator('text=employeeSearchDropdown Text');

        // await element.scrollIntoView();

        await this.page.click(this.employeeSearchDropdown)
    }

    async employeeSearchByName()
    {
        await this.page.fill(this.searchByName, "Rahul")

        await this.page.click(this.employeeSearchButton)

        await expect (this.page.locator(this.employeeRecordFoundText)).toBeVisible()

    }
    
    async cancelDeleteRecordOption()
    {
        await this.page.click(this.recordCheckBox)

        await this.page.click(this.recordCheckBox)

        this.page.on('dialog', async dialog => {
            // Verify dialog type and message (optional)
            expect(dialog.type()).toBe('Yes, Delete');
            expect(dialog.message()).toBe('Are you Sure?');
        
            // Dismiss the dialog (select No)
            await dialog.dismiss();
          });
      
    }

    async acceptDeleteRecordOption()
    {
        await this.page.click(this.recordCheckBox)

        await this.page.click(this.recordCheckBox)

        this.page.on('dialog', async dialog => {
            // Verify dialog type and message (optional)
            expect(dialog.type()).toBe('Yes, Delete');
            expect(dialog.message()).toBe('Are you Sure?');
        
            // Dismiss the dialog (select No)
            await dialog.accept();
            await page.pause()
          });
      
    }

    async employeeSearchByStatus(Status)
    {
        const options = await this.page.$$(this.searchByEmployeeStatus)

        await expect(options.length).toBe(0);

        let status=false;
        for(const option of options)
        {
            console.log(await option.textContent())
            let value=await option.textContent();
            if(value.includes(Status))
            {
                await this.page.click(option)
                status=true;
                break;
            }
        }

       // expect(status).toBeTruthy();

        await expect (this.page.locator(this.employeeRecordFoundText)).toBeVisible()


    }

}

module.exports=PIMEmployee