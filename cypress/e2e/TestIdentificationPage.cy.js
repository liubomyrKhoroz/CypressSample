import State from "../support/state/State";
import WelcomePage from "../support/commands/WelcomePage";
import WelcomePageAfya from "../support/commands/AfyaSasa/WelcomePageAfya";
import VerificationPage from "../support/commands/VerificationPage";
import IdentificationPage from "../support/commands/IdentificationPage";
import testdata, { randomName } from "./testdata";
import data, { Pages } from "./data";

const state = new State();
let welcome;
const verification = new VerificationPage();
const identification = new IdentificationPage();

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
    identification.openPage(Pages.Identification);
    cy.wait(3000);
  });
});

describe(" Testing Identification page ", () => {
  it(" Icon ", () => {
    welcome.validateIcon();
  });

  it(" Ability to Skip ", () => {
    identification.buttonSkip().verifyURLnotContain("identification");
    cy.wait(500);
    identification.buttonPrevious();
  });

  it(" Opening upload picture window ", () => {
    identification.openCameraWindow().verifyCameraWindowOpened().pressCancel();
  });

  it(" Button Cancel ", () => {
    identification
      .openCameraWindow()
      .pressCancel()
      .verifyCameraWindowClosed()
      .openCameraWindow()
      .takePhoto()
      .verifyPictureAdded()
      .pressCancel()
      .verifyPictureNotSaved();
  });

  it(" Button Take picture ", () => {
    identification
      .openCameraWindow()
      .verifyPictureNotAdded()
      .takePhoto()
      .verifyPictureAdded()
      .pressCancel();
  });

  it(" Button Upload picture ", () => {
    identification
      .openCameraWindow()
      .verifyPictureNotAdded()
      .uploadPhoto("licenseFront")
      .verifyPictureAdded()
      .pressCancel();
  });

  it(" Button Trash picture ", () => {
    identification
      .openCameraWindow()
      .takePhoto()
      .verifyPictureAdded()
      .pressTrash()
      .verifyPictureNotAdded()
      .pressCancel();
  });

  it(" Image Preview ", () => {
    identification
      .openCameraWindow()
      .takePhoto()
      .verifyPictureAdded()
      .previewPicture()
      .verifyPreviewOpened()
      .previewStyleContains("0deg")
      .turnLeft()
      .previewStyleContains("-90deg")
      .turnRight()
      .previewStyleContains("0deg")
      .turnRight()
      .previewStyleContains("90deg")
      .zoomIn()
      .previewStyleContains("scale3d(2, 2, 1)")
      .zoomOut()
      .previewStyleContains("scale3d(1, 1, 1)")
      .closePreview()
      .pressCancel();
  });

  it(" Adding Image ", () => {
    identification
      .openCameraWindow()
      .takePhoto()
      .verifyPictureAdded()
      .savePicture()
      .verifyPictureSaved()
      .deletePicture();
  });

  it(" Deletion Image ", () => {
    identification
      .openCameraWindow()
      .takePhoto()
      .verifyPictureAdded()
      .savePicture()
      .verifyPictureSaved()
      .deletePicture()
      .verifyPictureNotSaved();
  });

  it(" Ability to Skip second picture ", () => {
    identification
      .openCameraWindow()
      .takePhoto()
      .verifyPictureAdded()
      .savePicture()
      .verifyPictureSaved()
      .buttonNext()
      .buttonSkip()
      .verifyURLnotContain("identification");
    cy.wait(500);
    identification.buttonPrevious().deletePicture();
  });

  it(" Saving images ", () => {
    identification
      .openCameraWindow()
      .uploadPhoto("licenseFront")
      .verifyPictureAdded()
      .savePicture()
      .verifyPictureSaved()

      .buttonNext()
      .openCameraWindow()
      .uploadPhoto("licenseBack")
      .verifyPictureAdded()
      .savePicture()
      .verifyPictureSaved()

      .buttonNext()
      .buttonPrevious()
      .verifyPictureSaved()
      .buttonPrevious()
      .verifyPictureSaved();
  });
});
