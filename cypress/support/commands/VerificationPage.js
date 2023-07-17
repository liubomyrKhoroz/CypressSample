import General from "./General";

class VerificationPage extends General {

    locators = {
        otp1: '[data-testid="otpInput-0"]',
        otp2: '[data-testid="otpInput-1"]',
        otp3: '[data-testid="otpInput-2"]',
        otp4: '[data-testid="otpInput-3"]',
        buttonResend: ':nth-child(1) > #24b0c46-c5ce-4a67-b687-c9afd6ca995c',
        buttonChangeNumber: ':nth-child(2) > #24b0c46-c5ce-4a67-b687-c9afd6ca995c',
    }

    enterOTP(otp) {
		cy.get(this.locators.otp1).type(otp)
		cy.get(this.locators.otp2).type(otp)
		cy.get(this.locators.otp3).type(otp)
		cy.get(this.locators.otp4).type(otp)
		return this
	}

    pressResend() {
        cy.get(this.locators.buttonResend).click()
        return this
    }

    pressChangeNumber() {
        cy.get(this.locators.buttonChangeNumber).click()
        return this
    }

    selectEnglish() {
        cy.get('#mantine-r5').click()
        //to finish
        return this
    }

    // VALIDATIONS

    validateFields() {
        cy.get(this.locators.otp1).should('not.have.value')
        cy.get(this.locators.otp2).should('not.have.value')
        cy.get(this.locators.otp3).should('not.have.value')
        cy.get(this.locators.otp4).should('not.have.value')
        return this
    }
}
export default VerificationPage