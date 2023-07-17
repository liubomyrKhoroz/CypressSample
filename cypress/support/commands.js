Cypress.Commands.add('isElementExist', (element) => {
    cy.window().then((win) => {
        const identifiedElement = win.document.querySelector(element)
        cy.log('Object value = ' + identifiedElement)
    })
})