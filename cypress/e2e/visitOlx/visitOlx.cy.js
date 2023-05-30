import { OlxHomePage } from "../../support/pages/olxHomePagePO/olxHomePagePO"

describe("Visit Olx Website", function () {
    before(function(){
        cy.visit("https://www.olx.com.pk");
    })

    it("Validate Olx Home Page", function () {
        const olxHomePage = new OlxHomePage;
    })
})