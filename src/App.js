import React from 'react';
import './App.css';
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Header} from './Components/Navbar';
import {Footer} from './Components/Footer';
import {Multistep} from './Components/forms/multi-step';
import {Signin} from "./Components/forms/signin";
import {Home} from "./Components/Pages/Home";
import {Form} from "./Components/forms/registration";
import {Blog} from "./Components/forms/Blog";
import {Details} from "./Components/forms/Details";
import {Works} from "./Components/Pages/works";


 function Hello(){
    return(
      <>
      <Router history={BrowserRouter}>
        < Header/>
          <Routes>
        <Route exact path='/' element ={< Home />}/> 
        <Route path='/SIGNIN' element={< Signin />} />  
        <Route path='/multi-step' element={< Multistep />} />
        <Route path='/registration' element={< Form />} />  
        <Route path='/Blog' element={< Blog />} /> 
        <Route path='/Details/:id' element={ < Details />} />
        <Route path ='/works' element={< Works />} />
         </Routes>
         <Footer/>
      </Router>
      </>
      

    );
  }
export default Hello;