import { getBusiness } from "../../e2e/data";
import General from "./General";

class WelcomePage extends General {
  selectEnglishLanguage() {
    cy.get('[data-testid="preferredLanguageEn"]').click();
    return this;
  }

  selectSpanishLanguage() {
    cy.get('[data-testid="preferredLanguageEs"]').click();
    return this;
  }

  selectSwahiliLanguage() {
    return this;
  }

  enterPatientFirstName(firstName) {
    cy.get('[data-testid="first_name"]').clear().type(firstName);
    return this;
  }

  enterPatientMidName(midName) {
    cy.get("#normal_login_middle_init").clear().type(midName);
    return this;
  }

  enterPatientLastName(lastName) {
    cy.get('[data-testid="last_name"]').clear().type(lastName);
    return this;
  }

  enterPatientName(firstName, midName, lastName) {
    cy.get('[data-testid="first_name"]').clear().type(firstName);
    cy.get("#normal_login_middle_init").clear().type(midName);
    cy.get('[data-testid="last_name"]').clear().type(lastName);
    return this;
  }

  enterDOB(DOB) {
    cy.get('[data-testid="dob"]').clear().type(DOB);
    return this;
  }

  selectMobilePhone() {
    cy.get(
      "#normal_login_preferredMethod > :nth-child(1) > span > input"
    ).click();
    return this;
  }

  selectEmail() {
    cy.get(
      "#normal_login_preferredMethod > :nth-child(2) > span > input"
    ).click();
    return this;
  }

  enterMobilePhone(mobilePhone) {
    cy.get('[data-testid="phone_number"]').clear().type(mobilePhone);
    return this;
  }

  enterEmail(email) {
    cy.get("#15911894-8884-4074-8412-b7ba49514380").clear().type(email);
    return this;
  }

  selectGuardianYes() {
    cy.get("#normal_login_hasGuardian > :nth-child(1) > span > input").click();
    return this;
  }

  selectGuardianNo() {
    cy.get('[data-testid="hasGuardianNo"]').click();
    return this;
  }

  enterGuardianFirstName(firstName) {
    cy.get("#normal_login_guardian_first_name").clear().type(firstName);
    return this;
  }

  enterGuardianLastName(lastName) {
    cy.get("#normal_login_guardian_last_name").clear().type(lastName);
    return this;
  }

  openGuardianOptions() {
    cy.get("#normal_login_relationship_to_patient").click();
    return this;
  }

  selectVisitedBeforeYes() {
    cy.get(
      "#normal_login_returnPatient > :nth-child(1) > span > input"
    ).click();
    return this;
  }

  selectVisitedBeforeNo() {
    cy.get('[data-testid="returnPatientNo"]').click();
    return this;
  }

  selectMedicalPatientYes() {
    cy.get(
      "#normal_login_medicarePatient > :nth-child(1) > span > input"
    ).click();
    return this;
  }

  selectMedicalPatientNo() {
    cy.get('[data-testid="medicarePatientNo"]').click();
    return this;
  }

  agreeTerms() {
    cy.get('[data-testid="agreeToTerms"]').click();
    return this;
  }

  viewTerms() {
    cy.get("#b6a01d47-57b0-44e8-a76e-dc29004758ab").click();
    return this;
  }

  closeTermsWindow() {
    cy.get(".ant-modal-close-x > span").click();
    return this;
  }

  cancelTermsWindow() {
    cy.get(".ant-modal-footer > :nth-child(1) > span").click();
    return this;
  }

  agreeTermsWindow() {
    cy.get(".ant-modal-footer > :nth-child(2) > span").click();
    return this;
  }

  submitChanges() {
    cy.get('[data-testid="submitButton"]').click();
    return this;
  }

  // VERIFICATIONS

  verifyEnglishSelected() {
    cy.get('[data-testid="preferredLanguageEn"]').should("be.checked");
    cy.get('[data-testid="preferredLanguageEs"]').should("not.be.checked");
    return this;
  }

  verifySpanishSelected() {
    cy.get('[data-testid="preferredLanguageEn"]').should("not.be.checked");
    cy.get('[data-testid="preferredLanguageEs"]').should("be.checked");
    return this;
  }

  verifySwahiliSelected() {
    return this;
  }

  verifyMobilePhoneSelected() {
    cy.get(
      "#normal_login_preferredMethod > :nth-child(1) > span > input"
    ).should("be.checked");
    cy.get(
      "#normal_login_preferredMethod > :nth-child(2) > span > input"
    ).should("not.be.checked");
    return this;
  }

  verifyEmailSelected() {
    cy.get(
      "#normal_login_preferredMethod > :nth-child(1) > span > input"
    ).should("not.be.checked");
    cy.get(
      "#normal_login_preferredMethod > :nth-child(2) > span > input"
    ).should("be.checked");
    return this;
  }

