
class VerificationPage{

    enterOTP(otp) {
		cy.get('[data-testid="otpInput-0"]').type(otp)
		cy.get('[data-testid="otpInput-1"]').type(otp)
		cy.get('[data-testid="otpInput-2"]').type(otp)
		cy.get('[data-testid="otpInput-3"]').type(otp)
		return this
	}

    pressResend() {
        cy.get(':nth-child(1) > #24b0c46-c5ce-4a67-b687-c9afd6ca995c').click()
        return this
    }

    pressChangeNumber() {
        cy.get(':nth-child(2) > #24b0c46-c5ce-4a67-b687-c9afd6ca995c').click()
        return this
    }

    selectEnglish() {
        cy.get('#mantine-r5').click()
        //to finish
        return this
    }
}
export default VerificationPage