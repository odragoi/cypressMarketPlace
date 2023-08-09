class Helpers {

    isElementPresent(selector) {
        return cy.window().then(window => {
            const el = window.document.querySelectorAll(selector);
            return el.length > 0;
        })
    }
}

export default new Helpers();
