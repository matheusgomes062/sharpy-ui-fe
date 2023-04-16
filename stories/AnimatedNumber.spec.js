describe("Animated / AnimatedNumber", () => {
    it("Default", () => {
        cy.visit("/iframe.html?args=&id=animated-animatednumber--default")
        cy.get('[data-cy="animatedNumber"]').should('be.visible')
    });

    it("With value", () => {
        cy.visit("/iframe.html?args=&id=animated-animatednumber--small-value")
        cy.get('[data-cy="animatedNumber"]').should('be.visible')
    });

    it("With value", () => {
        cy.visit("/iframe.html?args=&id=animated-animatednumber--large-value")
        cy.get('[data-cy="animatedNumber"]').should('be.visible')
    });

    it("With value", () => {
        cy.visit("/iframe.html?args=&id=animated-animatednumber--step-value")
        cy.get('[data-cy="animatedNumber"]').should('be.visible')
    });
})
