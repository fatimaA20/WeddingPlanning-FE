import React, { useState, useEffect } from "react";
import Axios from 'axios';
import Buffet from "./buffet";
import { Image } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';


export default function BuffetList() {

    const [buffets, setBuffets] = useState([]);
    const [bookedBuffetId, setbookedBuffetId] = useState(null);

    const navigate = useNavigate()

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
