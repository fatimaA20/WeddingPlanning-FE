import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import Bouquet from "./bouquet";
import BouquetCreateForm from "./BouquetCreateForm";
import BouquetEditForm from "./BouquetEditForm"
import { Image } from 'react-bootstrap';



export default function BouquetList() {

  const [Bouquets, setBouquets] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [currentBouquet, setCurrentBouquet] = useState("")
  const [bookedBouquetId, setBookedBouquetId] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    loadBouquetsList();
  }, []);

  const loadBouquetsList = () => {
    Axios.get("Bouquet/index")
      .then((response) => {
        console.log(response)
        // State to store the data
        setBouquets(response.data.bouquets)
      })
      .catch((err) => {
        console.log("Error Retrieving Bouquets")
        console.log(err)
      })
  }


  const handleBouquetBooking = (bouquetId) => {
    setBookedBouquetId(bouquetId);
    
  };

  const handleNextClick = () =>{
    console.log(bookedBouquetId)
    navigate(`/Booking`)
  }
  
  const editView = (id) => {
    Axios.get(`Bouquet/edit?id=${id}`)
      .then(res => {
        let bouquet = res.data.Bouquet
        console.log("Loaded Bouquet Information")
        console.log(id)
        setIsEdit(true)
        setCurrentBouquet(bouquet)
      })
      .catch(err => {
        console.log("Error Loading Bouquet Information")
        console.log(err)
      })
  }

  const editBouquet = (bouquet) => {
    Axios.put("Bouquet/update", bouquet)
      .then(res => {
        console.log("Bouquet Updated Successfully!!!")
        console.log(res)
        loadBouquetsList();
      })
      .catch(err => {
        console.log("Error Editing Bouquet")
        console.log(err)
      })
  }

  const deleteBouquet = (id) => {
    Axios.delete(`Bouquet/delete?id=${id}`)
      .then(res => {
        console.log("Bouquet Deleted Successfully!!!")
        console.log(res)
        loadBouquetsList();
      })
      .catch(err => {
        console.log("Error Deleting Bouquet")
        console.log(err)
      })
  }

  const addBouquet = (bouquet) => {
    Axios.post("Bouquet/add", bouquet)
      .then(res => {
        console.log("Bouquet Added Successfully!!!")
        loadBouquetsList();
      })
      .catch(err => {
        console.log("Error Adding Bouquet")
        console.log(err)
      })
  }
  const allBouquets = Bouquets.map((bouquet, index) => (
    <div className="col-md-3 mb-3" key={index}>
      <Bouquet
        {...bouquet}
        id = {bouquet._id}
        editView={editView}
        deleteView={deleteBouquet}
        onBooked = {handleBouquetBooking}

      />
    </div>
  ))

  return (
    <div>
      <br></br>
      {allBouquets}

     
      <div className="container d-flex justify-content-between" style={{position: "relative",  paddingBottom: "20px"}}>
  <button type="button" className="btn btn-dark" onClick={handleNextClick} style={{position: "absolute", top: "20px", right: 0}}>Next &rarr;</button>
</div>

      {(!isEdit) ?

        <BouquetCreateForm addBouquet={addBouquet} />
        :
        <BouquetEditForm key={currentBouquet._id} bouquet={currentBouquet} editBouquet={editBouquet} />

      }

    </div>

  );
}
