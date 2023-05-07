module.exports = {
  e2e: {
    specPattern: 'cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:3000',
    viewportWidth: 375,
    viewportHeight: 667,
  },
  chromeWebSecurity: false,
}
