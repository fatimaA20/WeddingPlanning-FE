import React, { useState, useEffect } from "react";
import Axios from 'axios';
import Buffet from "./buffet";
import { Image } from 'react-bootstrap';

import BuffetEditForm from "../Buffet/BuffetEditForm";
import BuffetCreateForm from "../Buffet/BuffetCreateForm";

import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';



export default function BuffetList() {


  const [Buffets, setBuffets] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [currentBuffet, setCurrentBuffet] = useState("")


  useEffect(() => {
    loadBuffetsList();
  }, []);

  const loadBuffetsList = () => {
    Axios.get("buffet/index")
      .then((response) => {
        console.log(response)
        // State to store the data
        setBuffets(response.data.buffets)
      })
      .catch((err) => {
        console.log("Error Retrieving buffets")
        console.log(err)
      })
  }

    const [bookedBuffetId, setbookedBuffetId] = useState(null);

    const navigate = useNavigate()


  const editView = (id) => {
    Axios.get(`buffet/edit?id=${id}`)
      .then(res => {
        let buffet = res.data.buffet
        console.log("Loaded Buffet Information")
        console.log(id)
        setIsEdit(true)
        setCurrentBuffet(buffet)
      })
      .catch(err => {
        console.log("Error Loading Buffet Information")
        console.log(err)
      })
  }

  const editBuffet = (buffet) => {
    Axios.put("buffet/update", buffet)
      .then(res => {
        console.log("Buffet Updated Successfully!!!")
        console.log(res)
        loadBuffetsList();
      })
      .catch(err => {
        console.log("Error Editing Buffet")
        console.log(err)
      })
  }

  const deleteBuffet = (id) => {
    Axios.delete(`buffet/delete?id=${id}`)
      .then(res => {
        console.log("Buffet Deleted Successfully!!!")
        console.log(res)
        loadBuffetsList();

      })
      .catch(err => {
        console.log("Error Deleting Buffet")
        console.log(err)
      })
  }

  const addBuffet = (buffet) => {
    Axios.post("buffet/add", buffet)
      .then(res => {
        console.log("Buffet Added Successfully!!!")
        loadBuffetsList();
      })
      .catch(err => {
        console.log("Error Adding Buffet")
        console.log(err)
      })
  }


  const allBuffets = Buffets.map((buffet, index) => (
    <div key={index}>
      <Buffet
        {...buffet}
        editView={editView}
        deleteView={deleteBuffet}
      />
    </div>
  ))

  return (
    <div>
      <br></br>
      {allBuffets}

      {(!isEdit) ?

        <BuffetCreateForm addBuffet={addBuffet} />
        :
        <BuffetEditForm key={currentBuffet._id} buffet={currentBuffet} editBuffet={editBuffet} />

      }
      <button>next</button>
    </div>
  );

    }, []);
    
    const loadBuffetsList = () => {
        Axios.get("buffet/index")
        .then((response) => {
          console.log(response)
          // State to store the data
          setBuffets(response.data.buffets)
        })
        .catch((err) => {
          console.log("Error Retreiving buffets")
          console.log(err)
        })
    }

    const handleBuffetBooking = (hallId) => {
      setbookedBuffetId(hallId);
      
    };
  
    const handleNextClick = () =>{
      console.log(bookedBuffetId)
      navigate(`/Arrangement`)
    }

    const allBuffets =  buffets.map((buffet, index) => (
        <div key={buffet.id}>
        <Buffet
        id = {buffet._id}
          restaurantName={buffet.restaurantName}
          type={buffet.type}
          description={buffet.description}
          noOfGuests={buffet.noOfGuests}
          price={buffet.price}
          image={buffet.image}
          onBooked={handleBuffetBooking}
        />
      </div>
    ))

    return (
        <div>
    <br></br>
              {allBuffets}
              <button
        // disabled={!selectedHallId}
        variant="primary"
        onClick={handleNextClick}
      >
        Next
      </button>
        </div>
      );
}
