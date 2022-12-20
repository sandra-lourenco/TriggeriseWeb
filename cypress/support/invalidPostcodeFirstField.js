Cypress.Commands.add("invalidPostcodeFirstField", () => {
  cy.get("#cp4").type("xxxx").should("have.value", "xxxx");
});
