const importCwd = require('import-cwd')
const { Given, When, Then } = importCwd('@cucumber/cucumber')
const assert = require('assert');
const GooglePage = require('../../resources/pages/googlePage');
const BingPage   = require('../../resources/pages/bingPage');
const YahooPage = require('../../resources/pages/yahooPage')


var { setDefaultTimeout } = require('@cucumber/cucumber');

setDefaultTimeout(60 * 1000);


Given('browser is up', async function () {

});
When('I visit {string} site', async function (site) {
//When('I visit {string}', async function ( site) {
    var baseurl = 'https://www.google.com/';
    if(site == "google"){
        console.log("Search Engine is Google")
        var baseurl = 'https://www.google.com/';
        this.page = new GooglePage(this.driver);
        this.page.enterUrl(baseurl)
    }
    if(site == "bing"){
      console.log("Search Engine is Bing")
        var baseurl = 'https://www.bing.com/';
        this.page = new BingPage(this.driver);
    }
    if(site == "yahoo"){
      console.log("Search Engine is Yahoo")
        // www.yahoo.com has page loading problem..so using search.yahoo.com...
        // open developer console to see the page load errors
        var baseurl = 'https://www.search.yahoo.com/';
        this.page = new YahooPage(this.driver);
    }

    await this.page.enterUrl(baseurl)
})


When('I search with {string}', function (searchStr, callback) {
    // Write code here that turns the phrase above into concrete actions
    if (process.env.CUCUMBER_DEBUG) console.log(searchStr)
  
    this.page.enterSearchText(searchStr).then(function () {
      callback()
    })
  });
  
  
  Then('I should see result with {string}', function (searchStr, callback) {
    // Write code here that turns the phrase above into concrete actions
    console.log(searchStr)
    this.page.verifySearchResult(searchStr).then(function ( result) {
       assert.equal(result, true)
      callback()
    })
  });

