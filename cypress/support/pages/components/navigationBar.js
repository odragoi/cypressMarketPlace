import helpers from "../../helpers/helpers";

class NavigationBar {
    _selectors = {
        languageSelectorDropDownButton: 'a#icp-nav-flyout span.nav-icon.nav-arrow',
        enLanguageOption: '//a[@href="#switch-lang=en_GB"]//i[contains(@class, "icp-radio")][1]',
        navigationSearchFiels: 'input#twotabsearchtextbox',
        navigationSearchSubmitButton: 'input#nav-search-submit-button'
    }

    searchItemsByText(text) {
        cy.get(this._selectors.navigationSearchFiels).type(text);
        cy.get(this._selectors.navigationSearchSubmitButton).click();
    }
}

export default new NavigationBar();