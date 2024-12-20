import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import PhoneNav from "./PhoneNav";
import PhoneMsg from "./PhoneMsg";
import PhoneInput from "./PhoneInput";



const supabase = createClient("https://pxyqknxfvimxdcmplbff.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4eXFrbnhmdmlteGRjbXBsYmZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkzMDM4NjIsImV4cCI6MjA0NDg3OTg2Mn0.cuq3c8ejHCSky7BcV1qlj76_QYWcYXYiAbvDolxN6Uk");





export default function PhoneDevice({nameUser}) {
    return(
        <div>
            <div>
                <PhoneNav nameUser={nameUser} />
                <PhoneMsg nameUser={nameUser}/>
                <PhoneInput nameUser={nameUser}/>



            </div>
        </div>
    );
}