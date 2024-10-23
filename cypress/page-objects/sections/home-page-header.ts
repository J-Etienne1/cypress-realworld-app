import homePageSelectors from "../selectors/homePageSelectors";

class HomePageHeader {
  verifyHomePageLogoIsVisible() {
    cy.get(homePageSelectors.appLogo).should("be.visible");
  }
}

export default HomePageHeader;
