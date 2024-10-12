import signInPageSelectors from "../selectors/signInPageSelectors";

class SignInForm {
  SignInFormIsVisible() {
    cy.get(signInPageSelectors.signInForm).should("be.visible");
  }

  verifySignInFormLogoIsVisible() {
    cy.get(signInPageSelectors.signInFormLogo).should("be.visible");
  }
}

export default SignInForm;
