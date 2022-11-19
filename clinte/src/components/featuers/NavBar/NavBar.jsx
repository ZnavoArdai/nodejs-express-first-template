import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";

function Navbarapp() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      bg="red"
      className="text-dark"
    >
      <Container className="w-50">
        <Navbar.Brand className="acc w-25  ">
          <Image src="logo192.png" width={60} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto justify-content-center "></Nav>

          <Nav>
            <Nav.Link></Nav.Link>
            <Nav.Link as={Link} to="/" className="active text-dark ">
              HOME
            </Nav.Link>
            <Nav.Link as={Link} to="states" className="text-dark ">
              ALL STATES{" "}
            </Nav.Link>
            <Nav.Link as={Link} to="Addstates" className="text-dark ">ADD STATES</Nav.Link>
            <Nav.Link as={Link} to="Updatestates" className="text-dark ">UPDATE STATES</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarapp;
