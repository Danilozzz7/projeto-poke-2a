import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
 
const Menu = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/home">
          PokeMenu
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="poke-navbar-nav" />
        <Navbar.Collapse id="poke-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/pokeFlex" >PokeFlex</Nav.Link>
            <Nav.Link href="/pokegrid">PokeGrid</Nav.Link>
            <Nav.Link href="/viacep">ViaCep</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
 
export default Menu;
 