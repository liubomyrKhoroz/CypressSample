import General from "./General";

class IdentificationPage extends General {
  openCameraWindow() {
    cy.get(".style_footerButtonGroup__JDlIm > .ant-btn").click();
    return this;
  }

  deletePicture() {
    cy.get(
      ".style_footerButtonGroup__JDlIm > .ant-space > .ant-space-item > .ant-btn > span"
    ).click();
    return this;
  }

  takePhoto() {
    cy.get(".ant-space > :nth-child(1) > .ant-btn > span").click();
    return this;
  }

  uploadPhoto(image) {
    cy.fixture("licenseFront.png", "utf-8").then((fileContent) => {
      cy.get('input[type="file"]').attachFile({
        fileContent: fileContent,
        fileName: "licenseFront.png",
        mimeType: "image/png",
      });
    });
    return this;
  }

  pressTrash() {
    cy.get(":nth-child(3) > .ant-btn").click();
    return this;
  }

  pressCancel() {
    cy.get(".ant-modal-footer > :nth-child(1)").click();
    return this;
  }

  savePicture() {
    cy.get(".ant-modal-footer > .ant-btn-primary").click();
    return this;
  }

  previewPicture() {
    cy.get(".ant-row > .ant-image > .ant-image-mask > div").click();
    return this;
  }

  turnLeft() {
    cy.get(".ant-image-preview-operations > :nth-child(5)").click();
    return this;
  }

  turnRight() {
    cy.get(".ant-image-preview-operations > :nth-child(4)").click();
    return this;
  }

  zoomOut() {
    cy.get(".ant-image-preview-operations > :nth-child(3)").click();
    return this;
  }

  zoomIn() {
    cy.get(".ant-image-preview-operations > :nth-child(2)").click();
    return this;
  }

  closePreview() {
    cy.get(".ant-image-preview-operations > :nth-child(1)").click();
    return this;
  }

  verifyCameraWindowOpened() {
    cy.get(".ant-modal-body").should("be.visible");
    return this;
  }

  verifyCameraWindowClosed() {
    cy.get(".ant-modal-body").should("not.be.visible");
    return this;
  }

  verifyPictureAdded() {
    cy.get(".ant-modal-footer > .ant-btn-primary").should("not.be.disabled");
    return this;
  }

  verifyPictureNotAdded() {
    cy.get(".ant-modal-footer > .ant-btn-primary").should("be.disabled");
    return this;
  }

  verifyPictureSaved() {
    cy.get(
      ".style_footerButtonGroup__JDlIm > .ant-space > .ant-space-item > .ant-btn > span"
    ).should("exist");
    return this;
  }

  verifyPictureNotSaved() {
    cy.get(".style_footerButtonGroup__JDlIm > .ant-btn > span").should("exist");
    return this;
  }

  verifyPreviewOpened() {
    cy.get(".ant-image-preview-img").should("be.visible");
    return this;
  }

  previewStyleContains(deg) {
    cy.get(".ant-image-preview-img")
      .invoke("attr", "style")
      .should("contain", deg);
    return this;
  }
}
export default IdentificationPage;
