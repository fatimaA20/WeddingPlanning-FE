import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import Buffet from "./buffet";
import { Image } from 'react-bootstrap';

export default function BuffetList() {

    const [buffets, setBuffets] = useState([]);
    const [bookedBuffetId, setBookedBuffetId] = useState(null);
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

    const handleBuffetBooking = (buffetId) => {
      setBookedBuffetId(buffetId);
      
    };
  
    const handleNextClick = () =>{
      console.log(bookedBuffetId)
      navigate(`/hospitality`)
    }
  

    const allBuffets =  buffets.map((buffet, index) => (
        <div key={buffet.id}>
        <Buffet
          restaurantName={buffet.restaurantName}
          type={buffet.type}
          description={buffet.description}
          noOfGuests={buffet.noOfGuests}
          price={buffet.price}
          image={buffet.image}
        />
      </div>
    ))

    return (
        <div>
    <br></br>
              {allBuffets}

        </div>
      );
}
