import React from 'react';
import { Navbar } from "../components/navbar/navbar";
import { Background } from '../components/Background/background';
import "./tablestyle.css";
import { useLocation } from 'react-router-dom';
import Table from '../components/Videopage/Table';

const Offline = () => {
  

  console.log('in offline page')
  const location = useLocation();
  const jsonData = location.state?.jsonData || [];
  
  console.log(jsonData)
  console.log('done')
  return (
    <div> 
        <Navbar />
        <div className="hero">
        <Background />
        <div className='content'>
        <Table />
      </div>
      </div>
    </div>
  )
}

export default Offline