import General, {fieldExist, validateField, validateFieldAndPlaceholder} from "./General"

class InsurancePage extends General {
    type = 'primary'
    locators = {
        SelfPayCheckbox: ':nth-child(3) > .ant-checkbox > .ant-checkbox-input',
        InsuranceCheckbox: ':nth-child(2) > .ant-checkbox > .ant-checkbox-input',
        CloseButton: '.ant-tabs-tab-remove',
        NotListedCheckbox: `#insurance\\ form_${this.type}_is_skipped`,
        Provider: `#insurance\\ form_${this.type}_insurance_provider_id`,
        ProviderFirst: `#insurance\\ form_${this.type}_insurance_parent_provider_name`,
        SpecifyOption: '[role="option"]',

        MemberId: `#insurance\\ form_${this.type}_member_id`,
        GroupId: `#insurance\\ form_${this.type}_group_id`,
        MemberIdUnsure: `#insurance\\ form_${this.type}_member_unsure`,
        GroupIdUnsure: `#insurance\\ form_${this.type}_group_unsure`,
        RxBin: `#insurance\\ form_${this.type}_rx_bin`,
        RxPcn: `#insurance\\ form_${this.type}_rx_pcn`,
        StartDate: `#insurance\\ form_${this.type}_start_date`,
        EndDate: `#insurance\\ form_${this.type}_end_date`,

        SameAsPatient: `#insurance\\ form_${this.type}_same_as_patient`,
        FirstName: `#insurance\\ form_${this.type}_policy_holder_first_name`,
        LastName: `#insurance\\ form_${this.type}_policy_holder_last_name`,
        DOB: '[data-testid="dob"]',
        GenderMale: `#insurance\\ form_${this.type}_policy_holder_gender > :nth-child(1) > .ant-radio > .ant-radio-input`,
        GenderFemale: `#insurance\\ form_${this.type}_policy_holder_gender > :nth-child(2) > .ant-radio > .ant-radio-input`,
        Relationship: `#insurance\\ form_${this.type}_policy_holder_relationship_to_patient`,

        AddressOne: `#insurance\\ form_${this.type}_policy_holder_address_address_one`,
        AddressTwo: `#insurance\\ form_${this.type}_policy_holder_address_address_two`,
        AddressCity: `#insurance\\ form_${this.type}_policy_holder_address_city`,
        State: `#insurance\\ form_${this.type}_policy_holder_address_state`,
        PostCode: `#insurance\\ form_${this.type}_policy_holder_address_zip_code`,
        PhoneNumber: `#insurance\\ form_${this.type}_policy_holder_phone_number`,

        FrontImage: ':nth-child(1) > :nth-child(1) > .ant-upload-select > .ant-upload > .ant-btn > span',
        BackImage: ':nth-child(2) > :nth-child(1) > .ant-upload-select > .ant-upload > .ant-btn > span',
        TakePhoto: '.ant-space > :nth-child(1) > .ant-btn > span',
        UploadPhoto: '.ant-space > :nth-child(2) > .ant-btn > span',
        TrashPhoto: ':nth-child(3) > .ant-btn > span',
        RemoveImage: '[data-icon="delete"]', //use .eq()
    }

    setTypePrimary() {
        this.type = 'primary'
    }

    setTypeSecondary() {
        this.type = 'secondary'
    }

    selectSelfPay() {
        cy.get(this.locators.SelfPayCheckbox).click()
        return this
    }

    selectInsurance() {
        cy.get(this.locators.InsuranceCheckbox).click()
        return this
    }

    closePrimary() {
        cy.get(this.locators.CloseButton).eq(1).click()
        return this
    }

    closeSecondary() {
        cy.get(this.locators.CloseButton).eq(2).click()
        return this
    }

    selectPrimaryNotListed() {
        cy.get(this.locators.NotListedCheckbox).click()
        return this
    }

    enterInsuranceProvider(provider) {
        cy.get(this.locators.Provider).clear().type(provider)
        cy.wait(2000)
        cy.get(this.locators.Provider).type('{downarrow}').type('{enter}')
        return this
    }

    openFirstProvider() {
        cy.get(this.locators.ProviderFirst).click()
        return this
    }

