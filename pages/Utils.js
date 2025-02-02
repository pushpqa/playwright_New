const {expect}=require("@playwright/test")
class Utils {
    constructor(page) {
        this.page = page;
    }

    async clickElement(selector) {
        await this.page.click(selector);
    }

    async isVisible(selector) {
        return await this.page.isVisible(selector);
    }

    async fillInput(selector, text) {
        await this.page.fill(selector, text);
    }

    async getText(selector) {
        return await this.page.innerText(selector);
    }

    async verifyCurrentURL(currentURL) {
        expect(await this.page.url()).toBe(currentURL);
    }

    async generateRandomString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * charactersLength);
          result += characters[randomIndex];
        }
        return result;
      }

     async getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
}

module.exports = { Utils };