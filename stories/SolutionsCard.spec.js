describe("Cards / SolutionsCard", () => {
    it("Default", () => {
        cy.visit("/iframe.html?args=&id=cards-solutionscard--primary")
        cy.get('[data-cy="solutionsCard"]').should('be.visible')
    })
})
