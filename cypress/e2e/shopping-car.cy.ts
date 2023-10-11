let phonename = "Samsung galaxy s6"
let laptopname = "Sony vaio i7"
let monitorname = "ASUS Full HD"

describe("shoppin", () => {
    beforeEach(() => {
      cy.visit("https://www.demoblaze.com/index.html");
    });
  
    it("buying items shopping car", () => {
        cy.contains("Phones").click()
        cy.contains(phonename).click()
        cy.contains("Add to cart").click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Product added`)
          })
        cy.visit("https://www.demoblaze.com/index.html")
        cy.contains("Laptops").click()
        cy.contains(laptopname).click()
        cy.contains("Add to cart").click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Product added`)
          })
        cy.visit("https://www.demoblaze.com/index.html")
        cy.contains("Monitors").click()
        cy.contains(monitorname).click()
        cy.contains("Add to cart").click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Product added`)
          })
        cy.contains("Cart").click()
        cy.get('tbody').should('contain', monitorname)
        cy.get('tbody').should('contain', laptopname)
        cy.get('tbody').should('contain', phonename)
        cy.get('#totalp').should('contain', 1380)
        cy.contains("Place Order").click()
        cy.get('#name').type("david")
        cy.get('#country').type("colombia")
        cy.get('#city').type("medellin")
        cy.get('#card').type("1234")
        cy.get('#month').type("jun")
        cy.get('#year').type("2023")
        cy.contains("Purchase").click()
        cy.get(".sweet-alert").should('contain', 'Thank you for your purchase!')
        
    });

  });