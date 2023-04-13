import React,{useState} from 'react'

export default function DJEditForm(props) {
    const [dj, setDJ] = useState(props.dj)


    const handleChange = (event) => {
      const attributeToChange = event.target.name
      const newValue = event.target.value
  
      const updateDJ = {...dj}
      updateDJ[attributeToChange] = newValue
      console.log(updateDJ)
      setDJ(updateDJ)
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      props.editDJ(dj);
    }
  
    return (
      <div>
          <h1>Edit DJ</h1>
  
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" name="name" value={dj.name} onChange={handleChange}></input>
            </div>

            <div>
                <label>noOfHours </label>
                <input type="number" name="noOfHours" value={dj.noOfHours} onChange={handleChange}></input>
            </div>

            <div>
                <label>Price </label>
                <input type="number" name="price" value={dj.price} onChange={handleChange}></input>
            </div>

            <div>
                <input type="submit" value="Edit DJ"></input>
            </div>
        </form>
      </div>
    )
  }
