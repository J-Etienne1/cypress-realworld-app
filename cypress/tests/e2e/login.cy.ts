import SignInPage from "../../page-objects/pages/signinPage";

describe("Login Feature", () => {
  const signInPage = new SignInPage();

  it("Allows a user to access the login page, enter login credentials, and submit the login form", () => {
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
