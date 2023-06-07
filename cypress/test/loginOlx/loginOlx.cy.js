import { loginOlx } from "../../support/pages/loginOlxPO/loginOlxPO";

const loginOlxObj = new loginOlx();
describe("Login To Olx", function () {
    before(function () {
        cy.visit("/");
    })

    it("Login To Olx", function () {
        // cy.closeAlertBox("Don't Allow");
        loginOlxObj.getOlxLoginButton().click();
        loginOlxObj.getLoginDialogBoxButton().contains("Continue with Email").click();
        loginOlxObj.getEmailTextBox().type("hamxi8381@gmail.com")
        loginOlxObj.getNextButtonUnderEmail().contains("Next").click();
        loginOlxObj.getPasswordTexBox().type('916f996c');
        loginOlxObj.getLoginButtonUnderPassword().contains("Log in").click();
        
    })



})