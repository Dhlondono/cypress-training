import {BasePage} from "./basePage"

export class ShoppingPage extends BasePage {

    phoneCategory:any
    addButton: string
    alertmesagg: string
    laptopsCategory: string
    cartbtn: string
    bodycart: string
    totalprice: string
    ordenBtn: string
    username: string
    countryname: string
    cityname: string
    cardnumber: string
    monthname: string
    yearnumber: string
    purchasebtn: string
    orderalert: string
    phonename: string
    laptopname: string
    monitorname: string
    monitorCategory: string
    finalPurchaseMsg: string

    
    constructor(){
        super()
        this.phonename = "Samsung galaxy s6"
        this.laptopname = "Sony vaio i7"
        this.monitorname = "ASUS Full HD"


        this.phoneCategory ="Phones"
        this.addButton= "Add to cart"
        this.alertmesagg="Product added"
        this.laptopsCategory = "Laptops"
        this.monitorCategory="Monitors"
        this.cartbtn="Cart"
        this.bodycart="tbody"
        this.totalprice= "#totalp"
        this.ordenBtn="Place Order"
        this.username="#name"
        this.countryname="#country"
        this.cityname="#city"
        this.cardnumber="#card"
        this.monthname="#month"
        this.yearnumber="#year"
        this.purchasebtn="Purchase"
        this.orderalert=".sweet-alert"
        this.finalPurchaseMsg= "Thank you for your purchase!"
    }

    shoppingPhone(){

        this.clickbyName(this.phoneCategory)
        this.clickbyName(this.phonename)
        this.clickbyName(this.addButton)
        this.alertWindowMsg(this.alertmesagg)
    }
    shoppingLaptop(){

        this.clickbyName(this.laptopsCategory)
        this.clickbyName(this.laptopname)
        this.clickbyName(this.addButton)
        this.alertWindowMsg(this.alertmesagg)
    }
    shoppingMonitor(){

        this.clickbyName(this.monitorCategory)
        this.clickbyName(this.monitorname)
        this.clickbyName(this.addButton)
        this.alertWindowMsg(this.alertmesagg)
    }

    verifyOrder(){
        this.clickbyName(this.cartbtn)
        this.verifyByClass(this.bodycart,this.phonename)
        this.verifyByClass(this.bodycart,this.laptopname)
        this.verifyByClass(this.bodycart,this.monitorname)
        this.verifyByClass(this.totalprice,1380)
    }

    makePurchase(){
        this.clickbyName(this.ordenBtn)
        this.typeByClass(this.username,"david")
        this.typeByClass(this.countryname,"colombia")
        this.typeByClass(this.cityname,"medellin")
        this.typeByClass(this.cardnumber,"1234")
        this.typeByClass(this.monthname,"jun")
        this.typeByClass(this.yearnumber,"2023")
        this.clickbyName(this.purchasebtn)
        this.verifyByClass(this.orderalert,"Thank you for your purchase!")
    }
    
}
