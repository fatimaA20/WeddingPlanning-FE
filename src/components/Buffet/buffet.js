import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, ListGroup } from 'react-bootstrap';
import { BsPlus } from 'react-icons/bs';


export default function Buffet(props) {
  return (
    <div>
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.restaurantName}</Card.Title>
        <Card.Text>
        {props.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Type: {props.type}</ListGroup.Item>
        <ListGroup.Item>Number of Guests: {props.noOfGuests}</ListGroup.Item>
        <ListGroup.Item>Price: {props.price} BD</ListGroup.Item>
        <ListGroup.Item><img src={props.image} alt={props.restaurantName} /></ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Text>
          <Card.Link href="#" className="ml-auto">
            <BsPlus /> 
          </Card.Link>
        </Card.Text>
      </Card.Body>
    </Card>

    </div>
  );
}
