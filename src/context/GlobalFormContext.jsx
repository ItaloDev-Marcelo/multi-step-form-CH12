import { createContext } from "react";


export const GlobalFormContext = createContext(null)

export default function MultFormProvider({children})  {


    return <GlobalFormContext.Provider value={{}}>{children}</GlobalFormContext.Provider>
}