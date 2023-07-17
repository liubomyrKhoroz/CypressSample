import {getBusiness} from "../../e2e/data"
import General, {fieldExist} from "./General"

class WelcomePage extends General {

    locators = {
        EnglishOption: '[data-testid="preferredLanguageEn"]',
        SpanishOption: '[data-testid="preferredLanguageEs"]',
        FirstName: '[data-testid="first_name"]',
        MidName: '#normal_login_middle_init',
        LastName: '[data-testid="last_name"]',
        DOB: '[data-testid="dob"]',
        MobilePhoneOption: '#normal_login_preferredMethod > :nth-child(1) > span > input',
        EmailOption: '#normal_login_preferredMethod > :nth-child(2) > span > input',
        MobilePhoneInput: '[data-testid="phone_number"]',
        EmailInput: '#15911894-8884-4074-8412-b7ba49514380',
        GuardianYesOption: '#normal_login_hasGuardian > :nth-child(1) > span > input',
        GuardianNoOption: '[data-testid="hasGuardianNo"]',
        GuardianFirstName: '#normal_login_guardian_first_name',
        GuardianLastName: '#normal_login_guardian_last_name',
        GuardianListOptions: '#normal_login_relationship_to_patient',
        GuardianSectionLabel: '[for="normal_login_relationship_to_patient"]',
        VisitedBeforeYesOption: '#normal_login_returnPatient > :nth-child(1) > span > input',
        VisitedBeforeNoOption: '[data-testid="returnPatientNo"]',
        MedicalPatientYesOption: '#normal_login_medicarePatient > :nth-child(1) > span > input',
        MedicalPatientNoOption: '[data-testid="medicarePatientNo"]',
        AgreeTermsCheckbox: '[data-testid="agreeToTerms"]',
        AgreeTermsCheckboxVerification: '.ant-checkbox',
        ViewTermsButton: '#b6a01d47-57b0-44e8-a76e-dc29004758ab',
        CloseTermsWindowButton: '.ant-modal-close-x > span',
        CancelTermsWindowButton: '.ant-modal-footer > :nth-child(1) > span',
        AgreeTermsWindowButton: '.ant-modal-footer > :nth-child(2) > span',
        SubmitButton: '[data-testid="submitButton"]',
        TermsCheckboxChecked: '.ant-checkbox.ant-checkbox-checked',
        TermsCheckboxUnchecked: '.ant-checkbox:not(.ant-checkbox-checked)',
        TermsWindow: '.ant-modal-mask',
    }

    selectEnglishLanguage() {
        cy.get(this.locators.EnglishOption).click()
        return this
    }

    selectSpanishLanguage() {
        cy.get(this.locators.SpanishOption).click()
        return this
    }

    selectSwahiliLanguage() {
        return this
    }

    enterPatientFirstName(firstName) {
        cy.get(this.locators.FirstName).clear().type(firstName)
        return this
    }

    enterPatientMidName(midName) {
        cy.get(this.locators.MidName).clear().type(midName)
        return this
    }

    enterPatientLastName(lastName) {
        cy.get(this.locators.LastName).clear().type(lastName)
        return this
    }

    enterPatientName(firstName, midName, lastName) {
        cy.get(this.locators.FirstName).clear().type(firstName)
        cy.get(this.locators.MidName).clear().type(midName)
        cy.get(this.locators.LastName).clear().type(lastName)
        return this
    }

    enterDOB(DOB) {
        cy.get(this.locators.DOB).clear().type(DOB)
        return this
    }

    selectMobilePhone() {
        cy.get(this.locators.MobilePhoneOption).click()
        return this
    }

    selectEmail() {
        cy.get(this.locators.EmailOption).click()
        return this
    }

    enterMobilePhone(mobilePhone) {
        cy.get(this.locators.MobilePhoneInput).clear().type(mobilePhone)
        return this
    }

    enterEmail(email) {
        cy.get(this.locators.EmailInput).clear().type(email)
        return this
    }

    selectGuardianYes() {
        cy.get(this.locators.GuardianYesOption).click()
        return this
    }

    selectGuardianNo() {
        cy.get(this.locators.GuardianNoOption).click()
        return this
    }

    enterGuardianFirstName(firstName) {
        cy.get(this.locators.GuardianFirstName).clear().type(firstName)
        return this
    }

    enterGuardianLastName(lastName) {
        cy.get(this.locators.GuardianLastName).clear().type(lastName)
        return this
    }

    openGuardianOptions() {
        cy.get(this.locators.GuardianListOptions).click()
        return this
    }

    selectVisitedBeforeYes() {
        cy.get(this.locators.VisitedBeforeYesOption).click()
        return this
    }

    selectVisitedBeforeNo() {
        cy.get(this.locators.VisitedBeforeNoOption).click()
        return this
    }

