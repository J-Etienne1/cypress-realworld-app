import SignInPage from "../../page-objects/pages/signinPage";

describe("Access the application's homepage", () => {
  const signInPage = new SignInPage();

  it("should load the application's homepage", () => {
    signInPage.navigateToHomePage();
    signInPage.verifySignInFormLogoIsVisible();
    signInPage.verifySignInFormIsVisible();
    signInPage.verifyUsernameInputFieldIsPresent();
    signInPage.verifyPasswordInputFieldIsPresent();
    signInPage.enterUsername(Cypress.env("USERNAME"));
    signInPage.enterPassword(Cypress.env("PASSWORD"));
    signInPage.clickSignInBtn();
  });
});
