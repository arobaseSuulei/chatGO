import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";


const supabase = createClient("https://pxyqknxfvimxdcmplbff.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4eXFrbnhmdmlteGRjbXBsYmZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkzMDM4NjIsImV4cCI6MjA0NDg3OTg2Mn0.cuq3c8ejHCSky7BcV1qlj76_QYWcYXYiAbvDolxN6Uk");



export default function DashbordHead() {

    const [folder, setFolder] = useState([]);


    useEffect(() => {
        getFolder();
    }, []);

    async function getFolder() {
        try {
            const {data}=await supabase.from("folder").select('*').eq('user_id','3');
            setFolder(data);

        }catch (error){
            console.error(error);
        }
    }


    return(
        <div className={'flex justify-between'}>
            <ul>
                {folder.map((folder) => (
                    <li className={'text-xs flex justify-between w-full'} key={folder.id}>
                        <span>{folder.name}</span>
                    </li>
                ))}
            </ul>
        </div>

    );
}