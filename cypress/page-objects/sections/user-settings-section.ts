import myAccountPageSelectors from "../selectors/myAccoutPageSelectors";

class MyAccountPage {
  verifyMyAccountPageIsVisible() {
    cy.get(myAccountPageSelectors.myAccountPage).should("be.visible");
  }

  verifyUserSettingsFirstNameFieldIsVisible() {
    cy.get(myAccountPageSelectors.UserSettingsFName).should("be.visible");
  }
}

export default MyAccountPage;
