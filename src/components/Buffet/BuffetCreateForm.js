import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function BuffetCreateForm(props) {

    const [newBuffet, setNewBuffet] = useState({})


  const handleChange = (event) => {
    const attributeToChange = event.target.name
    const newValue = event.target.value

    const buffet = {...newBuffet}
    buffet[attributeToChange] = newValue
    console.log(buffet)
    setNewBuffet(buffet)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addBuffet(newBuffet);
  }

  return (

<>
{/* <h1 style={{marginTop: "auto", marginBottom: "20px"}}>Create Buffet</h1> */}
<div>
<Form onSubmit={handleSubmit} style={{marginTop:"40px", padding:"20px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        {/* <Form.Label>Restaurant Name</Form.Label> */}
        <Form.Control type="text" name="resturantName"  placeholder='Resturant Name'onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        {/* <Form.Label>Type</Form.Label> */}
        <Form.Control type="text" name="type" placeholder='Type' onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        {/* <Form.Label>Description</Form.Label> */}
        <Form.Control type="text" name="description" placeholder='Description' onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        {/* <Form.Label>Number of Guests</Form.Label> */}
        <Form.Control type="number" name="noOfGuests" placeholder='Number of Guests' onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        {/* <Form.Label>Price</Form.Label> */}
        <Form.Control type="number" name="price" placeholder='Price' onChange={handleChange}/>
      </Form.Group>

      <Button variant="primary" type="submit" value="Add Buffet">
        Submit
      </Button>
    </Form>
    <div>
      </div>
{/* 
        <form onSubmit={handleSubmit}>
            <div>
                <label>restaurantName</label>
                <input type="text" name="restaurantName" onChange={handleChange}></input>
            </div>

            <div>
                <label>type</label>
                <input type="text" name="type" onChange={handleChange}></input>
            </div>

            <div>
                <label>Description</label>
                <textarea type="text" name="description" onChange={handleChange}></textarea>
            </div>

            <div>
                <label>noOfGuests </label>
                <input type="number" name="noOfGuests" onChange={handleChange}></input>
            </div>

            <div>
                <label>Price </label>
                <input type="number" name="price" onChange={handleChange}></input>
            </div>

            <div>
                <input type="submit" value="Add Buffet"></input>
            </div>
        </form> */}
    </div>
    </>
  )
}