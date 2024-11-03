import bankAccPageSelectors from "../selectors/bankAccPageSelectors";

class BankAccountContainer {
  verifyOnBankAccountPage() {
    cy.get(bankAccPageSelectors.bankAccountContainer).should("be.visible");
  }

  checkIfAnyAccountsArePresent() {
    return cy.get(bankAccPageSelectors.bankAccounts).then(($elements) => {
      const count = $elements.length;
      if (count > 0) {
        cy.log(`Found ${count} bank accounts`);
      } else {
        cy.log("No bank accounts found");
      }
      return cy.wrap(count);
    });
  }

  clickCreateBankAccount() {
    cy.get(bankAccPageSelectors.createBankAccount).click();
  }

  enterBankName(bankName: string) {
    cy.get(bankAccPageSelectors.bankName).type(bankName);
  }

  enterRoutingNumber(routingNumber: number) {
    cy.get(bankAccPageSelectors.routingNumber).type(routingNumber.toString());
  }

  enterAccountNumber(accountNumber: number) {
    cy.get(bankAccPageSelectors.accountNumber).type(accountNumber.toString());
  }

  clickCreateBankAccSaveBtn() {
    cy.get(bankAccPageSelectors.createBankAccSaveBtn).click();
  }

  verifyNewBankAccountCreated(bankName: string) {
    cy.get(bankAccPageSelectors.bankAccounts).contains(bankName).should("be.visible");
  }

  clickDeleteBankAccountBtn() {
    cy.get(bankAccPageSelectors.deleteBankAccount).click();
  }

  findBankAccountByName() {
    cy.get(bankAccPageSelectors.bankAccountListItem);
  }
}

export default BankAccountContainer;
