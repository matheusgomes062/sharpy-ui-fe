describe("General/GenericTitle", () => {
    it("Default", () => {
        cy.visit("/iframe.html?args=&id=general-generictitle--primary")
        cy.get('[data-cy="generic-title"]').should('be.visible')
    })
})
