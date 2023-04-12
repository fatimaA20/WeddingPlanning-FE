import React,{useState,useEffect} from "react";
import Axios from 'axios'
import Dj from "./dj";

export default function DJList() {

    const [djs, setDjs] = useState([]);

    useEffect(() => {
        loadDJsList()
    }, [])
    
    const loadDJsList = () => {
        Axios.get("DJ/index")
        .then((response) => {
          console.log(response)
          // State to store the data
          setDjs(response.data.djs)
        })
        .catch((err) => {
          console.log("Error Retrieving djs")
          console.log(err)
        })
    }

    

    const allDjs =  djs.map((dj, index) => (
      <div key={dj.id}>
            <Dj {...dj}/>
       </div>
    ))
  return (
<div>
  <br></br>
                    {allDjs}
    </div>
  )
}
