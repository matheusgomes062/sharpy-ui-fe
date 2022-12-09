describe("General / Input", () => {
    it("Default", () => {
        cy.visit("/iframe.html?args=&id=general-input--primary")
        cy.get('[data-cy="input"]').should('be.visible')
    })
})
