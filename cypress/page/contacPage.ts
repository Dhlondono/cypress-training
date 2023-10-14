import {BasePage} from "./basePage"

export class ContacPage extends BasePage {
  navItem: string
  userEmail: string
  userName: string
  textMessage: string
  btnSend: string
  sendConfirm: string
  emailtest: string
  usertest: string
  mesaggetest: string

  constructor(){
    super()
    this.navItem =".nav-item"
    this.userEmail="#recipient-email"
    this.userName="#recipient-name"
    this.textMessage="#message-text"
    this.btnSend= "Send message"
    this.sendConfirm="Thanks for the message!!"
    this.emailtest="prueba@gmail.com"
    this.usertest="David"
    this.mesaggetest="QA Manda"
  }

  sendMesagge(){
        this.clickbyListClass(this.navItem,1)
        this.typeByClass(this.userEmail,this.emailtest)
        this.typeByClass(this.userName,this.usertest)
        this.typeByClass(this.textMessage,this.mesaggetest)
        this.clickbyName(this.btnSend)
        this.alertWindowMsg(this.sendConfirm)
  }

}

    