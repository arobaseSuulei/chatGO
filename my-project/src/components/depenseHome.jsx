import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";


const supabase = createClient("https://pxyqknxfvimxdcmplbff.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4eXFrbnhmdmlteGRjbXBsYmZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkzMDM4NjIsImV4cCI6MjA0NDg3OTg2Mn0.cuq3c8ejHCSky7BcV1qlj76_QYWcYXYiAbvDolxN6Uk");



export default function Depense() {

    const [depenses, setDepenses] = useState([]);

    useEffect(() => {
        getDepenses();
    }, []);


    async function getDepenses() {
        try {
            const {data,error} = await supabase.from("depense").select('*').eq('user_id','3');
            setDepenses(data);
        }catch (error){
            console.error(error);
        }
    }

    return (
        <span className="  text-black flex justify-between px-4 text-xs  mx-4  rounded-lg items-center">
                        <nav className={'flex gap-2 justify-center items-center'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" className="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"/>
                            </svg>
                        <p>Dépenses</p>
                        </nav>
            <nav className={'flex items-center gap-2'}>
                <ul>
                    {depenses.map((depense) => (
                        <li className={'font-semibold'} key={depense.id}>{depense.montant} {depense.devise}</li>
                    ))}
                </ul>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="size-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"/>
                </svg>


            </nav>

        </span>
    );
}


