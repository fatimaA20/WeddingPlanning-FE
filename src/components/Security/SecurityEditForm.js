import React,{useState} from 'react'

export default function SecurityEditForm(props) {
    const [security, setSecurity] = useState(props.security)


    const handleChange = (event) => {
      const attributeToChange = event.target.name
      const newValue = event.target.value
  
      const updateSecurity = {...security}
      updateSecurity[attributeToChange] = newValue
      console.log(updateSecurity)
      setSecurity(updateSecurity)
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      props.editSecurity(security);
    }
  
    return (
      <div>
          <h1>Edit Security</h1>
  
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" name="name" value={security.name} onChange={handleChange}></input>
            </div>

            <div>
                <label>description</label>
                <textarea type="text" name="description" value={security.description} onChange={handleChange}></textarea>
            </div>

            <div>
                <label>noOfSecurity</label>
                <input type="number" name="size" value={security.noOfSecurity} onChange={handleChange}></input>
            </div>

            <div>
                <label>Price </label>
                <input type="number" name="price" value={security.price} onChange={handleChange}></input>
            </div>

            <div>
                <input type="submit" value="Edit Security"></input>
            </div>
        </form>
      </div>
    )
  }
