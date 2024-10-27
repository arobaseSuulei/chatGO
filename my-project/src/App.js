import React,{useState,useEffect} from 'react';
import Home from "./Home";
import Dashboard from "./components/Dashbord";
import './App.css'
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Bento from "./components/Bento";
import Navigation from "./components/Navigation";
import OperationDep from "./components/OperationDep";
import OperationRev from "./components/OperationRev";
import Revenu from "./components/revenuHome";
import Depense from "./components/depenseHome";
import Goal from "./components/Goal";
import Footer from "./components/Footer";



export default function App() {

    useEffect(() => {
        document.title = "FinanceMate | mate of personal finance";
    }, []);
  return (

      <div>

          <h1 className={'block sm:hidden text-white p-4'}>We recommend you to use FinanceMate on your Desktop</h1>
          <div className={'hidden sm:block'}>

              <div className={'grid grid-cols-3 gap-2'}>
                  <nav style={{backgroundColor: '#111313'}} className={' col-span-3 rounded-lg p-4  mx-4 my-4   '}>

                      <Navigation/>
                  </nav>

                  <nav style={{backgroundColor: '#111313'}} className={' row-span-3 rounded-lg  mx-4 my-4   '}>
                      <Dashboard/>
                  </nav>


                  <nav style={{backgroundColor: '#C4E8D1'}} className={'mx-4 my-4 rounded-lg '}>
                      <Revenu/>
                  </nav>
                  <nav style={{backgroundColor: '#C4E8D1'}} className={'mx-4 my-4 rounded-lg'}>
                      <Depense/>
                  </nav>


                  <nav className={'mx-4 my-4 border rounded-lg bg-white px-8'}>
                      <OperationRev/>
                  </nav>
                  <nav className={'mx-4 my-4 border rounded-lg bg-white px-8'}>
                      <OperationDep/>
                  </nav>
                  <nav className={' border rounded-lg bg-white px-8 mx-4 my-4'}>
                      <OperationDep/>
                  </nav>

                  <nav style={{backgroundColor: '#111313'}}
                       className={'text-white p-4  col-span-3 rounded-lg bg-white px-8 mx-4 my-4'}>
                      <Footer/>
                  </nav>


              </div>


          </div>
      </div>


  );
}