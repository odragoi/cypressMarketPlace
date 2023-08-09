require('cypress-xpath');

class SearchResultsPage {

    _selectors = {
        searchResultItems: 'div[data-component-type="s-search-result"]',
        itemAtGivenIndex: 'div[data-component-type="s-search-result"]::nth-child(index)',
        priceComponent: 'span.a-price-whole'
    }

    getCheapestFromFirstTen() {
        return cy.get(this._selectors.searchResultItems)
            .then(($els) => {
                const results = Cypress.$.makeArray($els).splice(10);

                const prices = results.map(item => cy.get(item).find(this._selectors.priceComponent).eq(0).innerText).map(item => Number.parseFloat(item));
                const minPrice = Math.min(...prices);
                const indexOfMinPrice = prices.indexOf(minPrice);
                cy.get(this._selectors.itemAtGivenIndex.replace('index', indexOfMinPrice)).click();
                cy.wait(5000);
            });
    }

}

export default new SearchResultsPage();