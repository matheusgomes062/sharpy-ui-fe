describe("General / CheckBox", () => {
    it("Default", () => {
        cy.visit("/iframe.html?args=&id=general-checkbox")
      cy.get('[data-cy="checkbox"]').click()
      cy.get('[type="checkbox"]').should('be.checked');
    })
})
