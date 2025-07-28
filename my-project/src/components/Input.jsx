import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";

const supabase = createClient("https://pxyqknxfvimxdcmplbff.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4eXFrbnhmdmlteGRjbXBsYmZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkzMDM4NjIsImV4cCI6MjA0NDg3OTg2Mn0.cuq3c8ejHCSky7BcV1qlj76_QYWcYXYiAbvDolxN6Uk");

export default function Input({ nameUser }) {
    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [analyzer, setAnalyzer] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [translate,setTranslate]=useState([]);





    useEffect(() => {
        getAnalyzer();
        const subscription = supabase.channel('chatGO-analyzer').on('postgres_changes',
            { event: "*", schema: "public", table: "chatGO-analyzer" },
            (payload) => {
                getAnalyzer();
            }
        ).subscribe();

        return () => {
            subscription.unsubscribe();
        };
    }, [nameUser]);

    async function sendMessage() {
        if (message.trim() === '') return;

        try {
            await supabase.from("chatInfo").insert([{ content: message, name: nameUser }]);
            setMessage("");
        } catch (error) {
            console.log(error);
        }
    }

    async function sendAnalyzer() {
        if (message.trim() === '') return;

        try {
            await supabase.from("chatGO-analyzer").insert([{ msg: message, nameUser: nameUser }]);
        } catch (error) {
            console.log(error);
        }
    }

    async function getAnalyzer() {
        try {
            const { data } = await supabase.from("chatGO-analyzer").select('sentiment').eq('nameUser', nameUser);
            setAnalyzer(data);
        } catch (error) {
            console.log(error);
        }
    }

    // sending the translation

    async function sendTranslation() {
        if (message.trim() === '') return;

        try {
            await supabase.from("chatGO-translator").insert([{ msg: message, name: nameUser }]);
        } catch (error) {
            console.log(error);
        }
    }

    async function getTranslation() {
        try {
            const { data } = await supabase.from("chatGO-translator").select('translation').eq('name', nameUser);
            setTranslate(data);
            console.log(translate)
        } catch (error) {
            console.log(error);
        }
    }







    return (
        <div  className={'flex text-xs flex-col gap-2 fixed sm:static bottom-0 left-0 w-full backdrop-blur-md'}>
            <nav className="flex justify-between items-center p-4 sm:border ">
                <input
                    type="text"
                    placeholder="Enter a message"
                    className="rounded-full border text-black w-72 md:w-3/4 h-12 px-4"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') sendMessage();
                    }}
                />


                <div className={'flex'}>
                    
                    {/* Ici le svg de la translation */}$

                 <svg 
                 onClick={() => {
                        getTranslation();
                        sendTranslation();
                        setToggle(!toggle);
                    }}       

                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-white">
                 <path stroke-linecap="round" stroke-linejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
                 </svg>



                </div>


                <svg
                    onClick={() => {
                        sendAnalyzer();
                        setToggle(!toggle);
                    }}
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                    stroke="currentColor" className={ toggle ? "animate-spin size-6 hidden" : "size-5 hidden"}>
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"/>
                </svg>

                <svg
                    onClick={sendMessage}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"

                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 cursor-pointer"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                    />
                </svg>
            </nav>
            <div className="flex justify-center items-center mb-4">
                {toggle ? (
                    <div className="flex justify-center items-center gap-2">
                        <p className="flex items-center gap-1">
                            <a>[br]</a>
                            <img className="w-4 h-4 rounded-lg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/1600px-Flag_of_the_United_Kingdom_%283-5%29.svg.png"/>
                        </p>
                        <p className={' flex justify-center items-center font-semibold'}> {translate[translate.length - 1]?.translate}</p>
                    </div>

        
                ) : (
                    <p className={'hidden italic mb-4'}>(click the button to analyze your messages)</p>
                )}
            </div>
        </div>
    );
}