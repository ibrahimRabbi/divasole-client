/// <reference types="Cypress" />

import { addProduct } from "../support/page_object/addProduct"
import { myProduct } from "../support/page_object/myProduct"

describe('kiddo park Admin route test', () => {

    beforeEach('open app and login', () => {
        cy.logIn("rabbi@gmail.com", "Rabbi1122")
        
    })

    it('admin test', () => {
        addProduct()
        myProduct()
    })
})