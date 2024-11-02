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
    const randomRoutingNumber = Math.floor(100000000 + Math.random() * 900000000); // Generates a random 9-digit number
    const randomAccountNumber = Math.floor(100000000 + Math.random() * 900000000); // Generates another random 9-digit number

    // Function to generate a random string for bank names
    function generateRandomBankName(length: number) {
      let result = "";
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }

    const randomBankName = generateRandomBankName(8); // Generate an 8-character random bank name

    bankAccountPage.clickCreateBankAccount();
    bankAccountPage.enterBankName(randomBankName);
    bankAccountPage.enterRoutingNumber(randomRoutingNumber);
    bankAccountPage.enterAccountNumber(randomAccountNumber);
    bankAccountPage.clickCreateBankAccSaveBtn();
    bankAccountPage.verifyNewBankAccountCreated(randomBankName);
  });

  it.skip("Delete Newly Created Bank Account", () => {
    // TO DO
  });
});
