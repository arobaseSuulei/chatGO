import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Revenu from "./revenuHome";
import Depense from "./depenseHome";
import Goal from "./Goal";
import Navbar from "./Navbar";
import MyAreaChart from "./Popup";
import OperationRev from "./OperationRev";
import OperationDep from "./OperationDep";

const supabase = createClient("https://pxyqknxfvimxdcmplbff.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4eXFrbnhmdmlteGRjbXBsYmZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkzMDM4NjIsImV4cCI6MjA0NDg3OTg2Mn0.cuq3c8ejHCSky7BcV1qlj76_QYWcYXYiAbvDolxN6Uk");

export default function Section() {

    return (
        <div>



                <nav className="grid grid-cols-3 gap-4  mt-4 ">


                    <Revenu/>
                    <Depense/>
                    <Goal/>
                </nav>

                <nav className={' rounded-lg mt-8  grid grid-cols-3 gap-2'}>

                    <article style={{backgroundColor: '#111313'}} className={'rounded-lg p-8  mx-4   '}>
                        <OperationRev/>
                    </article>

                    <article style={{backgroundColor: '#111313'}} className={'col-span-2 rounded-lg p-8  mx-4   '}>
                        <OperationDep/>
                    </article>



                </nav>

                <nav className={' rounded-lg mt-8  grid grid-cols-2 gap-2'}>

                    <article style={{backgroundColor: '#111313'}} className={'rounded-lg p-8  mx-4   '}>
                        <OperationRev/>
                    </article>

                    <article style={{backgroundColor: '#111313'}} className={'rounded-lg p-8  mx-4   '}>
                        <OperationDep/>
                    </article>


                </nav>



        </div>

    );
}