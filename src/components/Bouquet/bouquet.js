import React , { useState, useEffect }from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, ListGroup } from 'react-bootstrap';
import { BsPlus } from 'react-icons/bs';


export default function Bouquet(props) {

  const [isBooked, setIsBooked] = useState(false);
  const handleBooking = () => {
    // Call a function to handle the booking here
    console.log(`Booked Bouquet ${props.id}`);
    setIsBooked(true);
    props.onBooked(props.id);
    localStorage.setItem("Bouquet_id",props.id)
  };
  return (
    <div>
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=404&q=80" />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
        {props.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Color: {props.color}</ListGroup.Item>
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
