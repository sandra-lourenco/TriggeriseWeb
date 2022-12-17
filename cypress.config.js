const { defineConfig } = require("cypress");

const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    baseUrl:
      "https://www.ctt.pt/feapl_2/app/open/postalCodeSearch/postalCodeSearch.jspx?request_locale=en",
    specPattern: ["cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"],
    supportFile: "cypress/support/e2e.js",
    excludeSpecPattern: ["*.js", "*.md"],
    chromeWebSecurity: false,
    requestTimeout: 30000,
    numTestsKeptInMemory: 0,
    responseTimeout: 50000,
    pageLoadTimeout: 100000,
    viewportHeight: 720,
    viewportWidth: 1280,
    includeShadowDom: true,
  },
});
