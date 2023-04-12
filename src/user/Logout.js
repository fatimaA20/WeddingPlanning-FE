import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap"


export default function Logout(props) {

  const Logout = (props) => {
    const navigate = useNavigate();

    const logoutHandler = () => {
      props.logout();
      navigate("/login");
    };

    return (
      <div>
        <h2>Are you sure you want to log out?</h2>
      </div>
    )
  }
}