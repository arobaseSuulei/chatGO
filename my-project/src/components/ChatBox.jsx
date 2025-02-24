import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Input from "./Input";
import "@radix-ui/themes/styles.css";
import {Theme} from "@radix-ui/themes";



const supabase = createClient("https://pxyqknxfvimxdcmplbff.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4eXFrbnhmdmlteGRjbXBsYmZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkzMDM4NjIsImV4cCI6MjA0NDg3OTg2Mn0.cuq3c8ejHCSky7BcV1qlj76_QYWcYXYiAbvDolxN6Uk");



export default function ChatBox({nameUser}) {



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
            const {data}=await supabase.from("usersOfChat").insert([{name:nameUser}]);
            setUsername("");

        }catch (error){
            console.error(error);
        }
    }



    async function getMessages() {
        try {

            const {data} = await supabase.from("chatInfo").select('*');
            setName(data);


        }catch (error) {
            console.log(error);

        }
    }



    // get the messages

    useEffect(() => {
        getMessages();
        supabase.channel('chatInfo').on('postgres_changes',
            {event:"*",schema:"public",table:"chatInfo"},
            (playload)=>{
                getMessages()
            }
        ).subscribe()
    }, []);











    return(

            <div style={{backgroundColor:'#1C1C1E '}} className={'text-sm'}>
                <h1 className={'text-xs flex gap-2 items-center justify-center my-20'}>


                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"/>
                    </svg>

                    Realtime chat, leave your MSG (BÊTA version)

                </h1>


                <div className={' sm:grid sm:grid-cols-3 sm:grid-rows-4 gap-4'}>


                    <div className={'hidden sm:block '}>
                        <Input nameUser={nameUser}/>
                    </div>

                    <div className={'border border-2  row-span-4 col-span-2'}>

                        <nav className={'border-b p-2 sm:px-12 flex gap-10 items-center justify-between '}>
                            <h1 className={'flex items-center gap-1'}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5" stroke="currentColor" className="size-3">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"/>
                                </svg>

                                <p>{nameUser}</p>


                            </h1>
                            <p>connecté</p>
                        </nav>


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
                                        className={'p-3 rounded-lg bg-blue-400 text-white'

                                        }
                                    >
                                        {message.content}
                                    </div>


                                </div>
                            ))}
                        </nav>


                    </div>

                    <div className={'block sm:hidden'}>
                        <Input nameUser={nameUser}/>
                    </div>


                </div>

            </div>

    );
}