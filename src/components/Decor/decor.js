import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, ListGroup } from 'react-bootstrap';
import { BsPlus } from 'react-icons/bs';


export default function Decor(props) {
  return (
    
      <>
        <br></br>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
              <Card style={{ width: '18rem', left: "50px", display: "center" }}>
                <Card.Img variant="top" src="https://media.istockphoto.com/id/650655146/photo/catering-food-wedding-event-table.jpg?s=612x612&w=0&k=20&c=ATGYgW8bM_559jJ5aUNO4HlJqpkOWUmNNMMflx5kajo=" />
                <Card.Body>
                  <Card.Title>name</Card.Title>
                  <Card.Text>
                    description
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Type:</ListGroup.Item>
                  <ListGroup.Item>Number </ListGroup.Item>
                  <ListGroup.Item>Price: BD</ListGroup.Item>
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
                <Card.Img variant="top" src="https://media.istockphoto.com/id/650655146/photo/catering-food-wedding-event-table.jpg?s=612x612&w=0&k=20&c=ATGYgW8bM_559jJ5aUNO4HlJqpkOWUmNNMMflx5kajo=" />
                <Card.Body>
                  <Card.Title>name</Card.Title>
                  <Card.Text>
                    description
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Type:</ListGroup.Item>
                  <ListGroup.Item>Number </ListGroup.Item>
                  <ListGroup.Item>Price: BD</ListGroup.Item>
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
                <Card.Img variant="top" src="https://media.istockphoto.com/id/650655146/photo/catering-food-wedding-event-table.jpg?s=612x612&w=0&k=20&c=ATGYgW8bM_559jJ5aUNO4HlJqpkOWUmNNMMflx5kajo=" />
                <Card.Body>
                  <Card.Title>name</Card.Title>
                  <Card.Text>
                    description
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Type:</ListGroup.Item>
                  <ListGroup.Item>Number </ListGroup.Item>
                  <ListGroup.Item>Price: BD</ListGroup.Item>
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
                <Card.Img variant="top" src="https://media.istockphoto.com/id/650655146/photo/catering-food-wedding-event-table.jpg?s=612x612&w=0&k=20&c=ATGYgW8bM_559jJ5aUNO4HlJqpkOWUmNNMMflx5kajo=" />
                <Card.Body>
                  <Card.Title>name</Card.Title>
                  <Card.Text>
                    description
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Type:</ListGroup.Item>
                  <ListGroup.Item>Number </ListGroup.Item>
                  <ListGroup.Item>Price: BD</ListGroup.Item>
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
