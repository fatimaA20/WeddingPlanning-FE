import React, { useState, useEffect } from "react";
import Axios from 'axios';
import Buffet from "./buffet";
import { Image } from 'react-bootstrap';

export default function BuffetList() {

    const [buffets, setBuffets] = useState([]);

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
          <div className="row">
          {/* <h1  className="text-center font-weight-bold" style={{fontFamily: "Arial", color: "#200", marginTop: "50px"}}>BUFFET</h1> */}
            <div className="row">
              {allBuffets}
            </div>
          </div>
        </div>
      );
}
