import React,{useState} from 'react'

export default function HallEditForm(props) {
    const [hall, setHall] = useState(props.hall)


    const handleChange = (event) => {
      const attributeToChange = event.target.name
      const newValue = event.target.value
  
      const updateHall = {...hall}
      updateHall[attributeToChange] = newValue
      console.log(updateHall)
      setHall(updateHall)
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      props.editHall(hall);
    }
  
    return (
      <div>
          <h1>Edit Hall</h1>
  
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" name="name" value={hall.name} onChange={handleChange}></input>
            </div>

            <div>
                <label>Capacity</label>
                <input type="number" name="size" value={hall.size} onChange={handleChange}></input>
            </div>

            <div>
                <label>Price </label>
                <input type="number" name="price" value={hall.price} onChange={handleChange}></input>
            </div>

            <div>
                <input type="submit" value="Edit Hall"></input>
            </div>
        </form>
      </div>
    )
  }
