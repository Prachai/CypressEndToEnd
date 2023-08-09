const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Spatika Automation Results',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  env:
  {
    TestUrl: "https://d2d0o4l5lmm7g.cloudfront.net/",
    username: "vinithastro@gmail.com",
    password: "Fibona$12"
  },
  retries: {
    runMode: 2,
    openMode: 0,
    },
  e2e: {
      // report genaration
      setupNodeEvents(on, config) {
        require('cypress-mochawesome-reporter/plugin')(on);
      },
//      specPattern:'cypress/Integration/TestScripts/*.js' ,
//    specPattern:'cypress/IntegrationJAVAscript/*.js',
      specPattern:'cypress/Integration/API_TestScripts/*.js',
      experimentalRunAllSpecs: true
  },
});
