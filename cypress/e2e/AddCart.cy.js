/// <reference types="Cypress" />

import { addCart } from "../support/page_object/addCart"
import { cartDataDelete } from "../support/page_object/cartDataDelete"




describe('kiddo park test', () => {

    beforeEach('open app and login', () => {
        cy.logIn(Cypress.env('email'),Cypress.env("password"))  
    })

    it('add cart', () => {
       //cy.intercept('GET', `${Cypress.env('apiUrl')}/id/657ed9572add1d004b14d37b`).as('sing')
        addCart()
        cartDataDelete()
    })
})