import React,{useState} from 'react'

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
      <div>
          <h1>Edit Buffet</h1>
  
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
      </div>
    )
  }
