import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Authen from "./components/Authen";
import Session from "./components/Session";





export default function App() {
    useEffect(() => {
        document.title = "chatGO";
    }, []);

    return (
        <div style={{backgroundColor: '#171717'}} className={'text-white min-h-screen'}>

            <Router>
                <Routes>
                    <Route path="/" element={<Session/>}/>
                    <Route path={"auth"} element={<Authen/>}/>
                    <Route path={"home"} element={<Home/>}/>


                </Routes>

            </Router>
        </div>
    );
}