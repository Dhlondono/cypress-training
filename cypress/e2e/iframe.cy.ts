import { IframePage } from "../page/index";

const iframePage = new IframePage()

describe("check Iframe", () => {
    beforeEach(() => {
        iframePage.visit()  
      });
  
    it("Iframepage", () => {
         
        iframePage.getFrameTitle()
        iframePage.goToCssPageInFrame()
    });


  });