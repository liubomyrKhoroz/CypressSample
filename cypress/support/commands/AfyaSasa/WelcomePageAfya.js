import WelcomePage from "../WelcomePage"
import data from "../../../e2e/data"

class WelcomePageAfya extends WelcomePage {
   
    selectEnglishLanguage(){
        cy.get('[data-mantine-stop-propagation]').click()
        cy.get('[role="option"]').eq(0).as('btn').click()
        return this
    }

    selectSpanishLanguage(){
        cy.get('[data-mantine-stop-propagation]').click()
        cy.get('[role="option"]').eq(1).as('btn').click()
        return this
    }

    selectSwahiliLanguage(){
        cy.get('[data-mantine-stop-propagation]').click()
        cy.get('[role="option"]').eq(2).as('btn').click()
        return this
    }

    // VERIFICATIONS

    verifyEnglishSelected() {
		cy.get('[data-mantine-stop-propagation]').should('have.value', 'English')
		return this
	}

	verifySpanishSelected() {
		cy.get('[data-mantine-stop-propagation]').should('have.value', 'Español')
		return this
	}

    verifySwahiliSelected() {		
        cy.get('[data-mantine-stop-propagation]').should('have.value', 'Kiswahili')
        return this
    }

    verifyGuardianIsEmpty() {return this}
    
    verifyMedicalPatientIsEmpty() {return this}

    // VALIDATIONS

    validateIcon() {}

    validateDOBSection(labelText, placeholder) {
        placeholder = data.placeholder_dob2_en
		cy.get('[for="normal_login_date_of_birth"] > span').should('have.text', labelText)
		cy.get('[data-testid="dob"]').should('not.have.value').and('have.attr', 'placeholder').and('eq', placeholder)
		return this
	}

    validatePreferredContactSection(labelText, optionMobilePhone, optionEmail) {
        optionMobilePhone = data.option_whatsup_en
		cy.get('[for="normal_login_preferredMethod"]').should('have.text', labelText)
    	cy.get('#normal_login_preferredMethod > :nth-child(1) > :nth-child(2)').should('have.text', optionMobilePhone)
   		cy.get('#normal_login_preferredMethod > :nth-child(2) > :nth-child(2)').should('have.text', optionEmail)
		return this
	}

    validateMobilePhoneSection(labelText, placeholder) {
        labelText = data.label_whatsapp_en
		cy.get('[for=normal_login_phone_number] > p').should('have.text', labelText)
        cy.get('.ant-select-selection-item').should('have.text', "🇹🇿 +255")
		cy.get('#15911894-8884-4074-8412-b7ba49514380').should('not.have.value')
		return this
	}

    
    validateGuardianSection(labelText, optionYes, optionNo) {return this}

    validateMedicalPatientSection() {return this}

    validateButtonSubmit(buttonSubmit) {
        buttonSubmit = data.button_next
        cy.get('[data-testid="submitButton"] > span').should('have.text', buttonSubmit)
        return this
    }
}
export default WelcomePageAfya;