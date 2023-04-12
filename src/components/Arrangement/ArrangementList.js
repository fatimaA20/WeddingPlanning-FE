import React, { useState, useEffect } from "react";
import Axios from 'axios';
import Arrangement from './arrangement'
import { Image } from 'react-bootstrap';

export default function ArrangementList() {

    const [Arrangements, setArrangements] = useState([]);

    useEffect(() => {
        loadArrangementsList();
    }, []);
    
    const loadArrangementsList = () => {
        Axios.get("Arrangement/index")
        .then((response) => {
          console.log(response)
          // State to store the data
          setArrangements(response.data.Arrangements)
        })
        .catch((err) => {
          console.log("Error Retrieving Arrangements")
          console.log(err)
        })
    }

    const allArrangements =  Arrangements.map((arrangement, index) => (
        <div className="col-md-3 mb-3" key={Arrangement.id}>
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
     <br></br>
              {allArrangements}
             
        </div>
      );
}
