import { login } from "../../support/loginHelper";
import UserProfilesSideNav from "../../page-objects/sections/user-profile-side-panel";
import MyAccountPage from "../../page-objects/sections/user-settings-section";

describe("My Account Page Tests", () => {
  const myAccountPage = new MyAccountPage();
  const userProfilesSideNav = new UserProfilesSideNav();

  beforeEach(() => {
    login();
  });

  it("selects My Account from the side nav and verifies the My Account page is visible", () => {
    userProfilesSideNav.UserProfilesSideNavIsVisible();
    userProfilesSideNav.clickMyAccount();
    myAccountPage.verifyMyAccountPageIsVisible();
    myAccountPage.verifyUserSettingsFirstNameFieldIsVisible();
    myAccountPage.verifyUserSettingsLastNameFieldIsVisible();
    myAccountPage.verifyUserSettingsEmailFieldIsVisible();
    myAccountPage.verifyUserSettingsPhoneNumberFieldIsVisible();
    myAccountPage.verifyUserSettingsSaveBtnIsVisible();
  });
});
