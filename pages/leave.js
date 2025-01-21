const {expect}=require("@playwright/test")
exports.Leave=class Leave{

    constructor(page)
    {
        this.page=page
       this.leaveButton = "div[class='oxd-topbar-body'] li:nth-child(2) span:nth-child(1)"
       this.topBarMenuList = "//nav[@class='oxd-topbar-body-nav'] //li" 
       this.ApplyButton="//a[normalize-space()='Apply']"
       //this.applyButton = "//a[text()='Apply']"
       
       
    }

    async clickForgotPassword()
    {

        await this.page.click(this.forgotPassword) 
    }

    async enterUsername(username)
    {
        await this.page.fill(this.username, username)
    }

    async clickResetPassword()
    {
        await this.page.click(this.ResetPassword)
    }

    async verifySuccessMessage()
    {
        expect(await this.page.locator(this.successMessage)).toBeVisible()
    }

}