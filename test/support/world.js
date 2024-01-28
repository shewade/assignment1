// const {setWorldConstructor} = require('cucumber');
const importCwd = require('import-cwd')
const { setWorldConstructor } = importCwd('@cucumber/cucumber')
const webdriver = require('selenium-webdriver');
const Driver = require('./Driver');
const Helper = require('./Helper');


class World {
    /**
     * Instantiate the object
     * @param {JSON} attach - attach anything
     * @param {Command} parameters - sets the parameters as command
     */
    constructor({ attach, parameters }) {
        this.attach = attach; // attaching screenshots to report
        this.parameters = parameters;
        // you can pass this from env variables and then set it
        this.testBrowser = "chrome"
        this.webdriver = webdriver;

        // Move this to Driver.js to generalise for all browsers
        // and create .js file for each browser

        // browser driver instance
        this.driver = Driver.create(this.testBrowser).build();
        this.driver.manage().window().maximize();

        //this.screenshot = new Screenshot(this);

        this.helper = new Helper(this);
        //this.pageFactory = new PageFactory(this);
    }
}

setWorldConstructor(World);