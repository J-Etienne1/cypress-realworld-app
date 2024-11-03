import SignInPage from "../page-objects/pages/signinPage";

export function login() {
  const signInPage = new SignInPage();
  signInPage.navigateToHomePage();
  signInPage.verifySignInFormLogoIsVisible();
  signInPage.verifySignInFormIsVisible();
  signInPage.verifyUsernameInputFieldIsPresent();
  signInPage.verifyPasswordInputFieldIsPresent();
  signInPage.enterUsername(Cypress.env("USERNAME"));
  signInPage.enterPassword(Cypress.env("PASSWORD"));
  signInPage.clickSignInBtn();
}

export default login;
