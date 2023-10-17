import { BasePage } from "./basePage"

export class UploadDownload extends BasePage {
    uploadClass: string
    uploadBtn: string
    uploadMesagge: string
    fileName: string
    uploadText: string
    downloadBtn: string
    downloadFile: string

    constructor(){
        super()
        this.uploadClass ="#file-upload"
        this.uploadBtn= "#file-submit"
        this.uploadMesagge ="File Uploaded!"
        this.fileName="example.json"
        this.uploadText="File Uploaded!"
        this.downloadBtn="#downloadButton"
        this.downloadFile="sampleFile.jpeg"
    }

    uploadtheFile(){
        cy.visit("https://the-internet.herokuapp.com/upload");
        this.fileUploanding(this.uploadClass,this.fileName)
        this.clickByClass(this.uploadBtn)
        this.verifyByName(this.uploadText)
    }

    downloadtheFile(){
        cy.visit("https://demoqa.com/upload-download")
        this.clickByClass(this.downloadBtn)
        this.verifydownload(this.downloadFile)
    }
}