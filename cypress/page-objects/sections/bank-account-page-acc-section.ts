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
}

export default BankAccountContainer;
