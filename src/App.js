import React, { useState , useEffect} from 'react';
import Signup from './user/Signup';
import Signin from './user/Signin';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, Form, DropdownButton, Dropdown, Button } from 'react-bootstrap';
import Axios  from 'axios'
import jwt_decode from 'jwt-decode'
import DJList from './components/DJ/DJList';
import HallList from './components/Hall/HallList';
import BuffetList from './components/Buffet/BuffetList'
import HospitalityList from './components/Hospitality/HospitalitiesList'

function App() {
  const [isAuth,setIsAuth] = useState(false)
  const [user , setUser ] = useState({});



  // this part is used to save token until after refresh page 
  useEffect(() => {
    let token = localStorage.getItem("token")
    if (token ){
      let user = jwt_decode(token)

      if (user){
        setIsAuth(true)
        setUser(user)
      }
      else if (!user){
        localStorage.removeItem('token')
        setIsAuth(false)
      }
    }
  }, [])
  
  const registerHandler = (user) =>{
    Axios.post("auth/signup" , user)
    .then(res =>{
      console.log(res)
    })
    .catch (err =>{
      console.log(err)
    })
  }

  // cred = credantial / user info
  const loginHandler =(cred) => {

    Axios.post("auth/signin" ,cred)

    .then (res => {
      console.log(res.data.token)
      // save the token into local storage
      let token = res.data.token
      // if(token)  .. this same as if(token != null)
      if(token != null){
        // "key" , value
        localStorage.setItem("token",token)
        let user = jwt_decode(token)
        setIsAuth(true)
        setUser(user)
      }
    })
    .catch (err =>{
      console.log(err)
      setIsAuth(false)
    })
  }

  const onLogoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem('token')
    setIsAuth(false)
    setUser(null)
  }

  return (
    <>
      <BrowserRouter>
        <Navbar style={{ backgroundColor: "#208075", fontFamily: "Verdana", fontWeight: "bold" }} variant="dark">
          <Container>
            <NavLink exact to="/" 
            activeClassName="active" 
            style={{color: 'white', fontFamily: "Verdana", fontWeight: "bold", textDecoration: 'none' }}
            variant="dark"
            activeStyle={{ color: '#ccc' }}
            >Home</NavLink>
            
            <Nav className="me-auto">
              <Nav.Link href="/hall">Vanue</Nav.Link>
              <Nav.Link href="#decoration">Decoration</Nav.Link>
              <Nav.Link href="/dj">DJ</Nav.Link>
              <Nav.Link href="/buffet">Buffet</Nav.Link>
              <Nav.Link href="/Florist">Florist</Nav.Link>
              <Nav.Link href="/Hospitality">Hospitalities</Nav.Link>
            
            </Nav>
            <Button href="/signup" style={{ backgroundColor: "#7EABA6", fontFamily: "Arial", borderColor: "#208075" }} variant="dark" className="mx-2" >SIGN UP</Button>
            <Button href="/signin" style={{ backgroundColor: "#7EABA6", fontFamily: "Arial", borderColor: "#208075" }} variant="dark" className="mx-2" >LOG IN </Button>

          </Container>
        </Navbar>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signup" element={<Signup  register ={registerHandler} />} />
            <Route exact path="/signin" element={<Signin  login ={loginHandler} />} />
            <Route exact path="/dj" element={<DJList />} />
            <Route exact path="/hall" element={<HallList />} />
            {/* <Route exact path="/bookings" element={<BookingPage />} /> */}

            {/* <Route path="/hall" element={<HallPage />} />
            <Route path="/hall/:hallId/arrangement" element={<ArrangementPage />} />
            <Route path="/hall/:hallId/arrangement/:arrangementId/buffet" element={<BuffetPage />} />
             */}
            <Route exact path="/buffet" element={<BuffetList />} />
            <Route exact path="/Hospitality" element={<HospitalityList />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
