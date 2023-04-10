import React from 'react'

export default function Buffet(props) {
  return (
    <div>
        <td>{props.restaurantName}</td>
        <td>{props.type}</td>
        <td>{props.description}</td>
        <td>{props.noOfGuests}</td>
        <td>{props.price}</td>
        <td><img src={props.image} ></img></td>
    </div>
  )
}
