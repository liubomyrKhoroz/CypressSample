import General, {fieldExist} from "./General"

class DemographicsPatientInfoPage extends General {

    locators = {
        FirstName: '#patient_form_first_name',
        LastName: '#patient_form_last_name',
        PreferredName: '#patient_form_preferred_name',
        DOB: '[data-testid="dob"]',
        Inches: '#patient_form_inches',
        Feet: '#patient_form_feet',
        Weight: '#patient_form_weight',
    }

    enterFirstName(firstName) {
        cy.get(this.locators.FirstName).clear().type(firstName)
        return this
    }

    clearFirstName() {
        cy.get(this.locators.FirstName).clear()
        return this
    }

    enterPreferredName(preferredName) {
        cy.get(this.locators.PreferredName).clear().type(preferredName)
        return this
    }

    enterLastName(lastName) {
        cy.get(this.locators.LastName).clear().type(lastName)
        return this
    }

    clearLastName() {
        cy.get(this.locators.LastName).clear()
        return this
    }

    enterDOB(dob) {
        cy.get(this.locators.DOB).clear().type(dob)
        return this
    }

    enterFeet(feet) {
        cy.get(this.locators.Feet).clear().type(feet)
        return this
    }

    clearFeet() {
        cy.get(this.locators.Feet).clear()
        return this
    }

    enterInches(inches) {
        cy.get(this.locators.Inches).clear().type(inches)
        return this
    }

    clearInches() {
        cy.get(this.locators.Inches).clear()
        return this
    }

    enterWeight(weight) {
        cy.get(this.locators.Weight).clear().type(weight)
        return this
    }

    clearWeight() {
        cy.get(this.locators.Weight).clear()
        return this
    }

    selectRace(race) {
        cy.get('#patient_form_race')

        return this
    }

    selectEthnicity(ethnicity) {
        cy.get('#patient_form_ethnicity')

        return this
    }

    selectMale() {
        cy.get(':nth-child(1) > .ant-radio > .ant-radio-input').click()
        return this
    }

    selectFemale() {
        cy.get(':nth-child(2) > .ant-radio > .ant-radio-input').click()
        return this
    }

    selectPregnantYes() {
        cy.get('#patient_form_pregnancy_status > :nth-child(1) > .ant-radio > .ant-radio-input').click()
        return this
    }

    selectPregnantNo() {
        cy.get('#patient_form_pregnancy_status > :nth-child(2) > .ant-radio > .ant-radio-input').click()
        return this
    }

    selectPregnantUnsure() {
        cy.get(':nth-child(3) > .ant-radio > .ant-radio-input').click()
        return this
    }

    feetFieldExist() {
        return fieldExist(this.locators.Feet)
    }
}

export default DemographicsPatientInfoPage