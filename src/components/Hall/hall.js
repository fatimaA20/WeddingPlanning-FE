import React from 'react'

export default function Hall(props) {
  return (
    <div>
        <td>{props.name}</td>
        <td>{props.size}</td>
        <td>{props.availableDate}</td>
        <td>{props.price}</td>
        <td><img src={props.image} ></img></td>        
    </div>
  )
}
