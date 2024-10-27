import userProfileSideNavSelectors from "../selectors/userProfileSidePanelSelectors";

class UserProfilesSideNav {
  UserProfilesSideNavIsVisible() {
    cy.get(userProfileSideNavSelectors.userProfilesSideNav).should("be.visible");
  }
}

export default UserProfilesSideNav;