  verifyGuardianIsEmpty() {
    cy.get("#normal_login_hasGuardian> :nth-child(1) > span > input").should(
      "not.be.checked"
    );
    cy.get("#normal_login_hasGuardian> :nth-child(2) > span > input").should(
      "not.be.checked"
    );
    return this;
  }

  verifyGuardianYesSelected() {
    cy.get("#normal_login_hasGuardian> :nth-child(1) > span > input").should(
      "be.checked"
    );
    cy.get("#normal_login_hasGuardian> :nth-child(2) > span > input").should(
      "not.be.checked"
    );
    return this;
  }

  verifyGuardianNoSelected() {
    cy.get("#normal_login_hasGuardian> :nth-child(1) > span > input").should(
      "not.be.checked"
    );
    cy.get("#normal_login_hasGuardian> :nth-child(2) > span > input").should(
      "be.checked"
    );
    return this;
  }

  verifyGuardianSectionIsHidden() {
    cy.get("#normal_login_guardian_first_name").should("not.exist");
    cy.get("#normal_login_guardian_last_name").should("not.exist");
    cy.get("span.ant-select-selection-placeholder").should("not.exist");
    return this;
  }

  verifyVisitedBeforeIsEmpty() {
    cy.get("#normal_login_returnPatient > :nth-child(1) > span > input").should(
      "not.be.checked"
    );
    cy.get('[data-testid="returnPatientNo"]').should("not.be.checked");
    return this;
  }

  verifyVisitedBeforeYesSelected() {
    cy.get("#normal_login_returnPatient > :nth-child(1) > span > input").should(
      "be.checked"
    );
    cy.get('[data-testid="returnPatientNo"]').should("not.be.checked");
    return this;
  }

  verifyVisitedBeforeNoSelected() {
    cy.get("#normal_login_returnPatient > :nth-child(1) > span > input").should(
      "not.be.checked"
    );
    cy.get('[data-testid="returnPatientNo"]').should("be.checked");
    return this;
  }

  verifyMedicalPatientIsEmpty() {
    cy.get(
      "#normal_login_medicarePatient > :nth-child(1) > span > input"
    ).should("not.be.checked");
    cy.get('[data-testid="medicarePatientNo"]').should("not.be.checked");
    return this;
  }

  verifyMedicalPatientYesSelected() {
    cy.get(
      "#normal_login_medicarePatient > :nth-child(1) > span > input"
    ).should("be.checked");
    cy.get('[data-testid="medicarePatientNo"]').should("not.be.checked");
    return this;
  }

  verifyMedicalPatientNoSelected() {
    cy.get(
      "#normal_login_medicarePatient > :nth-child(1) > span > input"
    ).should("not.be.checked");
    cy.get('[data-testid="medicarePatientNo"]').should("be.checked");
    return this;
  }

  verifyTermsChecked() {
    cy.get(".ant-checkbox").should("have.class", "ant-checkbox-checked");
    return this;
  }

  verifyTermsNotChecked() {
    cy.get(".ant-checkbox").should("not.have.class", "ant-checkbox-checked");
    return this;
  }

  verifyTermsWindowClosed() {
    cy.get(".ant-modal-mask").should("not.exist");
    return this;
  }

  // isElementExist(element) {
  // 	return cy.window().then((win) => {
  // 		const identifiedElement = win.document.querySelector(element);
  // 		return identifiedElement !== null;
  // 	})
  // }

  medicalPatientSectionExist() {
    try {
      expect(Cypress.$('[data-testid="medicarePatientNo"]')).not.to.exist;
      return false;
    } catch (error) {
      return true;
    }
  }

  phoneSectionExist() {
    try {
      expect(Cypress.$('[data-testid="phone_number"]')).not.to.exist;
      return false;
    } catch (error) {
      return true;
    }
  }

  // VALIDATIONS

  validateIcon() {
    return this;
  }

  validatePatientNameLabel(labelText) {
    cy.get(
      '[style="margin-bottom: 0px; row-gap: 0px;"] > .ant-form-item-label > label > p'
    ).should("have.text", labelText);
    return this;
  }

  validatePatientFirstName(placeholder) {
    cy.get('[data-testid="first_name"]')
      .should("not.have.value")
      .and("have.attr", "placeholder")
      .and("eq", placeholder);
    return this;
  }

  validatePatientMidName(placeholder) {
    cy.get("#normal_login_middle_init")
      .should("not.have.value")
      .and("have.attr", "placeholder")
      .and("eq", placeholder);
    cy.get('[data-icon="circle-info"]')
      .should("have.attr", "xmlns")
      .and("eq", "http://www.w3.org/2000/svg");
    return this;
  }

