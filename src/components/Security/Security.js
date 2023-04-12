import React from 'react'

export default function Security(props) {
  return (
    <div>
        <td>{props.name}</td>
        <td>{props.description}</td>
        <td>{props.noOfSecurity}</td>
        <td>{props.price}</td>
        <td><img src={props.image} ></img></td>
    </div>
  )
}