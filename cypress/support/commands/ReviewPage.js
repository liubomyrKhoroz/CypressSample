import General from "./General";

class ReviewPage extends General {
  locators = {
    PatientInfoEditBtn:
      ".sc-gUjXxn > :nth-child(1) > .ant-collapse > .ant-collapse-item > .ant-collapse-header > .ant-collapse-extra",
    ErrorMessage: ".ant-message-custom-content",
    FeetInput: "#patient_form_feet",
    WeightInput: "#patient_form_weight",
    MaleRadioInput:
      "#patient_form_gender > :nth-child(1) > .ant-radio > .ant-radio-input",
    AddressLine1Input: "#patient_form_address_address_one",
    CityInput: "#patient_form_address_city",
    StateInput: "#patient_form_address_state",
    ZipCodeInput: "#patient_form_address_zip_code",
    PatientInfoNextBtn: ".mantine-Group-root > :nth-child(2)",
    InsuranceInfoPrimaryEditBtn:
      ":nth-child(2) > .ant-collapse-item > .ant-collapse-header > .ant-collapse-extra",
    InputSearch: 'input[type="search"]',
    MedicalImagingEditBtn:
      ":nth-child(3) > .ant-collapse-item > .ant-collapse-header > .ant-collapse-extra",
    MedicalImagingErrorMessage:
      ".ant-move-up-appear > .ant-message-notice-content > .ant-message-custom-content",
    MRIRadioBtn: "#mri_is_required > :nth-child(2)",
    CTScanRadioBtn: "#ctscan_is_required > :nth-child(2)",
    XRayBtn: "#xray_is_required > :nth-child(2)",
    PreviousWorkupsPlusBtn: 'svg[aria-hidden="true"][data-icon="plus"]',
    PreviousWorkupsSaveBtn:
      ":nth-child(11) > .ant-drawer > .ant-drawer-content-wrapper > .ant-drawer-content > .ant-drawer-wrapper-body > .ant-drawer-footer > .ant-space > :nth-child(2) > #f3c12296-9adf-4452-96e7-504dde32f9ac",
    PreviousWorkupsEditBtn:
      ":nth-child(4) > .ant-collapse-item > .ant-collapse-header > .ant-collapse-extra",
    SpineSurgeonRadioBtn: "#surgeon_is_required > :nth-child(1) > .ant-radio",
    SpineSurgeonNameInput: "#surgeon_1_surgeon_name",
    SurgeonPracticeNameInput: "#surgeon_1_practice_name",
    IdentificationMedicalImagingEditBtn:
      ":nth-child(5) > .ant-collapse-item > .ant-collapse-header > .ant-collapse-extra",
    FrontOfCardUploadBtn:
      ':nth-child(1) > :nth-child(1) > .ant-col-lg-24 > [style="margin-left: -8px; margin-right: -8px; row-gap: 16px;"] > .ant-col > :nth-child(1) > .ant-card > .ant-card-body > .ant-row > .ant-btn',
    FrontOfCardTakeBtn:
      ":nth-child(10) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-body > :nth-child(1) > .ant-space-vertical > :nth-child(2) > :nth-child(1) > .ant-space > :nth-child(1) > .ant-btn",
    FrontOfCardSaveBtn:
      ":nth-child(10) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-footer > .ant-btn-primary",
    BackOfCardUploadBtn: ".ant-row > .ant-btn",
    BackOfCardTakeBtn:
      ":nth-child(11) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-body > :nth-child(1) > .ant-space-vertical > :nth-child(2) > :nth-child(1) > .ant-space > :nth-child(1) > .ant-btn",
    BackOfCardSaveBtn:
      ":nth-child(11) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-footer > .ant-btn-primary",
    LegalAgreementsTab: ":nth-child(6) > .ant-collapse > .ant-collapse-item",
    LegalAgreementsSign: ".ant-alert-action > .ant-btn > span",
    SonoSpineAgreement: "#documents_0_isAgreed",
    SonoSpineConsentToTreament: "#documents_1_isAgreed",
    SignCanvas: ".signCanvas",
    SbmBtn: '[type="submit"]',
    nextBtn: '.mantine-Group-root > [type="submit"]',
  };

  clickOnPatientInfoEditBtn() {
    cy.get(this.locators.PatientInfoEditBtn).click();
    return this;
  }

  verifyErrorIsPresent() {
    cy.get(this.locators.ErrorMessage).should("be.visible");
    return this;
  }

  typeFeetInput(num) {
    cy.get(this.locators.FeetInput).type(num);
    return this;
  }

  typeWeightInput(num) {
    cy.get(this.locators.WeightInput).type(num);
    return this;
  }

  clickOnMaleRadioInput() {
    cy.get(this.locators.MaleRadioInput).click();
    return this;
  }

  typeAddressLine1(address) {
    cy.get(this.locators.AddressLine1Input).type(address);
    return this;
  }

