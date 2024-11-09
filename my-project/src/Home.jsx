import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Input from "./components/Input";
import Footer from "./components/Footer";
import PhoneDevice from "./components/PhoneDevice";
import DesktopDevice from "./components/DesktopDevice";


const supabase = createClient("https://pxyqknxfvimxdcmplbff.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4eXFrbnhmdmlteGRjbXBsYmZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkzMDM4NjIsImV4cCI6MjA0NDg3OTg2Mn0.cuq3c8ejHCSky7BcV1qlj76_QYWcYXYiAbvDolxN6Uk");


export default function Home() {





    return(
        <div className={'text-xs'}>





            {/* C'est ici que je commence mon reponsive: version desktop here 'hidden' il le masque sur le tel et sm:block le met sur les écrans */}

            <div className={'  hidden sm:block px-24 sm:py-2  flex flex-col justify-end  '}>

                <DesktopDevice/>
            </div>

            {/* section for phone device */}
            <div className={'sm:hidden block'}>
                <PhoneDevice/>
            </div>

            <Footer/>
        </div>
    );
}