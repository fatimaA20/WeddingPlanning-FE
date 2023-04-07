import logo from './logo.svg';
import './App.css';
import Home from './componants/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, Form, DropdownButton, Dropdown, Button } from 'react-bootstrap';

function App() {
  return (
    <>
      <Navbar style={{ backgroundColor: "#208075", fontFamily: "Verdana", fontWeight: "bold" }} variant="dark">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
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
    </>
  );
}


export default App;
