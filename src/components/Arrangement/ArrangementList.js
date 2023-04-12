import React, { useState, useEffect } from "react";
import Axios from 'axios';
import Arrangement from './arrangement'
import { Image } from 'react-bootstrap';

export default function ArrangementList() {

    const [arrangements, setArrangements] = useState([]);

    useEffect(() => {
        loadArrangementsList();
    }, []);
    
    const loadArrangementsList = () => {
        Axios.get("arrangement/index")
        .then((response) => {
          console.log(response)
          // State to store the data
          setArrangements(response.data.arrangements)
        })
        .catch((err) => {
          console.log("Error Retrieving arrangements")
          console.log(err)
        })
    }

    const allArrangements =  arrangements.map((arrangement, index) => (
        <div className="col-md-3 mb-3" key={arrangement.id}>
        <Arrangement
          type={arrangement.type}
          description={arrangement.description}
          price={arrangement.price}
          image={arrangement.image}
        />
      </div>
    ))

    return (
        <div>
          <div className="row">
          <h1  className="text-center font-weight-bold" style={{fontFamily: "Arial", color: "#200", marginTop: "50px"}}>Arrangement</h1>
            <div className="row">
              {allArrangements}
            </div>
          </div>
        </div>
      );
}
