import WelcomePage from "../WelcomePage"

class WelcomePageMoremd extends WelcomePage{

	validateIcon() {
		cy.get('[alt="logo"]').should('have.attr', 'src').and('contain', '202022-09-23%20at%2011.17.23')
		return this
	}
}
export default WelcomePageMoremd;