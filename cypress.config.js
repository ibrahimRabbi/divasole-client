import { defineConfig } from "cypress";

export default defineConfig({
  video: false,
  viewportHeight: 1080,
  viewportWidth: 1800,
  retries:2,
  e2e: {
    baseUrl: 'http://localhost:5173/',
    specPattern: 'cypress/e2e/*.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
