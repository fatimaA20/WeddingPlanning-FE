import React, {useState} from 'react'

export default function HospitalityCreateForm(props) {

    const [newHospitality, setNewHospitality] = useState({})


  const handleChange = (event) => {
    const attributeToChange = event.target.name
    const newValue = event.target.value

    const hospitality = {...newHospitality}
    hospitality[attributeToChange] = newValue
    console.log(hospitality)
    setNewHospitality(hospitality)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addHospitality(newHospitality);
  }

  return (
    <div>
        <h1>Create Hospitality</h1>

        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" name="name" onChange={handleChange}></input>
            </div>

            <div>
                <label>type</label>
                <input type="text" name="type" onChange={handleChange}></input>
            </div>

            <div>
                <label>description</label>
                <textarea type="text" name="description" onChange={handleChange}></textarea>
            </div>

            <div>
                <label>Price </label>
                <input type="number" name="price" onChange={handleChange}></input>
            </div>

            <div>
                <input type="submit" value="Add Hospitality"></input>
            </div>
        </form>
    </div>
  )
}