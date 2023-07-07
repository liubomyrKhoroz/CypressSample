const { defineConfig } = require("cypress");
const {
  beforeRunHook,
  afterRunHook,
} = require("cypress-mochawesome-reporter/lib");

module.exports = {
  //chromeWebSecurity: true,
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    testIsolation: false,
    defaultCommandTimeout: 10000,

    setupNodeEvents(on, config) {
      on("before:run", async (details) => {
        console.log("override before:run");
        await beforeRunHook(details);
      });

      on("after:run", async () => {
        console.log("override after:run");
        await afterRunHook();
      });
    },
  },
};
