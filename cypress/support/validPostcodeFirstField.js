Cypress.Commands.add("validPostcodeFirstField", () => {
  cy.get("#cp4").type("4400").should("have.value", "4400");
});
