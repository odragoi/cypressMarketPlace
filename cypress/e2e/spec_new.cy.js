import navigationBar from "../support/pages/components/navigationBar";
import page
  from "../support/pages/homePage";
import searchResultsPage from "../support/pages/searchResultsPage";

describe('Market place tests', () => {
  it('Select the chepest item from selected list', () => {
    page.openHomePage();
    page.acceptCookies();

    navigationBar.searchItemsByText('book');

    cy.log(searchResultsPage.getCheapestFromFirstTen());
  })
})