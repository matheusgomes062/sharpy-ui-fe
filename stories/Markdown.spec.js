describe("MarkdownFiles component", () => {
  it("renders a heading", () => {
    cy.visit("/iframe.html?id=components-markdownfiles--simple-example");
    cy.contains("h1", "Hello, World!").should("exist");
  });
});