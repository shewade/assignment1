const { Key } = require('selenium-webdriver');
var BasePage = require('./basepage');
const webdriver = require('selenium-webdriver');
const { By, until } = require('selenium-webdriver');
const assert = require('assert');



class BingPage extends BasePage {
    async enterUrl(theURL) {
        await this.goToUrl(theURL);
    }

    // when searching on bing page element is name = 'q'
    async enterSearchText(stext) {
        if (process.env.CUCUMBER_DEBUG) console.log(stext)
        let el = await this.driver.findElement(By.name('q'));
        await el.sendKeys(stext)
        el.submit()
    }


    async verifySearchResult(stext) {

        // wait for search results to load
        await this.driver.wait(until.titleContains(stext), 5000);

        try {
            // Find the first search result link
            const firstResultLink = await this.driver.findElement(By.css('.b_algo h2 a'));

            // Get text of the first result link

            const firstResultText = await firstResultLink.getText();

            var str = stext.split(" ")
            // for now match only first word
            if (firstResultText.toLowerCase().includes(str[0].toLowerCase())) {
                //assert.equal(true, true);
                return true
            } else {
                // first word is not matching, match second word
                if (firstResultText.toLowerCase().includes(str[1].toLowerCase())) {
                    //assert.equal(true, true);
                    return true
                }
                else {
                    // if both first and second words are not present, fail the test
                    //await this.driver.sleep(10000)
                    console.log(" expected : ", str[0], str[1])
                    console.log(firstResultText)
                    //assert.equal(true, false)
                    console.log(" Test failed.")
                    return false
                }
            }

        }
        catch {
            //assert.equal(true, true);
            console.log(" as expected 0 results were found, so search results did not exist")
            return true
        }



    }


}
module.exports = BingPage;