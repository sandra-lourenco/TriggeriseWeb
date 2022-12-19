/// <reference types="cypress" />

describe(" Testing of 'Find the address from the postcode' tab", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("TC1-Validate if “Find the postcode” tab page has a form present", () => {
    //1 - Validate if we are in the page of the tab with title “Find the address from the postcode”
    cy.findTheAdressFromThePostcode();

    //2 - Validate if in the “Find the address from the postcode” tab, the text “Find the street or town for a postal code.” is present
    cy.get("#addressSearchForm > p").should(
      "contain",
      "Find the street or town for a postal code."
    );

    //3 - Validate if we have “Postcode” word in the “Find the address from the postcode” tab
    cy.get("label[for='cp4']").should("contain", "Postcode");

    //4 - Validate if  “Search” button is present
    cy.get("#buttonAddressSearch").contains("Search").should("be.visible");
    cy.get("#buttonAddressSearch")
      .should("have.css", "background-color")
      .and("be.colored", "#DF0024");

    //5 - Validate if  “Clear” button is present
    cy.get("#addressSearchClear").should("have.value", "Clear");
    cy.get("#addressSearchClear")
      .should("have.css", "background-color")
      .and("be.colored", "#FFFFFF");
  });

  it("TC2-Validate the error message in the “Find the address from the postcode” tab page when the search is made with no fields filled", () => {
    //1 - Validate if we are in the page of the tab with title “Find the address from the postcode”
    cy.findTheAdressFromThePostcode();

    //2 - Click in the “Search” button, without filling any field
    cy.get("#buttonAddressSearch")
      .contains("Search")
      .should("be.visible")
      .click();

    //3 - Validate the error message that is displayed Required field
    cy.get("#cp4-error").should("have.text", "Required field");
    cy.get("#cp3-error").should("contain", "Required field");
  });

  it("TC3-Validate if the search of a valid postal code in the “Find the address from the postcode” tab presents a correct result", () => {
    //1 - Validate if we are in the page of the tab with title “Find the address from the postcode”
    cy.findTheAdressFromThePostcode();

    //2 - In Postcode field type 4400 in the first box and 164 in the second
    cy.get("#cp4").type("4400").should("have.value", "4400");
    cy.get("#cp3").type("164").should("have.value", "164");

    //3 - Click in the Search button
    cy.get("#buttonAddressSearch")
      .contains("Search")
      .should("be.visible")
      .click();

    //4 -	Validate if the correct street is displayed in the results
    cy.get(".full-width-table-scroller").should(
      "contain",
      "4400-164 VILA NOVA DE GAIA"
    );
    cy.get(".full-width-table-scroller").should(
      "contain",
      "Rua de General Torres"
    );
  });
  it("TC4-Validate if the search of an invalid postal code in the “Find the address from the postcode” tab presents an error message", () => {
    //1 - Validate if we are in the page of the tab with title “Find the address from the postcode”
    cy.findTheAdressFromThePostcode();

    //2 - In Postcode field type xxxx in the first box and yyy in the second
    cy.get("#cp4").type("xxxx").should("have.value", "xxxx");
    cy.get("#cp3").type("yyy").should("have.value", "yyy");

    //3 - Click in the Search button
    cy.get("#buttonAddressSearch")
      .contains("Search")
      .should("be.visible")
      .click();

    //4 - Validate if an error message is displayed
    cy.get("#cp4-error").should("have.text", "Values between 1000 and 9999");
    cy.get("#cp4-error.error")
      .should("have.css", "color")
      .and("be.colored", "#f04124");
    cy.get("#cp3-error").should("contain", "3 digit value");
    cy.get("#cp3-error")
      .should("have.css", "color")
      .and("be.colored", "#f04124");
  });
});
