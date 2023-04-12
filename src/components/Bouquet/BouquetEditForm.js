import React,{useState} from 'react'

export default function BouquetEditForm(props) {
    const [bouquet, setBouquet] = useState(props.bouquet)


    const handleChange = (event) => {
      const attributeToChange = event.target.name
      const newValue = event.target.value
  
      const updateBouquet = {...bouquet}
      updateBouquet[attributeToChange] = newValue
      console.log(updateBouquet)
      setBouquet(updateBouquet)
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      props.editBouquet(bouquet);
    }
  
    return (
      <div>
          <h1>Edit Bouquet</h1>
  
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" name="name" value={bouquet.name} onChange={handleChange}></input>
            </div>

            <div>
                <label>Description</label>
                <textarea type="text" name="description" value={bouquet.description} onChange={handleChange}></textarea>
            </div>

            <div>
                <label>Color</label>
                <textarea type="text" name="color" value={bouquet.color} onChange={handleChange}></textarea>
            </div>
            

            <div>
                <label>Price </label>
                <input type="number" name="price" value={bouquet.price} onChange={handleChange}></input>
            </div>

            <div>
                <input type="submit" value="Edit Bouquet"></input>
            </div>
        </form>
      </div>
    )
  }
