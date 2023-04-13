import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function BuffetEditForm(props) {
    const [buffet, setBuffet] = useState(props.buffet)


    const handleChange = (event) => {
      const attributeToChange = event.target.name
      const newValue = event.target.value
  
      const updateBuffet = {...buffet}
      updateBuffet[attributeToChange] = newValue
      console.log(updateBuffet)
      setBuffet(updateBuffet)
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      props.editBuffet(buffet);
    }
  
    return (
      <div style={{position: "relative"}}>
<br></br>
<br></br>

<Form onSubmit={handleSubmit} style={{marginTop:"40px", padding:"20px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail"  style={{marginBottom:"40px"}}>
        {/* <Form.Label>Restaurant Name</Form.Label> */}
        <Form.Control type="text" name="name" value={buffet.restaurantName}  placeholder='Resturant Name' onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        {/* <Form.Label>Type</Form.Label> */}
        <Form.Control type="text" name="type" value={buffet.type} placeholder='Type'onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        {/* <Form.Label>Description</Form.Label> */}
        <Form.Control type="text" name="description" value={buffet.description} placeholder='Description' onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        {/* <Form.Label>Number of Guests</Form.Label> */}
        <Form.Control type="number" name="noOfGuests" value={buffet.noOfGuests} placeholder='No of Guests' onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        {/* <Form.Label>Price</Form.Label> */}
        <Form.Control type="number" name="price" value={buffet.price} placeholder='Price' onChange={handleChange}/>
      </Form.Group>

      <Button variant="primary" type="submit" value="Edit Buffet">
        Submit
      </Button>
    </Form>
    <div>
      </div>
<br></br>
          {/* <h1>Edit Buffet</h1>
  
        <form onSubmit={handleSubmit}>
            <div>
                <label>restaurantName</label>
                <input type="text" name="name" value={buffet.restaurantName} onChange={handleChange}></input>
            </div>

            <div>
                <label>type</label>
                <input type="text" name="type" value={buffet.type} onChange={handleChange}></input>
            </div>

            <div>
                <label>Description</label>
                <textarea type="text" name="description" value={buffet.description} onChange={handleChange}></textarea>
            </div>

            <div>
                <label>noOfGuests </label>
                <input type="number" name="noOfGuests" value={buffet.noOfGuests} onChange={handleChange}></input>
            </div>

            <div>
                <label>Price </label>
                <input type="number" name="price" value={buffet.price} onChange={handleChange}></input>
            </div>

            <div>
                <input type="submit" value="Edit Buffet"></input>
            </div>
        </form>
      </div> */}
      </div>
    )
  }
