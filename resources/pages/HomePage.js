const {Key} = require('selenium-webdriver');
var BasePage = require ('./basepage');
const webdriver = require('selenium-webdriver');
const { By, until } = require('selenium-webdriver');
const assert = require('assert');



class HomePage extends BasePage{
    async enter_url(theURL){
        await this.go_to_url(theURL);
    }

    async enter_search_text( stext){
        let el =  await this.driver.findElement(By.id("APjFqb"));
        el.sendKeys(stext + webdriver.Key.ENTER)
        el.sendKeys(webdriver.Key.RETURN);
    }


    async verify_search_result(stext){

        this.driver.sleep(10000)
        console.log(" waiting")

        // wait for search results to load
        await this.driver.wait( until.titleContains(stext), 5000);

        this.driver.sleep(10000)
        console.log(" waiting")



        // Find the first search result link

        const firstResultLink = await this.driver.findElement(By.css('h3'));

        // Get text of the first result link

        const firstResultText = await firstResultLink.getText();
        if( firstResultText.toLowerCase().includes(stext.toLowerCase())) {
            assert.equal(true, true);
            console.log(" first result contains search text")
        }else{
            assert.equal(true, false)
            console.log(" Test failed.")
        }

    

    }

    async old_verify(){
        // wait for the results to appear
        //let el = await this.driver.findElement(By.id('result-stats'));
        //console.log(el.getText())
        // await this.driver.wait(until.elementIsVisible( this.driver.findElement(By.id('result-stats')) ),100);
//*[@id="rso"]/div[1]/div/div/div[2]/div
// /html/body/div[5]/div/div[12]/div[1]/div[2]/div[2]/div/div/div[1]/div/div/div[2]/div

        
       let elem = this.driver.findElement(By.xpath('/html/body/div[5]/div/div[12]/div[1]/div[2]/div[2]/div/div/div[1]/div/div/div[2]/div'));
        console.log(elem.getText() ) 

        this.driver.sleep(2000)
        let text = await this.driver.findElement(By.id('rso')).getText();
         console.log(text)
         if( text.includes(stext) ){
            assert.equal(true, true)
         }else{
            assert.equal(true, false)
         }



        //*[@id="rso"]/div[1]/div

    


    }

}
module.exports =  HomePage;