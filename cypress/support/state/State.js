import "cypress-file-upload";

class State {
  site() {
    return cy.visit(Cypress.env("URL_SONOSPINE_STAGE")); //URL_AFYA_BRAIN_STAGE   URL_MOREMD_STAGE   URL_ADVINOW_STAGE    URL_SONOSPINE_STAGE	URL_VALLEY_STAGE
  }
  check() {
    return cy.location("protocol").should("eq", "https:");
  }
}
Cypress.Commands.add("forceVisit", (url) => {
  cy.window().then((win) => {
    return win.open(url, "_self");
  });
});

export default State;
