describe("General / TextArea", () => {
    it("Default", () => {
        cy.visit("/iframe.html?args=&id=general-textarea--primary")
        cy.get('[data-cy="textarea"]').should('be.visible')
    })
})
