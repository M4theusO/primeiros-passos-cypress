class MenuPage{
    selectorsList(){
        const selectors = {
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
            performanceButton: '[href="/web/index.php/performance/viewPerformanceModule"]'
        }
        return selectors
    }

    accessMyInfoPage(){
        cy.get(this.selectorsList().myInfoButton).click()
    }

    accessPerformancePage(){
        cy.get(this.selectorsList().performanceButton).click()
    }
}

export default MenuPage