import { createContext, useState } from "react";


export const GlobalFormContext = createContext(null)

export default function MultFormProvider({children})  {

    const [dataForm0, setDataForm0] = useState(null)
    const [dataForm1, setDataForm1] = useState(null)
    alert(dataForm0, dataForm1)
 
    return <GlobalFormContext.Provider value={{setDataForm0, setDataForm1}}>{children}</GlobalFormContext.Provider>
}