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
        <div style={{ display: 'flex' }}>
  <button type="button" class="btn btn-outline-dark btn-sm" style={{ display: 'flex', margin:"10px", width: "50%", fontSize: "1rem", textAlign:"center"}} onClick={() => { props.editView(props._id) }}>Edit</button>
  <button type="button" class="btn btn-outline-dark btn-sm" style={{ display: 'flex', margin:"10px", width: "50%", fontSize: "1rem", textAlign:"center" }} onClick={() => props.deleteView(props._id)}>Delete</button>
</div>
      </ListGroup>
      <Card.Body>
        <Card.Text>
        <a href="#" variant="light" onClick={handleBooking} class={`btn ${isBooked ? 'btn-success' : 'btn-light'}`} disabled={isBooked} style={{position: "relative", bottom: "0", width: "100%", fontSize: "1.2rem"}}>
  {isBooked ? 'Booked' : 'Book'}
</a>
        </Card.Text>
      </Card.Body>
    </Card>

    </div>
  );
}
