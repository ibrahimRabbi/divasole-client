

export const addProduct = () => {
    
    cy.contains('a', 'ADD TOYS').click({ force: true })
    cy.get('.py-28').find('form').then(form => {
        cy.wrap(form).find('[name="name"]').type('kiddo 200* super plush dragon soft toy for kids')
        cy.wrap(form).find('[name="price"]').type(1500)
        cy.wrap(form).find('[name="category"]').select('softToys').should('have.value',"softToys")
        cy.wrap(form).find('[name="image"]').attachFile('stuff6.jpg')
        cy.wrap(form).find('[name="subCategory"]').select('null')
        cy.wrap(form).find('[name="available"]').type(35)
        cy.wrap(form).find('[name="moreImg"]')
        cy.wrap(form).find('[name="description"]').type('Lorem ipsum dolor sit amet consectetur adipisicing elit. In molestias culpa repellendus rem ullam iure?')
        cy.wrap(form).submit()
        
    })
}