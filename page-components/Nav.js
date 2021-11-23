import React from 'react';

const Nav = ({setChanged}) => {
    return (
        <div
            className="shadow-xl font-semibold text-xl py-2 text-white bg-blue-600 md:w-screen flex justify-center justify-between"
        >
            <div>

            </div>
            <div className={"cursor-pointer hover:bg-white hover:text-blue-600 rounded px-12 py-2"}>
                Home
            </div>
            <div className={"cursor-pointer hover:bg-white hover:text-blue-600 rounded px-12 py-2"}>
                Profile
            </div>
            <div
                onClick={() => {
                    localStorage.setItem("isLoggedIn", "false");
                    localStorage.removeItem("email");
                    localStorage.removeItem("password");
                    setChanged(true);
                    window.location.href = '/';
                }}
                className={"cursor-pointer hover:bg-white hover:text-blue-600 rounded px-12 py-2"}>
                Logout
            </div>
            <div>

            </div>
        </div>
    );
};

export default Nav;