    selectFirstProvider(order) {
        cy.get(this.locators.ProviderFirst + '-' + order).type('{downarrow}', {parseSpecialCharSequences: false})
        return this
    }

    selectPrimarySpecify(order) {
        cy.get(this.locators.Provider).click()
        cy.get(this.locators.SpecifyOption).eq(order).click()
        return this
    }

    enterMemberId(id) {
        cy.get(this.locators.MemberId).clear().type(id)
        return this
    }

    enterGroupId(id) {
        cy.get(this.locators.GroupId).clear().type(id)
        return this
    }

    selectMemberIdUnsure() {
        cy.get(this.locators.MemberIdUnsure).click()
        return this
    }

    selectGroupIdUnsure() {
        cy.get(this.locators.GroupIdUnsure).click()
        return this
    }

    enterRxBin(value) {
        cy.get(this.locators.RxBin).clear().type(value)
        return this
    }

    enterRxPcn(value) {
        cy.get(this.locators.RxPcn).clear().type(value)
        return this
    }

    enterStartDate(value) {
        cy.get(this.locators.StartDate).clear().type(value)
        return this
    }

    enterEndDate(value) {
        cy.get(this.locators.EndDate).clear().type(value)
        return this
    }

    selectSameAsPatient() {
        cy.get(this.locators.SameAsPatient).click()
        return this
    }

    enterFirstName(firstName) {
        cy.get(this.locators.FirstName).clear().type(firstName)
        return this
    }

    enterLastName(lastName) {
        cy.get(this.locators.LastName).clear().type(lastName)
        return this
    }

    enterDOB(dob) {
        cy.get(this.locators.DOB).clear().type(dob)
        return this
    }

    clearDOB() {
        cy.get(this.locators.DOB).clear()
        return this
    }

    selectMale() {
        cy.get(this.locators.GenderMale).click()
        return this
    }

    selectFemale() {
        cy.get(this.locators.GenderFemale).click()
        return this
    }

    openRelationship() {
        cy.get(this.locators.Relationship).click()
        return this
    }

    selectRelationship(order) {
        cy.get(this.locators.Relationship + '-' + order).type('{downarrow}', {parseSpecialCharSequences: false})
        return this
    }

    enterAddressOne(address) {
        cy.get(this.locators.AddressOne).clear().type(address)
        return this
    }

    enterAddressTwo(address) {
        cy.get(this.locators.AddressTwo).clear().type(address)
        return this
    }

    enterAddressCity(city) {
        cy.get(this.locators.AddressCity).clear().type(city)
        return this
    }

    enterPostCode(zip) {
        cy.get(this.locators.PostCode).clear().type(zip)
        return this
    }

    openState() {
        cy.get(this.locators.State).click()
        return this
    }

    selectState(state) {
        cy.get(this.locators.State).clear().type(state).type('{downarrow}').type('{enter}')
        return this
    }

    enterPhoneNumber(phone) {
        cy.get(this.locators.PhoneNumber).clear().type(phone)
        return this
    }

    //VERIFICATIONS

    verifyInsuranceSelected() {
        cy.get(this.locators.InsuranceCheckbox).should('be.checked')
        cy.get(this.locators.SelfPayCheckbox).should('not.be.checked')
        return this
    }

    verifySelfPaySelected() {
        cy.get(this.locators.InsuranceCheckbox).should('not.be.checked')
        cy.get(this.locators.SelfPayCheckbox).should('be.checked')
        return this
    }

    verifyInsuranceProviderSelected(value) {
        cy.get(this.locators.Provider).should('have.value', value)
        return this
    }

    verifyMemberIdDisabled() {
        cy.get(this.locators.MemberId).should('have.attr', 'disabled')
        return this
    }

    verifyGroupIdDisabled() {
        cy.get(this.locators.GroupId).should('have.attr', 'disabled')
        return this
    }

    verifyGenderNotSelected() {
        cy.get(this.locators.GenderMale).should('not.be.checked')
        cy.get(this.locators.GenderFemale).should('not.be.checked')
        return this
    }

