import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Link, NavLink, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, Form, DropdownButton, Dropdown, Button } from 'react-bootstrap';

function App() {
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
              <Nav.Link href="#venue">Venue</Nav.Link>
              <Nav.Link href="#decoration">Decoration</Nav.Link>
              <Nav.Link href="#hospitality">Hospitality</Nav.Link>
              <Nav.Link href="#dj">DJ</Nav.Link>
              <Nav.Link href="#florist">Florist</Nav.Link>
            </Nav>
            <Button style={{ backgroundColor: "#7EABA6", fontFamily: "Arial", borderColor: "#208075" }} variant="dark" className="mx-2" >SIGN UP</Button>
            <Button style={{ backgroundColor: "#7EABA6", fontFamily: "Arial", borderColor: "#208075" }} variant="dark" className="mx-2" >LOG IN </Button>
          </Container>
        </Navbar>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            {/* <Route path="/venue" element={<Venue />} />
            <Route path="/decoration" element={<Decoration />} />
            <Route path="/hospitality" element={<Hospitality />} />
            <Route path="/dj" element={<DJ />} />
            <Route path="/florist" element={<Florist />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
