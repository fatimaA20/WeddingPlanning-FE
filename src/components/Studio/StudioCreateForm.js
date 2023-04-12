import React, {useState} from 'react'

export default function StudioCreateForm(props) {

    const [newStudio, setNewStudio] = useState({})


  const handleChange = (event) => {
    const attributeToChange = event.target.name
    const newValue = event.target.value

    const studio = {...newStudio}
    studio[attributeToChange] = newValue
    console.log(studio)
    setNewStudio(studio)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addStudio(newStudio);
  }

  return (
    <div>
        <h1>Create Studio</h1>

        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" name="name" onChange={handleChange}></input>
            </div>

            <div>
                <label>packageType</label>
                <input type="text" name="packageType" onChange={handleChange}></input>
            </div>
            <div>
                <label>Price </label>
                <input type="number" name="price" onChange={handleChange}></input>
            </div>

            <div>
                <input type="submit" value="Add Studio"></input>
            </div>
        </form>
    </div>
  )
}