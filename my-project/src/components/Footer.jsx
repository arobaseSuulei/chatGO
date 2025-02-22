import React from "react";



export default function Footer() {
    return(
        <div className={'mb-32 sm:mb-1'}>
            <div className={'flex mt-20 gap-2 justify-center items-center text-xs '}>
                <p>made w/ 🤍 by <a className={'underline'} target={'_blank'}
                    //href={'https://souleyd-portfolio.vercel.app'}
                >suley</a>
                </p>
                <p>|</p>
                <p>All rights reserved. ©</p>
                <p>|</p>
                <p className={'hidden sm:block'}>database hosted on supabase</p>
                <img className={'w-6 rounded-full'}
                     src="https://img.logo.dev/supabase.com?token=pk_QyZYYVI6QBejCt9wU_0qdw"/>

            </div>
        </div>
    );
}