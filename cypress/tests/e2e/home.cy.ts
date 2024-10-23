import { login } from "../../support/loginHelper";
import HomePage from "../../page-objects/pages/homePage";

describe("Home Page Tests", () => {
  const homepage = new HomePage();

  beforeEach(() => {
    // Use the reusable login function i created in  ../support/loginHelper
    login();
  });

  it("should verify the home page logo is visible", () => {
    homepage.verifyHomePageLogoIsVisible();
  });

  it("should verify the transaction list is visible", () => {
    homepage.verifyTransactionListIsVisible();
  });
});
