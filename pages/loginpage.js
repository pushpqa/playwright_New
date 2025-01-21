const {expect}=require("@playwright/test")
exports.LoginPage=class LoginPage{

    constructor(page)
    {
        this.page=page
        this.loginText="//h5[normalize-space()='Login']"
        this.username = "input[placeholder='Username']"
        this.password="input[placeholder='Password']"
        this.signinButton="button[type='submit']"
        this.forgotPassword=".oxd-text.oxd-text--p.orangehrm-login-forgot-header"
    }

    async goToHRMLoginPage()
    {
        await this.page.goto('/')
    }
    async signinButtonIsVisible()
    {
        await expect (this.page.locator(this.signinButton)).toBeVisible()
       
    }

    async loginTextIsVisible()
    {
        await expect (this.page.locator(this.loginText)).toBeVisible()
       
    }


    async loginToHRM(username, password)
    {
        await this.page.fill(this.username, username)
        await this.page.fill(this.password, password)
        await this.page.click(this.signinButton)
    }

    async verifyCurrentURL(currentURL)
    {
        expect(await this.page.url()).toBe(currentURL)
    }

    async verifyPageTitle(pageTitle)
    {
        expect(await this.page.title()).toBe(pageTitle)
    }

    async clickOnForgotPassword()
    {
        await this.page.click(this.forgotPassword)
    }

}

//module.exports=LoginPage