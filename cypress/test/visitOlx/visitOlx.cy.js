import { OlxHomePage } from "../../support/pages/visitOlxPO/visitOlxPO";
const olxObj = new OlxHomePage();
describe("Visit Olx Website", function () {
  before(function () {
    cy.visit("/");
  });

  it("Validate Olx Home Page", function () {
    olxObj.verifyUrl().should("include", "olx.com");
    olxObj
      .verifyTitle()
      .should(
        "eq",
        "OLX - Buy and Sell for free anywhere in Pakistan with OLX online classifieds"
      );
    olxObj
      .closeOlxHomePageAlert()
      .contains("Don't Allow")
      .should("be.visible")
      .click();
  });
});
