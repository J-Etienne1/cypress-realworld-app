import userProfilesSidePanelSelectors from "../selectors/userProfileSidePanelSelectors";

class UserProfilesSidePanel {
  UserProfilesSidePanelIsVisible() {
    cy.get(userProfilesSidePanelSelectors.userProfilesSidePanel).should("be.visible");
  }
}

export default UserProfilesSidePanel;
