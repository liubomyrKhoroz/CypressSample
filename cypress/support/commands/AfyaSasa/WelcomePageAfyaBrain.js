import WelcomePageAfya from "./WelcomePageAfya"

class WelcomePageAfyaBrain extends WelcomePageAfya {

    validateIcon() {
		cy.get('[alt="logo"]').should('have.attr', 'src').and('contain', '202022-10-18%20at%203.27.54')
		return this
	}
}
export default WelcomePageAfyaBrain;