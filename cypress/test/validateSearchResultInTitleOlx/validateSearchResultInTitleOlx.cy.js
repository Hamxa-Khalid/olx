import { validateSearchResultOlx } from "../../support/pages/validateSearchResultInTitleOlxPO/validateSearchResultInTitleOlxPO";
const validateSearchResultObj = new validateSearchResultOlx();

describe("Validate Search Result Olx ", function () {
  before(function () {
    cy.visit("/");
    cy.fixture("dataFile.json").then(function (data) {
      this.data = data;
    });
  });

  it("Validate Search Result In Olx", function () {
    cy.loginOlxcmd(this.data.email, this.data.password);
    cy.searchOlxcmd("iphone 14 pro max");
    validateSearchResultObj.getSearchResultListTitle().each((item) => {
      cy.wrap(item).contains("pro max", { matchCase: false });
    });
  });
});
