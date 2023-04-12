import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Hall from './hall'
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';


const HallList = (props) => {
  const [halls, setHalls] = useState([]);
  const [bookedHallId, setBookedHallId] = useState(null);

  const navigate = useNavigate()
  
  useEffect(() => {
    loadHallsList();
  }, []);

  const loadHallsList = () => {
    Axios.get('hall/index')
      .then((response) => {
        console.log(response);
        setHalls(response.data.halls);
      })
      .catch((err) => {
        console.log('Error Retreiving halls');
        console.log(err);
      });
  };

  const handleHallBooking = (hallId) => {
    setBookedHallId(hallId);
    
  };

  const handleNextClick = () =>{
    console.log(bookedHallId)
    navigate(`/buffet`)
  }


  
  const hallList = halls.map((hall) => (
    <Hall
      id={hall._id}
      name={hall.name}
      size={hall.type}
      availableDate={hall.availableDate}
      price={hall.price}
      image={hall.image}
      onBooked={handleHallBooking}
    />
  ));

  

  
  return (
    <>
      <br></br>
              {hallList}

              <button
        // disabled={!selectedHallId}
        variant="primary"
        onClick={handleNextClick}
      >
        Next
      </button>
        </>
  );
};

export default HallList;
