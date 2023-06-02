import WelcomePage from "../WelcomePage"

class WelcomePageSonospine extends WelcomePage{

	validateIcon() {
		cy.get('[alt="logo"]').should('have.attr', 'src').and('contain', 'Sonospine-Logo')
		return this
	}
}
export default WelcomePageSonospine;