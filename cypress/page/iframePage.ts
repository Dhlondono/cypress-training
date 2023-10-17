import {BasePage} from "./basePage"

export class IframePage extends BasePage {
    page: string
    titleHTLM: string
    cssPage: string
 

  constructor(){
    super()
    this.page ="https://www.w3schools.com/html/html_iframe.asp"
    this.titleHTLM="HTML Tutorial"
    this.cssPage=".ga-nav active"
  }

  visit(){
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
        this.visitPage(this.page)
  }
  getFrameTitle(){
    // get the title of the page in the iframe
    this.verifyframebyName(this.titleHTLM)
  }
  
  goToCssPageInFrame(){
    // navigate to the css page in the iframe
    this.clickIframe(this.cssPage)

  }
}