import AddStudent from "./AddStudent";
import ListStudent from "./ListStudent";
import {useState} from "react";

export default function Home(options) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    async function submitHandler(e) {
        await fetch(`http://127.0.0.1:8080/student`, {
            method: 'POST',
            body: JSON.stringify({
                name,
                email
            }),
            headers: { 'Content-Type': 'application/json'}

        });

    }

    function getHandler(e) {
        fetch(`http://localhost:8080/getStudent`)
            .then(res => res.json())
            .then(() => console.log());

    }

    return(
        <div className="w-screen">
            <AddStudent />
            <ListStudent />
        </div>
    )
}