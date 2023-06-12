import { loginOlx } from "../support/pages/loginOlxPO/loginOlxPO";
const loginOlxObj = new loginOlx();
import { validateSearchResultOlx } from "./pages/validateSearchResultInTitleOlxPO/validateSearchResultInTitleOlxPO";
const validateSearchResultObj = new validateSearchResultOlx();


Cypress.Commands.add('closeAlertBox', (label) =>{
    cy.url().should('include', 'olx.com');
    cy.title().should('eq', 'OLX - Buy and Sell for free anywhere in Pakistan with OLX online classifieds');
    cy.get('button').contains(label).should('be.visible').click();
})

Cypress.Commands.add('loginOlxcmd', (email,password) => {

   

        loginOlxObj.getOlxLoginButton().click();
        loginOlxObj.getLoginDialogBoxButton().contains("Continue with Email").click();
        loginOlxObj.getEmailTextBox().type(email)
        loginOlxObj.getNextButtonUnderEmail().contains("Next").click();
        loginOlxObj.getPasswordTexBox().type(password);
        loginOlxObj.getLoginButtonUnderPassword().contains("Log in").click();

})

Cypress.Commands.add('searchOlxcmd', (search) => {
    validateSearchResultObj.getHeaderSearchBox().type(search);
        validateSearchResultObj.getHeaderSearchButton().click();
})