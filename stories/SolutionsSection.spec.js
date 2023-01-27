describe("Solutions / SolutionSection", () => {
    it("Default", () => {
        cy.visit("/iframe.html?args=&id=solutions-solutionsection--primary")
        cy.get('[data-cy="solutionSection"]').should('be.visible')
    })
})
