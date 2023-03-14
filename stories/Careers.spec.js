describe("Careers/Careers", () => {
    it("Default", () => {
      cy.visit("/iframe.html?args=&id=careers-careers")
      cy.get('[data-cy="careers"]').should('be.visible')
    })
})