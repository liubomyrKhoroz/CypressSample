import General from "./General";

class DemographicsPatientInfoPage extends General {
  locators = {
    FirstName: "#patient_form_first_name",
    LastName: "#patient_form_last_name",
    DOB: '[data-testid="dob"]',
    Inches: "#patient_form_inches",
  };

  enterFirstName(firstName) {
    cy.get(this.locators.FirstName).clear().type(firstName);
    return this;
  }

  clearFirstName() {
    cy.get(this.locators.FirstName).clear();
    return this;
  }

  enterPreferredName(preferredName) {
    cy.get("#patient_form_preferred_name").clear().type(preferredName);
    return this;
  }

  enterLastName(lastName) {
    cy.get(this.locators.LastName).clear().type(lastName);
    return this;
  }

  clearLastName() {
    cy.get(this.locators.LastName).clear();
    return this;
  }

  enterDOB(dob) {
    cy.get(this.locators.DOB).clear().type(dob);
    return this;
  }

  clearDoB() {
    cy.get(this.locators.DOB).clear();
    return this;
  }

  enterFeet(feet) {
    cy.get("#patient_form_feet").clear().type(feet);
    return this;
  }

  enterInches(inches) {
    cy.get(this.locators.Inches).clear().type(inches);
    return this;
  }

  clearInches() {
    cy.get(this.locators.Inches).clear();
    return this;
  }

  enterWeight(weight) {
    cy.get("#patient_form_weight").clear().type(weight);
    return this;
  }

  selectRace(race) {
    cy.get("#patient_form_race");

    return this;
  }

  selectEthnicity(ethnicity) {
    cy.get("#patient_form_ethnicity");

    return this;
  }

  selectMale() {
    cy.get(":nth-child(1) > .ant-radio > .ant-radio-input").click();
    return this;
  }

  selectFemale() {
    cy.get(":nth-child(2) > .ant-radio > .ant-radio-input").click();
    return this;
  }

  selectPregnantYes() {
    cy.get(
      "#patient_form_pregnancy_status > :nth-child(1) > .ant-radio > .ant-radio-input"
    ).click();
    return this;
  }

  selectPregnantNo() {
    cy.get(
      "#patient_form_pregnancy_status > :nth-child(2) > .ant-radio > .ant-radio-input"
    ).click();
    return this;
  }

  selectPregnantUnsure() {
    cy.get(":nth-child(3) > .ant-radio > .ant-radio-input").click();
    return this;
  }
}
export default DemographicsPatientInfoPage;

export function feetFieldExist() {
  try {
    expect(Cypress.$("#patient_form_feet")).not.to.exist;
    return cy.wrap(false);
  } catch (error) {
    return cy.wrap(true);
  }
}
