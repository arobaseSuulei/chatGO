import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";


const supabase = createClient("https://pxyqknxfvimxdcmplbff.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4eXFrbnhmdmlteGRjbXBsYmZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkzMDM4NjIsImV4cCI6MjA0NDg3OTg2Mn0.cuq3c8ejHCSky7BcV1qlj76_QYWcYXYiAbvDolxN6Uk");





export default function Input() {

    const [message, setMessage] = useState("");


    useEffect(() => {
        sendMessage();
    }, []);



    async function sendMessage() {

        if(message.trim()==='')return;

        try {

            const {data} = await supabase.from("chatInfo").insert([{ content: message, name: 'PEANUT' }]);
            setMessage("");

        }catch (error){
            console.log(error);
        }
    }


    return (
        <nav
            className="sticky bottom-0 left-0 w-full p-4 border-t flex items-center justify-between">
            <input
                type="text"
                placeholder="Enter a message"
                className="rounded-full border text-black w-3/4 h-12 px-4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                    if(e.key==='Enter') sendMessage();
                }}

            />
            <svg onClick={sendMessage} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"/>

            </svg>


        </nav>
    );
}