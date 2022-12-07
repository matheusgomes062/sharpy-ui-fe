describe("General / Button", () => {
    it("Default", () => {
        cy.visit("/iframe.html?args=&id=general-button--primary")
        cy.get('[data-cy="click"]').click()
    })
})
