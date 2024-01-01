

export const cartDataDelete = () => {
    cy.intercept('DELETE', `${Cypress.env('apiUrl')}/cart/*`).as('delete')
    cy.intercept('GET', `${Cypress.env('apiUrl')}/cart*`).as('cartData')
    cy.get('[alt="LOGO"]').first().click()
    cy.get('.indicator').click({ force: true })


    cy.wait('@cartData')
    cy.get('@cartData').then((res) => {
        console.log(res)
        cy.get('button').eq(2).click({force:true})
    })

    cy.wait('@delete')
    cy.get('@delete').then(res => {
        expect(res.response.statusCode).to.equal(200)
    })
}