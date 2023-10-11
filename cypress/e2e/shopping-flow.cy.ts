describe("Logg in feature", () => {
    beforeEach(() => {
      cy.visit("https://www.demoblaze.com/index.html");
    });
  
    it("Validating successful login", () => {
        cy.get("#login2").click()
        cy.get("#loginusername").type("davidlondono",{force:true})
        cy.get("#loginpassword").type("david123")
        cy.get("[onclick=\"logIn()\"]").click()
        cy.get("#nameofuser").should("be.visible")
    });


  });

