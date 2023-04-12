import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Axios from "axios";
import Hospitality from "./Hospitality";

export default function HospitalityList() {
  const [hospitalities, setHospitalities] = useState([]);
  const [bookedHospitalitiesId, setBookedHospitalitiesId] = useState(null);
  const navigate = useNavigate()


  useEffect(() => {
    loadHospitalities();
  }, []);

  const loadHospitalities = () => {
    Axios.get("hospitality/index")
      .then((response) => {
        console.log(response);
        // State to store the data
        setHospitalities(response.data.hospitality);
      })
      .catch((err) => {
        console.log("Error Retreiving hospitalities");
        console.log(err);
      });
  };

  
  const handleHospitalitiesBooking = (hospitalitiesId) => {
    setBookedHospitalitiesId(hospitalitiesId);
    
  };

  const handleNextClick = () =>{
    console.log(bookedHospitalitiesId)
    navigate(`/Arrangement`)
  }

  const allHospitalities = hospitalities && hospitalities.length > 0 && hospitalities.map((hospitality, index) => (
    <Hospitality {...hospitality} key={index} />
  ))


  return (
    <div>
      <br></br>
        {allHospitalities}
        <div className="container d-flex justify-content-between">
        <button type="button" class="btn btn-dark" onClick={handleNextClick} >Next &rarr;</button>
      </div>
    </div>
  );
}
