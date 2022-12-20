Cypress.Commands.add("region", () => {
  cy.get("#concelhos")
    .select("Vila Nova de Gaia")
    .invoke("val")
    .should("eq", "Vila Nova de Gaia");
});
