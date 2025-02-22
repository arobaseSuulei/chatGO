import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home";

import Session from "./components/Session";
import {Theme} from "@radix-ui/themes";






export default function App() {
    useEffect(() => {
        document.title = "chatGO";
    }, []);

    return (

            <div className={'text-white min-h-screen'}>

                <Router>
                    <Routes>
                        <Route path="/" element={<Session/>}/>

                        <Route path={"home"} element={<Home/>}/>


                    </Routes>

                </Router>
            </div>

    );
}