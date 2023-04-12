import React , { useState, useEffect }from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, ListGroup } from 'react-bootstrap';
import { BsPlus } from 'react-icons/bs';


export default function Buffet(props) {
  const [isBooked, setIsBooked] = useState(false);

  const handleBooking = () => {
    // Call a function to handle the booking here
    console.log(`Booked buffet ${props.id}`);
    setIsBooked(true);
    props.onBooked(props.id);
    localStorage.setItem("Buffet_id",props.id)
  };
  return (
    
      <>

        <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
              <Card style={{ width: '18rem', left: "50px", display: "center" }}>
                <Card.Img variant="top" src="https://media.istockphoto.com/id/650655146/photo/catering-food-wedding-event-table.jpg?s=612x612&w=0&k=20&c=ATGYgW8bM_559jJ5aUNO4HlJqpkOWUmNNMMflx5kajo=" />
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
                </ListGroup>
                <Card.Body>
                  <Card.Text>
                  <a href="#" variant="light" onClick={handleBooking} class={`btn ${isBooked ? 'btn-success' : 'btn-light'}`} disabled={isBooked} style={{position: "relative", bottom: "0", width: "100%", fontSize: "1.2rem"}}>
  {isBooked ? 'Booked' : 'Book'}
</a>
                  </Card.Text>
                </Card.Body>
              </Card>
<br></br>

</div>
</div>
</div>


            </>
            );
}
