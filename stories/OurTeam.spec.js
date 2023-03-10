describe("Aboutus / OurTeam", () => {
    it("Default", () => {
        cy.visit("/iframe.html?args=&id=aboutus-ourteam--primary")
        cy.get('[data-cy="ourTeam"]').should('be.visible')
    })
})
