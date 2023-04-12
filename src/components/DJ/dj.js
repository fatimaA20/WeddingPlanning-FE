import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap';
const cardsData = [
  {
    name: Dj.name,
    noOfHours: Dj.noOfHours,
    price: Dj.price,
    imgUrl: "https://example.com/card1.jpg",
  }
];




export default function Dj(props) {
  const [isBooked, setIsBooked] = useState(false);
  const handleBooking = () => {
    // Call a function to handle the booking here
    console.log(`Booked dj ${props.id}`);
    setIsBooked(true);
    props.onBooked(props.id);
    localStorage.setItem("Dj_id", props.id)
  };
  return (
    <>

      <div className="card mb-3 w3-hover-shadow w3-center" style={{ backgroundColor: "#7EABA6", color: "white", fontFamily: "sans-serif", boxShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)" }}>
        <div className="card-img-top" style={{ backgroundImage: `url(https://www.youredm.com/wp-content/uploads/2020/07/marshmello-look-over-there-ultra-europe-2018-rukes.jpg)`, backgroundSize: "cover", backgroundPosition: "center", height: "400px", width: "100%" }} alt="Card image cap"></div>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">Hours: {props.noOfHours} H, Price: {props.price} BD </p>

          <button onClick={() => { props.editView(props.id) }}>Edit</button>
          <button onClick={() => props.deleteView(props.id)}>Delete</button>


          <p className="card-text"><small className="text-muted" style={{ color: "white" }}>Last updated 3 mins ago</small></p>
          <a href="#" variant="light" onClick={handleBooking} class={`btn ${isBooked ? 'btn-success' : 'btn-light'}`} disabled={isBooked} style={{ position: "relative", bottom: "0", width: "100%", fontSize: "1.2rem" }}>
            {isBooked ? 'Booked' : 'Book'}
          </a>
        </div>
      </div>


    </>


  )
}
