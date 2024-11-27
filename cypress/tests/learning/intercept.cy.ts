// https://dummyapi.io/explorer

// <reference type="cypress"/>

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
});
