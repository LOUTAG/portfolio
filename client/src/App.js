import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'aos/dist/aos.css';

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App =()=>{
  return(
    <div className="app">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={ <Home /> } />
          <Route path="/projects" element={<Projects /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="*" element={ <Home /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;