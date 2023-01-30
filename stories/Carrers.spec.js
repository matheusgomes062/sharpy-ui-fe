describe("Carrers/Carrers", () => {
    it("Default", () => {
      cy.visit("/iframe.html?args=&id=carrers-carrers")
      cy.get('[data-cy="carrers"]').should('be.visible')
    })
})
