import React from 'react'
import { Card, Button, CardFootr, ListGroup } from 'react-bootstrap';
import { BsPlus } from 'react-icons/bs';

export default function Hall(props) {
  return (
    <>
      <br></br>
      {/* <h1 className='text-center text-success my-5'>Vanue</h1> */}
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <div class="card" >
              <img class="card-img-top" src="https://london.bridestory.com/images/c_fill,dpr_1.0,f_auto,fl_progressive,pg_1,q_80,w_680/v1/assets/img_8680-djBj6cL3fY/white-pearl-decoration_four-seasons-hotel-jakarta-grand-ballroom-2021-10-24_1.jpg" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                <p class="card-text">Capacity: {props.size}, Price: {props.price}BD </p>
                <a href="#" class="btn btn-light ">Add</a>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>



  )
}
