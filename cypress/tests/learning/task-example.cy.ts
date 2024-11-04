// example.cy.ts
describe("Simple Cypress Task", () => {
  it("logs a custom message using a task", () => {
    cy.task<string>("logMessage", "Hello from Cypress task!").then((response) => {
      cy.log(response); // This should now work without warnings or errors
    });
  });
});
