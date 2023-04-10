import React from 'react'

export default function Dj(props) {
  return (
    <div>
        <td>{props.name}</td>
        <td>{props.noOfHours}</td>
        <td>{props.price}</td>
        <td><img src={props.image} ></img></td>
    </div>
  )
}
