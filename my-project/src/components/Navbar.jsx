import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";


const supabase = createClient("https://pxyqknxfvimxdcmplbff.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4eXFrbnhmdmlteGRjbXBsYmZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkzMDM4NjIsImV4cCI6MjA0NDg3OTg2Mn0.cuq3c8ejHCSky7BcV1qlj76_QYWcYXYiAbvDolxN6Uk");

export default function Navbar() {

    const [name, setName] = useState([]);
    useEffect(() => {
        getName();
    }, []);

    async function getName() {
        try {
           const {data,error} = await supabase.from("user").select('*').eq('id_user','3');
           setName(data);
        }catch (error){
            console.error(error);
        }
    }



    return(
        <div className={'flex '}>


            <ul>
                {name.map((user) => (
                    <li  key={user.id_user}>Hello, <b>{user.name}</b> welcome back !</li>
                ))}
            </ul>



        </div>
    );
}