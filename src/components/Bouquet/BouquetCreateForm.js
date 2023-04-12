import React, {useState} from 'react'

export default function BouquetCreateForm(props) {

    const [newBouquet, setNewBouquet] = useState({})


  const handleChange = (event) => {
    const attributeToChange = event.target.name
    const newValue = event.target.value

    const bouquet = {...newBouquet}
    bouquet[attributeToChange] = newValue
    console.log(bouquet)
    setNewBouquet(bouquet)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addBouquet(newBouquet);
  }

  return (
    <div>
        <h1>Create Bouquet</h1>

        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" name="name" onChange={handleChange}></input>
            </div>

            <div>
                <label>Description</label>
                <textarea type="text" name="description" onChange={handleChange}></textarea>
            </div>

            <div>
                <label>Color</label>
                <input type="text" name="color" onChange={handleChange}></input>
            </div>

            <div>
                <label>Price </label>
                <input type="number" name="price" onChange={handleChange}></input>
            </div>

            <div>
                <input type="submit" value="Add Bouquet"></input>
            </div>
        </form>
    </div>
  )
}