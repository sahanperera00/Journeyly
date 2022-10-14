import '../styles/sahan/Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbarx from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
function Navbar() {

  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  // function handleCallbackResponse(response) {
  //   console.log("Encoded JWT ID token:" + response.credential);
  //   var userObject = jwt_decode(response.credential);
  //   console.log(userObject);
  //   SetUser(userObject);
  // }

  // useEffect(()=> {
  //   /*global google */
  //   google.accounts.id.initialize({
  //     client_id: "78309665278-ujnt9950a2jvrm57a9tf4gr845tbvbd8.apps.googleusercontent.com",
  //     callback: handleCallbackResponse
  //   });

  //   google.accounts.id.renderButton(
  //     document.getElementById("googlelogin"),
  //     {theme:"outline", size:"large"}
  //   );
  // });


  return (
    <Navbarx className='NavbarCont' expand="lg">
      <Container>
        <Navbarx.Toggle aria-controls="basic-navbar-nav" />
        <Navbarx.Collapse id="basic-navbar-nav" className='NavbarList'>
          <LinkContainer to="/" className="NavbarLogo">
            <Navbarx.Brand><img src={'https://firebasestorage.googleapis.com/v0/b/journeyly-7f164.appspot.com/o/images%2Fothers%2FJourneyly-W.webp?alt=media&token=c779642d-f02b-4d1e-90e1-bd70c77bdfd3'} alt='heroimg' /></Navbarx.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/flights" className='navlink'>Flights</Nav.Link>
            <Nav.Link as={Link} to="/hotels" className='navlink'>Hotels</Nav.Link>
            <Nav.Link as={Link} to="/attractions" className='navlink'>Attractions</Nav.Link>
            <Nav.Link as={Link} to="/taxis" className='navlink'>Taxis</Nav.Link>
            <Nav.Link as={Link} to="/packages" className='navlink'>Packages</Nav.Link>
          </Nav>
          <Button variant="outline-light" onClick={handleShow}>Login</Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={async (e) => {
                e.preventDefault();

                axios.post("http://localhost:8070/client/login", { email, password })
                  .then((client) => {
                    navigate(`/ClientDashboard/${client.data._id}`);
                  }).catch((err) => {
                    alert("Login unsuccessful");
                  })
              }}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="email"
                    autoFocus
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }} required />

                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password"
                    placeholder="password"
                    onChange={(e) => {
                      setPassword(e.target.value)
                    }} required />


                </Form.Group>
                <div className='btnContainerlogin'>
                  <Button type="submit" variant="btn btn-dark" >Login</Button>
                  <div id="googlelogin"></div>
                </div>
              </Form>
            </Modal.Body>
          </Modal>
        </Navbarx.Collapse>
      </Container>
    </Navbarx>
  );
}

export default Navbar;