import myAccountPageSelectors from "../selectors/myAccountPageSelectors";

class MyAccountPageSection {
  verifyMyAccountPageIsVisible() {
    cy.get(myAccountPageSelectors.myAccountPage).should("be.visible");
  }

  verifyUserSettingsFirstNameFieldIsVisible() {
    cy.get(myAccountPageSelectors.UserSettingsFNameInput).should("be.visible");
  }

  verifyUserSettingsLastNameFieldIsVisible() {
    cy.get(myAccountPageSelectors.UserSettingsLNameInput).should("be.visible");
  }

  verifyUserSettingsEmailFieldIsVisible() {
    cy.get(myAccountPageSelectors.UserSettingsEmailInput).should("be.visible");
  }

  verifyUserSettingsPhoneNumberFieldIsVisible() {
    cy.get(myAccountPageSelectors.UserSettingsPhoneNumberInput).should("be.visible");
  }

  verifyUserSettingsSaveBtnIsVisible() {
    cy.get(myAccountPageSelectors.UserSettingsSaveBtn).should("be.visible");
  }
}

export default MyAccountPageSection;
