import { UploadDownload } from "../page/index";

const uploadDownload = new UploadDownload()

describe("Fill the form an send", () => {
    beforeEach(() => {
      cy.visit("https://the-internet.herokuapp.com/upload");
    });
  
    it( "uploadFile", () => {
        uploadDownload.uploadtheFile()
        })
  });