const {expect}=require("@playwright/test")
exports.Admin=class Admin{

    constructor(page)
    {
        this.page=page
        this.adminText='//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6[2]'
        this.jobButton = "div[class='oxd-topbar-body'] li:nth-child(1) span:nth-child(1)" 
        this.selectJobTitle="//a[normalize-space()='Job Titles']"
        this.adminJobText="//span[@class='oxd-topbar-header-breadcrumb']"
       
    }

    async adminTextIsVisible()
    {
        await this.page.click(this.jobButton)
        expect (await this.page.locator(this.adminText)).toBeVisible()
    }

    async adminJobTextIsVisible()
    {
        await this.page.click(this.jobButton)
        await this.page.click(this.selectJobTitle)
        expect (await this.page.locator(this.adminJobText)).toBeVisible()
    }
}