import React from 'react'
import { Card } from 'react-bootstrap';

export default function Hall(props) {
  return (
    <div>

    <Card className="bg-dark text-white">
      <Card.Img src="https://cdn0.weddingwire.ca/vendor/2943/3_2/960/jpg/fsmontreal-ballroom-night-v1_50_52943-157142093782072.jpeg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
        {props.price}
        </Card.Text>
        <Card.Text>{props.size}</Card.Text>
      </Card.ImgOverlay>
      <Card.Footer className="text-muted">{props.availableDate}</Card.Footer>
    </Card>     
    </div>
  )
}
