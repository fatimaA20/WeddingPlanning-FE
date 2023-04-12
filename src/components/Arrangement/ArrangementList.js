import React, { useState, useEffect } from "react";
import Axios from 'axios';
import Arrangement from "./arrangement";
import { Image } from 'react-bootstrap';
import ArrangementEditForm from "./ArrangementEditForm";
import ArrangementCreateForm from "./ArrangementCreateForm";


export default function ArrangementList() {

  const [Arrangements, setArrangements] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [currentArrangement, setCurrentArrangement] = useState("")

  useEffect(() => {
    loadArrangementsList();
  }, []);

  const loadArrangementsList = () => {
    Axios.get("Arrangement/index")
      .then((response) => {
        console.log(response)
        // State to store the data
        setArrangements(response.data.Arrangements)
      })
      .catch((err) => {
        console.log("Error Retrieving Arrangements")
        console.log(err)
      })
  }
  const editView = (id) => {
    Axios.get(`Arrangement/edit?id=${id}`)
      .then(res => {
        let arrangement = res.data.Arrangement
        console.log("Loaded Arrangement Information")
        console.log(id)
        setIsEdit(true)
        setCurrentArrangement(arrangement)
      })
      .catch(err => {
        console.log("Error Loading Arrangement Information")
        console.log(err)
      })
  }

  const editArrangement = (arrangement) => {
    Axios.put("Arrangement/update", arrangement)
      .then(res => {
        console.log("Arrangement Updated Successfully!!!")
        console.log(res)
        loadArrangementsList();

      })
      .catch(err => {
        console.log("Error Editing Arrangement")
        console.log(err)
      })
  }

  const deleteArrangement = (id) => {
    Axios.delete(`Arrangement/delete?id=${id}`)
      .then(res => {
        console.log("Arrangement Deleted Successfully!!!")
        console.log(res)
        loadArrangementsList();
      })
      .catch(err => {
        console.log("Error Deleting Arrangement")
        console.log(err)
      })
  }

  const addArrangement = (arrangement) => {
    Axios.post("Arrangement/add", arrangement)
      .then(res => {
        console.log("Arrangement Added Successfully!!!")
        loadArrangementsList();
      })
      .catch(err => {
        console.log("Error Adding Arrangement")
        console.log(err)
      })
  }
  const allArrangements = Arrangements.map((arrangement, index) => (
    <div className="col-md-3 mb-3" key={index}>
      <Arrangement
        {...arrangement}
        editView={editView}
        deleteView={deleteArrangement} // change this to deleteView
      />
    </div>
  ))



  return (
    <div>
      <div className="row">
        <h1 className="text-center font-weight-bold" style={{ fontFamily: "Arial", color: "#200", marginTop: "50px" }}>Arrangement</h1>
        <div className="row">
          {allArrangements}

        </div>
      </div>


     { (!isEdit) ?

      <ArrangementCreateForm addArrangement={addArrangement} />
      :
        <ArrangementEditForm key={currentArrangement._id} arrangement={currentArrangement} editArrangement={editArrangement} />
     
     }
    </div>
  );
  
}
