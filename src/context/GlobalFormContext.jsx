import { createContext, useState } from "react";


export const GlobalFormContext = createContext(null)

export default function MultFormProvider({ children }) {
    const [formMultStepData, setFormMultStepData] = useState([]);
    const [toggle, setToggle] = useState(null);

    return <GlobalFormContext.Provider value={{formMultStepData, setFormMultStepData, setToggle, toggle}}>{children}</GlobalFormContext.Provider>
}
