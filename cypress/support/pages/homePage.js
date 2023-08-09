import helpers from "../helpers/helpers";
class HomePage {
    url = 'https://www.amazon.de';

    _selectors = {
        selectYourCookiesPreferencesForm: 'form#sp-cc',
        acceptCookiesButton: 'input#sp-cc-accept'
    }

    openHomePage() {
        cy.visit(this.url);
    }

    acceptCookies() {
        if (helpers.isElementPresent(this._selectors.selectYourCookiesPreferencesForm)) {
            cy.get(this._selectors.acceptCookiesButton).click();
        }
    }

}

export default new HomePage();