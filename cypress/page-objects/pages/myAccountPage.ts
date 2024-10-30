import MyAccountPageSection from "../sections/user-settings-section";

export default class UserSettingsSection {
  myAccountPageSection: MyAccountPageSection;

  constructor() {
    this.myAccountPageSection = new MyAccountPageSection();
  }

  verifyUserSettingsPageIsVisible() {
    this.myAccountPageSection.verifyMyAccountPageIsVisible();
  }

  verifyUserSettingsFirstNameFieldIsVisible() {
    this.myAccountPageSection.verifyUserSettingsFirstNameFieldIsVisible();
  }

  verifyUserSettingsLastNameFieldIsVisible() {
    this.myAccountPageSection.verifyUserSettingsLastNameFieldIsVisible();
  }

  verifyUserSettingsEmailFieldIsVisible() {
    this.myAccountPageSection.verifyUserSettingsEmailFieldIsVisible();
  }

  verifyUserSettingsPhoneNumberFieldIsVisible() {
    this.myAccountPageSection.verifyUserSettingsPhoneNumberFieldIsVisible();
  }

  verifyUserSettingsSaveBtnIsVisible() {
    this.myAccountPageSection.verifyUserSettingsSaveBtnIsVisible();
  }
}
