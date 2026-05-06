class CheckoutPage{
    fillInformation(firstname,lastname,zipcode){
        cy.get('[data-test="firstName"]').type(firstname)
        cy.get('[data-test="lastName"]').type(lastname)
        cy.get('[data-test="postalCode"]').type(zipcode)
        cy.get('[data-test="continue"]').click()
    }
    
    verifyItemPrice(itemName,expectedPrice){
        cy.contains('.cart_item', itemName)
      .find('.inventory_item_price')
      .should('have.text', expectedPrice)
    }

    verifyTotalPriceAndTax(){
        let itemTotal = 0
    // Get all item prices and sum them
    cy.get('.inventory_item_price').each(($el) => {
      const price = Number($el.text().replace('$', ''))
      itemTotal += price
      
    }).then(() => {

    cy.get('.summary_subtotal_label').invoke('text').then((text) => {
          const subtotal = Number(text.replace('Item total: $', '')) 
          expect(subtotal).to.eq(itemTotal)
        })

    cy.get('.summary_tax_label').invoke('text').then((text)=>{
            const totalTax = Number(itemTotal*8/100).toFixed(2)
            const tax = Number(text.replace('Tax: $', '')).toFixed(2)
            expect(tax).to.eq(totalTax)

    cy.get('.summary_total_label').invoke('text').then((text)=>{
            const expectedTotalPrice = Number(text.replace('Total: $', '')).toFixed(2)
            const totalPrice = Number(itemTotal) + Number(totalTax)
            expect(Number(expectedTotalPrice)).to.eq(totalPrice)
        
            })
        
        })

     })
       
    }

    finishOrder() {
    cy.get('[data-test="finish"]').click()
    cy.contains('Thank you for your order!').should('be.visible')
    }
}

export default new CheckoutPage()