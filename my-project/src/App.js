import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Auth from "./components/Auth";
import AuthTest from "./components/AuthTest";




export default function App() {
    useEffect(() => {
        document.title = "chatGO";
    }, []);

    return (
        <div style={{backgroundColor: '#171717'}} className={'text-white min-h-screen'}>

            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>

                </Routes>

            </Router>
        </div>
    );
}