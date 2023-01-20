describe("General / JobOpportunityCard", () => {
    it("Default", () => {
      cy.visit("/iframe.html?args=&id=general-jobopportunitycard--primary")
      cy.get('[data-cy="jobOpportunityCard"]').should('exist')
    })
})
