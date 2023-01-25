describe("General/SectionTitle", () => {
    it("Default", () => {
        cy.visit("/iframe.html?args=&id=general-sectiontitle--primary")
        cy.get('[data-cy="sectionTitle"]').should('be.visible')
    })
})
