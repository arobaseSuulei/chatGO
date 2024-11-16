import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";




const supabase = createClient("https://pxyqknxfvimxdcmplbff.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4eXFrbnhmdmlteGRjbXBsYmZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkzMDM4NjIsImV4cCI6MjA0NDg3OTg2Mn0.cuq3c8ejHCSky7BcV1qlj76_QYWcYXYiAbvDolxN6Uk");



export default function PhoneInput({nameUser}) {

    const [message, setMessage] = useState("");


    useEffect(() => {
        sendMessage();
    }, []);



    async function sendMessage() {

        if(message.trim()==='')return;

        try {

            const {data} = await supabase.from("chatInfo").insert([{ content: message, name: nameUser }]);
            setMessage("");
            window.location.reload();

        }catch (error){
            console.log(error);
        }
    }


    return (
        <div className={'flex flex-col '}>
            <nav className=" flex justify-between items-center p-4 ">
                <input
                    type="text"
                    placeholder="Enter a message"
                    className="rounded-full border text-black w-full md:w-3/4 h-12 px-4"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') sendMessage();
                    }}
                />
                <svg
                    onClick={sendMessage}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="ml-2 h-6 w-6 cursor-pointer"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                    />
                </svg>
            </nav>
            <div>
                <p className={'italic p-4'}>Lâchez votre message </p>

            </div>

            <div className={'flex justify-center p-4'}>
                <p>made by <a className={'underline'} target={'_blank'}
                              href={'https://souleyd-portfolio.vercel.app'}>souleymane 😎 </a>
                </p>
            </div>
        </div>
    );
}
