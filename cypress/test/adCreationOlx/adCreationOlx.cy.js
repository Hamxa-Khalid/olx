import { adCreationOlx } from '../../support/pages/adCreationOlxPO/adCreationOlxPO';
import { uploadFile } from '../../support/fileUpload';
const adCreationOlxObj = new adCreationOlx();
describe('Create Ad On Olx', function () {
  beforeEach(function () {
    cy.visit('/');
    cy.fixture('dataFile.json').then(function (data) {
      this.data = data;
    });
  });

  it('Create Olx Ad', function () {
    let category = ['Services', 'Web Development'];
    cy.loginOlxcmd(this.data.loginCreds.email, this.data.loginCreds.password);
    cy.selectCategorycmd(category);
    cy.url().should('include', '/post/attributes');
    adCreationOlxObj
      .getAdTitleTextboxOlx()
      .type(this.data.services.addService.title);
    adCreationOlxObj
      .getAdDescriptionTexBox()
      .type(this.data.services.addService.description);
    adCreationOlxObj.getUploadAdImage().attachFile('QA.png');
    adCreationOlxObj.getLocationButton().click();
    adCreationOlxObj
      .getSearchLocationTextbox()
      .type(this.data.services.addService.location);
    adCreationOlxObj
      .getSelectLocation()
      .contains(this.data.services.addService.province)
      .click();
    adCreationOlxObj.getNeighbourhoodButton().click();
    adCreationOlxObj
      .getSearchLocationTextbox()
      .type(this.data.services.addService.area);
    adCreationOlxObj
      .getSelectLocation()
      .contains(this.data.services.addService.area)
      .click();
    adCreationOlxObj.getCellNumberCheckBox().uncheck({ force: true });
    adCreationOlxObj.getPostNowButton().contains('Post now').click();
    adCreationOlxObj.getAdStatusMessage().contains('Your ad was not posted');
  });

  it.skip('Verify Ad', function () {
    cy.loginOlxcmd(this.data.loginCreds.email, this.data.loginCreds.password);
    adCreationOlxObj.getUserProfileDropDownArrow().click();
    adCreationOlxObj.getMyAdsOption().contains('My ads').click();
    cy.url().should('include', '/myads');
    adCreationOlxObj.getAdTitle().click();
    adCreationOlxObj
      .getPostedAdTitle()
      .contains(this.data.services.addService.title)
      .should('have.text', this.data.services.addService.title);
    adCreationOlxObj
      .getPostedAdDescription()
      .contains(this.data.services.addService.description)
      .should('have.text', this.data.services.addService.description);
  });

  it.skip('Edit Olx Ad', function () {
    cy.loginOlxcmd(this.data.loginCreds.email, this.data.loginCreds.password);
    adCreationOlxObj.getUserProfileDropDownArrow().click();
    adCreationOlxObj.getMyAdsOption().contains('My ads').click();
    cy.url().should('include', '/myads');
    adCreationOlxObj.getAdActionPopUpButton().click();
    adCreationOlxObj.getAdOption().contains('Edit now').click();
    adCreationOlxObj
      .getAdTitleTextboxOlx()
      .clear()
      .type(this.data.services.editService.title);
    adCreationOlxObj
      .getAdDescriptionTexBox()
      .clear()
      .type(this.data.services.editService.description);
    adCreationOlxObj.getCellNumberCheckBox().check({ force: true });
    adCreationOlxObj.getPostNowButton().contains('Continue').click();
    adCreationOlxObj.getAdStatusMessage().contains('Your ad was not posted');
  });

  it.skip('Verify Edited Ad', function () {
    cy.loginOlxcmd(this.data.loginCreds.email, this.data.loginCreds.password);
    adCreationOlxObj.getUserProfileDropDownArrow().click();
    adCreationOlxObj.getMyAdsOption().contains('My ads').click();
    cy.url().should('include', '/myads');
    adCreationOlxObj.getAdTitle().click();
    adCreationOlxObj
      .getPostedAdTitle()
      .contains(this.data.services.editService.title)
      .should('have.text', this.data.services.editService.title);
    adCreationOlxObj
      .getPostedAdDescription()
      .contains(this.data.services.editService.description)
      .should('have.text', this.data.services.editService.description);
  });

  it.skip('Deleted Ad', function () {
    cy.loginOlxcmd(this.data.loginCreds.email, this.data.loginCreds.password);
    adCreationOlxObj.getUserProfileDropDownArrow().click();
    adCreationOlxObj.getMyAdsOption().contains('My ads').click();
    cy.url().should('include', '/myads');
    adCreationOlxObj.getAdActionPopUpButton().click();
    adCreationOlxObj.getAdOption().contains('Remove').click();
    adCreationOlxObj.getAdDeleteDialogButton().contains('DELETE').click();
  });
});
