import "../style/nav.scss";
import { Navbar, Container } from "react-bootstrap";

const Nav = () => {
  return (
    <Navbar className="nav" expand="lg">
      <Container>
        <Navbar.Brand to="/home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/home">Home</Nav.Link>
            <Nav.Link to="/omkring">Omkring</Nav.Link>
            <Nav.Link to="/behandler">Behandlinger</Nav.Link>
            <Nav.Link to="/kontakt">Kontakt</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <button className="nav__btn"></button>
      </Container>
    </Navbar>
  );
};

export default Nav;
