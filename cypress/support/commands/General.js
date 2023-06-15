class General {
  validateErrorMessage(order, message) {
    cy.get(".ant-col.ant-form-item-control >> .ant-form-item-explain-error")
      .eq(order)
      .should("have.text", message);
    return this;
  }

  validateNotification(message) {
    cy.get(".ant-message-custom-content > :nth-child(2)").should(
      "have.text",
      message
    );
    return this;
  }

  //use e.g. Pages.Identification
  openPage(page) {
    cy.get("#6d7e865a-bc2f-4bd4-81a7-2925f674b192")
      .should("be.visible")
      .click();
    cy.wait(1000);
    cy.xpath("(//div[@class='ant-space ant-space-vertical'])[2]/div[3]//input")
      .as("btn")
      .click();
    cy.get(`[title="${page}"] > .ant-select-item-option-content`)
      .should("be.visible")
      .as("btn")
      .click();
    return this;
  }

  buttonSkip() {
    cy.get(".mantine-Group-root > :nth-child(2)").click();
    return this;
  }

  buttonNext() {
    cy.get('.mantine-Group-root > [type="submit"] > span').click();
    return this;
  }

  buttonPrevious() {
    cy.get(".mantine-Group-root > :nth-child(1) > span").click();
    return this;
  }

  verifyURLnotContain(word) {
    cy.url().should("not.include", word);
    return this;
  }
}
export default General;
