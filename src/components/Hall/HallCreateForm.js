import React, {useState} from 'react'

export default function HallCreateForm(props) {

    const [newHall, setNewHall] = useState({})


  const handleChange = (event) => {
    const attributeToChange = event.target.name
    const newValue = event.target.value

    const hall = {...newHall}
    hall[attributeToChange] = newValue
    console.log(hall)
    setNewHall(hall)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addHall(newHall);
  }

  return (
    <div>
        <h1>Create Hall</h1>

        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" name="name" onChange={handleChange}></input>
            </div>

            <div>
                <label>Size</label>
                <input type="number" name="size" onChange={handleChange}></input>
            </div>

            <div>
                <label>Price </label>
                <input type="number" name="price" onChange={handleChange}></input>
            </div>

            <div>
                <input type="submit" value="Add Hall"></input>
            </div>
        </form>
    </div>
  )
}