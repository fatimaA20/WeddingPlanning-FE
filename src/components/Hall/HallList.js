import Axios from "axios";
import React,{useEffect,useState} from "react";
import Hall from "./hall";

export default function HallList() {
  const [halls, setHalls] = useState([]);

  useEffect(() => {
    loadHallsList();
  }, []);

  const loadHallsList = () => {
    Axios.get("hall/index")
      .then((response) => {
        console.log(response);
        // State to store the data
        setHalls(response.data.halls);
      })
      .catch((err) => {
        console.log("Error Retreiving halls");
        console.log(err);
      });
  };

  const allHalls = halls.map((hall, index) => (
    <tr key={index}>
      <Hall {...hall} />
    </tr>
  ));

  return (
    <div>
      <h1>Hall List</h1>
      <div>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>size</th>
              <th>availableDate</th>
              <th>Price</th>
              <th>Image</th>
            </tr>
            {allHalls}
          </tbody>
        </table>
      </div>
    </div>
  );
}