export function byTestId(testId) {
  return `[data-test-id="${testId}"]`
}

export function getInputByLabel(label) {
  return cy
    .contains(label)
    .invoke('attr', 'for')
    .then((id) => {
      cy.get(`#${id}`)
    })
}

export function urlShouldEqual(path) {
  return cy.url().should('eq', `http://localhost:3000${path}`)
}

export function imageShouldLoad(selector) {
  return cy
    .get(selector)
    .should('be.visible')
    .and(($img) => {
      expect($img[0].naturalWidth).to.be.greaterThan(0)
    })
}
