import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function EditorNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Editor Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Flights" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Create</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Update & Delete</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Client View</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Hotels" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Create</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Update & Delete</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Client View</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Attractions" id="basic-nav-dropdown">
              <NavDropdown.Item href="#desForm">Create</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Update & Delete</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Client View</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Taxis" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Create</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Update & Delete</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Client View</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default EditorNavbar;