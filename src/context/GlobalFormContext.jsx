import { createContext, useState } from "react";


export const GlobalFormContext = createContext(null)

export default function MultFormProvider({children})  {

    const [dataForm0, setDataForm0] = useState(null)
    const [dataForm1, setDataForm1] = useState(null)
<<<<<<< HEAD
    const [toggle, setToggle] = useState(null)
    console.log(dataForm0, dataForm1, toggle)
=======
    alert(dataForm0, dataForm1)
>>>>>>> adb0374090a8f8d4ee927d02fa61c5bf5a802ed9
 
    return <GlobalFormContext.Provider value={{setDataForm0, setDataForm1,  setToggle, toggle}}>{children}</GlobalFormContext.Provider>
}