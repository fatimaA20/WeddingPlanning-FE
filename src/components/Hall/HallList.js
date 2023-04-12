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
    <div key={hall.id}>
    <Hall
  name={hall.name}
  size={hall.type}
  availableDate={hall.availableDate}
  price={hall.price}
  image={hall.image}
    >
  {['https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80image1.jpg',
   'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 
   'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'].map((src) => (
    <img key={src} src={src} alt="Hall Image" />
  ))}
</Hall>

  </div>
  ));

  return (
    <>
          {/* <div className="row"> */}
          {/* <h1  className="text-center font-weight-bold" style={{fontFamily: "Arial", color: "#200", marginTop: "50px"}}>BUFFET</h1> */}
            {/* <div className="row"> */}
              {allHalls}
            {/* </div> */}
          {/* </div> */}
        </>
  );
}