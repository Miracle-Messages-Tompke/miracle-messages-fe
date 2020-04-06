/// enables intellisense for cypress
/// <reference types="Cypress" />

/* eslint-disable no-undef */
describe("home page App.js", function() {

  it("should successfully load the home page", function() {
    cy.visit("/");
  });

  it.skip("should get children of chapterStats", function() {
    cy.get(".chapterStats")
      .children()
      .should("have.length", 2);
  });

  it("should return all the svg chapter pin elements", function() {
    cy.get("svg").then($el => {
      $el.get();
    });
  });

  it.skip("should click green Join Chapter button", function() {
    cy.get(".green a").click();
  });

  it.skip("should click white See Reunion Stories button", function() {
    cy.get(".white a").click();
  });

 
  //TODO write tests for when chapter pins are clicked
  it("should click on svg", function() {
    cy.get("svg").first()
      .click();
  });

    //TODO need to get email and facebook links working before able to test
  //  it.skip("should click email link", function () {
  //    cy.get(".email").click();
  //  });

  it("should click on svg chapter pin and display Members on card", function() {
    cy.get("svg")
    .first()
    .click()
    .get(".volunteers")
  })

  it('should have state on load', () => {
    cy.window().its('store').invoke('getState').should('exist')
 })
});