const { defineConfig } = require("cypress");

module.exports = (on, config) => {
  // Other Cypress configurations...

  // Define a task to generate the Mochawesome report
  on("after:run", (results) => {
    const generateReport = async () => {
      const { merge } = require("mochawesome-merge");
      const generator = require("mochawesome-report-generator");

      // Merge all Mochawesome JSON report files
      const report = await merge();

      // Generate the HTML report
      await generator.create(report);
    };

    return generateReport();
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
