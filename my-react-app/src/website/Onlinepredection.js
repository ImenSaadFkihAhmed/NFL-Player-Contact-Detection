import React from 'react';
import { Navbar } from "../components/navbar/navbar";
import { Background } from '../components/Background/background';
import "../components/Videopage/Videostyle.css"


const Online= () => {
 
  return (
    <div> 
        <Navbar />
        <div className="hero">
        <Background />
        
    </div>
    </div>
    
  )
}

export default Online