/// <reference types="cypress" />

describe('visit Jungle homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  
  it('There are products on the page', () => {
    cy.get(".products article").should("be.visible");
  });
})