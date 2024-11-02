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

    // Navigate to the bank accounts page as a prerequisite for each test
    userProfilesSideNav.UserProfilesSideNavIsVisible();
    userProfilesSideNav.clickMyBankAccounts();
    bankAccountPage.verifyOnBankAccountPage();
  });

  it("Select Bank Account from SideNav", () => {
    // This test now only needs to focus on actions or assertions specific to selection after removing duplicate code from it blocks
    cy.log("Bank account page navigation verified successfully.");
  });

  it("Check if Bank Accounts are present", () => {
    bankAccountPage.bankAccountContainer.checkIfAnyAccountsArePresent();
  });

  it("Create Bank Account", () => {
    bankAccountPage.clickCreateBankAccount();
    bankAccountPage.enterBankName("Jason");
    bankAccountPage.enterRoutingNumber();
    bankAccountPage.enterAccountNumber();
    bankAccountPage.clickCreateBankAccSaveBtn();
  });
});
