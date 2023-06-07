import State from "../../support/state/State";
import WelcomePage from "../../support/commands/WelcomePage";
import WelcomePageAdvinow from "../../support/commands/Advinow/WelcomePageAdvinow";
import WelcomePageAfyaBrain from "../../support/commands/AfyaSasa/WelcomePageAfyaBrain";
import WelcomePageAfyaCardiac from "../../support/commands/AfyaSasa/WelcomePageAfyaCardiac";
import WelcomePageBarrow from "../../support/commands/Barrow/WelcomePageBarrow";
import WelcomePageMoremd from "../../support/commands/MoreMD/WelcomePageMoremd";
import WelcomePageSonospine from "../../support/commands/SonoSpine/WelcomePageSonospine";
import data from "../../support/state/data";
import { setBusiness } from "../../support/state/data";
import testdata from "../../support/state/testdata";

const state = new State();
let welcome = new WelcomePage();

before(() => {
  state.site();
});

describe(" Set up ", () => {
  it("Validate the URL", () => {
    cy.wait(1000);
    cy.location("href").then((url) => {
      switch (true) {
        case url.includes("301"):
          welcome = new WelcomePageAdvinow();
          setBusiness("Advinow");
          break;
        case url.includes("757"):
          welcome = new WelcomePageAfyaBrain();
          setBusiness("Afya Sasa Brain");
          break;
        case url.includes("750"):
          welcome = new WelcomePageAfyaCardiac();
          setBusiness("Afya Sasa Cardiac");
          break;
        case url.includes("684"):
          welcome = new WelcomePageBarrow();
          setBusiness("Barrow");
          break;
        case url.includes("754"):
          welcome = new WelcomePageMoremd();
          setBusiness("MoreMD");
          break;
        case url.includes("749"):
          welcome = new WelcomePageSonospine();
          setBusiness("SonoSpine");
          break;
        default:
          break;
      }
    });
  });
});

