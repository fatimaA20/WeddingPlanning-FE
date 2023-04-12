import React from 'react'
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

  return (
      <>
      <br></br>
      <br></br>
      <div className="card mb-3 w3-hover-shadow w3-center" style={{backgroundColor:"#7EABA6", color:"white", fontFamily:"sans-serif", boxShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)"}}>
  <div className="card-img-top" style={{backgroundImage:`url(https://www.youredm.com/wp-content/uploads/2020/07/marshmello-look-over-there-ultra-europe-2018-rukes.jpg)`, backgroundSize: "cover", backgroundPosition: "center", height: "400px", width: "100%"}} alt="Card image cap"></div>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">Hours: {props.noOfHours} H, Price: {props.price} BD </p>
    <p className="card-text"><small className="text-muted" style={{color:"white"}}>Last updated 3 mins ago</small></p>
  </div>
</div>


          </>
          

        )
}
