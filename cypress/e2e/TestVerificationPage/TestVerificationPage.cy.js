import State from "../../support/state/State";
import WelcomePage from "../../support/commands/WelcomePage";
import VerificationPage from "../../support/commands/VereficationPage";

const state = new State();
let welcome = new WelcomePage();
const verification = new VerificationPage();
const sessionName = "login";

beforeEach(() => {
  cy.session(sessionName, () => {
    state.site();
    welcome
      .enterPatientFirstName("max")
      .enterPatientLastName("last")
      .enterDOB("02/02/2002")
      .enterMobilePhone("5555555555")
      .selectGuardianNo()
      .selectVisitedBeforeNo()
      .selectMedicalPatientNo()
      .agreeTerms()
      .submitChanges();
    verification.enterOTP("0");
  });
});

describe(" Testting Verification page ", () => {
  it(" Enter wrong OTP ", () => {
    //cy.visit('https://patient.staging.advinow.ai/PatientApp/dashboard/appointment')
  });

  it(" Enter wrong OTP ", () => {
    //cy.visit('https://patient.staging.advinow.ai/PatientApp/dashboard/appointment')
  });
});
