import {useContext, useEffect, useState} from "react";
import Image from 'next/image';
import d_logo from "../public/delete.jpeg";
import {GlobalContext} from "./GlobalContext/GlobalContextProvider";

export default function ListStudent(){

    const init_data = [
        {
            name:"miyad",
            email: "mdshahiburrahman@gmail.com"
        },
        {
            name: "sakib",
            email: "sakib@gmail.com"
        }
    ];
    const [data,setData] = useState(init_data);

    const [updated,setUpdated] = useContext(GlobalContext);


    const deleteHandler = (id)=>{
        fetch(`http://localhost:8080/delete/${id}`,{
            method: "DELETE",
        }).then(() => {
            setUpdated(true);
        })
        setUpdated(false);
    }


    useEffect(()=>{
        fetch(`http://localhost:8080/getStudents`)
            .then(res => res.json())
            .then((data) => setData(data));

    },[updated])

    return(
        <>
            <div className={"flex justify-center mt-12"}>
                <table
                    className='mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden'>
                    <thead className="bg-gray-900">
                    <tr className="text-white">
                        <th className="font-semibold text-left text-sm uppercase px-6 py-4"> #</th>
                        <th className="font-semibold text-sm uppercase px-6 py-4">Name</th>
                        <th className="font-semibold text-sm uppercase px-6 py-4 text-center"> Email</th>
                        <th className="font-semibold text-sm uppercase px-6 py-4 text-center">Remove</th>
                        <th className="font-semibold text-sm uppercase px-6 py-4"></th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                    {
                        data.map((item,index)=> (<tr key={index}><td className="px-6 py-4">{index+1}</td><td className={"text-center"}>{item.name}</td><td className={"text-center"}>{item.email}</td><td className={"text-center"}><Image onClick={()=>deleteHandler(item.id)} className={"cursor-pointer"} src={d_logo} alt={"delete"} height={25} width={25}/></td></tr>))
                    }

                    </tbody>
                </table>

            </div>
        </>
    );
}