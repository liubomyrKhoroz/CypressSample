const { defineConfig } = require("cypress");

module.exports = {
  //chromeWebSecurity: true,
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    testIsolation: false,
    defaultCommandTimeout: 38000,
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
};
