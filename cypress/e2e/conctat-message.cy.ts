import {ContacPage} from "../page/index";

const contacPage= new ContacPage()

describe("shoppin", () => {
    beforeEach(() => {
      cy.visit("https://www.demoblaze.com/index.html");
    });
  
    it( "contac message", () => {
        contacPage.sendMesagge()
    })
  });