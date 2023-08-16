import { RefObject } from "react";

export const globals = {
  currRef: null as null | RefObject<HTMLDivElement>,
}

export const setCurrRef = (ref: typeof globals.currRef, cb: Function) => {
  globals.currRef = ref;
  cb()
}

export const scrollToContactForm = (isMobile = false) => {
  if (globals.currRef) {
    // globals.currRef.current?.scrollIntoView({      
    //   behavior: "smooth", block: "end",
    // })
    const elem = document.getElementsByClassName(isMobile ? "contact-form-mobile" : "contact-form")[0] as HTMLElement
    window.scrollTo({
      // временное решение до выяснения почему не работают scrollIntoView и ref scrollTop
      top: Number(elem?.offsetTop) - 200,
      behavior: "smooth"
    })
  }
}