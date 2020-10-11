import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";

function Navigation() {
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand href="#">COVIND</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Beranda</Nav.Link>
          <Nav.Link href="#features">Berita</Nav.Link>
          <Nav.Link href="#pricing">Rujukan</Nav.Link>
          <Nav.Link href="#hoax">Hoax</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
