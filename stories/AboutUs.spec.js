describe('Pages / AboutUs', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?args=&id=pages-aboutus--primary')
  })

  it('should display the section title', () => {
    cy.get('[data-cy="section-title"]').should('be.visible')
  })

  it('should display the short description', () => {
    cy.get('[data-cy="short-description"]').should('be.visible')
  })

  it('should display the button with the correct label', () => {
    cy.get('[data-cy="about-us-button"]')
      .should('be.visible')
      .should('have.text', 'Saiba Mais')
  })

  it('should navigate to the team section when the generic title is clicked', () => {
    cy.get('[data-cy="generic-title"]')
      .should('be.visible')
      .click()
    cy.url().should('include', '#our-team')
  })
})