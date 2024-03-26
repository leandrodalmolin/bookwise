describe('Navigation', () => {
  it('should display a BookWise heading', () => {
    cy.visit('http://localhost:3000/')
    cy.get('h1').contains('BookWise')
  })
})
