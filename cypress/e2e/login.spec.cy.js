describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameInput: '[name="username"]',
    passwordInput: '[name="password"]',
    loginButton: '[type="submit"]',
    wrongCredentialAlert: '[role="alert"]',
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module'
  }

  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameInput).type('Admin')
    cy.get(selectorsList.passwordInput).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitleTopBar).should('contain', 'Dashboard')
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameInput).type('Test')
    cy.get(selectorsList.passwordInput).type('Test')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})