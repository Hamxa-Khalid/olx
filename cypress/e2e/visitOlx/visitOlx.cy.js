import { OlxHomePage } from "../../support/pages/vistOlxPO/olxHomePagePO"

describe("Visit Olx Website", function () {
    before(function(){
        cy.visit("/");
    })

    it("Validate Olx Home Page", function () {
        const olxHomePage = new OlxHomePage;
    })
})