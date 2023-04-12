import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Axios from "axios";
import Studio from "./Studio";

export default function StudioList() {
  const [studios, setStudios] = useState([]);
  const [bookedStudioId, setBookedStudioId] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    loadStudioList();
  }, []);

  const loadStudioList = () => {
    Axios.get("Studio/index")
      .then((response) => {
        console.log(response);
        // State to store the data
        setStudios(response.data.Studios);
      })
      .catch((err) => {
        console.log("Error Retrieving Studios");
        console.log(err);
      });
  };


  const handleStudioBooking = (studioId) => {
    setBookedStudioId(studioId);
    
  };

  const handleNextClick = () =>{
    console.log(bookedStudioId)
    navigate(`/Security`)
  }

  const allStudios = studios.map((studio, index) => (
    <tr key={index}>
      <Studio {...studio} 
      id = {studio._id}
      onBooked={handleStudioBooking}/>

    </tr>
  ));

  return (
    <div>
      <br></br>
            {allStudios}
            <div className="container d-flex justify-content-between">
        <button type="button" class="btn btn-dark" onClick={handleNextClick} >Next &rarr;</button>
      </div>
    
    </div>
  );
}

