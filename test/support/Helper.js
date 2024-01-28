const _ = require('lodash');

/**
 * Helper Related Methods
 */
class Helper {

    /**
     * Instantiate the object
     * @param {World} world - world object instance
     */
    constructor(world) {
        this.world = world;

        if (process.env.CUCUMBER_DEBUG) console.log('Screenshot:constructor');
    }

    /**
     * This will return world object instance
     * @returns {World} world object
     * @example
     *      helper.getWorld();
     */
    getWorld() {
        return this.world;
    }

    /**
     * This will return driver object instance
     * @returns {WebDriver} Driver object
     * @example
     *      helper.getDriver();
     */
    getDriver() {
        return this.world.driver;
    }



    /**
     * Load or navigate to a page with the url and check the body element is present
     * @param {string} url - url to load
     * @param {integer} waitInSeconds - number of seconds to wait for page to load
     * @example
     *      helper.loadPage('http://www.google.com');
     */
    async loadPage(url) {
        await this.world.driver.get(url);

        if (process.env.CUCUMBER_DEBUG) console.log('loadPage: ' + url);

        // now wait for the body element to be present
        await this.waitFor('body');
    }

    /**
     * Wait for any element to be found
     * @param {string} locator - css or xpath selector element
     * @param {integer} waitInSeconds - number of seconds to wait for the element to load
     * @example
     *      helper.waitFor('body', 15);
     */
    async waitFor(locator, waitInSeconds) {

    }

    /**
     * To find an element on the page
     * @param {string} locator - css or xpath selector element
     * @returns {WebElementPromise} an element that can be used to issue commands against the located element
     * @example
     *      helper.findElement('body');
     */
    async findElementById(locator) {

        if (!this.world.isBrowser) {
            throw new Error('Tests are not running on a web browser, no web elements to wait for');
        }


        if (process.env.CUCUMBER_DEBUG) console.log('findElementById: ' + locator);

        return this.world.driver.findElement(this.world.webdriver.By.id(locator));
    }

    // add code for findElementByClassName, findElementByXPath, findElementByCssSelector


    /**
     * Scroll to the element
     * @param {WebElement} element - the element
     * @example
     *      helper.scrollToElement(el);
     */
    async scrollToElement(element) {
    }

    /**
     * Reload or refresh page
     * @example
     *      helper.refresh();
     */
    async refresh() {
        if (this.world.debug) console.log('refresh');

        await this.world.driver.navigate().refresh();
        await this.world.sleep(2000);
    }
}


module.exports = Helper;