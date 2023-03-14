describe("Solutions / Solutions", () => {
    it("Default", () => {
        cy.visit("/iframe.html?args=&id=cards-solutions--primary")
        cy.get('[data-cy="solutions"]').should('be.visible')
    })
})
