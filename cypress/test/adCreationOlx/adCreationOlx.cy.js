import { adCreationOlx } from "../../support/pages/adCreationOlxPO/adCreationOlxPO";
import 'cypress-file-upload';
const adCreationOlxObj = new adCreationOlx();
describe("Create Ad On Olx", function () {
    beforeEach(function () {
        cy.visit("/");
        cy.fixture('userDetails.json').then(function(data){
            this.data = data;
        })

    })

    it("Create Olx Ad", function () {
        let category = ['Services','Web Development']
        cy.loginOlxcmd(this.data.loginCreds.email, this.data.loginCreds.password);
        cy.selectCategorycmd(category);
        cy.url().should('include', '/post/attributes');
        adCreationOlxObj.getAdTitleTextboxOlx().type(this.data.services.addService.title);
        adCreationOlxObj.getAdDescriptionTexBox().type(this.data.services.addService.description);
        adCreationOlxObj.getUploadAdImage().attachFile('QA.png');
        adCreationOlxObj.getLocationButton().click();
        adCreationOlxObj.getSearchLocationTextbox().type(this.data.services.addService.location);
        adCreationOlxObj.getSelectLocation().contains(this.data.services.addService.province).click();
        adCreationOlxObj.getNeighbourhoodButton().click();
        adCreationOlxObj.getSearchLocationTextbox().type(this.data.services.addService.area);
        adCreationOlxObj.getSelectLocation().contains(this.data.services.addService.area).click();
        adCreationOlxObj.getCellNumberCheckBox().uncheck({force: true});
        adCreationOlxObj.getPostNowButton().click();
        adCreationOlxObj.getAdStatusMessage().contains('Your ad was not posted');

    })

    it("Verify Ad", function () {
        cy.loginOlxcmd(this.data.loginCreds.email, this.data.loginCreds.password);
        adCreationOlxObj.getUserProfileDropDownArrow().click();
        adCreationOlxObj.getMyAdsOption().contains("My ads").click();
        cy.url().should('include', '/myads');
        adCreationOlxObj.getAdTitle().click();
        // adCreationOlxObj.getAdImg().should('be.visible');
        adCreationOlxObj.getPostedAdTitle().contains(this.data.services.addService.title).should('have.text',this.data.services.addService.title);
        adCreationOlxObj.getPostedAdDescription().contains(this.data.services.addService.description).should('have.text',this.data.services.addService.description);



    })

    it.skip("Edit Olx Ad", function () {
        cy.loginOlxcmd(this.data.loginCreds.email, this.data.loginCreds.password);
        adCreationOlxObj.getUserProfileDropDownArrow().click();
        adCreationOlxObj.getMyAdsOption().contains("My ads").click();
        cy.url().should('include', '/myads');
        cy.get('[viewBox="0 0 20 20"]').click();
        

    })

})