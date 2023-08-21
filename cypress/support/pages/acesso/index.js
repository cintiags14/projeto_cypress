

const el = require('./elemets').ELEMENTS;

class acesso{
    acessarPagina(){
    cy.visit('https://www.google.com.br/?hl=pt-BR');
    cy.get(el.idclas).type('cypress.io{enter}');
    cy.get('.MjjYud').should('be.visible').contains('cypress.io').click({force: true});

    cy.origin('https://www.cypress.io/', () => { 
    cy.get('#dropdownProduct').trigger('mouseover')
    cy.contains('Browser Testing').click({force: true});
    })
     }
} 
export default new acesso();