describe("General / MoreOpportunities", () => {
    it("Default", () => {
        cy.visit("/iframe.html?args=&id=general-moreopportunities--primary")
        cy.get('[data-cy="jobOpportunityCard"]').click()
    })
})
