/// <reference types="cypress" />
/// <reference types="cypress-xpath"/>



describe('template spec', () => {

  it('Pesquisa', () => {
    cy.visit('https://www.google.com.br/?hl=pt-BR');
    cy.get('textarea.gLFyf#APjFqb').type('cypress.io{enter}');
    cy.contains('https://www.cypress.io').should('be.visible')
    .click();
    cy.origin('https://www.cypress.io', () => {
    cy.get('#dropdownProduct').trigger('mouseover')
    cy.contains('Browser Testing').click();
  
    })
    })
    
  })





