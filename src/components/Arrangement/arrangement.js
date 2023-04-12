import React , { useState, useEffect }from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, ListGroup } from 'react-bootstrap';
import { BsPlus } from 'react-icons/bs';


export default function Arrangement(props) {
  const [isBooked, setIsBooked] = useState(false);

  const handleBooking = () => {
    // Call a function to handle the booking here
    console.log(`Booked Arrangement ${props.id}`);
    setIsBooked(true);
    props.onBooked(props.id);
    localStorage.setItem("Arrangement",props.id)
  };
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
      </ListGroup>
      <Card.Body>
        <Card.Text>
        <Card.Link href="#" onClick={handleBooking} class={`btn ${isBooked ? 'btn-success' : 'btn-light'}`}disabled={isBooked}>
            {isBooked ? 'Booked' : 'Book'}
            Book
                      <BsPlus />
                    </Card.Link>
        </Card.Text>
      </Card.Body>
    </Card>

    </div>
  );
}
