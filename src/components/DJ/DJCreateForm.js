import React, {useState} from 'react'

export default function DJCreateForm(props) {

    const [newDJ, setNewDJ] = useState({})


  const handleChange = (event) => {
    const attributeToChange = event.target.name
    const newValue = event.target.value

    const dj = {...newDJ}
    dj[attributeToChange] = newValue
    console.log(dj)
    setNewDJ(dj)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addDJ(newDJ);
  }

  return (
    <div>
        <h1>Create DJ</h1>

        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" name="name" onChange={handleChange}></input>
            </div>

            <div>
                <label>noOfHours </label>
                <input type="number" name="noOfHours" onChange={handleChange}></input>
            </div>

            <div>
                <label>Price </label>
                <input type="number" name="price" onChange={handleChange}></input>
            </div>

            <div>
                <input type="submit" value="Add DJ"></input>
            </div>
        </form>
    </div>
  )
}