const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://cypress.vivifyscrum-stage.com/',
    env: {
      EXTERNAL_EMAIL: 'salens84@gmai.com',
      EXTERNAL_PASSWORD: 'salens1984',
      API_BASE_URL: 'https://cypress-api.vivifyscrum-stage.com/api/v2',
    }
  },
});