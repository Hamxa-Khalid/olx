import { adCreationOlx } from "../../support/pages/adCreationOlxPO/adCreationOlxPO";
import 'cypress-file-upload';
const adCreationOlxObj = new adCreationOlx();
describe("Create Ad On Olx", function () {
    before(function () {
        cy.visit("/");
        cy.fixture('userDetails.json').then(function(data){
            this.data = data;
        })

    })

    it("Create Olx Ad", function () {
        cy.loginOlxcmd(this.data.email, this.data.password);
        adCreationOlxObj.getHeaderSellButton().click();
        cy.url().should('include', '/post');
        adCreationOlxObj.getAdCategoryOlx().contains('Services').click();
        adCreationOlxObj.getAdCategoryOlx().contains('Web Development').click();
        cy.url().should('include', '/post/attributes');
        adCreationOlxObj.getAdTitleTextboxOlx().type("QA Engineer");
        adCreationOlxObj.getAdDescriptionTexBox().type("As a top software QA company, our goal is to develop custom solutions that support your current goals and operational processes.");
        adCreationOlxObj.getUploadAdImage().attachFile('QA.png');
        adCreationOlxObj.getLocationButton().click();
        adCreationOlxObj.getSearchLocationTextbox().type('Sargodha');
        adCreationOlxObj.getSelectLocation().contains('Sargodha, Punjab').click();
        adCreationOlxObj.getNeighbourhoodButton().click();
        adCreationOlxObj.getSearchLocationTextbox().type('Shamsher Town');
        adCreationOlxObj.getSelectLocation().contains('Shamsher Town').click();
        adCreationOlxObj.getCellNumberCheckBox().uncheck({force: true});
        adCreationOlxObj.getPostNowButton().click();
        adCreationOlxObj.getAdStatusMessage().contains('Your ad was not posted');

    })  

})