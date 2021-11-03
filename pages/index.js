
import {GlobalContextProvider} from "./GlobalContext/GlobalContextProvider";
import Home from "./home";



export default function Start() {



    return(
        <GlobalContextProvider>
            <Home/>
        </GlobalContextProvider>
    )
  /*return (
        <div className={"bg-blue-100  p-4 border-red-200 m-12 shadow-xl"}>
                <div>
                        hello
                  </div>
                  <div>name: </div>
                  <input className={"rounded px-2 py-1 border-blue-300 m-2"} placeholder={"type your name"} value={name} onChange={e => setName(e.target.value)} />
                  <div>email:</div>
                  <input
                      className={"px-2 py-1 rounded px-2 py-1 m-2"}
                      placeholder={"enter your email"}
                      value={email} onChange={e => setEmail(e.target.value)}
                  />
                  <button onClick={e=>submitHandler(e)} >
                        submit
                  </button>
                  <button className={"text-white bg-red-500 rounded px-2 shadow-xl"} onClick={e=>getHandler(e)}>
                          see Student
                  </button>
        </div>
  )*/
}
