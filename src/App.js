import React, { useState, useEffect } from 'react';
import Signup from './user/Signup';
import Signin from './user/Signin';
import Logout from './user/Logout';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link , useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, Form, DropdownButton, Dropdown, Button, ButtonGroup, Offcanvas } from 'react-bootstrap';
import Axios from 'axios'
import jwt_decode from 'jwt-decode'
import DJList from './components/DJ/DJList';
import HallList from './components/Hall/HallList';
import BuffetList from './components/Buffet/BuffetList'
import HospitalityList from './components/Hospitality/HospitalitiesList'
import SecurityList from './components/Security/securityList';
import ArrangementList from './components/Arrangement/ArrangementList';
import StudioList from './components/Studio/StudioList';
import BouquetList from './components/Bouquet/BouquetList';
import Booking from './components/Booking/BookingPage'
function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState({});
  // const navigate = useNavigate()




  // this part is used to save token until after refresh page 
  useEffect(() => {
    let token = localStorage.getItem("token")
    if (token) {
      let user = jwt_decode(token)

      if (user) {
        setIsAuth(true)
        setUser(user)
      }
      else if (!user) {
        localStorage.removeItem('token')
        setIsAuth(false)
      }
    }
  }, [])

  // const navigate = useNavigate();
  const registerHandler = (user) => {
    Axios.post("auth/signup", user)
      .then(res => {
        console.log(res)
        // navigate('/home')
      })
      .catch(err => {
        console.log(err)
      })
  }


  // cred = credantial / user info
  const loginHandler = (cred) => {
    Axios.post("auth/signin", cred)
      .then(res => {
        console.log(res.data.token)
        // save the token into local storage
        let token = res.data.token
        // if(token)  .. this same as if(token != null)
        if (token != null) {
          // "key" , value
          localStorage.setItem("token", token)
          let user = jwt_decode(token)
          setIsAuth(true)
          setUser(user)
          // navigate('/')
        }

      })
      .catch(err => {
        console.log(err)
        setIsAuth(false)
        // navigate('/signin')
      })
  }

  const onLogoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem('token')
    setIsAuth(false)
    setUser(null)
  }


  const [showMenu, setShowMenu] = useState(false);
  const menuItems = [
    { id: 1, text: 'Home', link: '/' },
    { id: 2, text: 'Vanue', link: '/hall' },
    { id: 3, text: 'Buffet', link: '/buffet' },
    { id: 4, text: 'Hospitality', link: '/hospitality' },
    { id: 5, text: 'Decoration', link: '/Arrangement' },
    { id: 6, text: 'Florist', link: '/Bouquet' },
    { id: 7, text: 'DJ', link: '/dj' },
    { id: 8, text: 'Studio', link: '/Studio' },
    { id: 9, text: 'Security', link: '/Security' },
    // { id: 10, text: 'Booking', link: '/Booking' },


  ];
  const handleCloseMenu = () => setShowMenu(false);
  const handleShowMenu = () => setShowMenu(true);


  return (
    <>
      <BrowserRouter>
        <Navbar bg="light" expand="lg">

          <Navbar.Brand href="/" className="lead" style={{ fontFamily: "Verdana", color: "#7EABA6", font: "lead", margin: "10px", padding: "10px" }}> EVER AFTER </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleShowMenu} className="navbar-toggle" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {menuItems.map((item) => (
                <Nav.Link key={item.id} href={item.link}>
                  {item.text}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
          {isAuth ?
            <div className="signin-signup-buttons">
              <Button style={{ backgroundColor: "#7EABA6", 
              fontFamily: "Arial", border: "none", boxShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)" }} 
              variant="dark" className="mx-2" onClick={onLogoutHandler}>LOG OUT </Button>
            </div>
              :
          <div className="signin-signup-buttons">
            <Button href="/signup" style={{ backgroundColor: "#7EABA6",
             fontFamily: "Arial", border: "none", boxShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)" }} 
             variant="dark" className="mx-2" >SIGN UP</Button>
            <br></br>
            <Button href="/signin" style={{ backgroundColor: "#7EABA6",
             fontFamily: "Arial", border: "none", boxShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)" }} 
             variant="dark" className="mx-2" >SIGN IN </Button>
          </div>
            }
        </Navbar>

        <Offcanvas show={showMenu} onHide={handleCloseMenu} placement="start">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Planning Items</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column">
              {menuItems.map((item) => (
                <Nav.Link key={item.id} href={item.link} onClick={handleCloseMenu}>
                  {item.text}
                </Nav.Link>
              ))}
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>


        <Routes>
          <Route exact path="/" element={<DJList />} />
          <Route exact path="/signup" element={<Signup register={registerHandler} />} />
          <Route exact path="/signin" element={<Signin login={loginHandler} />} />
          <Route exact path="/logout" element={<Logout logout={onLogoutHandler} />} />
          <Route exact path="/dj" element={<DJList />} />
          <Route exact path="/hall" element={<HallList />} />

          <Route exact path="/buffet" element={<BuffetList />} />
          <Route exact path="/Hospitality" element={<HospitalityList />} />
          <Route exact path="/Security" element={<SecurityList />} />
          <Route exact path="/Arrangement" element={<ArrangementList />} />
          <Route exact path="/Studio" element={<StudioList />} />
          <Route exact path="/Bouquet" element={<BouquetList />} />
            <Route exact path="/Booking" element={<Booking />} />


        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
