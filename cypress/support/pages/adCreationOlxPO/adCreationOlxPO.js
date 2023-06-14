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

    getNeightbourhoodLabel () {
        return cy.get('label[for="Neighbourhood"]')
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

    getUserProfileDropDownArrow () {
        return cy.get('[alt="User profile dropdown arrow"]');
    }

    getMyAdsOption() {
        return cy.get('div');
    }

    getAdTitle() {
        return cy.get('[aria-label="Ad title"]');
    }

    getAdImg() {
        return cy.get('img[role="presentation"]');
    }

    getPostedAdTitle () {
        return cy.get('h1');
    }

    getPostedAdDescription(){
        return cy.get('[aria-label="Description"]');
    }

    getAdActionPopUpButton() {
        return cy.get('[viewBox="0 0 20 20"]');
    }

    getAdOption() {
        return cy.get('div[aria-label="Ad options"]');
    }

    getAdDeleteDialogButton () {
        return cy.get('button[type="submit"]');
    }

}