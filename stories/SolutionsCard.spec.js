describe("General / SolutionsCard", () => {
    it("Default", () => {
        cy.visit("/iframe.html?args=&id=general-solutionscard--primary")
        cy.get('[data-cy="solutionsCard"]').should('be.visible')
    })
})
