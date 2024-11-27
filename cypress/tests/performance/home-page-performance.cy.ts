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
        performance: 10,
        accessibility: 10,
        "best-practices": 10,
        seo: 10,
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
    ).then((report: any) => {
      cy.task("saveLighthouseReport", {
        report: JSON.stringify(report, null, 2),
        filename: `lighthouse-report-${Date.now()}.json`,
      });
    });
  });
});

//TODO : see about refactoring so scores are not on each test and can be imported, custom command?
//TODO: save the report to a lighthouse performance folder/file -- DONE
