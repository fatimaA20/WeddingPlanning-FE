import React from 'react'

export default function Hospitality(props) {
  return (
    <div>
    <tr>
      <td>{props.name}</td>
      <td>{props.type}</td>
      <td>{props.description}</td>
      <td>{props.price}</td>
      <td><img src={props.image} alt={props.name} /></td>
    </tr>
    </div>
  )
}
