import React, { useState, useEffect } from "react";
import Axios from 'axios';
import Bouquet from "./bouquet";
import { Image } from 'react-bootstrap';

export default function BouquetList() {

    const [Bouquets, setBouquets] = useState([]);

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

    const allBouquets =  Bouquets.map((bouquet, index) => (
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
          <div className="row">
          <h1  className="text-center font-weight-bold" style={{fontFamily: "Arial", color: "#200", marginTop: "50px"}}>Bouquet</h1>
            <div className="row">
              {allBouquets}
            </div>
            <button>next</button>
          </div>
        </div>
      );
}
