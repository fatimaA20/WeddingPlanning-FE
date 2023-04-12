import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, ListGroup } from 'react-bootstrap';
import { BsPlus } from 'react-icons/bs';


export default function Buffet(props) {
  return (
    
      <>
        <br></br>
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
                    <Card.Link href="#" className="ml-auto">
                      <BsPlus />
                    </Card.Link>
                  </Card.Text>
                </Card.Body>
              </Card>
</div>
<div className='col-md-3'>
              <Card style={{ width: '18rem', left: "50px", display: "center" }}>
                <Card.Img variant="top" src="https://www.seminolehardrockhollywood.com/-/media/project/shrss/sga/casinos/hard-rock/hollywood/galleries/fresh-harvest-gallery/fresh_harvest_gallery_item4_3150x2150.jpg?rev=4894385876864f739ab9cd1fbf3954b3&hash=E4C09C476270B6F551C633BD9DE28F5D" />
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
                    <Card.Link href="#" className="ml-auto">
                      <BsPlus />
                    </Card.Link>
                  </Card.Text>
                </Card.Body>
              </Card>
</div>
<div className='col-md-3'>
              <Card style={{ width: '18rem', left: "50px", display: "center" }}>
                <Card.Img variant="top" src="https://www.schroeder-fleischwaren.de/wp-content/uploads/2020/05/catering-food-wedding-event-table-picture-id650932168-1024x683.jpg" />
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
                    <Card.Link href="#" className="ml-auto">
                      <BsPlus />
                    </Card.Link>
                  </Card.Text>
                </Card.Body>
              </Card>
</div>
<div className='col-md-3'>
              <Card style={{ width: '18rem', left: "50px", display: "center" }}>
                <Card.Img variant="top" src="https://apicms.thestar.com.my/uploads/images/2022/12/10/1856737.jpg" />
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
                    <Card.Link href="#" className="ml-auto">
                      <BsPlus />
                    </Card.Link>
                  </Card.Text>
                </Card.Body>
              </Card>
</div>
</div>
</div>

            </>
            );
}
