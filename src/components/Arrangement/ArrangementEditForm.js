import React,{useState} from 'react'

export default function ArrangementEditForm(props) {
    const [arrangement, setArrangement] = useState(props.arrangement)


    const handleChange = (event) => {
      const attributeToChange = event.target.name
      const newValue = event.target.value
  
      const updateArrangement = {...arrangement}
      updateArrangement[attributeToChange] = newValue
      console.log(updateArrangement)
      setArrangement(updateArrangement)
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      props.editArrangement(arrangement);
    }
  
    return (
      <div>
          <h1>Edit Arrangement</h1>
  
        <form onSubmit={handleSubmit}>
            <div>
                <label>Type</label>
                <input type="text" name="type" value={arrangement.type} onChange={handleChange}></input>
            </div>

            <div>
                <label>Description</label>
                <textarea type="text" name="description" value={arrangement.description} onChange={handleChange}></textarea>
            </div>

            <div>
                <label>Price </label>
                <input type="number" name="price" value={arrangement.price} onChange={handleChange}></input>
            </div>

            <div>
                <input type="submit" value="Edit Arrangement"></input>
            </div>
        </form>
      </div>
    )
  }
