import { OlxHomePage } from "../../support/pages/visitOlxPO/visitOlxPO"

describe("Visit Olx Website", function () {
    before(function () {
        cy.visit("/");
    })

    it("Validate Olx Home Page", function () {

        cy.url().should('include', 'olx.com');
        cy.title().should('eq', 'OLX - Buy and Sell for free anywhere in Pakistan with OLX online classifieds');
        cy.get('[aria-label="Login"]').should['have.text', 'Login'];
        
        cy.get('button').contains("Don't Allow").click();
        
        
    })
})


