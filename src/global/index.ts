import { RefObject } from "react";

export const globals = {
  currRef: null as null | RefObject<HTMLDivElement>,
}

export const setCurrRef = (ref: RefObject<HTMLDivElement>, cb: Function) => {
  globals.currRef = ref;
  cb()
}