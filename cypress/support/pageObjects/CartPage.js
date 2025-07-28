class CartPage {
    openCartDropdown() {
      cy.get('#cart-total').click();
    }
  
    viewCart() {
      cy.contains('strong', 'View Cart').click();
    }
  
    goToCart() {
      cy.get('#top-links a[title="Shopping Cart"]').click();
    }
  
    updateFirstProductQty(quantity) {
      cy.get('.table-responsive tbody tr:first-child td input')
        .clear()
        .type(quantity);
  
      cy.get('.table-responsive tbody tr:first-child td button[type="submit"]').click();
    }
  
    removeFirstProduct() {
      cy.get('.table-responsive tbody tr:first-child td:last-child .btn-danger').click();
    }
  
    assertProductAdded() {
      cy.get('.alert-success')
        .should('exist')
        .and('contain', 'Success: You have added');
    }
  
    assertCartUpdated() {
      cy.get('.alert-success')
        .should('exist')
        .and('contain', 'Success: You have modified your shopping cart!');
    }
  
    assertCartIsEmpty() {
      cy.get('#content p').should('contain', 'Your shopping cart is empty!');
    }
  }
  
  export default new CartPage();
  