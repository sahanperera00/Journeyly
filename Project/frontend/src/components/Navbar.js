import '../styles/sahan/Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbarx from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {LinkContainer} from 'react-router-bootstrap';
import { Link } from "react-router-dom";
import logo from '../images/Journeyly-color.png';

function Navbar() {
  return (
    <Navbarx className='NavbarCont' expand="lg">
      <Container>
        <LinkContainer to="/">
            <Navbarx.Brand><img src={logo} alt='heroimg' /></Navbarx.Brand>
        </LinkContainer>
        <Navbarx.Toggle aria-controls="basic-navbar-nav" />
        <Navbarx.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/flights" className='navlink'>Flights</Nav.Link>
            <Nav.Link as={Link} to="/hotels" className='navlink'>Hotels</Nav.Link>
            <Nav.Link as={Link} to="/attractions" className='navlink'>Attractions</Nav.Link>
            <Nav.Link as={Link} to="/taxis" className='navlink'>Taxis</Nav.Link>
            <Nav.Link as={Link} to="/packages" className='navlink'>Packages</Nav.Link>
          </Nav>
            <Link to={"/login"}>
                <Button variant="outline-light">Login</Button>
            </Link>
            <Link to={"/registration"}>
                <Button variant="outline-light ms-2">Sign Up</Button>
            </Link>
            <Link to={"/editorDash"}>
                <Button variant="outline-light ms-2">Editor Login</Button>
            </Link>
        </Navbarx.Collapse>
      </Container>
    </Navbarx>
  );
}

export default Navbar;