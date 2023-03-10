describe("Careers/CareersSection", () => {
    it("Default", () => {
      cy.visit("/iframe.html?args=&id=careers-careerssection")
      cy.get('[data-cy="careersSection"]').should('be.visible')
    })
})
