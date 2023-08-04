import State from "../support/state/State";
import WelcomePage from "../support/commands/WelcomePage";
import WelcomePageAfya from "../support/commands/AfyaSasa/WelcomePageAfya";
import VerificationPage from "../support/commands/VerificationPage";
import IdentificationPage from "../support/commands/IdentificationPage";
import testdata, { randomName } from "./testdata";
import data, { Pages } from "./data";
import MedicationsPage from "../support/commands/MedicationsPage";

const state = new State();
let welcome;
const verification = new VerificationPage();
const identification = new IdentificationPage();
const medications = new MedicationsPage();

before(() => {
  cy.viewport(1920, 1080);
  state.site();
  cy.wait(3000);
  cy.location("href").then((url) => {
    if (url.includes("757") || url.includes("750")) {
      welcome = new WelcomePageAfya();
    } else {
      welcome = new WelcomePage();
    }
    welcome
      .selectEnglishLanguage()
      .enterPatientName(randomName(), testdata.mid_name, randomName())
      .enterDOB(testdata.dob)
      .selectMobilePhone()
      .enterMobilePhone(testdata.phone_number);
    if (welcome.guardianSectionExist()) {
      welcome.selectGuardianNo();
    }
    welcome.selectVisitedBeforeNo().agreeTerms().submitChanges();
    verification.enterOTP(testdata.otp);
    identification.openPage(Pages.Medications);
    cy.wait(3000);
  });
});

describe(" Testing Identification page ", () => {
  it(" Icon ", () => {
    cy.viewport(1920, 1080);
    welcome.validateIcon();
  });

  it("Validate skipping all required fields", () => {
    cy.viewport(1920, 1080);
    medications.buttonNext().validateErrorMessage(0, data.error_field_required);
  });

  it("Validate skipping medications that you are taking", () => {
    cy.viewport(1920, 1080);
    medications.validateErrorMessage(0, data.error_field_required);
    cy.get(
      "#basic_hasMedAllergies > :nth-child(2) > .ant-radio > .ant-radio-input"
    ).click();
    cy.get(
      "#basic_hasAllergies > :nth-child(2) > .ant-radio > .ant-radio-input"
    ).click();
    medications.validateErrorMessage(0, data.error_field_required);
  });

  it("Validate user is able to add one medication", () => {
    cy.viewport(1920, 1080);
    cy.get(
      "#basic_doesTakeMeds > :nth-child(1) > .ant-radio > .ant-radio-input"
    ).click();
    cy.get(".mantine-Input-input").type("tre");
    cy.contains("Trexall").click();
    cy.wait(1000);
    cy.get(".ant-col.ant-form-item-control .ant-input").type("Fever");
    cy.contains("button", "Done").click();
  });

  it("Validate whether user is able to edit medication", () => {
    cy.viewport(1920, 1080);
    cy.get('[data-icon="pen"]').click();
    cy.get("#0f98c6fe-fd93-460f-84a3-b7abea799049").type("Edited");
    cy.get("#7629f7a5-7875-4a19-974c-2e28eea50d43").click();
  });

  it("Validate whether user is able to delete medication", () => {
    cy.viewport(1920, 1080);
    cy.get("#415cc7cd-ff47-4993-8f18-e6a891e2451c").click();
    cy.contains("No Medications Added").should("be.visible");
  });

  it("Validate whether user is able to add allergic to any medications", () => {
    cy.viewport(1920, 1080);
    cy.get(
      "#basic_hasMedAllergies > :nth-child(1) > .ant-radio > .ant-radio-input"
    ).click();
    cy.get(".mantine-Input-input.mantine-Autocomplete-input").eq(1).type("tre");
    cy.contains("Treanda").click();

    cy.contains("Hives").click();

    cy.get('button[type="button"][class="ant-btn ant-btn-primary"]')
      .eq(3)
      .click();
  });

  it("Validate whether user is able to edit allergies to medications", () => {
    cy.viewport(1920, 1080);
    cy.get("#91fadc58-2067-478d-8b83-2d755b758439").click();
    cy.get(".mantine-j220w7").click();
    cy.contains("Angioedema").click();
    cy.get("#7629f7a5-7875-4a19-974c-2e28eea50d43").click();
  });

  it("Validate whether user is able to delete allergies to medications", () => {
    cy.viewport(1920, 1080);
    cy.get(".svg-inline--fa.fa-xmark-large").click();
    cy.contains("No Medication Allergies Added").should("be.visible");
  });
  it("Validate whether user is able to add allergies", () => {
    cy.viewport(1920, 1080);
    cy.get(
      "#basic_hasAllergies > :nth-child(1) > .ant-radio > .ant-radio-input"
    ).click();
    cy.get(
      '.mantine-MultiSelect-values input[placeholder="Enter Allergy name..."]'
    ).click();
    cy.contains("Animals").click();
    cy.get(
      ".ant-form-item-control-input-content > .mantine-Group-root > :nth-child(6) > .__mantine-ref-label"
    ).click();
    cy.get('button[type="button"][class="ant-btn ant-btn-primary"]')
      .eq(4)
      .click();
  });

  it("Vlaidate whether user is able to edit allergies", () => {
    cy.viewport(1920, 1080);
    cy.get('svg[data-icon="pen"]').click();
    cy.get(
      '[style="display: flex; flex-direction: column;"] > .mantine-InputWrapper-root > .mantine-qqmv3w > .mantine-Input-wrapper > .style_input__2E8ud > .mantine-j220w7'
    ).click();
    cy.contains("Angioedema").click();
    cy.get("#7629f7a5-7875-4a19-974c-2e28eea50d43").click();
  });

  it("Validate whether user is able to delete allergies", () => {
    cy.viewport(1920, 1080);
    cy.get(".svg-inline--fa.fa-xmark-large").click();
    cy.contains("No Medication Allergies Added").should("be.visible");
  });

  it("Validate whether user is able to pass medications page", () => {
    cy.viewport(1920, 1080);

    /*cy.get(
      '.mantine-MultiSelect-values input[placeholder="Enter Allergy name..."]'
    ).click();
    cy.contains("Animals").click();
    cy.get(
      ".ant-form-item-control-input-content > .mantine-Group-root > :nth-child(6) > .__mantine-ref-label"
    ).click();
    cy.get('button[type="button"][class="ant-btn ant-btn-primary"]')
      .eq(4)
      .click();
    cy.get(
      "#basic_doesTakeMeds > :nth-child(2) > .ant-radio > .ant-radio-input"
    ).click();
    cy.get(
      "#basic_hasMedAllergies > :nth-child(2) > .ant-radio > .ant-radio-input"
    ).click();
    cy.get('.mantine-Group-root > [type="submit"]').click();
    cy.contains("Chief Complaint Questions").click();*/
    cy.get(".mantine-Input-input").eq(0).type("tre");
    cy.contains("Trexall").click();
    cy.wait(1000);
    cy.get(".ant-col.ant-form-item-control .ant-input").type("Fever");
    cy.contains("button", "Done").click();
    cy.get(
      "#basic_hasMedAllergies > :nth-child(2) > .ant-radio > .ant-radio-input"
    ).click();
    cy.get(
      "#basic_hasAllergies > :nth-child(2) > .ant-radio > .ant-radio-input"
    ).click();
    cy.get('.mantine-Group-root > [type="submit"]').click();
    cy.contains("Chief Complaint Questions").click();
  });
});
