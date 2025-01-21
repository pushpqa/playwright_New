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
}

module.exports = { Utils };