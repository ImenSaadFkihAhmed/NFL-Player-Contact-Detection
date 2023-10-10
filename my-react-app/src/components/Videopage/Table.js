import React from 'react';
import "../../website/tablestyle.css";
import "./Videostyle.css";
import { Navbar } from '../navbar/navbar';
import { Background } from '../Background/background';


function Table ({jsonObject}) {
    if (!jsonObject) {
        return null; // If the jsonObject is null, don't render the table
      }
const headers = Object.keys(jsonObject[0]); // Assuming the JSON object is an array of objects with the same keys
  const rows = jsonObject.map((item, index) => (
    <tr key={index}>
      {headers.map(header => (
        <td key={header}>{item[header]}</td>
      ))}
    </tr>
  ));
  

  return (
    <div>
    
    
    <div> 
        <div className="hero">
        <div className='content-table'>
        <table>
        <thead>
        <tr>
          {headers.map(header => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
      </table>
</div>
        </div>
    
    </div>
    </div>
    
  )
}

export default Table