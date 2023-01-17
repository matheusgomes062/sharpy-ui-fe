describe("General / Footer", () => {
    it("Default", () => {
        cy.visit("/iframe.html?args=&id=general-footer--primary")
        cy.get('[data-cy="footer"]').should('be.visible')
    })
})
