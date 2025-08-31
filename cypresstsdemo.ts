/// <reference types="cypress" />
describe('My First Test', function() {
    it('Verify DropDown test scenario', function() {
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.get('#dropdown-class-example').select('Selenium').should('have.value', 'option1')
    });

});