import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Popup from "./Popup";


const supabase = createClient("https://pxyqknxfvimxdcmplbff.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4eXFrbnhmdmlteGRjbXBsYmZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkzMDM4NjIsImV4cCI6MjA0NDg3OTg2Mn0.cuq3c8ejHCSky7BcV1qlj76_QYWcYXYiAbvDolxN6Uk");



export default function OperationRev() {

const [operation, setOperation] = useState([]);

    useEffect(() => {
        getRevenus();
    }, []);

    async function getRevenus() {
        try {
            const {data} = await supabase.from("transaction").select('*').eq('user_id','3').eq('category','R');
            setOperation(data);
        }catch (error){
            console.error(error);
        }
    }

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    return(
        <div className={'flex flex-col gap-2 text-xs '}>


            <nav className={'flex justify-center items-center pb-4 p-2'}>
                <h1 className={'border-b p-2 w-full font-semibold'}>transaction revenus</h1>
                <button onClick={openPopup} className={'text-xs h-4 w-12 border bg-blue-500 text-white px-2 rounded'}>
                    Add
                </button>
            </nav>

            {isPopupOpen && <Popup onClose={() => setIsPopupOpen(false)} />}


            <nav>
                <ul className={'flex flex-col gap-4 pb-4 p-2'}>
                    {operation.map((transaction) => (
                        <li style={{borderBottom: '0px solid #B9BCB8'}} className={'flex justify-between border-b pb-4'} key={transaction.id}>
                            <p>{transaction.name}</p>
                            <p>
                                {transaction.montant} {transaction.devise}

                            </p>

                        </li>

                    ))}

                </ul>
            </nav>


        </div>
    );
}