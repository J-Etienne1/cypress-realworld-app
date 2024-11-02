import BankAccountContainer from "../sections/bank-account-page-acc-section";

class BankAccountPage {
  bankAccountContainer: BankAccountContainer;

  constructor() {
    this.bankAccountContainer = new BankAccountContainer();
  }

  verifyOnBankAccountPage() {
    this.bankAccountContainer.verifyOnBankAccountPage();
  }
}

export default BankAccountPage;
