import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import Bouquet from "./bouquet";
import { Image } from 'react-bootstrap';

export default function BouquetList() {

  const [Bouquets, setBouquets] = useState([]);
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
    navigate(`/dj`)
  }

  const allBouquets = Bouquets.map((bouquet, index) => (
    <div className="col-md-3 mb-3" key={Bouquet.id}>
      <Bouquet
        Name={bouquet.name}
        description={bouquet.description}
        color={bouquet.color}
        price={bouquet.price}
        image={bouquet.image}
      />
    </div>
  ))

  
  

  return (
    <div>
      <br></br>
      {allBouquets}

      <div className="container position-fixed left-0 ">
  <button type="button" class="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
</div>
    </div>

  );
}
