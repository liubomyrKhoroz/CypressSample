const { defineConfig } = require("cypress");
const path = require("path");

module.exports = {
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: path.join("cypress", "reports", "mochawesome"),
    overwrite: false,
    html: false,
    json: true,
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
