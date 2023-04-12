import React, { useState, useEffect } from "react";
import Axios from "axios";
import Studio from "./Studio";

export default function StudioList() {
  const [studios, setStudios] = useState([]);

  useEffect(() => {
    loadStudioList();
  }, []);

  const loadStudioList = () => {
    Axios.get("Studio/index")
      .then((response) => {
        console.log(response);
        // State to store the data
        setStudios(response.data.Studios);
      })
      .catch((err) => {
        console.log("Error Retrieving Studios");
        console.log(err);
      });
  };

  const allStudios = studios.map((studio, index) => (
    <tr key={index}>
      <Studio {...studio} />
    </tr>
  ));

  return (
    <div>
      <h1>Studio List</h1>
      <div>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>PackageType</th>
              <th>description</th>
              <th>price</th>
              <th>image</th>
            </tr>
            {allStudios}
          </tbody>
        </table>
      </div>
    </div>
  );
}

