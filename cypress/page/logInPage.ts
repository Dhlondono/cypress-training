import {BasePage} from "./basePage"

export class LoginPage extends BasePage {

    btlogin:any
    loginUser:any
    loginPassword:any
    secondbtlogin:any


    constructor(){
        super()
        this.btlogin ="#login2"
        this.loginUser = "#loginusername"
        this.loginPassword ="#loginpassword"
        this.secondbtlogin = "[onclick=\"logIn()\"]"
    }

    verifylogin(){
        this.clickByClass(this.btlogin)
        this.typeByClass(this.loginUser,"davidlondono")
        this.typeByClass(this.loginPassword,"david123")
        this.clickByClass(this.secondbtlogin)
    }
}

