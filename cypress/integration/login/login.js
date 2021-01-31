describe('login', () => {
  it('should log into the app', () => {
    cy.login()
      .then((callbackUrl) => {
        cy.visit(callbackUrl);
      })
  });
});
