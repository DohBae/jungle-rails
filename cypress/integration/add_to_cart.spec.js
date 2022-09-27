/// <reference types="cypress" />

describe('add item to cart and watch cart count increase by 1', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  
  it('should add an item to the cart when add button is clicked', () => {
    cy.contains("Add")
    .parent()
    .find('button[type=submit]')
    .click({force: true})
    cy.contains('My Cart').should('have.length', 1)
  });


})