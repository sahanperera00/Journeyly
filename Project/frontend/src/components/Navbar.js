import "../styles/sahan/Navbar.css";
import "../styles/sahan/Home.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbarx from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../firebase";
import { signOut } from "firebase/auth";

function Navbar() {
  const [show, setShow] = useState(false);
  const [showLogout, setLogout] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  function view() {
    if (sessionStorage.getItem("ID") === null) {
      return (
        <Button className="whitebtn" onClick={handleShow}>
          Login
        </Button>
      );
    } else {
      return (
        <Link to={`/clientDashboard/${sessionStorage.getItem("ID")}`}>
          <Button className="whitebtn">Profile</Button>
        </Link>
      );
    }
  }

  // sign in with email and password
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  // sign in with google
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  // loggin in user in backend
  useEffect(() => {
    if (user) {
      axios
        .post("http://localhost:8070/client/login", {
          email,
          password: password,
        })
        .then((client) => {
          sessionStorage.setItem("ID", client.data._id);
          return navigate(`/ClientDashboard/${client.data._id}`);
        })
        .catch((err) => {
          alert("Login unsuccessful");
          signOut(auth);
          console.log(err);
        });
    }
  }, [user]);

  // loggin in google user in backend
  useEffect(() => {
    if (gUser) {
      axios
        .post("http://localhost:8070/client/login", {
          email: gUser.user?.email,
          password: "No Password",
        })
        .then((client) => {
          return navigate(`/ClientDashboard/${client.data._id}`);
        })
        .catch((err) => {
          alert("Login unsuccessful");
          signOut(auth);
          console.log(err);
        });
    }
  }, [gUser]);

  useEffect(() => {
    if (error || gError) alert("Login unsuccessful");
  }, [error, gError]);


  return (
    <Navbarx className="NavbarCont" expand="lg">
      <Container>
        <Navbarx.Toggle aria-controls="basic-navbar-nav" />
        <Navbarx.Collapse id="basic-navbar-nav" className="NavbarList">
          <LinkContainer to="/" className="NavbarLogo">
            <Navbarx.Brand>
              <img
                src={
                  "https://firebasestorage.googleapis.com/v0/b/journeyly-7f164.appspot.com/o/images%2Fothers%2FJourneyly-W.webp?alt=media&token=c779642d-f02b-4d1e-90e1-bd70c77bdfd3"
                }
                alt="heroimg"
              />
            </Navbarx.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/flights" className="navlink">
              Flights
            </Nav.Link>
            <Nav.Link as={Link} to="/hotels" className="navlink">
              Hotels
            </Nav.Link>
            <Nav.Link as={Link} to="/taxis" className="navlink">
              Taxis
            </Nav.Link>
            <Nav.Link as={Link} to="/packages" className="navlink">
              Packages
            </Nav.Link>
            <Nav.Link as={Link} to="/attractions" className="navlink">
              Attractions
            </Nav.Link>
          </Nav>
          {view()}

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>User Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form
                onSubmit={async (e) => {
                  e.preventDefault();

                  signInWithEmailAndPassword(email, password);
                }}
              >
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    autoFocus
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    required
                  />
                </Form.Group>
                <div className="btnContainerlosgin">
                  {loading ? (
                    <Button type="submit" className="blackbtn">
                      Loading ...
                    </Button>
                  ) : (
                    <Button type="submit" className="blackbtn">
                      Login as a User
                    </Button>
                  )}

                  {gLoading ? (
                    <span className="blackbtn">
                      <img
                        className="googleIcon"
                        src="https://i.ibb.co/XzVFGzb/google.png"
                        alt=""
                      />
                      Loading...
                    </span>
                  ) : (
                    <span
                      className="blackbtn"
                      onClick={() => {
                        signInWithGoogle();
                      }}
                    >
                      <img
                        className="googleIcon"
                        src="https://i.ibb.co/XzVFGzb/google.png"
                        alt=""
                      />
                      Continue with Google
                    </span>
                  )}

                  {/* <div id="googlelogin"></div>
                  
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign in with Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> */}
                </div>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <div style={{}}>
                <h4>Other Logins</h4>
                <Link to={"/financeDashboard"}>
                  <button className="blackbtn">Login as an Accountant</button>
                </Link>
                <Link to={"/editorDashboard"}>
                  <button className="blackbtn">Login as an Editor</button>
                </Link>
                <Link to={"/ceoDashboard"}>
                  <button className="blackbtn">Login as a CEO</button>
                </Link>
              </div>
            </Modal.Footer>
          </Modal>
        </Navbarx.Collapse>
      </Container>
    </Navbarx>
  );
}

export default Navbar;
