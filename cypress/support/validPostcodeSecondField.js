Cypress.Commands.add("validPostcodeSecondField", () => {
  cy.get("#cp3").type("164").should("have.value", "164");
});
