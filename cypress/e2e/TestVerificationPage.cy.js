import State from "../support/state/State";
import WelcomePage from "../support/commands/WelcomePage";
import WelcomePageAfya from "../support/commands/AfyaSasa/WelcomePageAfya";
import VerificationPage from "../support/commands/VerificationPage";
import testdata from "./testdata";
import data from "./data";

const state = new State();
let welcome = new WelcomePage();
const verification = new VerificationPage();

before(() => {
  state.site();
  cy.wait(3000);
  cy.location("href").then((url) => {
    if (url.includes("757") || url.includes("750")) {
      welcome = new WelcomePageAfya();
    }
    welcome
      .selectEnglishLanguage()
      .enterPatientName(
        testdata.first_name,
        testdata.mid_name,
        testdata.first_name
      )
      .enterDOB(testdata.dob)
      .selectMobilePhone()
      .enterMobilePhone(testdata.phone_number);
    if (welcome.guardianSectionExist()) {
      welcome.selectGuardianNo();
    }
    welcome.selectVisitedBeforeNo().agreeTerms().submitChanges();
  });
});

describe(" Testing Verification page ", () => {
  it(" Icon ", () => {
    welcome.validateIcon();
  });

  it(" Validate OTP fields ", () => {
    verification.validateFields();
  });

  it(" Enter wrong OTP ", () => {
    verification
      .enterOTP(testdata.otp1)
      .validateNotification(data.message_wrong_otp_phone);
  });

  it(" Enter correct OTP ", () => {
    verification
      .enterOTP(testdata.otp)
      .validateNotification(data.message_verified);
  });
});
