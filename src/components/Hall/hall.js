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
          <div className='col-md-3'>
            <div class="card" >
              <img class="card-img-top" src="https://images.unsplash.com/photo-1675247488725-22d1b78e75db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZyUyMGhhbGxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                <p class="card-text">Capacity: {props.size}, Price: {props.price}BD </p>
                <a href="#" class="btn btn-light">Add</a>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div class="card" >
              <img class="card-img-top" src="https://plus.unsplash.com/premium_photo-1673467102798-a3cd74727a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fHdlZGRpbmclMjBoYWxsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                <p class="card-text">Capacity: {props.size}, Price: {props.price}BD </p>
                <a href="#" class="btn btn-light">Add</a>
              </div>
            </div>
          </div>

          <div className='col-md-3'>
            <div class="card" >
              <img class="card-img-top" src="https://media.herworld.com/public/20646-16412-768x513.jpg?compress=true&quality=80&w=480&dpr=2.6"  alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                <p class="card-text">Capacity: {props.size}, Price: {props.price}BD </p>
                <a href="#" class="btn btn-light">Add</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <div class="card" >
              <img class="card-img-top" src="https://london.bridestory.com/images/c_fill,dpr_1.0,f_auto,fl_progressive,pg_1,q_80,w_680/v1/assets/img_8680-djBj6cL3fY/white-pearl-decoration_four-seasons-hotel-jakarta-grand-ballroom-2021-10-24_1.jpg" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                <p class="card-text">Capacity: {props.size}, Price: {props.price}BD </p>
                <a href="#" class="btn btn-light">Add</a>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div class="card" >
              <img class="card-img-top" src="https://images.unsplash.com/photo-1675247488725-22d1b78e75db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZyUyMGhhbGxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                <p class="card-text">Capacity: {props.size}, Price: {props.price}BD </p>
                <a href="#" class="btn btn-light">Add</a>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div class="card" >
              <img class="card-img-top" src="https://plus.unsplash.com/premium_photo-1673467102798-a3cd74727a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fHdlZGRpbmclMjBoYWxsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                <p class="card-text">Capacity: {props.size}, Price: {props.price}BD </p>
                <a href="#" class="btn btn-light">Add</a>
              </div>
            </div>
          </div>

          <div className='col-md-3'>
            <div class="card" >
              <img class="card-img-top" src="https://media.herworld.com/public/20646-16412-768x513.jpg?compress=true&quality=80&w=480&dpr=2.6"  alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                <p class="card-text">Capacity: {props.size}, Price: {props.price}BD </p>
                <a href="#" class="btn btn-light">Add</a>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>



  )
}
