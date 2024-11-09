import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import PhoneNav from "./PhoneNav";



const supabase = createClient("https://pxyqknxfvimxdcmplbff.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4eXFrbnhmdmlteGRjbXBsYmZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkzMDM4NjIsImV4cCI6MjA0NDg3OTg2Mn0.cuq3c8ejHCSky7BcV1qlj76_QYWcYXYiAbvDolxN6Uk");












export default function PhoneMsg() {



    const [username, setUsername] = useState("");
    const idUser=1;
    const [name, setName] = useState([]);
    const [messages, setMessages] = useState([]);
    const [hour, setHour] = useState([]);




// set the username

    useEffect(() => {
        sendUsername();
    }, []);


    async function sendUsername(){

        if (username.trim()==='') return;
        try{
            const {data}=await supabase.from("usersOfChat").insert([{name:username}]);
            setUsername("");

        }catch (error){
            console.error(error);
        }
    }




// get the messages

    useEffect(() => {
        getMessages();
    }, []);


    async function getMessages() {
        try {

            const {data} = await supabase.from("chatInfo").select('*');
            setName(data);

        }catch (error) {
            console.log(error);

        }
    }


    return(
        <div>
            <div className={'m-4'}>
                <nav className="sm:w-72 w-full flex flex-col gap-4 py-4 px-2">
                    {name.map((message) => (
                        <div
                            key={message.id}
                            className={'flex flex-col items-start'}
                        >
                            {/* Nom de l'utilisateur */}
                            <span className="font-semibold mb-1 text-white">
                                        {message.name}
                                    </span>

                            {/* Contenu du message */}
                            <div
                                style={{maxWidth: "80%"}}
                                className={'p-3 rounded-full bg-blue-400 text-white'}
                            >
                                {message.content}
                            </div>

                        </div>
                    ))}
                </nav>

            </div>
        </div>
    );
}