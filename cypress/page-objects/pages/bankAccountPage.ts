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
}

export default BankAccountPage;