  validatePatientLastName(placeholder) {
    cy.get('[data-testid="last_name"]')
      .should("not.have.value")
      .and("have.attr", "placeholder")
      .and("eq", placeholder);
    return this;
  }

  validateDOBSection(labelText, placeholder) {
    cy.get('[for="normal_login_date_of_birth"] > span').should(
      "have.text",
      labelText
    );
    cy.get('[data-testid="dob"]')
      .should("not.have.value")
      .and("have.attr", "placeholder")
      .and("eq", placeholder);
    return this;
  }

  validatePreferredContactSection(labelText, optionMobilePhone, optionEmail) {
    cy.get('[for="normal_login_preferredMethod"]').should(
      "have.text",
      labelText
    );
    cy.get(
      "#normal_login_preferredMethod > :nth-child(1) > :nth-child(2)"
    ).should("have.text", optionMobilePhone);
    cy.get(
      "#normal_login_preferredMethod > :nth-child(2) > :nth-child(2)"
    ).should("have.text", optionEmail);
    return this;
  }

  validateMobilePhoneSection(labelText, placeholder) {
    cy.get("[for=normal_login_phone_number] > p").should(
      "have.text",
      labelText
    );
    cy.get('[data-testid="phone_number"]')
      .should("not.have.value")
      .and("have.attr", "placeholder")
      .and("eq", placeholder);
    return this;
  }

  validateEmailSection(labelText, placeholder) {
    cy.get('[for="normal_login_email"] > p').should("have.text", labelText);
    cy.get("#15911894-8884-4074-8412-b7ba49514380")
      .should("not.have.value")
      .and("have.attr", "placeholder")
      .and("eq", placeholder);
    return this;
  }

  validateGuardianSection(labelText, optionYes, optionNo) {
    cy.get('[for="normal_login_hasGuardian"]').should("have.text", labelText);
    cy.get("#normal_login_hasGuardian > :nth-child(1) > :nth-child(2)").should(
      "have.text",
      optionYes
    );
    cy.get("#normal_login_hasGuardian > :nth-child(2) > :nth-child(2)").should(
      "have.text",
      optionNo
    );
    return this;
  }

  validateGuardianFirstName(placeholder) {
    cy.get("#normal_login_guardian_first_name")
      .should("not.have.value")
      .and("have.attr", "placeholder")
      .and("eq", placeholder);
    return this;
  }

  validateGuardianLastName(placeholder) {
    cy.get("#normal_login_guardian_last_name")
      .should("not.have.value")
      .and("have.attr", "placeholder")
      .and("eq", placeholder);
    return this;
  }

  validateGuardianRelationship(labelText) {
    cy.get('[for="normal_login_relationship_to_patient"]').should(
      "have.text",
      labelText
    );
    return this;
  }

  validateGuardianOptions(listOfOptions) {
    for (let i = 0; i < listOfOptions.length; i++)
      cy.get("#normal_login_relationship_to_patient-" + i).should(
        "have.text",
        listOfOptions[i]
      );
    return this;
  }

  validateVisitedBeforeSection(labelPart1, labelPart2, optionYes, optionNo) {
    let labelText = labelPart1 + getBusiness() + labelPart2;
    cy.get('[for="normal_login_returnPatient"]').should("have.text", labelText);
    cy.get(
      "#normal_login_returnPatient > :nth-child(1) > :nth-child(2)"
    ).should("have.text", optionYes);
    cy.get(
      "#normal_login_returnPatient > :nth-child(2) > :nth-child(2)"
    ).should("have.text", optionNo);
    return this;
  }

  validateMedicalPatientSection(labelText, optionYes, optionNo) {
    cy.get('[for="normal_login_medicarePatient"]').should(
      "have.text",
      labelText
    );
    cy.get(
      "#normal_login_medicarePatient > :nth-child(1) > :nth-child(2)"
    ).should("have.text", optionYes);
    cy.get(
      "#normal_login_medicarePatient > :nth-child(2) > :nth-child(2)"
    ).should("have.text", optionNo);
    return this;
  }

  validateBottomLabel(labelText) {
    cy.get(".sc-dJGLCQ").should("have.text", labelText);
    return this;
  }

  validateTermsWindow() {
    cy.get("#rcDialogTitle0").should("be.visible");
    cy.get("h3").should("be.visible");
    return this;
  }

  validateButtonSubmit(buttonSubmit) {
    cy.get('[data-testid="submitButton"] > span').should(
      "have.text",
      buttonSubmit
    );
    return this;
  }
}
export default WelcomePage;

export function guardianSectionExist() {
  const expected = 5;
  return cy
    .xpath(
      '//*[contains(@for, "phone_number") or contains(@for, "email")]/ancestor::div[contains(@class, "signin")]/following-sibling::div'
    )
    .its("length")
    .then((length) => {
      const count = Number(length);
      const result = expected < count;
      return cy.wrap(result);
    });
}
