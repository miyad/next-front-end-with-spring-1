import AddStudent from "./AddStudent";
import ListStudent from "./ListStudent";
import ViewStudent from "../page-components/student-components/ViewStudent";
import Login from "./login";
import {RouteGuard} from "../page-components/authentication/RouterGuard";

import {Router, useRouter} from "next/router";
import {useEffect, useState} from "react";
import Nav from "../page-components/Nav";

export default function Home() {

    const [email,setEmail] = useState();
    const [changed, setChanged] = useState(false);
    const router = useRouter();
    useEffect(() => {
        console.log("use effect executes");
        const loggedIn = localStorage.getItem('isLoggedIn');

        if(loggedIn=== "false"){
            router.push('/login');
        }
        setEmail(localStorage.getItem('email'));
    },[changed]);

    return (
        <div>
            <Nav setChanged={setChanged}/>
        </div>
    );
}