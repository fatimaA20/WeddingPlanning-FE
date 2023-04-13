import React, {useState} from 'react'

export default function SecurityCreateForm(props) {

    const [newSecurity, setNewSecurity] = useState({})


  const handleChange = (event) => {
    const attributeToChange = event.target.name
    const newValue = event.target.value

    const security = {...newSecurity}
    security[attributeToChange] = newValue
    console.log(security)
    setNewSecurity(security)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addSecurity(newSecurity);
  }

  return (
    <div>
        <h1>Create Security</h1>

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
                <input type="submit" value="Add Security"></input>
            </div>
        </form>
    </div>
  )
}