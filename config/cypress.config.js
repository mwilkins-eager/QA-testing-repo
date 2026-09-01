const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'tests/e2e/**/*.spec.js',
    supportFile: false,
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'mochawesome-reports',
    overwrite: false,
    html: true,
    json: true,
  },
});
