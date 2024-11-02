import { login } from "../../support/loginHelper";
import BankAccountPage from "../../page-objects/pages/bankAccountPage";
import UserProfilesSideNav from "../../page-objects/sections/user-profile-side-panel";

describe("Bank Account Page Tests", () => {
  //   const homepage = new HomePage();
  const userProfilesSideNav = new UserProfilesSideNav();
  const bankAccountPage = new BankAccountPage();

  beforeEach(() => {
    // Use the reusable login function i created in  ../support/loginHelper
    login();
  });

  it("Select Bank Account from SideNav", () => {
    userProfilesSideNav.UserProfilesSideNavIsVisible();
    userProfilesSideNav.clickMyBankAccounts();
    bankAccountPage.verifyOnBankAccountPage();
  });

  it("Check if Bank Accounts are present", () => {
    userProfilesSideNav.UserProfilesSideNavIsVisible();
    userProfilesSideNav.clickMyBankAccounts();
    bankAccountPage.verifyOnBankAccountPage();
    bankAccountPage.bankAccountContainer.checkIfAnyAccountsArePresent().then((accountCount) => {
      if (accountCount > 0) {
        cy.log(`Found ${accountCount} bank accounts`);
      } else {
        cy.log("No bank accounts found");
      }
    });
  });
});
