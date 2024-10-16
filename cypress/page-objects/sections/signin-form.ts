import signInPageSelectors from "../selectors/signInPageSelectors";

class SignInForm {
  SignInFormIsVisible() {
    cy.get(signInPageSelectors.signInForm).should("be.visible");
  }

  verifySignInFormLogoIsVisible() {
    cy.get(signInPageSelectors.signInFormLogo).should("be.visible");
  }

  verifyUsernameInputFieldIsPresent() {
    cy.get(signInPageSelectors.userNameInputField).should("be.visible");
  }

  verifyPasswordInputFieldIsPresent() {
    cy.get(signInPageSelectors.passwordInputField).should("be.visible");
  }

  verifySignInBtnIsPresent() {
    cy.get(signInPageSelectors.signInBtn).should("be.visible");
  }

  enterUsername(username: string) {
    cy.get(signInPageSelectors.userNameInputField).type(username);
  }

  enterPassword(password: string) {
    cy.get(signInPageSelectors.passwordInputField).type(password);
  }

  clickSignInBtn() {
    cy.get(signInPageSelectors.signInBtn).click();
  }
}

export default SignInForm;
