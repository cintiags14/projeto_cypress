/// <reference types="Cypress"/>


describe('Incluir dados', () => {

    it('POST', () =>{

        cy.request({
            method: 'POST',
            url:'https://api.restful-api.dev/objects',
            body:{
                "name": "Apple MacBook Pro 16",
                "data": {
                "year": 2019,
                "price": 1849.99,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB"
             }
                

            }
        })
        .then((retorno) => {
            expect(retorno.status).equal(200)
        })
    })

    it('GET', () =>{

        cy.request({
            method: 'GET',
        url:'https://api.restful-api.dev/objects',
        })
        .then((response) =>{
            expect(response.status).equal(200)
        })
    })

    it.only('DETELE', ()=>{
        cy.request({
            method:'DELETE',
            url:'https://api.restful-api.dev/objects/1'
        })
        .then((response) => {
            expect(response.status).equal(200)
        })
    })


})