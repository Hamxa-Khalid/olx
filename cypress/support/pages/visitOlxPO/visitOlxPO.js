export class OlxHomePage {

    verifyUrl() {
        return cy.url()
    }

    verifyTitle() {
        return cy.title()
    }

    closeOlxHomePageAlert() {
        return cy.get('button')
    }

}