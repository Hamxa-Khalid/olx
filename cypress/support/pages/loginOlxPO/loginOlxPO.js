export class loginOlx {
    getOlxLoginButton() {
        return cy.get('[aria-label="Login"]').should('have.text','Login');
    }

    getLoginDialogBoxButton() {
        return cy.get('button[type="submit"]');
    }

    getEmailTextBox() {
        return cy.get("#email")
    }

    getNextButtonUnderEmail() {
        return cy.get('button[type="button"]');
    }

    getPasswordTexBox() {
        return cy.get('#password');
    }

    getLoginButtonUnderPassword() {
        return cy.get('button[type="button"]');
    }
}