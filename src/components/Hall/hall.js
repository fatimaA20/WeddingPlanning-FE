import React , { useState, useEffect }from 'react'
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
    localStorage.setItem("Hall_id",props.id)
  };

  return (
    <>

      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <div class="card" >
              <img class="card-img-top" src="https://london.bridestory.com/images/c_fill,dpr_1.0,f_auto,fl_progressive,pg_1,q_80,w_680/v1/assets/img_8680-djBj6cL3fY/white-pearl-decoration_four-seasons-hotel-jakarta-grand-ballroom-2021-10-24_1.jpg" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                <p class="card-text">Capacity: {props.size}, Price: {props.price}BD </p>
                <a href="#" onClick={handleBooking} class={`btn ${isBooked ? 'btn-success' : 'btn-light'}`}disabled={isBooked}>
            {isBooked ? 'Booked' : 'Book'}
            Book</a>
           
              </div>
            </div>
          </div>
</div>
</div>


    </>



  )
}