    selectMedicalPatientYes() {
        cy.get(this.locators.MedicalPatientYesOption).click()
        return this
    }

    selectMedicalPatientNo() {
        cy.get(this.locators.MedicalPatientNoOption).click()
        return this
    }

    agreeTerms() {
        cy.get(this.locators.AgreeTermsCheckbox).click()
        return this
    }

    viewTerms() {
        cy.get(this.locators.ViewTermsButton).click()
        return this
    }

    closeTermsWindow() {
        cy.get(this.locators.CloseTermsWindowButton).click()
        return this
    }

    cancelTermsWindow() {
        cy.get(this.locators.CancelTermsWindowButton).click()
        return this
    }

    agreeTermsWindow() {
        cy.get(this.locators.AgreeTermsWindowButton).click()
        return this
    }

    submitChanges() {
        cy.get(this.locators.SubmitButton).click()
        return this
    }

    // VERIFICATIONS

    verifyEnglishSelected() {
        cy.get(this.locators.EnglishOption).should('be.checked')
        cy.get(this.locators.SpanishOption).should('not.be.checked')
        return this
    }

    verifySpanishSelected() {
        cy.get(this.locators.EnglishOption).should('not.be.checked')
        cy.get(this.locators.SpanishOption).should('be.checked')
        return this
    }

    verifySwahiliSelected() {
        return this
    }

    verifyMobilePhoneSelected() {
        cy.get(this.locators.MobilePhoneOption).should('be.checked')
        cy.get(this.locators.EmailOption).should('not.be.checked')
        return this
    }

    verifyEmailSelected() {
        cy.get(this.locators.MobilePhoneOption).should('not.be.checked')
        cy.get(this.locators.EmailOption).should('be.checked')
        return this
    }

    verifyGuardianIsEmpty() {
        cy.get(this.locators.GuardianYesOption).should('not.be.checked')
        cy.get(this.locators.GuardianNoOption).should('not.be.checked')
        return this
    }

    verifyGuardianYesSelected() {
        cy.get(this.locators.GuardianYesOption).should('be.checked')
        cy.get(this.locators.GuardianNoOption).should('not.be.checked')
        return this
    }

    verifyGuardianNoSelected() {
        cy.get(this.locators.GuardianYesOption).should('not.be.checked')
        cy.get(this.locators.GuardianNoOption).should('be.checked')
        return this
    }

    verifyGuardianSectionIsHidden() {
        cy.get(this.locators.GuardianFirstName).should('not.exist')
        cy.get(this.locators.GuardianLastName).should('not.exist')
        cy.get(this.locators.GuardianListOptions).should('not.exist')
        return this
    }

    verifyVisitedBeforeIsEmpty() {
        cy.get(this.locators.VisitedBeforeYesOption).should('not.be.checked')
        cy.get(this.locators.VisitedBeforeNoOption).should('not.be.checked')
        return this
    }

    verifyVisitedBeforeYesSelected() {
        cy.get(this.locators.VisitedBeforeYesOption).should('be.checked')
        cy.get(this.locators.VisitedBeforeNoOption).should('not.be.checked')
        return this
    }

    verifyVisitedBeforeNoSelected() {
        cy.get(this.locators.VisitedBeforeYesOption).should('not.be.checked')
        cy.get(this.locators.VisitedBeforeNoOption).should('be.checked')
        return this
    }

    verifyMedicalPatientIsEmpty() {
        cy.get(this.locators.MedicalPatientYesOption).should('not.be.checked')
        cy.get(this.locators.MedicalPatientNoOption).should('not.be.checked')
        return this
    }

    verifyMedicalPatientYesSelected() {
        cy.get(this.locators.MedicalPatientYesOption).should('be.checked')
        cy.get(this.locators.MedicalPatientNoOption).should('not.be.checked')
        return this
    }

    verifyMedicalPatientNoSelected() {
        cy.get(this.locators.MedicalPatientYesOption).should('not.be.checked')
        cy.get(this.locators.MedicalPatientNoOption).should('be.checked')
        return this
    }

    verifyTermsChecked() {
        cy.get(this.locators.AgreeTermsCheckboxVerification).should('have.class', 'ant-checkbox-checked')
        return this
    }

    verifyTermsNotChecked() {
        cy.get(this.locators.AgreeTermsCheckboxVerification).should('not.have.class', 'ant-checkbox-checked')
        return this
    }

    verifyTermsWindowClosed() {
        cy.get(this.locators.TermsWindow).should('not.exist')
        return this
    }

    medicalPatientSectionExist() {
        return fieldExist(this.locators.MedicalPatientNoOption)
    }

    guardianSectionExist() {
        return fieldExist(this.locators.GuardianNoOption)
    }

    phoneSectionExist() {
        return fieldExist(this.locators.MobilePhoneInput)
    }

    // VALIDATIONS

