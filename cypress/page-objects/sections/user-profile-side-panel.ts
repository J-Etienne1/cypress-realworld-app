import userProfileSideNavSelectors from "../selectors/userProfileSidePanelSelectors";

class UserProfilesSideNav {
  UserProfilesSideNavIsVisible() {
    cy.get(userProfileSideNavSelectors.userProfilesSideNav).should("be.visible");
  }

  clickMyAccount() {
    cy.get(userProfileSideNavSelectors.myAccount).click();
  }

  clickMyBankAccounts() {
    cy.get(userProfileSideNavSelectors.bankAccounts).click();
  }
}

export default UserProfilesSideNav;