describe(" Testing Welcome page ", () => {
  xit(" First open displaying validation - English ", () => {
    welcome
      .selectEnglishLanguage()
      .validateIcon()
      .validatePacientNameLabel(data.label_pacient_name_en)
      .validatePatientFirstName(data.placeholder_first_name_en)
      .validatePatientMidName(data.placeholder_mid_name_en)
      .validatePatientLastName(data.placeholder_last_name_en)
      .validateDOBSection(data.label_dob_en, data.placeholder_dob_en)

      .validatePreferredContactSection(
        data.label_login_option_en,
        data.option_mobile_phone_en,
        data.option_email_en
      )
      .verifyMobilePhoneSelected()
      .validateMobilePhoneSection(
        data.label_mobile_phone_en,
        data.placeholder_mobile_phone_en
      )

      .verifyVisitedBeforeIsEmpty()
      .validateVisitedBeforeSection(
        data.label_visited_before_part1_en,
        data.label_visited_before_part2_en,
        data.option_yes_en,
        data.option_no_en
      )

      .verifyGuardianIsEmpty()
      .verifyGuardianSectionIsHidden()
      .validateGuardianSection(
        data.label_guardian_en,
        data.option_yes_en,
        data.option_no_en
      )

      .verifyMedicalPatientIsEmpty()
      .validateMedicalPatientSection(
        data.label_medical_patient_en,
        data.option_yes_en,
        data.option_no_en
      )
      .verifyGuardianIsEmpty()
      .verifyGuardianSectionIsHidden()
      .validateGuardianSection(
        data.label_guardian_en,
        data.option_yes_en,
        data.option_no_en
      )

      .verifyMedicalPatientIsEmpty()
      .validateMedicalPatientSection(
        data.label_medical_patient_en,
        data.option_yes_en,
        data.option_no_en
      )

      .validateBottomLabel(data.label_call_911_en)
      .verifyTermsNotChecked()
      .validateButtonSubmit(data.button_submit_en);
  });

  it(" Language section", () => {
    welcome
      .selectEnglishLanguage()
      .verifyEnglishSelected()
      .selectSpanishLanguage()
      .verifySpanishSelected()
      .selectSwahiliLanguage()
      .verifySwahiliSelected();
  });

  it(" Patient First Name", () => {
    welcome
      .selectEnglishLanguage()
      .submitChanges()
      .validateErrorMessage(0, data.error_name_required)
      .enterPatientFirstName(testdata.first_name1)
      .validateErrorMessage(0, data.error_name_numbers)
      .enterPatientFirstName(testdata.first_name2)
      .validateErrorMessage(0, data.error_name_numbers);
  });

  it(" Patient Mid Name", () => {
    welcome
      .selectEnglishLanguage()
      .submitChanges()
      .enterPatientMidName(testdata.mid_name1)
      .validateErrorMessage(1, data.error_middle_invalid)
      .enterPatientMidName(testdata.mid_name2)
      .validateErrorMessage(1, data.error_middle_invalid);
  });

  it(" Patient Last Name", () => {
    welcome
      .selectEnglishLanguage()
      .submitChanges()
      .validateErrorMessage(2, data.error_name_required)
      .enterPatientLastName(testdata.first_name1)
      .validateErrorMessage(2, data.error_name_numbers)
      .enterPatientLastName(testdata.first_name2)
      .validateErrorMessage(2, data.error_name_numbers);
  });

  it(" Patient DoB", () => {
    welcome
      .selectEnglishLanguage()
      .submitChanges()
      .validateErrorMessage(3, data.error_dob_required)
      .enterDOB(testdata.dob1)
      .validateErrorMessage(3, data.error_dob_invalid)
      .enterDOB(testdata.dob2)
      .validateErrorMessage(3, data.error_dob_invalid)
      .enterDOB(testdata.dob3)
      .validateErrorMessage(3, data.error_dob_invalid);
  });

  it(" Phone section", () => {
    if (welcome.phoneSectionExist()) {
      welcome.selectEnglishLanguage();
      // to do
    }
  });

  it(" Email section", () => {
    welcome
      .selectEnglishLanguage()
      .selectEmail()
      .verifyEmailSelected()
      .validateEmailSection(data.label_email_en, data.placeholder_email_en);
    // to do
  });

  it(" Guardian section", () => {
    if (welcome.guardianSectionExist()) {
      welcome
        .selectEnglishLanguage()
        .verifyGuardianIsEmpty()
        .verifyGuardianSectionIsHidden()
        .submitChanges()
        .validateErrorMessage(5, data.error_field_required)
        .selectGuardianYes()
        .verifyGuardianYesSelected()
        .validateGuardianFirstName(data.placeholder_first_name_en)
        .validateGuardianLastName(data.placeholder_last_name_en)
        .validateGuardianRelationship(data.placehopder_relationship_en)
        .submitChanges()
        .validateErrorMessage(5, data.error_name_required)
        .validateErrorMessage(6, data.error_name_required)
        .validateErrorMessage(7, data.error_relationship_required)
        .enterGuardianFirstName(testdata.first_name1)
        .validateErrorMessage(5, data.error_name_numbers)
        .enterGuardianLastName(testdata.first_name1)
        .validateErrorMessage(6, data.error_name_numbers)
        .openGuardianOptions()
        .validateGuardianOptions(data.list_relationship_en)
        .selectGuardianNo()
        .verifyGuardianNoSelected()
        .verifyGuardianSectionIsHidden();
    }
  });

  it(" Visited before section", () => {
    welcome
      .selectEnglishLanguage()
      .verifyVisitedBeforeIsEmpty()
      .submitChanges()
      .validateErrorMessage(5, data.error_field_required)
      .selectVisitedBeforeYes()
      .verifyVisitedBeforeYesSelected()
      .selectVisitedBeforeNo()
      .verifyVisitedBeforeNoSelected();
  });

  it(" Medical Patient section", () => {
    if (welcome.medicalPatientSectionExist()) {
      welcome
        .selectEnglishLanguage()
        .verifyMedicalPatientIsEmpty()
        .submitChanges()
        .validateErrorMessage(5, data.error_field_required)
        .selectMedicalPatientYes()
        .verifyMedicalPatientYesSelected()
        .selectMedicalPatientNo()
        .verifyMedicalPatientNoSelected();
    }
  });

  it(" Terms checkbox", () => {
    welcome
      .verifyTermsNotChecked()
      .agreeTerms()
      .verifyTermsChecked()
      .agreeTerms()
      .verifyTermsNotChecked();
  });

  it(" Terms window", () => {
    welcome
      .viewTerms()
      .validateTermsWindow()
      .closeTermsWindow()
      .verifyTermsWindowClosed()
      .viewTerms()
      .cancelTermsWindow()
      .verifyTermsWindowClosed()
      .viewTerms()
      .agreeTermsWindow()
      .verifyTermsWindowClosed()
      .verifyTermsChecked();
  });
});
