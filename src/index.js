import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Homepage from './landing_page/home/Homepage';
import Productpage from './landing_page/product/Productpage';
import Signup from './landing_page/signup/Signup';
import About from './landing_page/about/About';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import {BrowserRouter , Routes , Route} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter >
    <Navbar />
    <Routes>
      <Route path='/' element={ <Homepage />}/>
      <Route path='/Signup' element={<Signup />}/>
      <Route path='/About' element={<About />}/>
      <Route path='/Productpage' element={ <Productpage />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
