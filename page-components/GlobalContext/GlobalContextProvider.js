import {createContext, useState} from "react";

export const GlobalContext = createContext(undefined);

export const GlobalContextProvider = props => {


    const [updated,setUpdated] = useState(false);

    return (
        <GlobalContext.Provider
            value={[updated,setUpdated]}
        >
            {
                props.children
            }
        </GlobalContext.Provider>
    )




}