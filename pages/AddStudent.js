import {useContext, useState} from "react";
import {GlobalContext} from "../page-components/GlobalContext/GlobalContextProvider";

export default function AddStudent(){

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');

    const [updated,setUpdated] = useContext(GlobalContext);

    const url = process.env.NEXT_PUBLIC_BACKEND_SERVER+`/student`;


    const submitHandler = async (e) =>{
        e.preventDefault();
        if(name.length===0||email.length===0){
            console.log("Name and Email must be non-empty");
        }
        else{
            fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    name,
                    email
                }),
                headers: { 'Content-Type': 'application/json'}

            }).then(() => {
                setUpdated(true);
            });
            setName('');
            setEmail('');
            setUpdated(false);

        }
    }

    return(
      <>
          <div className={"flex justify-center"}>
              <form
                  onSubmit={e=>submitHandler(e)}
                  className={"flex flex-col bg-blue-100 p-2 shadow-xl rounded m-4"}
              >
                  <div className={"flex justify-center my-4"}>
                      <div>
                        New Student
                      </div>
                  </div>
                  <div>
                        <label className={"mx-3"}>
                            Name:
                        </label>
                        <input
                            placeholder={"type your name"}
                            value={name}
                            onChange={e=>setName(e.target.value)}
                            className={"bg-white rounded mx-2 px-2 py-1 border-2 border-blue-0"}
                        />
                  </div>

                  <div className={"my-2"}>
                      <label className={"mx-3"}>
                          Email:
                      </label>
                      <input
                          type={"email"}
                          placeholder={"enter your email"}
                          value={email}
                          onChange={e=>setEmail(e.target.value)}
                          className={"bg-white rounded mx-2 px-2 py-1 border-2 border-blue-0"}
                      />
                  </div>

                  <button
                      className={"mx-12 mt-8 font-bold bg-red-500 hover:bg-white hover:text-red-500 border-2 hover:border-red-500 px-2 rounded py-1 text-white focus:outline-white"}
                      type={"submit"}
                  >
                      Add Student
                  </button>
              </form>
          </div>
      </>
    );
}