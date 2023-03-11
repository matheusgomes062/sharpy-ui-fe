describe("Jobs / JobForm", () => {
    it("Default", () => {
        cy.visit("/iframe.html?args=&id=jobs-jobform--primary")
        cy.get('[data-cy="job-form"]').should('be.visible')
    })
})
