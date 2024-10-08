describe('Zipboard test', () => {
  
  it('shoudld open the zipboard url', () => {
  cy.visit('https://app.zipboard.co/login');

//I enter username and password
  cy.get('#login-username').type('adebiyijohnson164@gmail.com')
  .should('be.visible');
  cy.get('#login-password').type('Password@1');

//I click on the login button
  cy.get('.input-group > #login').should('be.visible').click();

//I review the document
cy.get('.card-title').click();

//I open the project
  cy.get('.col-sm-4 .kanban-files-badge-text').click();
  //select ducument
  cy.get('#js_filename_Fg4Lu2DqWFkZXSApn').click();
  //review document
  cy.get('div:nth-child(1) > #reviewFiles-Fg4Lu2DqWFkZXSApn').click();

  //click on annotation
  cy.get('.m-t-20 > p').type('This is a test annotation');
  cy.get('.js_saveEditedDescription > .icon-check').click();

  //click on markup
  cy.get('[style="display: flex; justify-content: flex-start; flex-wrap: wrap;"] > .btn-group > .btn').click();
  cy.get('[data-userid="uLEpcpR8AgwgfkraM"] > .dropdown-item').click();
  
});
  })