Cypress.Commands.add("invalidPostcodeSecondField", () => {
  cy.get("#cp3").type("yyy").should("have.value", "yyy");
});
