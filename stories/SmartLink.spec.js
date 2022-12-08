describe("General / SmartLink", () => {
    it("Default", () => {
        cy.visit("/iframe.html?args=&id=general-smartlink--primary")
        cy.get('[data-cy="link"]').should('be.visible')
    })
})
