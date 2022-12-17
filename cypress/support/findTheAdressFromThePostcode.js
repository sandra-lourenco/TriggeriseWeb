Cypress.Commands.add("findTheAdressFromThePostcode", () => {
  cy.get('a[href="#addressSearchPanel"]')
    .contains("Find the address from the postcode")
    .should("be.visible")
    .click();
  cy.url().should(
    "include",
    "postalCodeSearch.jspx?request_locale=en#fndtn-addressSearchPanel"
  );
});
