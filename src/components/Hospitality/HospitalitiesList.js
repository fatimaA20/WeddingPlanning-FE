import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Axios from "axios";
import Hospitality from "./Hospitality";
import HospitalityCreateForm from "./HospitalityCreateForm";
import HospitalityEditForm from "./HospitalityEditForm";


export default function HospitalityList() {
  const [hospitalities, setHospitalities] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [currentHospitality, setCurrentHospitality] = useState({})

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
        console.log("Error Retrieving hospitalities");
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


  // const editView = (id) => {
  //   console.log(id)
  //   Axios.get(`hospitality/edit?id=${id}`)
  //     .then(res => {
  //       let Hospitality = res.data
  //       console.log("Loaded Hospitality Information")
  //       console.log(id)
  //       console.log(res)
  //       console.log(res.data)
  //       console.log(res.data.hospitality)
  //       setIsEdit(true)
  //       setCurrentHospitality(Hospitality)
  //     })
  //     .catch(err => {
  //       console.log("Error Loading Hospitality Information")
  //       console.log(err)
  //     })
  // }

  const editHospitality = (hospitality) => {
    Axios.put("hospitality/update", hospitality)
      .then(res => {
        console.log("Hospitality Updated Successfully!!!")
        console.log(res)
        loadHospitalities();
      })
      .catch(err => {
        console.log("Error Editing Hospitality")
        console.log(err)
      })
  }

  const deleteHospitality = (id) => {
    Axios.delete(`hospitality/delete?id=${id}`)
      .then(res => {
        console.log("Hospitality Deleted Successfully!!!")
        console.log(res)
        loadHospitalities();
      })
      .catch(err => {
        console.log("Error Deleting Hospitality")
        console.log(err)
      })
  }

  const addHospitality = (hospitality) => {
    Axios.post("hospitality/add", hospitality)
      .then(res => {
        console.log("Hospitality Added Successfully!!!")
        loadHospitalities();
      })
      .catch(err => {
        console.log("Error Adding Hospitality")
        console.log(err)
      })
    }


  const allHospitalities = hospitalities && hospitalities.length > 0 && (
    <div >
      {hospitalities.map((hospitality, index) => (
        <div key={index} style={{  float:"left", marginLeft:"20px" }}>
          <Hospitality {...hospitality} 
              id = {hospitality._id}
              // editView={editView}
              deleteView={deleteHospitality}
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
        {/* {(!isEdit) ?
          <HospitalityCreateForm addHospitality={addHospitality} />
          :
          <HospitalityEditForm key={currentHospitality._id} hospitality={currentHospitality} editHospitality={editHospitality} />
        } */}

  <button type="button" className="btn btn-dark" onClick={handleNextClick} style={{position: "absolute", top: "20px", right: 0}}>Next &rarr;</button>
</div>

<br></br>


    </div>
  );
}
