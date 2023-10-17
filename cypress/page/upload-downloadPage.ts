import { BasePage } from "./basePage"

export class UploadDownload extends BasePage {
    uploadClass: string
    uploadBtn: string
    uploadMesagge: string
    fileName: string
    uploadText: string

    constructor(){
        super()
        this.uploadClass ="#file-upload"
        this.uploadBtn= "#file-submit"
        this.uploadMesagge ="File Uploaded!"
        this.fileName="example.json"
        this.uploadText="File Uploaded!"
    }

    uploadtheFile(){
        this.fileUploanding(this.uploadClass,this.fileName)
        this.clickByClass(this.uploadBtn)
        this.verifyByName(this.uploadText)
    }
}