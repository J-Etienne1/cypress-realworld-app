import HomePageHeader from "../sections/home-page-header";
import HomePageTransactionList from "../sections/home-page-transaction-list";

export default class HomePage {
  homePageHeader: HomePageHeader;
  homePageTransactionList: HomePageTransactionList;

  constructor() {
    this.homePageHeader = new HomePageHeader();
    this.homePageTransactionList = new HomePageTransactionList();
  }

  verifyHomePageLogoIsVisible() {
    this.homePageHeader.verifyHomePageLogoIsVisible();
  }

  verifyTransactionListIsVisible() {
    this.homePageTransactionList.verifyTransactionListIsVisible();
  }
}
