import homePageSelectors from "../selectors/homePageSelectors";

class HomePageTransactionList {
  verifyTransactionListIsVisible() {
    cy.get(homePageSelectors.transactionList).should("be.visible");
  }
}

export default HomePageTransactionList;
