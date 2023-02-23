describe("Aboutus / AboutUs", () => {
    it("Default", () => {
        cy.visit("/iframe.html?args=&id=aboutus-aboutus--primary")
        cy.get('[data-cy="aboutUs"]').should('be.visible')
    })
})
