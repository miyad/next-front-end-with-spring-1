
import {GlobalContextProvider} from "../page-components/GlobalContext/GlobalContextProvider";
import Home from "./home";


export default function Start() {



    return(
        <GlobalContextProvider>
            <Home/>
        </GlobalContextProvider>
    )

}
