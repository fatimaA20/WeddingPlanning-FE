import React, { useState, useEffect } from "react";
import Axios from "axios";
import Hospitality from "./hospitality";

export default function HospitalityList() {
  const [hospitalities, setHospitalities] = useState([]);

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

  const allHospitalities = hospitalities && hospitalities.length > 0 && hospitalities.map((hospitality, index) => (
    <Hospitality {...hospitality} key={index}/>
  ))
  

  return (
    <div>
      {/* <h1>Hospitality List</h1> */}
      <div>
            {allHospitalities}
      </div>
    </div>
  );
}