  typeCityInput(city) {
    cy.get(this.locators.CityInput).type(city);
    return this;
  }

  clickOnStateInput() {
    cy.get(this.locators.StateInput).click();
    return this;
  }

  clickOnState(state) {
    cy.contains(state).click();
    return this;
  }

  typeZipCodeInput(code) {
    cy.get(this.locators.ZipCodeInput).type(code);
    return this;
  }

  clickOnPatientInfoNextBtn() {
    cy.get(this.locators.PatientInfoNextBtn).click();
    return this;
  }

  clickOnInsuranceInfoPrimaryEditBtn() {
    cy.get(this.locators.InsuranceInfoPrimaryEditBtn).click();
    return this;
  }

  typeInsuranceProvider(provider) {
    cy.get(this.locators.InputSearch).eq(0).type(provider);
    return this;
  }

  clickOnInsuranceProvider(provider) {
    cy.contains(provider).click();
    return this;
  }

  typeMemberID(memberID) {
    cy.get(this.locators.InputSearch).eq(1).type(memberID);
    return this;
  }

  typeGroupID(groupID) {
    cy.get(this.locators.InputSearch).eq(2).type(groupID);
    return this;
  }

  clickOnMedicalImagingEditBtn() {
    cy.get(this.locators.MedicalImagingEditBtn).click();
    return this;
  }

  clickOnSaveBtn() {
    cy.contains("button", "Save").click();
    return this;
  }

  verifyMedicalImagingErrorMessageIsPresent() {
    cy.get(this.locators.MedicalImagingErrorMessage).should("be.visible");
    return this;
  }

  clickOnMRIRadioBtn() {
    cy.get(this.locators.MRIRadioBtn).click();
    return this;
  }

  clickOnCTScanRadioBtn() {
    cy.get(this.locators.CTScanRadioBtn).click();
    return this;
  }

  clickOnXRayBtn() {
    cy.get(this.locators.XRayBtn).click();
    return this;
  }

  clickOnPreviousWorkupsPlusBtn() {
    cy.get(this.locators.PreviousWorkupsPlusBtn).click();
    return this;
  }

  clickOnPreviousWorkupsSaveBtn() {
    cy.get(this.locators.PreviousWorkupsSaveBtn).click();
    return this;
  }

  clickOnPreviousWorkupsEditBtn() {
    cy.get(this.locators.PreviousWorkupsEditBtn).click();
    return this;
  }

  clickOnSpineSurgeonRadioBtn() {
    cy.get(this.locators.SpineSurgeonRadioBtn).click();
    return this;
  }

  typeSpineSurgeonNameInput(name) {
    cy.get(this.locators.SpineSurgeonNameInput).type(name);
    return this;
  }

  typeSurgeonPracticeNameInput(name) {
    cy.get(this.locators.SurgeonPracticeNameInput).type(name);
    return this;
  }

  clickOnIdentificationMedicalImagingEditBtn() {
    cy.get(this.locators.IdentificationMedicalImagingEditBtn).click();

    return this;
  }
  clickOnFrontOfCardUploadBtn() {
    cy.get(this.locators.FrontOfCardUploadBtn).click();
    return this;
  }

  clickOnFrontOfCardTakeBtn() {
    cy.get(this.locators.FrontOfCardTakeBtn).click();
    return this;
  }

  clickOnFrontOfCardSaveBtn() {
    cy.get(this.locators.FrontOfCardSaveBtn).click();
    return this;
  }

  clickOnBackOfCardUploadBtn() {
    cy.get(this.locators.BackOfCardUploadBtn).click();
    return this;
  }

  clickOnBackOfCardTakeBtn() {
    cy.get(this.locators.BackOfCardTakeBtn).click();
    return this;
  }

  clickOnBackOfCardSaveBtn() {
    cy.get(this.locators.BackOfCardSaveBtn).click();
    return this;
  }

  clickOnSubmitBtn() {
    cy.get(this.locators.SbmBtn).click();

    return this;
  }

  clickOnLegalAgreementsTab() {
    cy.get(this.locators.LegalAgreementsTab).click();
    return this;
  }

  clickOnLegalAgreementsSign() {
    cy.get(this.locators.LegalAgreementsSign).click();
    return this;
  }

  clickOnSonoSpineAgreement() {
    cy.get(this.locators.SonoSpineAgreement).click();
    return this;
  }

  clickOnSonoSpineConsentToTreament() {
    cy.get(this.locators.SonoSpineConsentToTreament).click();
    return this;
  }

  clickOnSignCanvas() {
    cy.get(this.locators.SignCanvas).click();
    return this;
  }

  clickOnFirstSubmitBtn() {
    cy.get(this.locators.SbmBtn).eq(0).click();

    return this;
  }

  clickOnNextBtn() {
    cy.get(this.locators.nextBtn).click();

    return this;
  }
}

export default ReviewPage;
