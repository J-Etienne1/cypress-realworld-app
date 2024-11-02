import BankAccountContainer from "../sections/bank-account-page-acc-section";

class BankAccountPage {
  bankAccountContainer: BankAccountContainer;

  constructor() {
    this.bankAccountContainer = new BankAccountContainer();
  }
}

export default BankAccountPage;
