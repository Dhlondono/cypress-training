import { defineConfig } from "cypress";

const { verifyDownloadTasks } = require('cy-verify-downloads');

module.exports = defineConfig({
  e2e: {
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      reporterEnabled: "mochawesome",
      mochawesomeReporterOptions: {
      reportDir: "cypress/reports/mocha",
      quite: true,
      overwrite: false,
      html: false,
    json: true,
  },
},
    video: false,
    screenshotOnRunFailure: false,
    setupNodeEvents(on, config) {
      on('task', verifyDownloadTasks);
    },
    baseUrl: "https://www.demoblaze.com/index.html",
    defaultCommandTimeout: 300000,
    pageLoadTimeout: 300000,
  },
});
