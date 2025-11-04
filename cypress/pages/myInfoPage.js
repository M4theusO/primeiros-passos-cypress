class MyInfoPage{
    selectorsList(){
        const selectors = {
            firstNameField: '[name="firstName"]',
            lastNameField: '[name="lastName"]',
            genericField: '.oxd-input',
            genericCombobox: '.oxd-select-text--arrow',
            itemCombobox: '.oxd-select-option',
            dateField: '[placeholder="yyyy-dd-mm"]',
            dateCloseButton: ".--close",
            submitButton: '[type="submit"]'
        }
        return selectors
    }

    fillPersonalDetails(firstName, lastName){
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)        
    }

    fillEmployeeDetails(employeeId, otherId, driversLicense, licenseExpiryDate){
        cy.get(this.selectorsList().genericField).eq(4).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(driversLicense)
        cy.get(this.selectorsList().genericField).eq(7).clear().type(licenseExpiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()
    }

    fillStatus(){
        cy.get(this.selectorsList().genericCombobox).eq(0).click()
        cy.get(this.selectorsList().itemCombobox).eq(1).click()
        cy.get(this.selectorsList().genericCombobox).eq(1).click()
        cy.get(this.selectorsList().itemCombobox).eq(1).click()
    }

    saveForm(){
        cy.get(this.selectorsList().submitButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }

}

export default MyInfoPage