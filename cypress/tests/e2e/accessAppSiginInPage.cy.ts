import SignInPage from "../../page-objects/pages/signinPage";

describe("Access the application's homepage", () => {
  const signInPage = new SignInPage();

  it("should load the application's homepage", () => {
    signInPage.navigateToHomePage();
    signInPage.verifySignInFormIsVisible();
    signInPage.verifySignInFormLogoIsVisible();
  });
});
