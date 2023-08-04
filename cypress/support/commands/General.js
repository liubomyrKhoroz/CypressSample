class General {
  locatorsGeneral = {
    ValidateErrorMessage:
      ".ant-col.ant-form-item-control >> .ant-form-item-explain-error",
    ValidateNotification: ".ant-message-custom-content > :nth-child(2)",
    OpenDevTools: "#6d7e865a-bc2f-4bd4-81a7-2925f674b192",
    OpenPageInput:
      '(//div[@class="ant-space ant-space-vertical"])[2]/div[3]//input',
    ButtonSkip: ".mantine-Group-root > :nth-child(2)",
    ButtonNext: '.mantine-Group-root > [type="submit"] > span',
    ButtonPrevious: ".mantine-Group-root > :nth-child(1) > span",
    LogoWelcome: ".sc-brSaZW",
    Logo: ".sc-jIBmdK",
  };

  logoMapping = {
    301: "AdviNOW-header",
    684: "Barrows_logo",
    749: "Sonospine-Logo",
    754: "2022-09-23T19_01_27_751254", //MoreMD
    757: "202022-10-18%20at%203.27.54", //Afya Sasa Brain
    750: "202022-10-18%20at%201.47.48", //Afya Sasa Cardiac
  };

  //use e.g. Pages.Identification
  openPage(page) {
    cy.get(this.locatorsGeneral.OpenDevTools).should("be.visible").click();
    cy.wait(1000);
    cy.xpath(this.locatorsGeneral.OpenPageInput).as("btn").click();
    cy.wait(100);
    cy.get(`[title="${page}"] > .ant-select-item-option-content`)
      .as("btn")
      .click({ force: true });
    return this;
  }

  wait(time) {
    cy.wait(time);
    return this;
  }

  buttonSkip() {
    cy.get(this.locatorsGeneral.ButtonSkip).click();
    return this;
  }

  buttonNext() {
    cy.get(this.locatorsGeneral.ButtonNext).click();
    return this;
  }

  buttonPrevious() {
    cy.get(this.locatorsGeneral.ButtonPrevious).click();
    return this;
  }

  uploadFile(image, locator) {
    const fileName = `${image}.png`;
    cy.fixture(fileName, "base64").then((fileContent) => {
      const blob = Cypress.Blob.base64StringToBlob(fileContent);
      const testFile = new File([blob], fileName, { type: "image/png" });
      const dataTransfer = new DataTransfer();

      dataTransfer.items.add(testFile);
      cy.get(locator).then((el) => {
        el[0].files = dataTransfer.files;
        el[0].dispatchEvent(new Event("change", { bubbles: true }));
      });
    });
    return this;
  }

  verifyURLnotContain(word) {
    cy.url().should("not.include", word);
    return this;
  }

  verifyErrorIsNotPresent() {
    cy.get(this.locatorsGeneral.ValidateErrorMessage).should("not.exist");
    return this;
  }

  verifyErrorMessageContain(order, message) {
    cy.get(this.locatorsGeneral.ValidateErrorMessage)
      .eq(order)
      .should("contain", message);
    return this;
  }

  validateErrorMessage(order, message) {
    cy.get(this.locatorsGeneral.ValidateErrorMessage)
      .eq(order)
      .should("have.text", message);
    return this;
  }

  validateNotification(message) {
    cy.get(this.locatorsGeneral.ValidateNotification).should(
      "have.text",
      message
    );
    return this;
  }

  validateIcon() {
    cy.location("href").then((url) => {
      let logoSrc = "";
      Object.entries(this.logoMapping).forEach(([key, value]) => {
        if (url.includes(key)) {
          logoSrc = value;
        }
      });
      const logoSelector = fieldExist(this.locatorsGeneral.LogoWelcome)
        ? this.locatorsGeneral.LogoWelcome
        : this.locatorsGeneral.Logo;
      cy.get(logoSelector).should("have.attr", "src").and("contain", logoSrc);
    });
    return this;
  }
}

export default General;

export function fieldExist(locator) {
  try {
    expect(Cypress.$(locator)).not.to.exist;
    return false;
  } catch (error) {
    return true;
  }
}

export function validateFieldAndPlaceholder(locator, placeholder) {
  cy.get(locator)
    .should("not.have.value")
    .and("have.attr", "placeholder")
    .and("eq", placeholder);
  return this;
}

export function validateField(locator) {
  cy.get(locator).should("not.have.value").and("have.attr", "placeholder");
  return this;
}
