import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import {LinkContainer} from 'react-router-bootstrap';
import { Link } from "react-router-dom";

function EditorNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/editorDash">
          <Navbar.Brand>Editor Dashboard</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Flights" id="basic-nav-dropdown">
              <LinkContainer to="/editorDash/flightForm"><NavDropdown.Item >Create</NavDropdown.Item></LinkContainer>
              <LinkContainer to="/editorDash/flightEdit" ><NavDropdown.Item >Update & Delete</NavDropdown.Item></LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/editorDash/flights">
                <NavDropdown.Item>Client View</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <NavDropdown title="Hotels" id="basic-nav-dropdown">
              <LinkContainer to="/editorDash/hotelForm"><NavDropdown.Item >Create</NavDropdown.Item></LinkContainer>
              <LinkContainer to="/editorDash/hotelEdit" ><NavDropdown.Item >Update & Delete</NavDropdown.Item></LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/editorDash/hotels">
                <NavDropdown.Item>Client View</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <NavDropdown title="Attractions" id="basic-nav-dropdown">
              <LinkContainer to="/editorDash/addAttractionsForm">
                <NavDropdown.Item>Create</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/editorDash/attractionEdit">
                <NavDropdown.Item>Update & Delete</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/editorDash/attractions">
                <NavDropdown.Item>Client View</NavDropdown.Item>
              </LinkContainer>

            </NavDropdown>
            <NavDropdown title="Taxis" id="basic-nav-dropdown">
            <LinkContainer to="/editorDash/vehicleForm">
                <NavDropdown.Item>Create</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/editorDash/vehiclesEdit">
                <NavDropdown.Item>Update & Delete</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/editorDash/vehicles">
                <NavDropdown.Item>Client View</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>

            <NavDropdown title="Packages" id="basic-nav-dropdown">
            <LinkContainer to="/editorDash/PackageForm">
              <NavDropdown.Item >Create</NavDropdown.Item></LinkContainer>
            <LinkContainer to="/editorDash/packagesEdit">
               <NavDropdown.Item>Update & Delete</NavDropdown.Item></LinkContainer>
               <NavDropdown.Divider />
            <LinkContainer to="/editorDash/packages">
               <NavDropdown.Item>Client View</NavDropdown.Item></LinkContainer>
            </NavDropdown>

          </Nav>
          <Link to={"/"}>
                <Button variant="outline-dark ms-2">Logout</Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default EditorNavbar;