import MyAccountPage from "../sections/user-settings-section";

export default class UserSettingsSection {
  myAccountPage: MyAccountPage;

  constructor() {
    this.myAccountPage = new MyAccountPage();
  }

  verifyUserSettingsPageIsVisible() {
    this.myAccountPage.verifyMyAccountPageIsVisible();
  }
}
