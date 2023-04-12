import React, { useState, useEffect } from "react";
import Axios from "axios";
import Florist from "./florist";

export default function FloristList() {
  const [florist, setFlorist] = useState([]);

  useEffect(() => {
    loadFlorist();
  }, []);

  const loadFlorist = () => {
    Axios.get("florist/index")
      .then((response) => {
        console.log(response);
        // State to store the data
        setFlorist(response.data.florist);
      })
      .catch((err) => {
        console.log("Error Retreiving florist");
        console.log(err);
      });
  };

  const allFlorist = florist && florist.length > 0 && florist.map((florist, index) => (
    <Florist {...florist} key={index}/>
  ))
  

  return (
    <div>
      <div>
            {allFlorist}
      </div>
      <div>
        <h1>flowers</h1>
        <button>hello iam heree</button>
      </div>
    </div>
  );
}
