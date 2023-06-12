export class validateSearchResultOlx {
    getHeaderSearchBox () {
        return cy.get('input[type="search"]');
    }

    getHeaderSearchButton () {
        return cy.get('button[aria-label="Search"]');
    }

    getSearchResultListTitle () {
        return cy.get('[aria-label="Title"]>p');
    }
}