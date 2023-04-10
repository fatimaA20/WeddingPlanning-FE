import React, { useState, useEffect } from "react";
import Axios from 'axios';
import Buffet from "./buffet";

export default function BuffetList() {

    const [buffets, setBuffets] = useState([]);

    useEffect(() => {
        loadBuffetsList();
    }, []);
    
    const loadBuffetsList = () => {
        Axios.get("buffet/index")
        .then((response) => {
          console.log(response)
          // State to store the data
          setBuffets(response.data.buffets)
        })
        .catch((err) => {
          console.log("Error Retreiving buffets")
          console.log(err)
        })
    }

    const allBuffets =  buffets.map((buffet, index) => (
        <tr key={index}>
            <Buffet {...buffet}/>
        </tr>
    ))

    return (
        <div>
            <h1>Buffet List</h1>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Restaurant Name</th>
                            <th>Type</th>
                            <th>Description</th>
                            <th>No of Guests</th>
                            <th>Price</th>
                            <th>Image</th>
                        </tr>
                        {allBuffets}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
