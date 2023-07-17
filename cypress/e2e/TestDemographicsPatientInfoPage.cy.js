import State from "../support/state/State";
import WelcomePage from "../support/commands/WelcomePage";
import WelcomePageAfya from "../support/commands/AfyaSasa/WelcomePageAfya";
import VerificationPage from "../support/commands/VerificationPage";
import IdentificationPage from "../support/commands/IdentificationPage";
import DemographicsPatientInfoPage from "../support/commands/DemographicsPatientInfoPage";
import testdata, { randomName } from "./testdata";
import data, { Pages } from "./data";

const state = new State();
let welcome;
const verification = new VerificationPage();
const identification = new IdentificationPage();
const patientInfo = new DemographicsPatientInfoPage();

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
    identification.openPage(Pages.Demographics);
    cy.wait(3000);
  });
});

describe(" Testing Patient Info page ", () => {
  it(" Icon ", () => {
    welcome.validateIcon();
  });

  it(" First Name field ", () => {
    patientInfo
      .clearFirstName()
      .validateErrorMessage(0, data.error_patient_first_name)
      .enterFirstName(testdata.first_name1)
      .validateErrorMessage(0, data.error_name_numbers)
      .enterFirstName(testdata.first_name2)
      .validateErrorMessage(0, data.error_name_numbers)
      .enterFirstName(testdata.first_name);
  });

  it(" Last Name field ", () => {
    patientInfo
      .clearLastName()
      .validateErrorMessage(0, data.error_patient_last_name)
      .enterLastName(testdata.first_name1)
      .validateErrorMessage(0, data.error_name_numbers)
      .enterLastName(testdata.first_name2)
      .validateErrorMessage(0, data.error_name_numbers)
      .enterLastName(testdata.first_name);
  });

  it(" DoB field ", () => {
    patientInfo
      .enterDOB(testdata.clear)
      .validateErrorMessage(0, data.error_dob_required)
      .enterDOB(testdata.dob1)
      .validateErrorMessage(0, data.error_dob_invalid)
      .enterDOB(testdata.dob2)
      .validateErrorMessage(0, data.error_dob_invalid)
      .enterDOB(testdata.dob3)
      .validateErrorMessage(0, data.error_dob_invalid)
      .enterDOB(testdata.dob);
  });

  // it(' Height section ', () => {
  //     if (patientInfo.feetFieldExist === true) {
  //         patientInfo
  //             .enterFeet(testdata.height1)
  //             .clearFeet()
  //             .validateErrorMessage(0, data.error_feet_required)
  //             .enterFeet(testdata.height1)
  //     } else {
  //         patientInfo
  //             .enterInches(testdata.height0)
  //             .validateErrorMessage(0, data.error_height_zero)
  //             .clearInches()
  //             .validateErrorMessage(0, data.error_height_required)
  //             .enterInches(testdata.height170)
  //     }
  // })
  //
  // it(' Weight field ', () => {
  //     patientInfo
  //         .enterWeight(testdata.height0)
  //         .validateErrorMessage(0, data.error_weight_zero)
  //         .clearWeight()
  //         .validateErrorMessage(0, data.error_weight_required)
  //         .enterWeight(testdata.height1)
  // })
});
