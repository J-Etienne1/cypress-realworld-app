import myAccountPageSelectors from "../selectors/myAccoutPageSelectors";

class MyAccountPage {
  verifyMyAccountPageIsVisible() {
    cy.get(myAccountPageSelectors.myAccountPage).should("be.visible");
  }

  verifyUserSettingsFirstNameFieldIsVisible() {
    cy.get(myAccountPageSelectors.UserSettingsFName).should("be.visible");
  }

  verifyUserSettingsLastNameFieldIsVisible() {
    cy.get(myAccountPageSelectors.UserSettingsLName).should("be.visible");
  }

  verifyUserSettingsEmailFieldIsVisible() {
    cy.get(myAccountPageSelectors.UserSettingsEmail).should("be.visible");
  }

  verifyUserSettingsPhoneNumberFieldIsVisible() {
    cy.get(myAccountPageSelectors.UserSettingsPhoneNumber).should("be.visible");
  }

  verifyUserSettingsSaveBtnIsVisible() {
    cy.get(myAccountPageSelectors.UserSettingsSaveBtn).should("be.visible");
  }
}

export default MyAccountPage;
