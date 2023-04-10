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
          console.log("Error Retreiving djs")
          console.log(err)
        })
    }

    const allDjs =  djs.map((dj, index) => (
        <tr key={index}>
            <Dj {...dj}/>
        </tr>
    ))
  return (
<div>
        <h1>DJ List</h1>
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>no of hours</th>
                        <th>price</th>
                        <th>image</th>
                    </tr>
                    {allDjs}
                </tbody>
            </table>
        </div>

    </div>
  )
}
