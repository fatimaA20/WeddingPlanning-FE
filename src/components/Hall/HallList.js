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
    <div className="col-md-4 mb-3" key={hall.id}>
    <Hall
      name={hall.name}
      size={hall.type}
      availableDate={hall.availableDate}
      price={hall.price}
      image={hall.image}
    />
  </div>
  ));

  return (
    <div>
      <h1  className="text-center font-weight-bold" style={{fontFamily: "Arial", color: "#200", marginTop: "50px"}}>VANUE</h1>
      <div>
        <table>
          <tbody>
            {allHalls}
          </tbody>
        </table>
      </div>
    </div>
  );
}