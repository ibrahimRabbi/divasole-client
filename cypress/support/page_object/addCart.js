

export const addCart = () => {
    cy.intercept('GET', `${Cypress.env('apiUrl')}/data/teddy`).as('teddyData')
    cy.contains('a', 'Teddy Bear').click()
    
    cy.wait('@teddyData')
    cy.get('@teddyData').then(res => {
        expect(res.response.statusCode).to.equal(200)
        cy.contains('button', 'Quick View').click({ force: true })
        cy.wait(1000)
        cy.contains('View Detailes').click({ force: true })
        cy.contains('Add To Cart').click().should('contain', 'Add To Cart')
        cy.get('.swal2-actions').contains('Cancel').then(btn => {
            cy.wrap(btn).click({ force: true })
        })
    })
}