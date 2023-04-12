import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, ListGroup } from 'react-bootstrap';
import { BsPlus } from 'react-icons/bs';


export default function Bouquet(props) {
  return (
    <div>
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
        {props.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Color: {props.color}</ListGroup.Item>
        <ListGroup.Item>Price: {props.price} BD</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Text>
        <Card.Link href="#" className="ml-auto" style={{textDecoration:"none"}}>Book
                      <BsPlus />
                    </Card.Link>
        </Card.Text>
      </Card.Body>
    </Card>

    </div>
  );
}
