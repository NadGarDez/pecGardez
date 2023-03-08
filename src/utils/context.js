import { createContext } from "react";


export const NavigatorContext = createContext()


export const capitalize = (word)=>word.charAt(0).toUpperCase() + word.slice(1);