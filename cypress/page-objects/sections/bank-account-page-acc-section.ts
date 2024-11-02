import bankAccPageSelectors from "../selectors/bankAccPageSelectors";

class BankAccountContainer {
  verifyOnBankAccountPage() {
    cy.get(bankAccPageSelectors.bankAccountContainer).should("be.visible");
  }

  checkIfAnyAccountsArePresent() {
    return cy.get(bankAccPageSelectors.bankAccounts).then(($elements) => {
      if ($elements.length > 0) {
        cy.log(`Found $($elements.length) Bank Accounts`);
        return $elements.length;
      } else {
        cy.log("No Bank Accounts Present");
        return 0;
      }
    });
  }
}

export default BankAccountContainer;
