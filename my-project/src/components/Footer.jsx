import React from "react";



export default function Footer() {
    return(
        <div className={'flex text-xs justify-center items-center gap-4'}>
            <p>made by <a className={'underline'} target={'_blank'} href={'https://souleyd-portfolio.vercel.app'}>souleymane</a></p>
            <p>|</p>
            <p className={''}>database hosted by supabase</p>
            <img className={'w-6 rounded-full'} src="https://img.logo.dev/supabase.com?token=pk_QyZYYVI6QBejCt9wU_0qdw"/>
        </div>
    );
}