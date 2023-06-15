import State from "../../support/state/State";
import WelcomePage, {
  guardianSectionExist,
} from "../../support/commands/WelcomePage";
import WelcomePageAfya from "../../support/commands/AfyaSasa/WelcomePageAfya";
import VerificationPage from "../../support/commands/VerificationPage";
import IdentificationPage from "../../support/commands/IdentificationPage";
import DemographicsPatientInfoPage, {
  feetFieldExist,
} from "../../support/commands/DemographicsPatientInfoPage";
import testdata, { randomName } from "../testdata";
import data, { Pages } from "../data";

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
    guardianSectionExist().then((exist) => {
      if (exist === true) {
        welcome.selectGuardianNo();
      }
    });
    welcome.selectVisitedBeforeNo().agreeTerms().submitChanges();
    verification.enterOTP(testdata.otp);
    identification.openPage(Pages.Demographics);
    cy.wait(3000);
  });
});

describe(" Testing Patient Info page ", () => {
  it(" Test First Name field ", () => {
    patientInfo
      .clearFirstName()
      .validateErrorMessage(0, data.error_patient_first_name)
      .enterFirstName(testdata.first_name1)
      .validateErrorMessage(0, data.error_name_numbers)
      .enterFirstName(testdata.first_name2)
      .validateErrorMessage(0, data.error_name_numbers)
      .clearFirstName();
  });

  it(" Test Last Name field ", () => {
    patientInfo
      .clearLastName()
      .validateErrorMessage(1, data.error_patient_last_name)
      .enterLastName(testdata.first_name1)
      .validateErrorMessage(1, data.error_name_numbers)
      .enterLastName(testdata.first_name2)
      .validateErrorMessage(1, data.error_name_numbers)
      .clearLastName();
  });

  it(" Test DoB field ", () => {
    patientInfo
      .clearDoB()
      .validateErrorMessage(2, data.error_dob_required)
      .enterDOB(testdata.dob1)
      .validateErrorMessage(2, data.error_dob_invalid)
      .enterDOB(testdata.dob2)
      .validateErrorMessage(2, data.error_dob_invalid)
      .enterDOB(testdata.dob3)
      .validateErrorMessage(2, data.error_dob_invalid);
  });

  it(" Height section ", () => {
    feetFieldExist().then((exist) => {
      if (exist === true) {
        cy.log("exist");
        // to do
      } else {
        cy.log("not exist");
        patientInfo
          .enterInches(0)
          .validateErrorMessage(3, data.error_height_zero)
          .clearInches()
          .validateErrorMessage(3, data.error_height_required);
      }
    });
  });
});
