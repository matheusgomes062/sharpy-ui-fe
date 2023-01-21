describe("General / SolutionSection", () => {
    it("Default", () => {
        cy.visit("/iframe.html?args=&id=general-solutionsection--primary")
        cy.get('[data-cy="solutionSection"]').should('be.visible')
    })
})
