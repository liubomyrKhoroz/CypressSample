import WelcomePageAfya from "./WelcomePageAfya"

class WelcomePageAfyaCardiac extends WelcomePageAfya {

    validateIcon() {
		cy.get('[alt="logo"]').should('have.attr', 'src').and('contain', '202022-10-18%20at%201.47.48')
		return this
	}
}
export default WelcomePageAfyaCardiac;