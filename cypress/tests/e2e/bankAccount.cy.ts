import login from "../../support/loginHelper";
import BankAccountPage from "../../page-objects/pages/bankAccountPage";
import UserProfilesSideNav from "../../page-objects/sections/user-profile-side-panel";
import generateRandomBankName from "../../support/generateRandomBankName";
import generateRandomAccountNumber from "../../support/randomAccountNumber";
import generateRandomRoutingNumber from "../../support/randomRoutingNumber";


// const randomBankName = generateRandomBankName(10);

describe("Bank Account Page Tests", () => {
  //   const homepage = new HomePage();
  const userProfilesSideNav = new UserProfilesSideNav();
  const bankAccountPage = new BankAccountPage();

  beforeEach(() => {
    // Use the reusable login helper function i created in  ../support/loginHelper
    login();

    // Navigate to the bank accounts page as a prerequisite for each test
    userProfilesSideNav.UserProfilesSideNavIsVisible();
    userProfilesSideNav.clickMyBankAccounts();
    bankAccountPage.verifyOnBankAccountPage();
  });

  it("Select Bank Account from SideNav", () => {
    cy.log("Bank account page navigation verified successfully.");
  });

  it("Check if Bank Accounts are present", () => {
    bankAccountPage.bankAccountContainer.checkIfAnyAccountsArePresent();
  });

  it("Create Bank Account", () => {
    const randomRoutingNumber = generateRandomAccountNumber();
    const randomAccountNumber = generateRandomRoutingNumber();
    const randomBankName = generateRandomBankName(8);

    bankAccountPage.bankAccountContainer.createAndVerifyBankAccount(
      randomBankName,
      randomRoutingNumber,
      randomAccountNumber
    );
  });

  it("Delete a Bank Account", () => {
    bankAccountPage.clickDeleteBankAccountBtn();
  });
});
