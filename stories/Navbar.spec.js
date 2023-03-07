describe("Header / Navbar", () => {
    it("Default", () => {
        cy.visit("/iframe.html?args=&id=header-navbar")
        cy.get('[data-cy="navbar"]').should('be.visible')
    })
})