    verifyMaleSelected() {
        cy.get(this.locators.GenderMale).should('be.checked')
        cy.get(this.locators.GenderFemale).should('not.be.checked')
        return this
    }

    verifyFemaleSelected() {
        cy.get(this.locators.GenderMale).should('not.be.checked')
        cy.get(this.locators.GenderFemale).should('be.checked')
        return this
    }

    verifySpecifyExist() {
        return fieldExist(this.locators.ProviderFirst)
    }

    verifyStarDateExist() {
        return fieldExist(this.locators.StartDate)
    }

    verifyRelationshipExist() {
        return fieldExist(this.locators.Relationship)
    }

    verifyStateExist() {
        return fieldExist(this.locators.State)
    }

    verifyDataFilledIn() {
        const fields = [
            this.locators.Provider,
            this.locators.MemberId,
            this.locators.GroupId,
            this.locators.RxBin,
            this.locators.RxPcn,
            this.locators.FirstName,
            this.locators.LastName,
            this.locators.DOB,
            this.locators.AddressOne,
            this.locators.AddressTwo,
            this.locators.AddressCity,
            this.locators.PostCode,
            this.locators.PhoneNumber
        ]
        fields.forEach((field) => {
            cy.get(field).should('not.have.value', '')
        })
        if (this.verifyStarDateExist()) {
            cy.get(this.locators.StartDate).should('not.have.value', '')
            cy.get(this.locators.EndDate).should('not.have.value', '')
        }
        if (this.verifyRelationshipExist()) {
            cy.get(this.locators.Relationship).should('not.have.value', '')
        }
        if (this.verifyStateExist()) {
            cy.get(this.locators.State).should('not.have.value', '')
        }
        return this
    }

    //VALIDATIONS

    validateInsuranceProvider(placeholder) {
        validateFieldAndPlaceholder(this.locators.Provider, placeholder)
        return this
    }

    validateMemberId(placeholder) {
        validateFieldAndPlaceholder(this.locators.MemberId, placeholder)
        return this
    }

    validateGroupId(placeholder) {
        validateFieldAndPlaceholder(this.locators.GroupId, placeholder)
        return this
    }

    validateRxBin(placeholder) {
        validateFieldAndPlaceholder(this.locators.RxBin, placeholder)
        return this
    }

    validateRxPcn(placeholder) {
        validateFieldAndPlaceholder(this.locators.RxPcn, placeholder)
        return this
    }

    validateStartDate(placeholder) {
        validateFieldAndPlaceholder(this.locators.StartDate, placeholder)
        return this
    }

    validateEndData(placeholder) {
        validateFieldAndPlaceholder(this.locators.EndDate, placeholder)
        return this
    }

    validateFirstName(placeholder) {
        validateFieldAndPlaceholder(this.locators.FirstName, placeholder)
        return this
    }

    validateLastName(placeholder) {
        validateFieldAndPlaceholder(this.locators.LastName, placeholder)
        return this
    }

    validateDOB() {
        validateField(this.locators.DOB)
        return this
    }

    validateRelationShip(placeholder) {
        validateFieldAndPlaceholder(this.locators.Relationship, placeholder)
        return this
    }

    validateRelationShipOptions(listOfOptions) {
        for (let i = 0; i < listOfOptions.length; i++)
            cy.get(this.locators.Relationship + '-' + i).should('have.text', listOfOptions[i])
        return this
    }

    validateAddressOne() {
        validateField(this.locators.AddressOne)
        return this
    }

    validateAddressTwo() {
        validateField(this.locators.AddressTwo)
        return this
    }

    validateAddressCity() {
        validateField(this.locators.AddressCity)
        return this
    }

    validateState(placeholder) {
        validateFieldAndPlaceholder(this.locators.State, placeholder)
        return this
    }

    validateStateOptions(listOfOptions) {
        for (let i = 0; i < listOfOptions.length; i++)
            cy.get(this.locators.State + '-' + i).should('have.text', listOfOptions[i])
        return this
    }

    validatePostCode() {
        validateField(this.locators.PostCode)
        return this
    }

    validatePhoneNumber(placeholder) {
        validateFieldAndPlaceholder(this.locators.PhoneNumber, placeholder)
        return this
    }
}

export default InsurancePage