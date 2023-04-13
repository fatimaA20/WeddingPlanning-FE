import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Hall from './hall'
import HallCreateForm from './HallCreateForm';
import HallEditForm from './HallEditForm';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';


export default function () {

  const [Halls, setHalls] = useState([]);
  const [bookedHallId, setBookedHallId] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [currentHall, setCurrentHall] = useState({})

  const navigate = useNavigate()

  useEffect(() => {
    loadHallsList();
  }, []);

  const handleHallBooking = (hallId) => {
    setBookedHallId(hallId);

  };


  const loadHallsList = () => {
    Axios.get('hall/index')
      .then((response) => {
        console.log(response);
        setHalls(response.data.halls);
      })
      .catch((err) => {
        console.log('Error Retrieving Halls');
        console.log(err);
      });
  };

  // const editView = (id) => {
  //   console.log(id)
  //   Axios.get(`hall/edit?id=${id}`)
  //     .then(res => {
  //       let Hall = res.data
  //       console.log("Loaded Hall Information")
  //       console.log(id)
  //       console.log(res)
  //       console.log(res.data)
  //       console.log(res.data.hall)
  //       setIsEdit(true)
  //       setCurrentHall(Hall)
  //     })
  //     .catch(err => {
  //       console.log("Error Loading Hall Information")
  //       console.log(err)
  //     })
  // }

  const editHall = (hall) => {
    Axios.put("hall/update", hall)
      .then(res => {
        console.log("Hall Updated Successfully!!!")
        console.log(res)
        loadHallsList();
      })
      .catch(err => {
        console.log("Error Editing Hall")
        console.log(err)
      })
  }

  const deleteHall = (id) => {
    Axios.delete(`hall/delete?id=${id}`)
      .then(res => {
        console.log("Hall Deleted Successfully!!!")
        console.log(res)
        loadHallsList();
      })
      .catch(err => {
        console.log("Error Deleting Hall")
        console.log(err)
      })
  }

  const addHall = (hall) => {
    Axios.post("hall/add", hall)
      .then(res => {
        console.log("Hall Added Successfully!!!")
        loadHallsList();
      })
      .catch(err => {
        console.log("Error Adding Hall")
        console.log(err)
      })
    }


  const handleNextClick = () =>{
    console.log(bookedHallId)
    navigate(`/Arrangement`)
  }


  const allHalls = Halls.map((hall, index) => (
    <div className="col-md-3 mb-3" key={index}>
      <Hall style={{float: "left"}}
        id={hall._id}
        name={hall.name}
        size={hall.size}
        availableDate={hall.availableDate}
        price={hall.price}
        image={hall.image}
        onBooked={handleHallBooking}
        // editView={editView}
        deleteView={deleteHall}
      />
    </div>
  ));

  return (
    <>
      <br></br>
      {allHalls}
      <br></br>
      <div className="container d-flex justify-content-between">
               {/* {(!isEdit) ?
          <HallCreateForm addHall={addHall} />
          :
          <HallEditForm key={currentHall._id} hall={currentHall} editHall={editHall} />
        } */}
             </div>
        <button type="button" class="btn btn-dark" onClick={handleNextClick} >Next &rarr;</button>

      {/* <button>next</button> */}
    </>
  );

};

