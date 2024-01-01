

export const myProduct = () => {
    cy.contains('a', 'MY TOYS').click({ force: true })
    cy.wait(2000)

    cy.contains('a', 'update').click()
    

    cy.get('.py-28').find('form').then(form => {
        cy.wrap(form).find('[name="price"]').clear().type(100)
        cy.wrap(form).find('[name="description"]').clear().type('is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry')
        cy.wrap(form).submit()
    })
}