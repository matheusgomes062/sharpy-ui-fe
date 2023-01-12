describe("General / Dropdown", () => {
    it("Default", () => {
        cy.visit("/iframe.html?args=&id=general-dropdown--primary")
        cy.get('[data-cy="dropdown"]').click()
        cy.get('[data-cy="dropdown-option-0"]').click()
        cy.get('[data-cy="selected-value"]').invoke("text").should("eq", "Marketing");
    })
})
