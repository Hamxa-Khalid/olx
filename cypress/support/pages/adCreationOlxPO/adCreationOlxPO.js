export class adCreationOlx {

    getHeaderSellButton () {
        return cy.get('[title="Sell"]');
    }

    getAdCategoryOlx () {
        return cy.get('div');
    }

    getAdTitleTextboxOlx () {
        return cy.get('[name="title"]');
    }

    getAdDescriptionTexBox () {
        return cy.get('#description');
    }

    getUploadAdImage () {
        return cy.get('[type="file"]');
    }

    getLocationButton () {
        return cy.get('#Location')
    }

    getSearchLocationTextbox () {
        return cy.get('input[placeholder="Search"]');
    }

    getSelectLocation () {
        return cy.get('div');
    }

    getNeighbourhoodButton () {
        return cy.get('#Neighbourhood')
    }

    getCellNumberCheckBox () {
        return cy.get('input[type="checkbox"]');
    }

    getPostNowButton () {
        return cy.get('button[type="submit"]');
    }

    getAdStatusMessage() {
        return cy.get('div');
    }

}