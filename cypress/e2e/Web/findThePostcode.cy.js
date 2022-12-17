/// <reference types="cypress" />

describe(" Testing of 'Find the postcode' tab", () => {
  beforeEach(() => {
    cy.visit(
      "https://www.ctt.pt/feapl_2/app/open/postalCodeSearch/postalCodeSearch.jspx?request_locale=en"
    );
  });

  it("TC1-Validate the elements in the  “Find the postcode” tab page ", () => {
    //1 - Validate if we are in the page of the tab with title “Find the postcode””
    cy.findThePostcode();

    //2 - Validate if in the “Find the postcode” tab the text “Insert the character * (asterisk)
    //    before and / or after the street name to get all results with that name.” is present
    cy.get(".display-block")
      .first()
      .should(
        "have.text",
        "Insert the character * (asterisk) before and / or after the street name to get all results with that name."
      );

    //3 - Validate if we have “District”, “Region”, “Locality”, “Street”, “Door” words in the “Find the postcode” tab form
    cy.get("label[for='distritos']").should("have.text", "District");
    cy.get("label[for='concelhos']").should("have.text", "Region");
    cy.get("label[for='localidade']").should("have.text", "Locality");
    cy.get("label[for='nomeRua']").should("have.text", "Street");
    cy.get("label[for='numPorta']").should("have.text", "Door");

    //4 - Validate if  “Search” button is present
    cy.get("#buttonPostalCodeSearch").contains("Search").should("be.visible");
    cy.get("#buttonPostalCodeSearch")
      .should("have.css", "background-color")
      .and("be.colored", "#DF0024");

    //5 - Validate if  “Clear” button is present
    cy.get("#postalCodeSearchClear").should("have.value", "Clear");
    cy.get("#postalCodeSearchClear")
      .should("have.css", "background-color")
      .and("be.colored", "#FFFFFF");
  });

  it("TC2-Validate the error message in the “Find the postcode” tab page when the search is made with no fields filled", () => {
    //1 - Validate if we are in the page of the tab with title “Find the postcode”
    cy.findThePostcode();

    //2 - Click in the “Search” button, without filling any field
    cy.get("#buttonPostalCodeSearch")
      .contains("Search")
      .should("be.visible")
      .click();

    //3 - Validate the error message that is displayed Locality criteria required. Instead select District and Region
    cy.get("#localidade-error").should(
      "have.text",
      "Locality criteria required. Instead select District and Region."
    );
    cy.get("#localidade-error")
      .should("have.css", "color")
      .and("be.colored", "#f04124");
  });

  it("TC3-Validate if the search of the postal code in the “Find the postcode” tab presents a correct result with valid data", () => {
    //1 - Validate if we are in the page of the tab with title “Find the postcode”
    cy.findThePostcode();

    //2 - In the dropdown of the field District, select Porto
    cy.get("#distritos").select("Porto").invoke("val").should("eq", "Porto");

    //3 - In the dropdown of the field Region, select Vila Nova de Gaia
    cy.get("#concelhos")
      .select("Vila Nova de Gaia")
      .invoke("val")
      .should("eq", "Vila Nova de Gaia");

    //4 - In the text field of Locality, write Vila Nova de Gaia
    cy.get("#localidade")
      .type("Vila Nova de Gaia")
      .should("have.value", "Vila Nova de Gaia");

    //5 - In the text field of Street, write *Rua General Torres*
    cy.get("#nomeRua").type("*Rua General Torres*");

    //6 - Click in the Search button
    cy.get("#buttonPostalCodeSearch")
      .contains("Search")
      .should("be.visible")
      .click();

    //7 - Validate if the correct postcode is displayed in the results - 4400-164 Vila Nova de Gaia
    cy.get(".full-width-table-scroller").should(
      "contain",
      "4400-164 VILA NOVA DE GAIA"
    );
  });
});
