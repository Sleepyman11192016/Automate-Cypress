class homePage {
    blackToHomePage(){
        cy.get('[data-test="back-to-products"]').click()
    }

    logout(){
        cy.get('#react-burger-menu-btn').click()
        cy.get('[data-test="logout-sidebar-link"]').click()
        cy.url().should('include','https://www.saucedemo.com/')
    }
}
export default new homePage()