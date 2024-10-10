describe("Google Homepage", () => {
  it("should load the Google homepage", () => {
    // Visit the Google homepage
    cy.visit("https://www.google.com");
    // Check if the title contains "Google"
    cy.title().should("include", "Google");
    // Check if the search input is visible
    cy.get('input[name="q"]').should("be.visible");
  });
});
