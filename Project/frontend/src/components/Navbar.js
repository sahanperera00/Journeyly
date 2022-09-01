import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbarx from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {LinkContainer} from 'react-router-bootstrap';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Navbarx bg="light" expand="lg">
      <Container>
        <LinkContainer to="/">
            <Navbarx.Brand>Home</Navbarx.Brand>
        </LinkContainer>
        <Navbarx.Toggle aria-controls="basic-navbar-nav" />
        <Navbarx.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/flights">Flights</Nav.Link>
            <Nav.Link as={Link} to="/hotels">Hotels</Nav.Link>
            <Nav.Link as={Link} to="/attractions">Attractions</Nav.Link>
            <Nav.Link as={Link} to="/taxis">Taxis</Nav.Link>
          </Nav>
            <Link to={"/login"}>
                <Button variant="outline-dark">Login</Button>
            </Link>
            <Link to={"/editorDash"}>
                <Button variant="outline-dark ms-2">Editor Login</Button>
            </Link>
        </Navbarx.Collapse>
      </Container>
    </Navbarx>
  );
}

export default Navbar;