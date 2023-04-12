import React, {useState} from 'react'

export default function ArrangementCreateForm(props) {

    const [newArrangement, setNewArrangement] = useState({})


  const handleChange = (event) => {
    const attributeToChange = event.target.name
    const newValue = event.target.value

    const arrangement = {...newArrangement}
    arrangement[attributeToChange] = newValue
    console.log(arrangement)
    setNewArrangement(arrangement)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addArrangement(newArrangement);
  }

  return (
    <div>
        <h1>Create Arrangement</h1>

        <form onSubmit={handleSubmit}>
            <div>
                <label>Type</label>
                <input type="text" name="type" onChange={handleChange}></input>
            </div>

            <div>
                <label>Description</label>
                <input type="text" name="description" onChange={handleChange}></input>
            </div>

            <div>
                <label>Price </label>
                <input type="number" name="price" onChange={handleChange}></input>
            </div>

            <div>
                <input type="submit" value="Add Arrangement"></input>
            </div>
        </form>
    </div>
  )
}