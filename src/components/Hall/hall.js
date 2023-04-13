import React, { useState, useEffect } from 'react'
import { Card, Button, CardFootr, ListGroup } from 'react-bootstrap';
import { BsPlus } from 'react-icons/bs';
import jwt_decode from 'jwt-decode'

export default function Hall(props) {

  const [isBooked, setIsBooked] = useState(false);

  const handleBooking = () => {
    // Call a function to handle the booking here
    console.log(`Booked hall ${props.id}`);
    setIsBooked(true);
    props.onBooked(props.id);
    localStorage.setItem("Hall_id", props.id)
  };

  return (
    <>

      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <div class="card" >
              <img class="card-img-top" src="https://www.gosfield-hall.co.uk/wp-content/uploads/2019/12/100919-JF-GOSFIELD-047.jpg" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                <p class="card-text">Capacity: {props.size}, Price: {props.price}BD</p>
              
                <div style={{ display: 'flex' }}>
  <button type="button" class="btn btn-outline-dark btn-sm" style={{ display: 'flex', margin:"10px", width: "50%", fontSize: "1rem", textAlign:"center"}} onClick={() => { props.editView(props._id) }}>Edit</button>
  <button type="button" class="btn btn-outline-dark btn-sm" style={{ display: 'flex', margin:"10px", width: "50%", fontSize: "1rem", textAlign:"center" }} onClick={() => props.deleteView(props._id)}>Delete</button>
</div>
                <a href="#" variant="light" onClick={handleBooking} class={`btn ${isBooked ? 'btn-success' : 'btn-light'}`} disabled={isBooked} style={{ position: "relative", bottom: "0", width: "100%", fontSize: "1.2rem" }}>
                  {isBooked ? 'Booked' : 'Book'}
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>


    </>



  )
}
