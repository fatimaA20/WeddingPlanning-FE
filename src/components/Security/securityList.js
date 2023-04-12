import Axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Security from "./Security";

export default function SecurityList() {
  const [Securities, setSecurities] = useState([]);
  const [bookedSecurityId, setBookedSecurityId] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    loadSecurity();
  }, []);

  const loadSecurity = () => {
    Axios.get("Security/index")
      .then((response) => {
        console.log(response);
        setSecurities(response.data.securities);
      })
      .catch((err) => {
        console.log("Error retrieving security items");
        console.log(err);
      });
  };

  const handleStecurityBooking = (securityId) => {
    setBookedSecurityId(securityId);
    
  };

  const handleNextClick = () =>{
    console.log(bookedSecurityId)
    navigate(`/Bouquet`)
  }
  const allSecurity = Securities.map((item) => (
    <Security
      key={item._id}
      id = {item._id}
      name={item.name}
      description={item.description}
      noOfSecurity={item.noOfSecurity}
      price={item.price}
      image={item.image}
      onBooked = {handleStecurityBooking}
    />
  ));

  return (
    <>
      <br></br>
              {allSecurity}
              <div className="container d-flex justify-content-between" style={{position: "relative",  paddingBottom: "20px"}}>
  <button type="button" className="btn btn-dark" onClick={handleNextClick} style={{position: "absolute", top: "20px", right: 0}}>Next &rarr;</button>
</div>

        </>
  );
}