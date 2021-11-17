import AddStudent from "./AddStudent";
import ListStudent from "./ListStudent";
import ViewStudent from "../page-components/student-components/ViewStudent";
import Login from "./login";
import {RouteGuard} from "../page-components/authentication/RouterGuard";

import {Router, useRouter} from "next/router";
import {useEffect, useState} from "react";

export default function Home() {

    const [email,setEmail] = useState();
    const router = useRouter();
    useEffect(() => {
        const loggedIn = localStorage.getItem('isLoggedIn');
        console.log(loggedIn);
        if(!loggedIn){
            router.push('/login');
        }
    },[]);

    return (
        <div>
                <h1>This is Home Page</h1>
                <h1>your email is {email}</h1>
        </div>
    );
}