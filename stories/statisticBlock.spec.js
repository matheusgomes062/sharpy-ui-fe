describe("Statistic / StatisticBlock", () => {
    it("Default", () => {
        cy.visit("/iframe.html?args=&id=statistic-statisticblock--primary")
        cy.get('[data-cy="statisticBlock"]').should('be.visible')
    })
})
