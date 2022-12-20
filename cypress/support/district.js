Cypress.Commands.add("district", () => {
   cy.get("#distritos").select("Porto").invoke("val").should("eq", "Porto");
});
