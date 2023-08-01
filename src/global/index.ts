import { RefObject } from "react";

export const globals = {
  currRef: null as null | RefObject<HTMLDivElement>,
}

export const setCurrRef = (ref: typeof globals.currRef, cb: Function) => {
  globals.currRef = ref;
  cb()
}

export const scrollToContactForm = () => {
  if (globals.currRef) {
    // globals.currRef.current?.scrollIntoView({      
    //   behavior: "smooth", block: "end",
    // })
    window.scrollTo({
      // временное решение до выяснения почему не работают scrollIntoView и ref scrollTop
      top: Number(document.getElementById("contact-form")?.offsetTop) - 200,
      behavior: "smooth"
    })
  }
}