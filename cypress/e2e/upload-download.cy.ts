import { sample } from "cypress/types/lodash";
import { UploadDownload } from "../page/index";

const uploadDownload = new UploadDownload()

describe("Fill the form an send", () => {
  
    it( "uploadFile", () => {
        uploadDownload.uploadtheFile()
        })
    
    it( "downloadFile", () => {
        uploadDownload.downloadtheFile()
        })
  });