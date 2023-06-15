import WelcomePage from "../WelcomePage";

class WelcomePageBarrow extends WelcomePage {
  validateIcon() {
    cy.get('[alt="logo"]')
      .should("have.attr", "src")
      .and("contain", "Barrows_logo");
    return this;
  }
}
export default WelcomePageBarrow;