    validatePatientNameLabel(labelText) {
        cy.get('[style="margin-bottom: 0px; row-gap: 0px;"] > .ant-form-item-label > label > p').should('have.text', labelText)
        return this
    }

    validatePatientFirstName(placeholder) {
        cy.get(this.locators.FirstName).should('not.have.value').and('have.attr', 'placeholder').and('eq', placeholder)
        return this
    }

    validatePatientMidName(placeholder) {
        cy.get('#normal_login_middle_init').should('not.have.value').and('have.attr', 'placeholder').and('eq', placeholder)
        cy.get('[data-icon="circle-info"]').should('have.attr', 'xmlns').and('eq', 'http://www.w3.org/2000/svg')
        return this
    }

    validatePatientLastName(placeholder) {
        cy.get(this.locators.LastName).should('not.have.value').and('have.attr', 'placeholder').and('eq', placeholder);
        return this
    }

    validateDOBSection(labelText, placeholder) {
        cy.get('[for="normal_login_date_of_birth"] > span').should('have.text', labelText)
        cy.get(this.locators.DOB).should('not.have.value').and('have.attr', 'placeholder').and('eq', placeholder)
        return this
    }

    validatePreferredContactSection(labelText, optionMobilePhone, optionEmail) {
        cy.get('[for="normal_login_preferredMethod"]').should('have.text', labelText)
        cy.get('#normal_login_preferredMethod > :nth-child(1) > :nth-child(2)').should('have.text', optionMobilePhone)
        cy.get('#normal_login_preferredMethod > :nth-child(2) > :nth-child(2)').should('have.text', optionEmail)
        return this
    }

    validateMobilePhoneSection(labelText, placeholder) {
        cy.get('[for=normal_login_phone_number] > p').should('have.text', labelText)
        cy.get('[data-testid="phone_number"]').should('not.have.value').and('have.attr', 'placeholder').and('eq', placeholder)
        return this
    }

    validateEmailSection(labelText, placeholder) {
        cy.get('[for="normal_login_email"] > p').should('have.text', labelText)
        cy.get('#15911894-8884-4074-8412-b7ba49514380').should('not.have.value').and('have.attr', 'placeholder').and('eq', placeholder)
        return this
    }

    validateGuardianSection(labelText, optionYes, optionNo) {
        cy.get('[for="normal_login_hasGuardian"]').should('have.text', labelText)
        cy.get('#normal_login_hasGuardian > :nth-child(1) > :nth-child(2)').should('have.text', optionYes)
        cy.get('#normal_login_hasGuardian > :nth-child(2) > :nth-child(2)').should('have.text', optionNo)
        return this
    }

    validateGuardianFirstName(placeholder) {
        cy.get(this.locators.GuardianFirstName).should('not.have.value').and('have.attr', 'placeholder').and('eq', placeholder);
        return this
    }

    validateGuardianLastName(placeholder) {
        cy.get(this.locators.GuardianLastName).should('not.have.value').and('have.attr', 'placeholder').and('eq', placeholder);
        return this
    }

    validateGuardianRelationship(labelText) {
        cy.get(this.locators.GuardianSectionLabel).should('have.text', labelText)
        return this
    }

    validateGuardianOptions(listOfOptions) {
        for (let i = 0; i < listOfOptions.length; i++)
            cy.get(this.locators.GuardianListOptions + '-' + i).should('have.text', listOfOptions[i])
        return this
    }

    validateVisitedBeforeSection(labelPart1, labelPart2, optionYes, optionNo) {
        let labelText = labelPart1 + getBusiness() + labelPart2
        cy.get('[for="normal_login_returnPatient"]').should('have.text', labelText)
        cy.get('#normal_login_returnPatient > :nth-child(1) > :nth-child(2)').should('have.text', optionYes)
        cy.get('#normal_login_returnPatient > :nth-child(2) > :nth-child(2)').should('have.text', optionNo)
        return this
    }

    validateMedicalPatientSection(labelText, optionYes, optionNo) {
        cy.get('[for="normal_login_medicarePatient"]').should('have.text', labelText)
        cy.get('#normal_login_medicarePatient > :nth-child(1) > :nth-child(2)').should('have.text', optionYes)
        cy.get('#normal_login_medicarePatient > :nth-child(2) > :nth-child(2)').should('have.text', optionNo)
        return this
    }

    validateBottomLabel(labelText) {
        cy.get('.sc-dJGLCQ').should('have.text', labelText)
        return this
    }

    validateTermsWindow() {
        cy.get('#rcDialogTitle0').should('be.visible')
        cy.get('h3').should('be.visible')
        return this
    }

    validateButtonSubmit(buttonSubmit) {
        cy.get('[data-testid="submitButton"] > span').should('have.text', buttonSubmit)
        return this
    }
}
export default WelcomePage