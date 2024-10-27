import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";


const supabase = createClient("https://pxyqknxfvimxdcmplbff.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4eXFrbnhmdmlteGRjbXBsYmZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkzMDM4NjIsImV4cCI6MjA0NDg3OTg2Mn0.cuq3c8ejHCSky7BcV1qlj76_QYWcYXYiAbvDolxN6Uk");



export default function Navigation() {


    const [name, setName] = useState([]);
    const [folder,setFolder] = useState([]);


    useEffect(() => {
        getName();
    }, []);


    useEffect(() => {
        getFolder();
    }, []);

    async function getName() {
        try {
            const {data,error} = await supabase.from("user").select('*').eq('id_user','3');
            setName(data);
        }catch (error){
            console.error(error);
        }
    }

    async function getFolder() {
        try {
            const {data,error} = await supabase.from("folder").select('*').eq('user_id','3');
            setFolder(data);
        }catch (error){
            console.error(error);
        }
    }



    return(
        <div style={{backgroundColor: '#111313'}}>
            <div className={'flex justify-between items-center text-white text-xs'}>
                <nav className={'font-semibold text-xl'}> Finance<b className={'text-green-300'}>Mate</b></nav>

                <nav className={' flex gap-6 '}>
                    <p className={'hover:bg-white hover:text-black border rounded-lg p-2'}>Home</p>
                    <p className={' hover:bg-white hover:text-black border rounded-lg p-2'}>Revenus</p>
                    <p className={'hover:bg-white hover:text-black  border rounded-lg p-2'}>Dépenses</p>
                </nav>

                <nav className={'flex gap-3 items-center'}>

                    <p></p>
                    <ul>
                        {name.map((user) => (
                            <li key={user.id_user}>

                                <p>id user: {user.id_user}</p>
                                <p>{user.name}</p>


                            </li>

                        ))}
                    </ul>
                    <ul>
                        {folder.map((folder) => (
                            <li className={'flex items-center gap-2'} key={folder.id}>

                                <p>|</p>
                                <p>{folder.name}</p>

                            </li>

                        ))}
                    </ul>
                </nav>


            </div>
        </div>
    );
}