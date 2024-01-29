var webdriver = require('selenium-webdriver');
const { By } = require('selenium-webdriver');


class BasePage {
    constructor(driver) {
        this.driver = driver
        //console.log(" BasePage constructor")
        this.driver.manage().setTimeouts({ implicit: (10000) });
    }

    async goToUrl(theURL) {
        await this.driver.get(theURL);
    }
    async enterTextByCss(css, searchText) {
        await this.driver.findElement(By.css(css)).sendKeys(searchText);
    }
    async clickById(id) {
        await this.driver.findElement(By.id(id)).click();
    }
    async closeBrowser() {
        await this.driver.quit();
    }

    async findElementById(locator) {
        if (process.env.CUCUMBER_DEBUG) console.log('findElementById: ' + locator);
        return this.driver.findElement(this.webdriver.By.id(locator));
    }

    /**
     * Match the title
     * @param {string} expectedTitle - expected title to match
     */
    async titleEquals(expectedTitle) {
        if (process.env.CUCUMBER_DEBUG) console.log('titleEquals');

        const actualTitle = await this.world.driver.getTitle();
        if(actualTitle ==  expectedTitle)
            return true
        else
            return false
    }

    async getTitle() {
        if (process.env.CUCUMBER_DEBUG) console.log('titleEquals');

        return await this.driver.getTitle();
    }
}

module.exports = BasePage;
