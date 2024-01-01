// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload';

Cypress.Commands.add('logIn', (email, password) => {

    cy.intercept('POST', `/jwt`).as('login')
    
    cy.visit('/')
    cy.contains('SIGN IN').click()

    const log = Cypress.log({
        displayName: email,
        message: 'this is just test purpose'
    })
    cy.get('form').then(form => {  
        log.snapshot('hello11')
        cy.wrap(form).find('[name="email"]').type(email)
        cy.wrap(form).find('[name="password"]').type(password)
        cy.wrap(form).find('[name="confirm"]').type(password)
        cy.wrap(form).submit()
        log.snapshot('end')
        log.end()
    })

    cy.wait('@login')
    cy.get('@login').then(res => {
        expect(res.response.statusCode).to.equal(200)
    })




    // const log = Cypress.log({
    //     displayName: 'AUTH LOGIN',
    //     message: [`🔐 Authenticating | ${username}`],
    //     // @ts-ignore
    //     autoEnd: false,
    // });

    
    // log.snapshot('before login');
    // cy.visit('/login');
    // cy.get('input[name=userName]').type(username);
    // cy.get('input[name=password]').type(`${password}{enter}`, { log: false });
    // log.snapshot('after login');
    // log.end();
    
})

 
