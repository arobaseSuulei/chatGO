import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { Auth } from '@supabase/auth-ui-react'
import {useNavigation} from "react-router-dom";
// Créer le client Supabase
const supabase = createClient(
    "https://pxyqknxfvimxdcmplbff.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4eXFrbnhmdmlteGRjbXBsYmZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkzMDM4NjIsImV4cCI6MjA0NDg3OTg2Mn0.cuq3c8ejHCSky7BcV1qlj76_QYWcYXYiAbvDolxN6Uk"
);

export default function Authen() {

    const navigate = useNavigate();

    useEffect(() => {
        signInWithDiscord();
    }, []);

    async function signInWithDiscord() {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'discord',
        })
        

    }

    const currentUser= supabase.auth.getUser

    console.log(currentUser)



    return (
        <div className={'flex justify-center'}>
            <Auth
                supabaseClient={supabase}
                appearance={{ theme: ThemeSupa }}
                providers={['discord']}
            />
        </div>
    );
}
