import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Axios from "axios";
import Studio from "./Studio";
import StudioCreateForm from "./StudioCreateForm";
import StudioEditForm from "./StudioEditForm";

export default function StudioList() {
  const [studios, setStudios] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [currentStudio, setCurrentStudio] = useState({})

  const [bookedStudioId, setBookedStudioId] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    loadStudioList();
  }, []);

  const editView = (id) => {
    console.log(id)
    Axios.get(`studio/edit?id=${id}`)
      .then(res => {
        let Studio = res.data
        console.log("Loaded Studio Information")
        console.log(id)
        console.log(res)
        console.log(res.data)
        console.log(res.data.studio)
        setIsEdit(true)
        setCurrentStudio(Studio)
      })
      .catch(err => {
        console.log("Error Loading Studio Information")
        console.log(err)
      })
  }

  const editStudio = (studio) => {
    Axios.put("studio/update", studio)
      .then(res => {
        console.log("Studio Updated Successfully!!!")
        console.log(res)
        loadStudioList();
      })
      .catch(err => {
        console.log("Error Editing Studio")
        console.log(err)
      })
  }

  const deleteStudio = (id) => {
    Axios.delete(`studio/delete?id=${id}`)
      .then(res => {
        console.log("Studio Deleted Successfully!!!")
        console.log(res)
        loadStudioList();
      })
      .catch(err => {
        console.log("Error Deleting Studio")
        console.log(err)
      })
  }

  const addStudio = (studio) => {
    Axios.post("studio/add", studio)
      .then(res => {
        console.log("Studio Added Successfully!!!")
        loadStudioList();
      })
      .catch(err => {
        console.log("Error Adding Studio")
        console.log(err)
      })
  }



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

  const handleNextClick = () => {
    console.log(bookedStudioId)
    navigate(`/Security`)
  }

  const allStudios = studios.map((studio, index) => (
    <tr key={index}>
      <Studio {...studio}
        id={studio._id}
        onBooked={handleStudioBooking}
        editView={editView}
        deleteView={deleteStudio} />


    </tr>
  ));

  return (
    <div>
      <br></br>
      {allStudios}
      <div className="container d-flex justify-content-between" style={{ position: "relative", paddingBottom: "20px" }}>
        {(!isEdit) ?
          <StudioCreateForm addStudio={addStudio} />
          :
          <StudioEditForm key={currentStudio._id} studio={currentStudio} editStudio={editStudio} />
        }

        <button type="button" className="btn btn-dark" onClick={handleNextClick} style={{ position: "absolute", top: "20px", right: 0 }}>Next &rarr;</button>
      </div>

    </div>
  );
}

