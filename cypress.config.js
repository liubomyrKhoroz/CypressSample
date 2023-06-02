const { defineConfig } = require("cypress");

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
