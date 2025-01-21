const {expect}=require("@playwright/test")
exports.forgotPassword=class forgotPassword{

    constructor(page)
    {
        this.page=page
       this.username = "input[placeholder='Username']"
       this.ResetPassword="button[type='submit']"
       this.forgotPassword="//p[@class='oxd-text oxd-text--p orangehrm-login-forgot-header']"
      // this.successMessage="//h6[normalize-space()='Reset Password link sent successfully']"
      this.successMessage="//h6[normalize-space()='Reset Password link sent successfully']"
       
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