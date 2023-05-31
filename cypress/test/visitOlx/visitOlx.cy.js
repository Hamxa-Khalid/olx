import { OlxHomePage } from "../../support/pages/vistOlxPO/visitOlxPO"

describe("Visit Olx Website", function () {
    before(function(){
        cy.visit("/");
    })

    it("Validate Olx Home Page", function () {
        const olxHomePage = new OlxHomePage;
    })
})