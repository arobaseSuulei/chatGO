import React from "react";



export default function Footer() {
    return(
        <div className={'hidden sm:block'}>
            <div className={'flex mt-20 gap-2 justify-center items-center p-14 text-xs '}>
                <p>made by <a className={'underline'} target={'_blank'}
                              href={'https://souleyd-portfolio.vercel.app'}>souleymane 😎 </a>
                </p>
                <p>|</p>
                <p>All rights reserved. ©</p>
                <p>|</p>
                <p className={''}>database hosted on supabase</p>
                <img className={'w-6 rounded-full'}
                     src="https://img.logo.dev/supabase.com?token=pk_QyZYYVI6QBejCt9wU_0qdw"/>

            </div>
        </div>
    );
}