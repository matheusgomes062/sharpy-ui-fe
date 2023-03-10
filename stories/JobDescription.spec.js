describe("Jobs / JobDescription", () => {
    it("Default", () => {
        cy.visit("/iframe.html?args=&id=jobs-jobsdescription--primary")
        cy.get('[data-cy="jobDescription"]').should('be.visible')
    })
})
