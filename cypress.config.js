const { defineConfig } = require("cypress");

module.exports = {
  // ... other configurations
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: "junit",
    junitReporterOptions: {
      mochaFile: "cypress/reports/junit/test-results.[hash].xml",
      toConsole: true,
    },
  },
};

module.exports = {
  //chromeWebSecurity: true,
  e2e: {
    testIsolation: false,

    setupNodeEvents(on, config) {
      // implement node event listeners here
      screenshotOnRunFailure: true;
    },
  },
};
