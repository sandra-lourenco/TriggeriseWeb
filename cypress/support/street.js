Cypress.Commands.add("street", () => {
  cy.get("#nomeRua").type("*Rua General Torres*");
});
