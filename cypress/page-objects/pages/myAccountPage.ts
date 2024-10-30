import MyAccountPage from "../sections/user-settings-section";

export default class UserSettingsSection {
  myAccountPage: MyAccountPage;

  constructor() {
    this.myAccountPage = new MyAccountPage();
  }

  verifyUserSettingsPageIsVisible() {
    this.myAccountPage.verifyMyAccountPageIsVisible();
  }

  verifyUserSettingsFirstNameFieldIsVisible() {
    this.myAccountPage.verifyUserSettingsFirstNameFieldIsVisible();
  }

  verifyUserSettingsLastNameFieldIsVisible() {
    this.myAccountPage.verifyUserSettingsLastNameFieldIsVisible();
  }

  verifyUserSettingsEmailFieldIsVisible() {
    this.myAccountPage.verifyUserSettingsEmailFieldIsVisible();
  }

  verifyUserSettingsPhoneNumberFieldIsVisible() {
    this.myAccountPage.verifyUserSettingsPhoneNumberFieldIsVisible();
  }

  verifyUserSettingsSaveBtnIsVisible() {
    this.myAccountPage.verifyUserSettingsSaveBtnIsVisible();
  }
}
