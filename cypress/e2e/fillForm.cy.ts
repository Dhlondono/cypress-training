import { FormPage } from "../page/index";

const formPage = new FormPage()

describe("Fill the form an send", () => {
    beforeEach(() => {
      cy.visit("https://demoqa.com/automation-practice-form");
    });
  
    it( "fillform", () => {
        formPage.fillTheForm()
        })
  });