import {LoginPage} from "../page/index";

const loginPage = new LoginPage()

describe("Logg in feature", () => {
    beforeEach(() => {
      cy.visit("https://www.demoblaze.com/index.html");
    });
  
    it("Validating successful login", () => {
       loginPage.verifylogin()
        cy.get("#nameofuser").should("be.visible")
    });


  });

