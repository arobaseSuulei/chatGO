import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

import Footer from "./components/Footer";

import {useNavigate,useLocation} from "react-router-dom";
import ChatBox from "./components/ChatBox.jsx";
import {Theme} from "@radix-ui/themes";


const supabase = createClient("https://pxyqknxfvimxdcmplbff.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4eXFrbnhmdmlteGRjbXBsYmZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkzMDM4NjIsImV4cCI6MjA0NDg3OTg2Mn0.cuq3c8ejHCSky7BcV1qlj76_QYWcYXYiAbvDolxN6Uk");


export default function Home() {

    const location = useLocation();
    const navigate = useNavigate();

    const nameUser = location.state?.nameUser;

    console.log('-----------------------')
    console.log(nameUser);



    return(

            <div style={{backgroundColor:'#1C1C1E '}} className={'text-xs'}>


                <p className={'p-4'}>Welcome to meta chat ! {nameUser}</p>

                {/* C'est ici que je commence mon responsive: version desktop here 'hidden' il le masque sur le tel et sm:block le met sur les écrans */}

                <div className={'   sm:px-24 sm:py-2   flex flex-col justify-end  '}>

                    <ChatBox nameUser={nameUser}/>
                </div>


                <Footer/>
            </div>

    );
}