const { defineConfig } = require("cypress");
const { merge } = require("mochawesome-merge");
const generator = require("mochawesome-report-generator");

module.exports = (on, config) => {
  // Other Cypress configurations...

  // Define a task to merge and generate the Mochawesome report
  on("after:run", (results) => {
    // Merge all Mochawesome JSON report files
    merge().then((report) => {
      // Generate the HTML report
      generator.create(report);
    });
  });

  // Return the config
  return config;
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
