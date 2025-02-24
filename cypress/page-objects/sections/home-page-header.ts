import homePageSelectors from "../selectors/homePageSelectors";

class HomePageHeader {
  verifyHomePageLogoIsVisible() {
    cy.get(homePageSelectors.appLogo).should("be.visible");
  }

  verifyTransactionListIsVisible() {
    cy.get(homePageSelectors.transactionList).should("be.visible");
  }
}

export default HomePageHeader;
