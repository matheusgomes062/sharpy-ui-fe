describe("Animated / AnimatedNumber", () => {
    it("Default", () => {
        cy.visit("/iframe.html?args=&id=animated-animatednumber--primary")
        cy.get('[data-cy="animatedNumber"]').should('be.visible')
    })
})
