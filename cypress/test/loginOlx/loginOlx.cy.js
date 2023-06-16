describe("Login To Olx", function () {
  before(function () {
    cy.visit("/");
    cy.fixture("dataFile.json").then(function (data) {
      this.data = data;
    });
  });

  it("Login To Olx", function () {
    // cy.closeAlertBox("Don't Allow");
    cy.loginOlxcmd(this.data.email, this.data.password);
  });
});
