import React, {useState} from 'react'

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
    <div>
        <h1>Create Buffet</h1>

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
        </form>
    </div>
  )
}