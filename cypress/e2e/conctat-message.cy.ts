describe("shoppin", () => {
    beforeEach(() => {
      cy.visit("https://www.demoblaze.com/index.html");
    });
  
    it( "contac message", () => {
        cy.get(".nav-item").eq(1).click()
        cy.get("#recipient-email").type("prueba@gmail.com")
        cy.get("#recipient-name").type("David")
        cy.get("#message-text").type("QA Manda")
        cy.contains("Send message").click()
        cy.on("window:alert", (str) => {
            expect(str).to.equal("Thanks for the message!!")
          })
    })
  });