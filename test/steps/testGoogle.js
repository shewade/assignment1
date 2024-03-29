const importCwd = require('import-cwd')
const { Given, When, Then } = importCwd('@cucumber/cucumber')
const assert = require('assert');
const GooglePage = require('../../resources/pages/googlePage');

var { setDefaultTimeout } = require('@cucumber/cucumber');

/******* 
setDefaultTimeout(60 * 1000);


Given('browser is up', async function () {

});


When('I visit google site', function (callback) {
    var baseurl = 'https://www.google.com/';
    this.page = new GooglePage(this.driver);
    this.page.enterUrl(baseurl).then(function () {
    return callback()
  })

});


Then('Title should be Google', function (callback) {
  this.driver.getTitle().then(function (actualTitle) {
    if (process.env.CUCUMBER_DEBUG) console.log("actual title is", actualTitle)
    assert(actualTitle, " Google")
    return callback()
  });
});


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

************/

