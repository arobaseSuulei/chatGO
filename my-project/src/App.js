import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Authen from "./components/Authen";





export default function App() {
    useEffect(() => {
        document.title = "chatGO";
    }, []);

    return (
        <div style={{backgroundColor: '#171717'}} className={'text-white min-h-screen'}>

            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path={"auth"} element={<Authen/>}/>


                </Routes>

            </Router>
        </div>
    );
}