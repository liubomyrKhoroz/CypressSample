class General {

    validateErrorMessage(order, message) {
        cy.get('.ant-col.ant-form-item-control >> .ant-form-item-explain-error').eq(order).should('have.text', message)
        return this
    }
}
export default General;