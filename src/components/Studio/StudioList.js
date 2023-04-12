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
    navigate(`/security`)
  }

  const allStudios = studios.map((studio, index) => (
    <tr key={index}>
      <Studio {...studio} />
    </tr>
  ));

  return (
    <div>
      <br></br>
            {allStudios}
            <div className="container d-flex justify-content-between" style={{position: "relative",  paddingBottom: "20px"}}>
  <button type="button" className="btn btn-dark" onClick={handleNextClick} style={{position: "absolute", top: "20px", right: 0}}>Next &rarr;</button>
</div>
    
    </div>
  );
}

