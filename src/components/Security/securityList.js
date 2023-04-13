import Axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Security from "./Security";
import SecurityEditForm from "./SecurityEditForm";
import SecurityCreateForm from "./SecurityCreateForm";



export default function SecurityList() {
  const [Securities, setSecurities] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [currentSecurity, setCurrentSecurity] = useState({})

  const [bookedSecurityId, setBookedSecurityId] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    loadSecurity();
  }, []);

  // const editView = (id) => {
  //   console.log(id)
  //   Axios.get(`security/edit?id=${id}`)
  //     .then(res => {
  //       let Security = res.data
  //       console.log("Loaded Security Information")
  //       console.log(id)
  //       console.log(res)
  //       console.log(res.data)
  //       console.log(res.data.security)
  //       setIsEdit(true)
  //       setCurrentSecurity(Security)
  //     })
  //     .catch(err => {
  //       console.log("Error Loading Security Information")
  //       console.log(err)
  //     })
  // }

  const editSecurity = (security) => {
    Axios.put("security/update", security)
      .then(res => {
        console.log("Security Updated Successfully!!!")
        console.log(res)
        loadSecurity();
      })
      .catch(err => {
        console.log("Error Editing Security")
        console.log(err)
      })
  }

  const deleteSecurity = (id) => {
    Axios.delete(`security/delete?id=${id}`)
      .then(res => {
        console.log("Security Deleted Successfully!!!")
        console.log(res)
        loadSecurity();
      })
      .catch(err => {
        console.log("Error Deleting Security")
        console.log(err)
      })
  }

  const addSecurity = (security) => {
    Axios.post("security/add", security)
      .then(res => {
        console.log("Security Added Successfully!!!")
        loadSecurity();
      })
      .catch(err => {
        console.log("Error Adding Security")
        console.log(err)
      })
  }

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
      // editView={editView}
      deleteView={deleteSecurity}
    />
  ));

  return (
    <>
      <br></br>
              {allSecurity}
              <div className="container d-flex justify-content-between" style={{position: "relative",  paddingBottom: "20px"}}>

              {/* {(!isEdit) ?
          <SecurityCreateForm addSecurity={addSecurity} />
          :
          <SecurityEditForm key={currentSecurity._id} security={currentSecurity} editSecurity={editSecurity} />
        } */}
  <button type="button" className="btn btn-dark" onClick={handleNextClick} style={{position: "absolute", top: "20px", right: 0}}>Next &rarr;</button>
</div>

        </>
  );
}