import { login } from "../../support/loginHelper";
import HomePage from "../../page-objects/pages/homePage";

describe("Home Page Performance`Tests", () => {
  const homepage = new HomePage();

  beforeEach(() => {
    // Use the reusable login function i created in  ../support/loginHelper
    login();
  });

  it("should verify the home page logo is visible", () => {
    homepage.verifyHomePageLogoIsVisible();
    cy.lighthouse(
      {
        performance: 20,
        accessibility: 20,
        "best-practices": 20,
        seo: 20,
      },
      {
        formFactor: "desktop",
        screenEmulation: {
          mobile: false,
          disable: false,
          width: Cypress.config("viewportWidth"),
          height: Cypress.config("viewportHeight"),
          deviceScaleRatio: 1,
        },
      }
    );
  });

  it("should verify the transaction list is visible", () => {
    homepage.verifyTransactionListIsVisible();
  });
});

//TODO : see about refactoring so scores are not on each test and can be imported, custom command?
//TODO: save the report to a lighthouse performance folder/file
