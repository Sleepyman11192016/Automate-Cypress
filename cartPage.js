class CartPage {
  verifyItem(itemName) {
    cy.contains('.cart_item', itemName).should('exist')
  }

  checkout() {
    cy.get('[data-test="checkout"]').click()
  }
}

export default new CartPage()