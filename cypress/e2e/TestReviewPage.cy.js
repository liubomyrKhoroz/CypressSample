import State from "../support/state/State";
import WelcomePage from "../support/commands/WelcomePage";
import WelcomePageAfya from "../support/commands/AfyaSasa/WelcomePageAfya";
import VerificationPage from "../support/commands/VerificationPage";
import IdentificationPage from "../support/commands/IdentificationPage";
import ReviewPage from "../support/commands/ReviewPage";
import testdata, { randomName } from "./testdata";
import data, { Pages } from "./data";

const state = new State();
let welcome;
const verification = new VerificationPage();
const identification = new IdentificationPage();
const reviewPage = new ReviewPage();

before(() => {
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
    identification.openPage(Pages.Review);
    cy.wait(3000);
  });
});

describe(" Testing Identification page ", () => {
  it(" Validate Business", () => {
    welcome.validateIcon();
  });

  it(" Validate Patient Info skipping", () => {
    reviewPage.clickOnPatientInfoEditBtn().buttonNext().verifyErrorIsPresent();
  });

  it(" Validate Patient Info adding", () => {
    reviewPage
      .typeFeetInput("4")
      .typeWeightInput("122")
      .clickOnMaleRadioInput()
      .typeAddressLine1("Lviv")
      .typeCityInput("Lviv")
      .clickOnStateInput()
      .clickOnState("AL")
      .typeZipCodeInput("75432")
      .buttonNext()
      .clickOnPatientInfoNextBtn();
  });

  it(" Validate Insurance skipping ", () => {
    reviewPage.clickOnInsuranceInfoPrimaryEditBtn();
    cy.wait(2000);
    reviewPage.buttonNext().verifyErrorIsPresent();
  });

  it(" Validate Insurance adding ", () => {
    cy.wait(1000);
    reviewPage
      .typeInsuranceProvider("Aet")
      .clickOnInsuranceProvider("Georgia corporation")
      .typeMemberID("2134")
      .typeGroupID("4321")
      .buttonNext();
  });

  it(" Validate Medical Imaging skipping ", () => {
    reviewPage
      .clickOnMedicalImagingEditBtn()
      .clickOnSaveBtn()
      .verifyMedicalImagingErrorMessageIsPresent();
  });

  it(" Validate Medical Imaging adding ", () => {
    reviewPage
      .clickOnMRIRadioBtn()
      .clickOnCTScanRadioBtn()
      .clickOnXRayBtn()
      .clickOnSaveBtn();
    cy.wait(2000);
  });

  it(" Validate Previous Workups adding", () => {
    reviewPage.clickOnPreviousWorkupsPlusBtn();
    cy.wait(1000);
    reviewPage.clickOnPreviousWorkupsSaveBtn();
  });

  it(" Validate Previous Workups editing", () => {
    reviewPage
      .clickOnPreviousWorkupsEditBtn()
      .clickOnSpineSurgeonRadioBtn()
      .typeSpineSurgeonNameInput("test")
      .typeSurgeonPracticeNameInput("test");
    cy.wait(1000);
    reviewPage.clickOnPreviousWorkupsSaveBtn();
  });

  it(" Validate Identification skipping", () => {
    reviewPage.clickOnIdentificationMedicalImagingEditBtn().buttonSkip();
  });

  it(" Validate Identification adding", () => {
    reviewPage
      .clickOnIdentificationMedicalImagingEditBtn()
      .clickOnFrontOfCardUploadBtn()
      .clickOnFrontOfCardTakeBtn()
      .clickOnFrontOfCardSaveBtn()
      .clickOnBackOfCardUploadBtn()
      .clickOnBackOfCardTakeBtn()
      .clickOnBackOfCardSaveBtn()
      .clickOnSubmitBtn();
  });

  it(" Validate Legal Agreement skipping", () => {
    reviewPage
      .clickOnLegalAgreementsTab()
      .clickOnLegalAgreementsSign()
      .clickOnNextBtn();
  });

  it(" Validate Legal Agreement adding", () => {
    reviewPage
      .clickOnSonoSpineAgreement()
      .clickOnSonoSpineConsentToTreament()
      .clickOnSignCanvas()
      .clickOnNextBtn();
  });

  it(" Validate Review page passing", () => {
    cy.wait(2000);
    reviewPage.clickOnFirstSubmitBtn();
  });
});
