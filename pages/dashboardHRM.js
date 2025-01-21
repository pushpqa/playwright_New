const {expect}=require("@playwright/test")

//const HRMdashboard = require("../pages/dashboardHRM")
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

const randomString = generateRandomString(10);
class HRMdashboard{

    

    constructor(page)
    {
        this.page=page
        this.dashboardText="//h6[normalize-space()='Dashboard']"
        this.profileTab = ".oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon" 
        this.logoutButton="//a[normalize-space()='Logout']" 
        this.admin=".oxd-main-menu-item.active"
       // this.PIM=getByRole('link', { name: 'PIM' })
       
    }

    async logoutButtonIsVisible()
    {
        
        await this.page.click(this.profileTab)
        return await this.page.isVisible(this.logoutButton)
    }

    async DashboardTextIsVisible()
    {
        await expect (this.page.locator(this.dashboardText)).toBeVisible()
    }

    async logout()
    {
        await this.page.click(this.logoutButton)
    }

    async cliockOnAdmin()
    {
        await this.page.click(this.admin)
    }

  
}

module.exports=HRMdashboard