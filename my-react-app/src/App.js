import React from "react";
import './App.css';
import {  Routes, Route } from 'react-router-dom';
import Home from "./website/Home";
import Offline from "./website/Offlinepredection";
import Online from "./website/Onlinepredection";

const App = () => {
  return (
  
  <Routes>
    <Route path="/"element={<Home />}/>
    <Route path="/Offline-predection"element={<Offline />}/>
    <Route path="/Online-predection"element={<Online />}/>
  </Routes>

  
   
  );
};

export default App;
