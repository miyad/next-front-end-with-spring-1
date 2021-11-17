import Link from "next/link";
import {useState} from "react";



export default function Login(){

    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error, setError] = useState("");

    const server_url = process.env.NEXT_PUBLIC_BACKEND_SERVER;

    async function loginHandler(e) {
        console.log("came here with login request");
        e.preventDefault();
        console.log("email: "+email+" password: "+password);
        // we need to check if the user is already logged in by local storage
        const response = await fetch(server_url+`/isPersonValid/${email}/${password}`);
        const data = await response.json();
        console.log("response: "+response);
        console.log("data: "+data);
        if(data){
            console.log("data is true");
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);
            window.location.href = "/";
        }
        else{
            console.log("data is false");
            setError("Invalid email or password");
        }


        /*const response = await fetch(server_url+`/login/${email}`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                password: password
            })
        });*/

    }

    return(
        <>
            <div
                className="flex flex-row justify-center items-center bg-gray-100 h-screen"
            >

                <div

                    className="w-full max-w-sm flex flex-col bg-white rounded shadow-lg px-4 py-2" >
                    <div className={"mt-4 mb-2 text-center text-xl font-semibold"}>
                        <div className={"py-2"}>
                            Sign in to your account
                        </div>
                        <hr/>
                    </div>
                    <div>
                        <form className="flex flex-col pb-2">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                    Username
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="username" type="text" placeholder="Username or email"
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password" type="password" placeholder="******************"
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit"
                                onClick={loginHandler}>
                                    Sign In
                                </button>
                                <div className="inline-block align-baseline font-bold text-sm text-gray-500 ">
                                    Not a member? <Link href="/register" ><a className="text-blue-500 hover:text-blue-800"> Register</a></Link>
                                </div>
                            </div>
                            {
                                error &&
                                <div className="text-red-500 text-xs ">
                                    <br/>
                                    {error}
                                </div>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}