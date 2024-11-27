// https://dummyapi.io/explorer

describe("Learning API Intercept", () => {
  it("Simple API Intercept", () => {
    cy.visit("https://dummyapi.io/explorer");

    cy.intercept({
      url: "https://dummyapi.io/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10",
    }).as("comments");
    cy.get(".flex > :nth-child(5)").click();
    cy.wait("@comments").then((intercept) => {
      expect(intercept.response?.body?.limit).eq(10);
    });
  });

  // Stubbing
  it("Mock API Response", () => {
    cy.visit("https://dummyapi.io/explorer");

    cy.intercept(
      "GET",
      "https://dummyapi.io/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10",
      {
        limit: 10,
        Name: "Testing Name",
      }
    ).as("comments");
    cy.get(".flex > :nth-child(5)").click();
    cy.wait("@comments").then((intercept) => {
      console.log(intercept);
      expect(intercept.response?.body?.limit).eq(10);
      expect(intercept.response?.body?.Name).eq("Testing Name");
    });
  });
});
