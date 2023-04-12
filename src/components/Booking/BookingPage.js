import React, { useEffect, useState } from "react";
import axios from "axios";

export default function BookingPage() {

  const [hallDetails, setHallDetails] = useState({});
  const [bouquetDetails, setBouquetDetails] = useState({});
  const [securityDetails, setSecurityDetails] = useState({});
  const [buffetDetails, setBuffetDetails] = useState({});
  const [hospitalityDetails, setHospitalityDetails] = useState({});
  const [studioDetails, setStudioDetails] = useState({});
  const [arrangementDetails, setArrangementDetails] = useState({});
  const [djDetails, setDjDetails] = useState({});

  const handleConfirm = () => {
    // Delete all ids from local storage
    localStorage.removeItem("Hall_id");
    localStorage.removeItem("Bouquet_id");
    localStorage.removeItem("Security_id");
    localStorage.removeItem("Buffet_id");
    localStorage.removeItem("Hospitality_id");
    localStorage.removeItem("Studio_id");
    localStorage.removeItem("Arrangement");
    localStorage.removeItem("Dj_id");

    // Render to home page and alert confirmation
    alert("Booking confirmed!");
    window.location.href = "/";
  };

  useEffect(() => {
    const Hall_id = localStorage.getItem("Hall_id");
    const Bouquet_id = localStorage.getItem("Bouquet_id");
    const Security_id = localStorage.getItem("Security_id");
    const Buffet_id = localStorage.getItem("Buffet_id");
    const Hospitality_id = localStorage.getItem("Hospitality_id");
    const Studio_id = localStorage.getItem("Studio_id");
    const Arrangement = localStorage.getItem("Arrangement");
    const Dj_id = localStorage.getItem("Dj_id");

    axios
      .get(`hall/detail?id=${Hall_id}`)
      .then((response) => {
        setHallDetails(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get(`bouquet/detail?id=${Bouquet_id}`)
      .then((response) => {
        setBouquetDetails(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get(`security/detail?id=${Security_id}`)
      .then((response) => {
        setSecurityDetails(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get(`buffet/detail?id=${Buffet_id}`)
      .then((response) => {
        setBuffetDetails(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get(`hospitality/detail?id=${Hospitality_id}`)
      .then((response) => {
        console.log(response.data)
        setHospitalityDetails(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get(`studio/detail?id=${Studio_id}`)
      .then((response) => {
        setStudioDetails(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get(`arrangement/detail?id=${Arrangement}`)
      .then((response) => {
        setArrangementDetails(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get(`dj/detail?id=${Dj_id}`)
      .then((response) => {
        setDjDetails(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Booking Details</h2>
      <p>Hall Name: {hallDetails.name}</p>
      <p>Hall Price: {hallDetails.price}</p>
      {/* Display other relevant hall details */}

      <p>buffet Name: {buffetDetails.name}</p>
      <p>buffet Price: {buffetDetails.price}</p>

      
      <p>hospitality Name: {hospitalityDetails.name}</p>
      <p>hospitality Price: {hospitalityDetails.price}</p>

      <p>Bouquet Name: {bouquetDetails.name}</p>
      <p>Bouquet Price: {bouquetDetails.price}</p>

      <p>Arrangement Name: {arrangementDetails.name}</p>
      <p>Arrangement Price: {arrangementDetails.price}</p>

      <p>DJ Name: {djDetails.name}</p>
      <p>DJ Price: {djDetails.price}</p>

      <p>Studio Name: {studioDetails.name}</p>
      <p>Studio Price: {studioDetails.price}</p>


      {/* Display other relevant bouquet details */}

      <p>Security Name: {securityDetails.name}</p>
      <p>Security Price: {securityDetails.price}</p>
      <button onClick={handleConfirm}> Confirm </button>
</div>
);
}