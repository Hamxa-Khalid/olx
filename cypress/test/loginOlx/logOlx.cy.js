import { loginOlx } from "../../support/pages/loginOlxPO/loginOlxPO";

const loginOlxObj = new loginOlx();
describe("Login To Olx", function () {
    before(function () {
        cy.visit("/");
    })

    it("Click On Login", function () {
        loginOlxObj.getOlxLoginButton().should('have.text','Login').click();
    })


})