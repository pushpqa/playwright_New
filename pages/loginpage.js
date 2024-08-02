const {expect}=require("@playwright/test")
exports.LoginPage=class LoginPage{

    constructor(page)
    {
        this.page=page
        this.loginText="//h5[normalize-space()='Login']"
        this.username = "input[placeholder='Username']"
        this.password="input[placeholder='Password']"
        this.signinButton="button[type='submit']"
    }

    async goToHRMLoginPage()
    {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
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

    async verifyCurrentURL()
    {
        expect(await this.page.url()).toBe("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    }

    async verifyPageTitle()
    {
        expect(await this.page.title()).toBe("OrangeHRM")
    }

}

//module.exports=LoginPage