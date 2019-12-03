describe('The Home Page', function() {
  it('successfully loads', function() {
    cy.visit('http://localhost:3000') // change URL to match your dev URL
  })

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('has correct title', () => {
    // beschreibung, was getestet wird
    cy.title().should('equal', 'React App')
    //funktion soll Anforderung erfüllen
  })

  describe('Pokemon', () => {
    it('has a checkbox', () => {
      cy.get('[type=checkbox]')
        .first()
        .click()
    })
  })
})
