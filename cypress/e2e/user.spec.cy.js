import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    dashboardGrid: '.orangehrm-dashboard-grid',
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: '[name="firstName"]',
    lastNameField: '[name="lastName"]',
    genericField: '.oxd-input',
    genericCombobox: '.oxd-select-text--arrow',
    itemCombobox: '.oxd-select-option',
    dateField: '[placeholder="yyyy-dd-mm"]',
    dateCloseButton: ".--close",
    submitButton: '[type="submit"]',
  }

  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfoPage()

    // cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    // cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    // cy.get(selectorsList.genericField).eq(4).clear().type('EmployeeId')
    // cy.get(selectorsList.genericField).eq(5).clear().type('OtherIdTest')
    // cy.get(selectorsList.genericField).eq(6).clear().type('DriversLicenseTest')
    // cy.get(selectorsList.genericField).eq(7).clear().type('2025-01-01')
    // cy.get(selectorsList.dateCloseButton).click()
    // cy.get(selectorsList.genericCombobox).eq(0).click()
    // cy.get(selectorsList.itemCombobox).eq(1).click()
    // cy.get(selectorsList.genericCombobox).eq(1).click()
    // cy.get(selectorsList.itemCombobox).eq(1).click()
    // cy.get(selectorsList.submitButton).eq(0).click()
    // cy.get('body').should('contain', 'Successfully Updated')
    // cy.get('.oxd-toast-close')
  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameInput).type(userData.userFail.username)
    cy.get(selectorsList.passwordInput).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})