import React,{useState,useEffect} from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import DJCreateForm from "./DJCreateForm";
import DJEditForm from "./DJEditForm";
import Axios from 'axios'
import Dj from "./dj";

export default function DJList() {

    const [djs, setDjs] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [currentDJ, setCurrentDJ] = useState({})
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


    // const editView = (id) => {
    //   console.log(id)
    //   Axios.get(`dj/edit?id=${id}`)
    //     .then(res => {
    //       let DJ = res.data
    //       console.log("Loaded DJ Information")
    //       console.log(id)
    //       console.log(res)
    //       console.log(res.data)
    //       console.log(res.data.dj)
    //       setIsEdit(true)
    //       setCurrentDJ(DJ)
    //     })
    //     .catch(err => {
    //       console.log("Error Loading DJ Information")
    //       console.log(err)
    //     })
    // }
  
    const editDJ = (dj) => {
      Axios.put("dj/update", dj)
        .then(res => {
          console.log("DJ Updated Successfully!!!")
          console.log(res)
          loadDJsList();
        })
        .catch(err => {
          console.log("Error Editing DJ")
          console.log(err)
        })
    }
  
    const deleteDJ = (id) => {
      Axios.delete(`dj/delete?id=${id}`)
        .then(res => {
          console.log("DJ Deleted Successfully!!!")
          console.log(res)
          loadDJsList();
        })
        .catch(err => {
          console.log("Error Deleting DJ")
          console.log(err)
        })
    }
  
    const addDJ = (dj) => {
      Axios.post("dj/add", dj)
        .then(res => {
          console.log("DJ Added Successfully!!!")
          loadDJsList();
        })
        .catch(err => {
          console.log("Error Adding DJ")
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

      <div key={index} style={{ float: 'left', margin:"10px" }}>
            <Dj {...dj}
            id = {dj._id}
            // editView={editView}
            deleteView={deleteDJ}
            onBooked={handleDjBooking}
            />

       </div>
    ))
  return (
<div>
  <br></br>
                    {allDjs}
                    <br></br>
                    <div className="container d-flex justify-content-between" style={{position: "relative",  paddingBottom: "20px"}}>

                    {/* {(!isEdit) ?
          <DJCreateForm addDJ={addDJ} />
          :
          <DJEditForm key={currentDJ._id} dj={currentDJ} editDJ={editDJ} />
        } */}

  <button type="button" className="btn btn-dark" onClick={handleNextClick} style={{position: "absolute", top: "20px", right: 0}}>Next &rarr;</button>
</div>
    </div>
  )
}
