import "./Videostyle.css";
import { React,useState } from "react";
import "./Videostyle.css";
import { Background } from "../Background/background";
import axios from 'axios';
import Table from "./Table";
import Principal from "./videouplod";

export const VideoImg = () => {
  const [jsonObject, setJsonObject] = useState(null);
  const [showTable, setShowTable] = useState(false);
  const handleClick = (value) => {
    if(value =='Offline')
    {
    axios.post('http://localhost:5000/process', { buttonValue: value })
    .then(response => {
      const jsonData = response.data;
      console.log(jsonData)
      setJsonObject(jsonData)
      setShowTable(true);
     
    })
   

      .catch(error => {
        console.error(error);
      });}
    else{
      axios.post('http://localhost:5000/process', { buttonValue: value })
      .then((response) => {console.log(response.data)
     
      })
     
  
        .catch(error => {
          console.error(error);
        });}

    }
  

    return (
      
        <div className="hero">
      <Background />
      <div className="content">
         <Principal />
         <div>
          
              <button onClick={() => handleClick('Online')} className="btn">
                 Online-prediction
              </button>
             <button onClick={() => handleClick('Offline')}   className="btn btn-light">
                Offline-prediction
               </button> 
              </div>
              {showTable && <Table jsonObject={jsonObject} />}
            </div>
            </div>


    );
};