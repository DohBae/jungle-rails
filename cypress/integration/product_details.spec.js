/// <reference types="cypress" />

describe('visit Jungle homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  
  it('should take you to a products page when clicked', () => {
    cy.get('[alt="Void Fennel"]').click()
    cy.visit('http://localhost:3000/products/11')
  });


})