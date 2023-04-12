import React,{useState,useEffect} from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

import Axios from 'axios'
import Dj from "./dj";

export default function DJList() {

    const [djs, setDjs] = useState([]);
    const [bookedDjId, setBookedDjId] = useState(null);
    const navigate = useNavigate()

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

    const handleDjBooking = (djId) => {
      setBookedDjId(djId);
      
    };
  
    const handleNextClick = () =>{
      console.log(bookedDjId)
      navigate(`/Studio`)
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
                    <div className="container d-flex justify-content-between">
        <button type="button" class="btn btn-dark" onClick={handleNextClick} >Next &rarr;</button>
      </div>
    </div>
  )
}
