import login from "../../support/loginHelper";
import BankAccountPage from "../../page-objects/pages/bankAccountPage";
import UserProfilesSideNav from "../../page-objects/sections/user-profile-side-panel";
import generateRandomBankName from "../../support/generateRandomBankName";

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
    // This test now only needs to focus on actions or assertions specific to selection after removing duplicate code from it blocks
    cy.log("Bank account page navigation verified successfully.");
  });

  it("Check if Bank Accounts are present", () => {
    bankAccountPage.bankAccountContainer.checkIfAnyAccountsArePresent();
  });

  it("Create Bank Account", () => {
    const randomRoutingNumber = Math.floor(100000000 + Math.random() * 900000000); // Generates a random 9-digit number
    const randomAccountNumber = Math.floor(100000000 + Math.random() * 900000000); // Generates another random 9-digit number
    const randomBankName = generateRandomBankName(8);

    bankAccountPage.bankAccountContainer.createAndVerifyBankAccount(
      randomBankName,
      randomRoutingNumber,
      randomAccountNumber
    );

    // Function to generate a random string for bank names
  });

  it("Delete a Bank Account", () => {
    bankAccountPage.clickDeleteBankAccountBtn();
  });
});
