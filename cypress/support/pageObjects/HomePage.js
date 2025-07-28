class HomePage {
    visit() {
      cy.visit('https://tutorialsninja.com/demo/index.php?route=common/home');
    }
  
    clickMyAccount() {
      cy.get('a[title="My Account"]').click();
    }
  
    clickLogin() {
      cy.contains('Login').click();
    }
  
    addFirstProductToCart() {
      cy.get('.product-layout:first .button-group button[onclick*="cart.add"]').click();
    }
  
    showAllDesktops() {
      cy.contains('a.dropdown-toggle', 'Desktops').click();
      cy.get('a.see-all').contains('Show AllDesktops').click();
    }
  }
  
  export default new HomePage();
  