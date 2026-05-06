class inventoryPage{
  addItem(itemName) {
    cy.contains('.inventory_item', itemName)
      .find('button')
      .click()
  }

  goToCart() {
    cy.get('[data-test="shopping-cart-link"]').click()
  }
}

export default new inventoryPage()