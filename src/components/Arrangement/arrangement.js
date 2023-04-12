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
        <Card.Title>{props.type}</Card.Title>
        <Card.Text>
        {props.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Price: {props.price} BD</ListGroup.Item>
        <button onClick={()=> {props.editView(props._id)}}>Edit</button>
        <button onClick={()=> props.deleteView(props._id)}>Delete</button>
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
