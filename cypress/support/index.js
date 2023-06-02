// Cypress.on('before:browser:launch', (browser, launchOptions) => {
//     if (browser.name === 'chrome') {
//       launchOptions.args.push('--disable-extensions');
//       return launchOptions;
//     }
//   });

// Cypress.on('before:browser:launch', (browser, launchOptions) => {
//   if (browser.name === 'chrome') {
//     launchOptions.args.push('--disable-features=PageLoadStrategy');
//     // You can also add other Chrome-specific options if needed
//   }
// });

// beforeEach(() => {
//   console.log('test')
//   cy.onBeforeLoad((win) => {
//     win.onbeforeunload = null;
//   });
// });