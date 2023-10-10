import React, { useState } from 'react';
import "./Videostyle.css"
import axios from 'axios';

const VideoUploader = ({ onVideoUpload }) => {
   
      const [selectedFile, setSelectedFile] = useState(null);
    
      const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
      };
    
      const handleUpload = () => {
        if (selectedFile) {
        
          const reader = new FileReader();
          reader.onload = () => {
            const videoUrl = reader.result;
            onVideoUpload(videoUrl);
          };
          reader.readAsDataURL(selectedFile);
          const formData = new FormData();
           // Add the video file to the form data
           formData.append('video', selectedFile);
           
          axios.post('http://localhost:5000/', formData).then((response) => {
            
            console.log(response.data);
            // Handle the response from Flask
          })
          .catch((error) => {
            console.error(error);
          });
        }
      };
    
      return (
        <div>
          <label htmlFor="video-upload" className="btn">
        Select Video
         </label>
         <input
        type="file"
        id="video-upload"
        accept=".mp4"
        onChange={handleFileChange}
      />
          <div>
              <button  onClick={handleUpload} className="btn btn-light">
                 UploadVideo
              </button>
             
              </div>
        </div>
      );
    };  
    
    const VideoPlayer = ({ videoUrl }) => {
      return (
        <div>
          
          <video controls src={videoUrl} className='video-container'/>
        </div>
      );
    };
    
    const Principal = () => {
      const [videoUrl, setVideoUrl] = useState(null);
    
      const handleVideoUpload = (url) => {
        setVideoUrl(url);
      };
    
      return (
        <div>
          
          <VideoUploader onVideoUpload={handleVideoUpload} />
          {videoUrl && <VideoPlayer videoUrl={videoUrl} />}
        </div>
      );
    };
    
    export default Principal;
    

 


