
export class BasePage{
    clickByClass(name: any){
        cy.get(name).click({ force: true })
    }

    typeByClass(name: any,type: any){
        cy.get(name).type(type,{force:true})
    }

    clickbyName(name: any){
        cy.contains(name).click({ force: true })
    }

    clickbyListClass(name: any,list: number){
        cy.get(name).eq(list).click()
    }

    alertWindowMsg(message: any){
        cy.on("window:alert", (str) => {
            expect(str).to.equal(message)
          })
    }

    verifyByClass(name:any,text:any){
        cy.get(name).should("contain", text)
    }
}
