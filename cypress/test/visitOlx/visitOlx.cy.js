import { OlxHomePage } from "../../support/pages/visitOlxPO/visitOlxPO"
const olxObj = new OlxHomePage();
describe("Visit Olx Website", function () {
    before(function () {
        cy.visit("/");
    })

    it("Validate Olx Home Page", function () {

        olxObj.verifyUrl().should('include', 'olx.com');
        olxObj.verifyTitle().should('eq', 'OLX - Buy and Sell for free anywhere in Pakistan with OLX online classifieds');
        cy.get('[aria-label="Login"]').should['have.text', 'Login'];
        cy.get('header>div>div>[title="Sell"]').should['have.text', 'Sell'];
        cy.get('div>div>div>div>div>button').contains("Don't Allow").click();        
        
    })
})


