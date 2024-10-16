import SignInForm from "../sections/signin-form";

export default class SignInPage {
  signInForm: SignInForm;

  constructor() {
    this.signInForm = new SignInForm();
  }

  navigateToHomePage() {
    cy.visit("http://localhost:3000");
  }

  verifySignInFormLogoIsVisible() {
    this.signInForm.verifySignInFormLogoIsVisible();
  }

  verifySignInFormIsVisible() {
    this.signInForm.SignInFormIsVisible();
  }

  verifyUsernameInputFieldIsPresent() {
    this.signInForm.verifyUsernameInputFieldIsPresent();
  }

  verifyPasswordInputFieldIsPresent() {
    this.signInForm.verifyPasswordInputFieldIsPresent();
  }

  enterUsername(username: string) {
    this.signInForm.enterUsername(username);
  }

  enterPassword(password: string) {
    this.signInForm.enterPassword(password);
  }

  clickSignInBtn() {
    this.signInForm.clickSignInBtn();
  }
}
