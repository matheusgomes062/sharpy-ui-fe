describe("General / Navbar", () => {
    it("Default", () => {
        cy.visit("/iframe.html?args=&id=header-navbar")
      cy.get('.navbar').should('exist');
    })
})
