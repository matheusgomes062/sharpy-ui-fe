describe("General / CarouselPagination", () => {
    it("Default", () => {
        cy.visit("/iframe.html?args=&id=general-carouselpagination--primary")
        cy.get('[data-cy="carouselOptions"]').should('be.visible')
    })
})
