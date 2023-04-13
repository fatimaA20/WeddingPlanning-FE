import React,{useState} from 'react'

export default function StudioEditForm(props) {
    const [studio, setStudio] = useState(props.studio)


    const handleChange = (event) => {
      const attributeToChange = event.target.name
      const newValue = event.target.value
  
      const updateStudio = {...studio}
      updateStudio[attributeToChange] = newValue
      console.log(updateStudio)
      setStudio(updateStudio)
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      props.editStudio(studio);
    }
  
    return (
      <div>
          <h1>Edit Studio</h1>
  
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" name="name" value={studio.name} onChange={handleChange}></input>
            </div>

            <div>
                <label>packageType</label>
                <input type="text" name="packageType" value={studio.packageType} onChange={handleChange}></input>
            </div>

            <div>
                <label>Price </label>
                <input type="number" name="price" value={studio.price} onChange={handleChange}></input>
            </div>

            <div>
                <input type="submit" value="Edit Studio"></input>
            </div>
        </form>
      </div>
    )
  }
