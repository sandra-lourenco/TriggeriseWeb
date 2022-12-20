Cypress.Commands.add("locality", () => {
  cy.get("#localidade")
    .type("Vila Nova de Gaia")
    .should("have.value", "Vila Nova de Gaia");
});
