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
}
