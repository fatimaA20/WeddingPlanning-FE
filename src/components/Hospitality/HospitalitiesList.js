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
    navigate(`/dj`)
  }


  const allHospitalities = hospitalities && hospitalities.length > 0 && (
    <div >
      {hospitalities.map((hospitality, index) => (
        <div key={index} style={{  float:"left", marginLeft:"20px" }}>
          <Hospitality {...hospitality} 
              id = {hospitality._id}
    onBooked={handleHospitalitiesBooking}
    />
        </div>
      ))}
    </div>
  );
  
  

  return (
    <div>
      <br></br>
        {allHospitalities}
        <div className="container d-flex justify-content-between" style={{position: "relative",  paddingBottom: "20px"}}>
  <button type="button" className="btn btn-dark" onClick={handleNextClick} style={{position: "absolute", top: "20px", right: 0}}>Next &rarr;</button>
</div>

<br></br>


    </div>
  );
}
