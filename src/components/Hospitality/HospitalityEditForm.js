import React,{useState} from 'react'

export default function HospitalityEditForm(props) {
    const [hospitality, setHospitality] = useState(props.hospitality)


    const handleChange = (event) => {
      const attributeToChange = event.target.name
      const newValue = event.target.value
  
      const updateHospitality = {...hospitality}
      updateHospitality[attributeToChange] = newValue
      console.log(updateHospitality)
      setHospitality(updateHospitality)
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      props.editHospitality(hospitality);
    }
  
    return (
      <div>
          <h1>Edit Hospitality</h1>
  
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" name="name" value={hospitality.name} onChange={handleChange}></input>
            </div>

            <div>
                <label>type</label>
                <input type="text" name="type" value={hospitality.type} onChange={handleChange}></input>
            </div>


            <div>
                <label>description</label>
                <textarea type="text" name="description" value={hospitality.description} onChange={handleChange}></textarea>
            </div>

            <div>
                <label>Price </label>
                <input type="number" name="price" value={hospitality.price} onChange={handleChange}></input>
            </div>

            <div>
                <input type="submit" value="Edit Hospitality"></input>
            </div>
        </form>
      </div>
    )
  }
