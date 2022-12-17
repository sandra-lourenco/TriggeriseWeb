Cypress.Commands.add("findThePostcode", () => {
  cy.get('a[href="#postalCodeSearchPanel"]')
    .click()
    .contains("Find the postcode")
    .click()
    .should("be.visible");
});
