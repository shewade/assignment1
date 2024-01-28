const importCwd = require('import-cwd')
//const { Given, When, Then } = importCwd('@cucumber/cucumber')
const { Before, After, Status, BeforeAll, AfterAll } = importCwd('@cucumber/cucumber');

const Report = require('./Report');

BeforeAll(async function () {
    if (process.env.CUCUMBER_DEBUG) console.log(" in BeforeAll Hook")
    //console.log(process.env)

});


Before(async function () {
    if (process.env.CUCUMBER_DEBUG) console.log(" in Before Hook")
    // This hook will be executed before all scenarios
});

Before({ tags: '@smoke' }, async function () {
    if (process.env.CUCUMBER_DEBUG) console.log(" in Before Hook")
    // This hook will be executed before scenarios tagged with @smoke
});

// if test has failed, take the screen shot
//  save it into a folder .. to be implemented
// move take screenshot and move to seperate method
After(async function (scenario) {
    //console.log( "In after Hook : ", scenario)

    if (process.env.CUCUMBER_DEBUG) console.log(" after Hook")

    if (scenario.result.status === Status.FAILED) {
        try {
            const data = await this.driver.takeScreenshot();
            // Attaching screenshot to report
            await this.attach(data, 'image/png');
        } catch (e) {
            console.error(e);
        }
    }

    await this.driver.quit();
});


// at the end generate the report
AfterAll(async function () {
    if (process.env.CUCUMBER_DEBUG) console.log(" afterAll Hook")
    setTimeout(() => {
        Report.generate(); // Genetare HTML report
    }, 1000)

});