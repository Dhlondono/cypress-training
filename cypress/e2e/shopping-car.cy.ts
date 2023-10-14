
import { ShoppingPage } from "../page/index";

const shoppingPage= new ShoppingPage()

describe("shoppin", () => {
    beforeEach(() => {
      cy.visit("https://www.demoblaze.com/index.html");
    });
  
    it("buying items shopping car", () => {
        shoppingPage.shoppingPhone()
        cy.visit("https://www.demoblaze.com/index.html")
        shoppingPage.shoppingLaptop()
        cy.visit("https://www.demoblaze.com/index.html")
        shoppingPage.shoppingMonitor()
        shoppingPage.verifyOrder()
        shoppingPage.makePurchase()
        
    });

  });