import WelcomePage from "../WelcomePage"
import data from "../../../e2e/data"

class WelcomePageAfya extends WelcomePage {

    locatorsAfya = {
        LanguageField: '[readonly]',
        LanguageOption: '[role="option"]',
        LanguageFieldSelected: '[data-mantine-stop-propagation]',
        DOB: '[data-testid="dob"]',
        DOBLabel: '[for="normal_login_date_of_birth"] > span',
        MobileLabel: '[for=normal_login_phone_number] > p',
        MobilePhoneInput: '#15911894-8884-4074-8412-b7ba49514380',
        MobileCountry: '.ant-select-selection-item',
        PreferredContactsLabel: '[for="normal_login_preferredMethod"]',
        MobileOptionLabel: '#normal_login_preferredMethod > :nth-child(1) > :nth-child(2)',
        EmailOptionLabel: '#normal_login_preferredMethod > :nth-child(2) > :nth-child(2)',
        SubmitButton: '[data-testid="submitButton"] > span',
    }

    selectEnglishLanguage() {
        cy.get(this.locatorsAfya.LanguageField).click()
        cy.get(this.locatorsAfya.LanguageOption).eq(0).as('btn').click()
        return this
    }

    selectSpanishLanguage() {
        cy.get(this.locatorsAfya.LanguageField).click()
        cy.get(this.locatorsAfya.LanguageOption).eq(1).as('btn').click()
        return this
    }

    selectSwahiliLanguage() {
        cy.get(this.locatorsAfya.LanguageField).click()
        cy.get(this.locatorsAfya.LanguageOption).eq(2).as('btn').click()
        return this
    }

    enterMobilePhone(mobilePhone) {
        cy.get(this.locatorsAfya.MobilePhoneInput).clear().type(mobilePhone)
        return this
    }

    // VERIFICATIONS

    verifyEnglishSelected() {
        cy.get(this.locatorsAfya.LanguageFieldSelected).should('have.value', 'English')
        return this
    }

    verifySpanishSelected() {
        cy.get(this.locatorsAfya.LanguageFieldSelected).should('have.value', 'Español')
        return this
    }

    verifySwahiliSelected() {
        cy.get(this.locatorsAfya.LanguageFieldSelected).should('have.value', 'Kiswahili')
        return this
    }

    verifyMedicalPatientIsEmpty() {
        return this
    }

    // VALIDATIONS

    validateDOBSection(labelText, placeholder) {
        placeholder = data.placeholder_dob2_en
        cy.get(this.locatorsAfya.DOBLabel).should('have.text', labelText)
        cy.get(this.locatorsAfya.dob).should('not.have.value').and('have.attr', 'placeholder').and('eq', placeholder)
        return this
    }

    validatePreferredContactSection(labelText, optionMobilePhone, optionEmail) {
        optionMobilePhone = data.option_whats_app_en
        cy.get(this.locatorsAfya.PreferredContactsLabel).should('have.text', labelText)
        cy.get(this.locatorsAfya.MobileOptionLabel).should('have.text', optionMobilePhone)
        cy.get(this.locatorsAfya.EmailOptionLabel).should('have.text', optionEmail)
        return this
    }

    validateMobilePhoneSection(labelText, placeholder) {
        labelText = data.label_whatsapp_en
        cy.get(this.locatorsAfya.MobileLabel).should('have.text', labelText)
        cy.get(this.locatorsAfya.MobileCountry).should('have.text', "🇹🇿 +255")
        cy.get(this.locatorsAfya.MobilePhoneInput).should('not.have.value')
        return this
    }

    // validateMedicalPatientSection() {return this}

    validateButtonSubmit(buttonSubmit) {
        buttonSubmit = data.button_next
        cy.get(this.locatorsAfya.SubmitButton).should('have.text', buttonSubmit)
        return this
    }
}

export default WelcomePageAfya;