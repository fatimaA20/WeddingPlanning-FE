import React from 'react'

export default function Studio(props) {
  return (
    <div>
        <td>{props.name}</td>
        <td>{props.packageType}</td>
        <td>{props.description}</td>
        <td>{props.price}</td>
        <td><img src={props.image} ></img></td>
    </div>
  )
}