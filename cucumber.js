// Default command line arguments
// In order to prevent users from having to enter the options they use every time
// Users can define cucumber.js with profiles which are groups of command line arguments.
//   default in package.json was
//   "test": "./node_modules/.bin/cucumber-js ./test/features  -f json:./report/cucumber_report.json --require ./test"
// now you can change it to
//    "test":   "./node_modules/.bin/cucumber-js -p default -p html_report --tags \"@smoke\" ",

module.exports = {
    'default': 'test/features/ --require ./test/',
    dry: '--dry-run',
    summary: '--format summary',
    progress: '--format progress',
    html_report: '--format json:report/cucumber_report.json',
    parallel: '--parallel 2'
};