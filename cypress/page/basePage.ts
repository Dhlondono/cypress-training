
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

    inputDate(name:any,date:any){
        cy.get(name).type(`{selectall}${date}{enter}`)
    }

    scrollOption(name:any){
        cy.get(name).last().click({force: true}).type("{downArrow}{enter}")
    }

    verifyByName(name:any){
        cy.contains(name).should("be.visible")
    }

    fileUploanding(name:any,file:any){
        cy.get(name).attachFile(file)
    }

    verifydownload(file:any){
        cy.verifyDownload(file)
    }

    visitPage(page:any){
        cy.visit(page)
    }

    verifyframebyName(name:any){
        cy.iframe().contains(name).should("be.visible")
    }

    clickIframe(name:any){
        cy.iframe().find(name).click()
    }
}
