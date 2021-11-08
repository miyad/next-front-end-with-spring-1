import AddStudent from "./AddStudent";
import ListStudent from "./ListStudent";
import ViewStudent from "../page-components/student-components/ViewStudent";
import Login from "./login";
import {RouteGuard} from "../page-components/authentication/RouterGuard";

import {Router} from "next/router";
import {useEffect} from "react";

export default function Home() {

    return (
        <div>
                <h1>This is Home Page</h1>
        </div>
    );
}