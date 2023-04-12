import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, ListGroup } from 'react-bootstrap';
import { BsPlus } from 'react-icons/bs';


export default function Arrangement(props) {
  return (
    <div>
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.description}</Card.Title>
        <Card.Text>
        {props.type}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Price: {props.price} BD</ListGroup.Item>
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
