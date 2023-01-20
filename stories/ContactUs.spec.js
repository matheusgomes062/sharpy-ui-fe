describe("General / CheckBox", () => {
    it("Default", () => {
        cy.visit("/iframe.html?args=&id=general-checkbox")
      cy.get('.contact-us').should('exist');
    })
})
