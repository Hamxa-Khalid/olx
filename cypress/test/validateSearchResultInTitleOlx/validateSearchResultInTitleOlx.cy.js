import  { validateSearchResultOlx } from "../../support/pages/validateSearchResultInTitleOlxPO/validateSearchResultInTitleOlxPO";
const validateSearchResultObj = new validateSearchResultOlx();

describe("Validate Search Result Olx ", function (){
    before(function () {
        cy.visit("/");
        cy.fixture("userDetails.json").then(function(data){
            this.data = data
        })
        
    })

    it("Validate Search Result In Olx", function () {
        cy.loginOlxcmd(this.data.email, this.data.password);
        validateSearchResultObj.getHeaderSearchBox().type("iphone 14 pro max");
        validateSearchResultObj.getHeaderSearchButton().click();
        validateSearchResultObj.getSearchResultListTitle().each( (item) => {
    
          cy.wrap(item).contains('pro max', {matchCase: false})
            
        })
    })
})