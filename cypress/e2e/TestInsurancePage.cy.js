import State from "../support/state/State";
import WelcomePage from "../support/commands/WelcomePage";
import WelcomePageAfya from "../support/commands/AfyaSasa/WelcomePageAfya";
import VerificationPage from "../support/commands/VerificationPage";
import InsurancePage from "../support/commands/InsurancePage";
import testdata, { randomName, today, tomorrow, yesterday } from "./testdata";
import data, { Pages, setBusiness } from "./data";

const state = new State();
let welcome;
const verification = new VerificationPage();
const insurance = new InsurancePage();
let date_format = 0;

before(() => {
  state.site();
  cy.wait(3000);
  cy.location("href").then((url) => {
    if (url.includes("757") || url.includes("750")) {
      welcome = new WelcomePageAfya();
      date_format = 1;
      setBusiness("Afya Sasa");
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
    insurance.openPage(Pages.Insurance);
    cy.wait(3000);
  });
});

describe(" Testing Identification page ", () => {
  it(" Icon ", () => {
    insurance.validateIcon();
  });

  it(" Insurance checkbox - can not skip ", () => {
    insurance
      .buttonNext()
      .validateNotification(data.message_insurance_required)
      .validateErrorMessage(0, data.error_insurance_required);
  });

  it(" Insurance Self-Pay checkboxes ", () => {
    insurance
      .verifyInsuranceSelected()
      .selectSelfPay()
      .verifySelfPaySelected()
      .selectInsurance();
  });

  it(" Self-pay - ability to Skip ", () => {
    insurance
      .selectSelfPay()
      .buttonSkip()
      .verifyURLnotContain("insurance")
      .buttonPrevious();
  });

  it(" Insurance not listed - ability to Skip ", () => {
    insurance
      .selectPrimaryNotListed()
      .buttonSkip()
      .verifyURLnotContain("insurance")
      .buttonPrevious();
  });

  it(" Insurance Provider field ", () => {
    if (insurance.verifySpecifyExist()) {
      insurance
        .validateInsuranceProvider(data.placeholder_select_provider)
        .openFirstProvider()
        .selectFirstProvider(0)
        .selectPrimarySpecify(0)
        .verifyErrorIsNotPresent();
    } else {
      insurance
        .validateInsuranceProvider(data.placeholder_enter_provider)
        .enterInsuranceProvider(testdata.provider_search)
        .verifyInsuranceProviderSelected(testdata.provider)
        .verifyErrorIsNotPresent();
    }
  });

  it(" Member ID ", () => {
    insurance
      .validateMemberId(data.placeholder_member_id)
      .enterMemberId(testdata.special_char_value)
      .validateErrorMessage(0, data.error_special_character)
      .enterMemberId(testdata.mix_all_value)
      .validateErrorMessage(0, data.error_special_character)
      .enterMemberId(testdata.clear)
      .validateErrorMessage(0, data.error_member_id_required)
      .enterMemberId(testdata.mix_value)
      .verifyErrorIsNotPresent();
  });

  it(" Group ID ", () => {
    insurance
      .validateGroupId(data.placeholder_group_id)
      .enterGroupId(testdata.special_char_value)
      .validateErrorMessage(0, data.error_special_character)
      .enterGroupId(testdata.mix_all_value)
      .validateErrorMessage(0, data.error_special_character)
      .enterGroupId(testdata.clear)
      .validateErrorMessage(0, data.error_group_id_required)
      .enterGroupId(testdata.mix_value)
      .verifyErrorIsNotPresent();
  });

  it(" RxBin ", () => {
    insurance
      .validateRxBin(data.placeholder_rx_bin)
      .enterRxBin(testdata.special_char_value)
      .validateErrorMessage(0, data.error_special_character)
      .enterRxBin(testdata.mix_all_value)
      .validateErrorMessage(0, data.error_special_character)
      .enterRxBin(testdata.clear)
      .verifyErrorIsNotPresent()
      .enterRxBin(testdata.mix_value)
      .verifyErrorIsNotPresent();
  });

  it(" RxPcn ", () => {
    insurance
      .validateRxPcn(data.placeholder_rx_pcn)
      .enterRxPcn(testdata.special_char_value)
      .validateErrorMessage(0, data.error_special_character)
      .enterRxPcn(testdata.mix_all_value)
      .validateErrorMessage(0, data.error_special_character)
      .enterRxPcn(testdata.clear)
      .verifyErrorIsNotPresent()
      .enterRxPcn(testdata.mix_value)
      .verifyErrorIsNotPresent();
  });

  it(" Start Date & End Date ", () => {
    if (insurance.verifyStarDateExist()) {
      insurance
        .validateStartDate(data.placeholder_dob_en)
        .enterStartDate(tomorrow()[date_format])
        .validateErrorMessage(0, data.error_start_date_before)
        .enterStartDate(testdata.dob2)
        .validateErrorMessage(0, data.error_date_invalid)
        .enterStartDate(testdata.dob3)
        .validateErrorMessage(0, data.error_date_invalid)
        .enterStartDate(today()[date_format])
        .verifyErrorIsNotPresent()

        .validateEndData(data.placeholder_dob_en)
        .enterEndDate(yesterday()[date_format])
        .validateErrorMessage(0, data.error_end_date_after)
        .enterEndDate(tomorrow()[date_format])
        .verifyErrorIsNotPresent();
    }
  });

  it(" First Name ", () => {
    insurance
      .selectSameAsPatient()
      .selectSameAsPatient()
      .validateFirstName(data.placeholder_first_name_en)
      .enterFirstName(randomName())
      .enterFirstName(testdata.clear)
      .validateErrorMessage(0, data.error_first_name_required)
      .enterFirstName(randomName())
      .verifyErrorIsNotPresent();
  });

  it(" Last Name ", () => {
    insurance
      .validateLastName(data.placeholder_last_name_en)
      .enterLastName(randomName())
      .enterLastName(testdata.clear)
      .validateErrorMessage(0, data.error_last_name_required)
      .enterLastName(randomName())
      .verifyErrorIsNotPresent();
  });

  it(" DoB field ", () => {
    cy.log(today()[date_format]);
    insurance
      .validateDOB()
      .enterDOB(today()[date_format])
      .clearDOB()
      .validateErrorMessage(0, data.error_dob_required)
      .enterDOB(tomorrow()[date_format])
      .validateErrorMessage(0, data.error_dob_invalid)
      .enterDOB(testdata.dob2)
      .validateErrorMessage(0, data.error_dob_invalid)
      .enterDOB(testdata.dob3)
      .validateErrorMessage(0, data.error_dob_invalid)
      .enterDOB(today()[date_format]);
  });

  it(" Sex section ", () => {
    insurance
      // .buttonNext()
      // .validateErrorMessage(0, data.error_sex_required)
      .verifyGenderNotSelected()
      .selectMale()
      .verifyMaleSelected()
      .selectFemale()
      .verifyFemaleSelected()
      .verifyErrorIsNotPresent();
  });

  it(" Relationship section ", () => {
    if (insurance.verifyRelationshipExist()) {
      insurance
        .validateRelationShip(data.placeholder_relationship_en)
        .openRelationship()
        .validateRelationShipOptions(data.list_relationship_insurance)
        .selectRelationship(0)
        .verifyErrorIsNotPresent();
    }
  });

  it(" Address section ", () => {
    insurance
      .validateAddressOne()
      .enterAddressOne(testdata.mix_all_value)
      .verifyErrorIsNotPresent()

      .validateAddressTwo()
      .enterAddressTwo(testdata.mix_all_value)
      .verifyErrorIsNotPresent()

      .validateAddressCity()
      .enterAddressCity(testdata.mix_value)
      .verifyErrorMessageContain(0, data.error_is_invalid)
      .enterAddressCity(testdata.text_value)
      .verifyErrorIsNotPresent()

      .validatePostCode()
      .enterPostCode(testdata.numeric_value)
      .verifyErrorIsNotPresent();
    if (insurance.verifyStateExist()) {
      insurance
        .validateState(data.placeholder_state)
        .openState()
        .validateStateOptions(data.list_state)
        .selectState(testdata.state)
        .verifyErrorIsNotPresent();
    }
  });

  it(" Phone Number ", () => {
    insurance
      .validatePhoneNumber(data.placeholder_mobile_phone)
      .enterPhoneNumber(testdata.numeric_value)
      .verifyErrorMessageContain(0, data.error_phone_number_short)
      .enterPhoneNumber(testdata.clear)
      .verifyErrorMessageContain(0, data.error_phone_number_required)
      .enterPhoneNumber(testdata.phone_number)
      .verifyErrorIsNotPresent();
  });

  it(" Ability to Skip adding images ", () => {
    insurance
      .buttonNext()
      .verifyURLnotContain("insurance")
      .wait(1000)
      .buttonPrevious()
      .verifyDataFilledIn();
  });

  it(" MemberID unsure ", () => {
    insurance.selectMemberIdUnsure().verifyMemberIdDisabled();
  });

  it(" GroupID unsure ", () => {
    insurance.selectGroupIdUnsure().verifyGroupIdDisabled();
  });

  it(" Skip MemberID and GroupID ", () => {
    insurance
      .verifyMemberIdDisabled()
      .verifyGroupIdDisabled()
      .buttonNext()
      .verifyURLnotContain("insurance")
      .wait(1000)
      .buttonPrevious()
      .selectMemberIdUnsure()
      .selectGroupIdUnsure()
      .enterMemberId(testdata.mix_value)
      .enterGroupId(testdata.mix_value);
  });
});
