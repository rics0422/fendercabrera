import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" collapseOnSelect>
      <Container>
        <Navbar.Brand as={Link} to="/">Fender Cabrera</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/media">Media</Nav.Link>
            {/* <Nav.Link as={Link} to="/discography">Discography</Nav.Link> */}
            <Nav.Link as={Link} to="/gigs">Gigs</Nav.Link>
            {/* <Nav.Link as={Link} to="/gear">Gear</Nav.Link> */}
            {/* <Nav.Link as={Link} to="/testimonials">Testimonials</Nav.Link> */}
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar