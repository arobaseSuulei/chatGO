
import {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";

import '../App.css'
import DesktopDevice from "./DesktopDevice";


export default function Session() {

    const navigate = useNavigate();

    const[nameUser,setNameUser] = useState('');
    function Go() {
        navigate("/Home",{ state: { nameUser } });
        console.log(nameUser);

    }
    return(
        <div
            className="sm:mx-56 mt-12 border rounded-xl flex flex-col gap-8 justify-center items-center p-8 md:p-16 shadow-lg ">
            <div className="text-center w-full">
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    Hey! Set your name for the session
                </h1>
                <input
                    type="text"
                    placeholder="Enter a username"
                    className="rounded-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 text-gray-800 w-full md:w-2/3 h-12 px-6 mb-4 outline-none transition-all"
                    value={nameUser}
                    onChange={(e) => setNameUser(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') Go();
                    }}
                />
                <button
                    onClick={Go}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-8 rounded-full transition-all shadow-md"
                >
                    Go and chat
                </button>


            </div>
        </div>

    );


}