import { OlxHomePage } from "../../support/pages/visitOlxPO/visitOlxPO"

describe("Visit Olx Website", function () {
    before(function () {
        cy.visit("/");
    })

    it("Validate Olx Home Page", function () {

        cy.url().should('include', 'olx.com');
        cy.title().should('eq', 'OLX - Buy and Sell for free anywhere in Pakistan with OLX online classifieds');

        // cy.on('window:confirm', (t) => {
        //     expect(t).to.contains("Don't Allow");
        //     return false;
        // })
        
        cy.get('button').contains("Don't Allow").click();
        
        // cy.get("input[type='search']").type('Mobiles');
        // cy.get('button[aria-label="Search"]').click();
    })
})


