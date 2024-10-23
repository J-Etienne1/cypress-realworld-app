import HomePageHeader from "../sections/home-page-header";

export default class HomePage {
  homePageHeader: HomePageHeader;

  constructor() {
    this.homePageHeader = new HomePageHeader();
  }

  verifyHomePageLogoIsVisible() {
    this.homePageHeader.verifyHomePageLogoIsVisible();
  }
}
