import { createContext, useState } from "react";


export const GlobalFormContext = createContext(null)

export default function MultFormProvider({children})  {

    const [dataForm0, setDataForm0] = useState(null)
    const [dataForm1, setDataForm1] = useState(null)

    const [toggle, setToggle] = useState(null)
    console.log(dataForm0, dataForm1, toggle)
 
    return <GlobalFormContext.Provider value={{setDataForm0, setDataForm1,  setToggle, toggle}}>{children}</GlobalFormContext.Provider>
}
