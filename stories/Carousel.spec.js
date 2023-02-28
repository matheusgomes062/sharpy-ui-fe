describe("Carousel / Carousel", () => {
    it("Default", () => {
        cy.visit("/iframe.html?args=&id=carousel-carousel--primary")
        cy.get('[data-cy="carousel"]').should('be.visible')
    })
})
