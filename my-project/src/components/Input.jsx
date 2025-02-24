import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";

const supabase = createClient("https://pxyqknxfvimxdcmplbff.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4eXFrbnhmdmlteGRjbXBsYmZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkzMDM4NjIsImV4cCI6MjA0NDg3OTg2Mn0.cuq3c8ejHCSky7BcV1qlj76_QYWcYXYiAbvDolxN6Uk");

export default function Input({ nameUser }) {
    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [analyzer, setAnalyzer] = useState([]);
    const [toggle, setToggle] = useState(false);

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

    return (
        <div  className={'flex flex-col gap-6 fixed sm:static bottom-0 left-0 w-full backdrop-blur-md'}>
            <nav className="flex justify-between items-center p-4 border">
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
                    onClick={() => {
                        sendAnalyzer();
                        setToggle(!toggle);
                    }}
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                    stroke="currentColor" className={toggle ? "animate-spin size-6" : "size-6"}>
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
                {toggle ? (
                    <p className={'flex justify-center font-semibold mb-2'}> {analyzer[analyzer.length - 1]?.sentiment}</p>
                ) : (
                    <p className={'italic mb-4'}>(click the button to analyze your messages)</p>
                )}
            </div>
        </div>
    );
}