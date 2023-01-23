describe("General / ContactUs", () => {
    it("Default", () => {
        cy.visit("/iframe.html?args=&id=general-contactus")
      cy.get('.contact-us').should('exist');
    })
})
