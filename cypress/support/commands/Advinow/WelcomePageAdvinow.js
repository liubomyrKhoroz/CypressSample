import WelcomePage from "../WelcomePage"

class WelcomePageAdvinow extends WelcomePage{

	validateIcon() {
		cy.get('[alt="logo"]').should('have.attr', 'src').and('contain', 'AdviNOW-header')
		return this
	}
}
export default WelcomePageAdvinow;