import General from "./General"

class IdentificationPage extends General {

    locators = {
        OpenCameraWindow: '.style_footerButtonGroup__JDlIm > .ant-btn',
        DeletePictureButton: '.style_footerButtonGroup__JDlIm > .ant-space > .ant-space-item > .ant-btn > span',
        TakePhotoButton: '.ant-space > :nth-child(1) > .ant-btn > span',
        UploadPhotoButton: 'input[type="file"]',
        TrashButton: ':nth-child(3) > .ant-btn',
        CancelButton: '.ant-modal-footer > :nth-child(1)',
        SavePictureButton: '.ant-modal-footer > .ant-btn-primary',
        PreviewPicture: '.ant-row > .ant-image > .ant-image-mask > div',
        TurnLeftButton: '.ant-image-preview-operations > :nth-child(5)',
        TurnRightButton: '.ant-image-preview-operations > :nth-child(4)',
        ZoomOutButton: '.ant-image-preview-operations > :nth-child(3)',
        ZoomInButton: '.ant-image-preview-operations > :nth-child(2)',
        ClosePreviewButton: '.ant-image-preview-operations > :nth-child(1)',
        CameraWindow: '.ant-modal-body',
        SaveButton: '.ant-modal-footer > .ant-btn-primary',
        ImagePreview: '.ant-image-preview-img',
    }

    openCameraWindow() {
        cy.get(this.locators.OpenCameraWindow).click()
        return this
    }

    deletePicture() {
        cy.get(this.locators.DeletePictureButton).click()
        return this
    }

    takePhoto() {
        cy.get(this.locators.TakePhotoButton).click()
        return this
    }

    uploadPhoto(image) {
        this.uploadFile(image, this.locators.UploadPhotoButton)
        return this
    }

    pressTrash() {
        cy.get(this.locators.TrashButton).click()
        return this
    }

    pressCancel() {
        cy.get(this.locators.CancelButton).click()
        return this
    }

    savePicture() {
        cy.get(this.locators.SavePictureButton).click()
        return this
    }

    previewPicture() {
        cy.get(this.locators.PreviewPicture).click()
        return this
    }

    turnLeft() {
        cy.get(this.locators.TurnLeftButton).click()
        return this
    }

    turnRight() {
        cy.get(this.locators.TurnRightButton).click()
        return this
    }

    zoomOut() {
        cy.get(this.locators.ZoomOutButton).click()
        return this
    }

    zoomIn() {
        cy.get(this.locators.ZoomInButton).click()
        return this
    }

    closePreview() {
        cy.get(this.locators.ClosePreviewButton).click()
        return this
    }

    verifyCameraWindowOpened() {
        cy.get(this.locators.CameraWindow).should('be.visible')
        return this
    }

    verifyCameraWindowClosed() {
        cy.get(this.locators.CameraWindow).should('not.be.visible')
        return this
    }

    verifyPictureAdded() {
        cy.get(this.locators.SaveButton).should('not.be.disabled')
        return this
    }

    verifyPictureNotAdded() {
        cy.get(this.locators.SaveButton).should('be.disabled')
        return this
    }

    verifyPictureSaved() {
        cy.get(this.locators.DeletePictureButton).should('exist')
        return this
    }

    verifyPictureNotSaved() {
        cy.get(this.locators.TakePhotoButton).should('exist')
        return this
    }

    verifyPreviewOpened() {
        cy.get(this.locators.ImagePreview).should('be.visible')
        return this
    }

    previewStyleContains(deg) {
        cy.get(this.locators.ImagePreview).invoke('attr', 'style').should('contain', deg);
        return this;
    }
}

export default IdentificationPage