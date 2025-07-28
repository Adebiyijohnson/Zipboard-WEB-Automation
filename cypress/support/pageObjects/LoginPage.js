class LoginPage {
    enterEmail(email) {
      cy.get('#input-email').type(email);
    }
  
    enterPassword(password) {
      cy.get('#input-password').type(password);
    }
  
    submit() {
      cy.get('input[type="submit"]').click();
    }
  
    assertLoginError() {
      cy.get('.alert-danger')
        .should('exist')
        .and('contain', 'Warning: No match for E-Mail Address and/or Password.');
    }
  
    assertLoginSuccess() {
      cy.contains('My Account').should('exist');
      cy.url().should('include', 'route=account/account');
    }
  }
  
  export default new LoginPage();
  