describe("General / Pagination", () => {
    it("Default", () => {
        cy.visit("/iframe.html?args=&id=general-Pagination--primary")
        cy.get('[data-cy="carouselOptions"]').should('be.visible')
    })
})
