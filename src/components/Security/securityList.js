import Axios from "axios";
import React, { useEffect, useState } from "react";
import Security from "./Security";

export default function SecurityList() {
  const [Securities, setSecurities] = useState([]);

  useEffect(() => {
    loadSecurity();
  }, []);

  const loadSecurity = () => {
    Axios.get("Security/index")
      .then((response) => {
        console.log(response);
        setSecurities(response.data.securities);
      })
      .catch((err) => {
        console.log("Error retrieving security items");
        console.log(err);
      });
  };

  const allSecurity = Securities.map((item) => (
    <Security
      key={item._id}
      name={item.name}
      description={item.description}
      noOfSecurity={item.noOfSecurity}
      price={item.price}
      image={item.image}
    />
  ));

  return <div>{allSecurity}</div>;
}
