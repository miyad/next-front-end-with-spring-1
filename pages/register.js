import Link from 'next/link';

export default function Register(){
    return(
        <div
            className="flex flex-row justify-center items-center bg-gray-100 h-screen"
        >

            <div

                className="w-full max-w-sm flex flex-col bg-white rounded shadow-lg px-4 py-2" >
                <div className={"mt-4 mb-2 text-center text-xl font-semibold"}>
                    <div className={"py-2"}>
                        Register to have an Account
                    </div>
                    <hr/>
                </div>
                <div>
                    <form className="flex flex-col px-1 pb-2">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                                Full Name
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fullName" type="text" placeholder="Enter your full name"/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email"/>
                        </div>
                        <div className="mb-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                                Confirm Password
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="confirmPassword" type="password" placeholder="******************"/>
                        </div>

                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
                                    >
                                Register
                            </button>
                            <div className="inline-block align-baseline font-bold text-sm text-gray-500 ">
                                Already Registered? <Link href="/login" ><a className="text-blue-500 hover:text-blue-800">Login</a></Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}