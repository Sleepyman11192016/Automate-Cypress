import LoginPage from './loginPage.js'
import inventoryPage from './inventoryPage.js'
import cartPage from './cartPage.js'
import CheckoutPage from './checkoutPage.js'
import checkoutPage from './checkoutPage.js'
import homePage from './homePage.js'

describe('Login Tests with Cypress', () =>{

    it('should complete order successfully', () => {

    // 1. Login
    LoginPage.visit()
    LoginPage.login('standard_user', 'secret_sauce')
    cy.url().should('include','inventory')

    // 2. select product
    inventoryPage.addItem('Sauce Labs Backpack')
    inventoryPage.addItem('Sauce Labs Bike Light')
    inventoryPage.goToCart()

    // 3. Review cart
    cy.url().should('include','cart')
    cartPage.verifyItem('Sauce Labs Backpack')
    cartPage.verifyItem('Sauce Labs Bike Light')
    cartPage.checkout()

    //4. fill info
    cy.url().should('include','checkout-step-one')
    checkoutPage.fillInformation('Ratchanon','New','11111')

    //5. Verify Pricing
    cy.url().should('include','checkout-step-two')
    checkoutPage.verifyItemPrice('Sauce Labs Backpack', '$29.99')
    checkoutPage.verifyItemPrice('Sauce Labs Bike Light', '$9.99')
    checkoutPage.verifyTotalPriceAndTax()

    //6. Complete Order
    checkoutPage.finishOrder()

    //7. Back to Home Page and Logout
    homePage.blackToHomePage()
    homePage.logout()

    })

    
})

