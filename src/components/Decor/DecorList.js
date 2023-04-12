import React, { useState, useEffect } from "react";
import Axios from "axios";
import Decor from "./Decor";

export default function DecorList() {
  const [decor, setDecor] = useState([]);

  useEffect(() => {
    loadDecor();
  }, []);

  const loadDecor = () => {
    Axios.get("decor/index")
      .then((response) => {
        console.log(response);
        // State to store the data
        setDecor(response.data.decor);
      })
      .catch((err) => {
        console.log("Error Retreiving decoration");
        console.log(err);
      });
  };

  const allDecor = decor && decor.length > 0 && decor.map((decor, index) => (
    <Decor {...decor} key={index}/>
  ))
  

  return (
    <div>
      {/* <h1>Hospitality List</h1> */}
      <div>
            {allDecor}
      </div>
    </div>
  );
}
