import '../styles/sahan/Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbarx from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {LinkContainer} from 'react-router-bootstrap';
import { Link } from "react-router-dom";
import logo from '../images/Journeyly-W.png';
import { useState } from 'react';
import LoginForm from '../pages/LoginForm';
import { Hotels } from '../pages';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Navbar() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbarx className='NavbarCont' expand="lg">
      <Container>
        <Navbarx.Toggle aria-controls="basic-navbar-nav" />
        <Navbarx.Collapse id="basic-navbar-nav" className='NavbarList'>
          <LinkContainer to="/" className="NavbarLogo">
              <Navbarx.Brand><img src={logo} alt='heroimg' /></Navbarx.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/flights" className='navlink'>Flights</Nav.Link>
            <Nav.Link as={Link} to="/hotels" className='navlink'>Hotels</Nav.Link>
            <Nav.Link as={Link} to="/attractions" className='navlink'>Attractions</Nav.Link>
            <Nav.Link as={Link} to="/taxis" className='navlink'>Taxis</Nav.Link>
            <Nav.Link as={Link} to="/packages" className='navlink'>Packages</Nav.Link>
          </Nav>
            {/* <Link to={"/login"}> */}
                <Button variant="outline-light" onClick={handleShow}>Login</Button>
            {/* </Link> */}

            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="text"
                placeholder="username"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control type="text"
                placeholder="password" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
           Login
          </Button>
        </Modal.Footer>
      </Modal>

            <Link to={"/editorDash"}>
                <Button variant="outline-light ms-2">Editor Login</Button>
            </Link>
        </Navbarx.Collapse>
      </Container>
    </Navbarx>
  );
}

export default Navbar;