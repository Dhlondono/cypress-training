import { BasePage } from "./basePage";

export class FormPage extends BasePage{
    name: string;
    lastName: string;
    email: string;
    gender: string;
    dateOfBirth: string;
    mobileNumber: string;
    currentAddress: string;
    hobbies1: string;
    hobbies2: string;
    nameClass: string;
    lastNameClass: string;
    emailClass: string;
    dateofBirthClass: string;
    mobilClass: string;
    currentAddressClass: string;
    stateAndCityClass: string;
    popUpMessage: string;
    buttontext: string;
    constructor(){
        super()
        this.name= "Holmes"
        this.nameClass="#firstName"
        this.lastName= "Salazar"
        this.lastNameClass="#lastName"
        this.email= "test@email.com"
        this.emailClass="#userEmail"
        this.gender= "Male"
        this.dateOfBirth= "27 Jul 2016"
        this.dateofBirthClass="#dateOfBirthInput"
        this.mobileNumber= "3656589156"
        this.mobilClass= "#userNumber"
        this.hobbies1= "Music"
        this.hobbies2= "Reading"
        this.currentAddress= "Av siempreViva # 123"
        this.currentAddressClass="#currentAddress"
        this.stateAndCityClass=".css-yk16xz-control"
        this.buttontext="Submit"
        this.popUpMessage="Thanks for submitting the form"
    }

    fillTheForm(){
        this.typeByClass(this.nameClass,this.name)
        this.typeByClass(this.lastNameClass,this.lastName)
        this.typeByClass(this.emailClass,this.email)
        this.clickbyName(this.gender)
        this.typeByClass(this.mobilClass,this.mobileNumber)
        this.inputDate(this.dateofBirthClass,this.dateOfBirth)
        this.clickbyName(this.hobbies1)
        this.clickbyName(this.hobbies2)
        this.typeByClass(this.currentAddressClass,this.currentAddress)
        this.scrollOption(this.stateAndCityClass)
        this.scrollOption(this.stateAndCityClass)
        this.clickbyName(this.buttontext)
        this.verifyByName(this.popUpMessage)        
    }
    
}