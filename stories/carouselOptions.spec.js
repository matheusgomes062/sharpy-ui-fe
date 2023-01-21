describe("General / CarouselOptions", () => {
    it("Default", () => {
        cy.visit("/iframe.html?args=&id=general-carouseloptions--primary")
        cy.get('[data-cy="carouselOptions"]').should('be.visible')
    })
})
