import BankAccountContainer from "../sections/bank-account-page-acc-section";

class BankAccountPage {
  bankAccountContainer: BankAccountContainer;

  constructor() {
    this.bankAccountContainer = new BankAccountContainer();
  }

  verifyOnBankAccountPage() {
    this.bankAccountContainer.verifyOnBankAccountPage();
  }

  clickCreateBankAccount() {
    this.bankAccountContainer.clickCreateBankAccount();
  }

  enterBankName(bankName: string) {
    this.bankAccountContainer.enterBankName(bankName);
  }

  enterRoutingNumber(routingNumber: number) {
    this.bankAccountContainer.enterRoutingNumber(routingNumber);
  }

  enterAccountNumber(accountNumber: number) {
    this.bankAccountContainer.enterAccountNumber(accountNumber);
  }

  clickCreateBankAccSaveBtn() {
    this.bankAccountContainer.clickCreateBankAccSaveBtn();
  }

  verifyNewBankAccountCreated(bankName: string) {
    this.bankAccountContainer.verifyNewBankAccountCreated(bankName);
  }

  clickDeleteBankAccountBtn() {
    this.bankAccountContainer.clickDeleteBankAccountBtn();
  }

  createAndVerifyBankAccount(bankName: string, routingNumber: number, accountNumber: number) {
    this.bankAccountContainer.createAndVerifyBankAccount(bankName, routingNumber, accountNumber);
  }
}

export default BankAccountPage;
