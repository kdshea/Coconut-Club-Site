import { Link } from 'react-router-dom'
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'
import logo from '../../assets/logo.jpg'

const NavBar = () => {
  return (

<Navbar collapseOnSelect expand="md">
<Container>
  <Navbar.Brand as={Link} to="/">
    <img width="150" height="150"src={logo} alt="Coconut Club Logo" className="d-inline-block align-top"/>{' '}
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav>
    <NavDropdown title="About" id="collasible-nav-dropdown">
      <NavDropdown.Item as={Link} to='/location'>Hours & Location</NavDropdown.Item>
      <NavDropdown.Item as={Link} to='/about'>About Coconut Club</NavDropdown.Item>
    </NavDropdown>
    <Nav.Item>
      <Nav.Link as={Link} to='/menu'>Eat & Drink</Nav.Link> 
    </Nav.Item>
    <NavDropdown title="Surf" id="collasible-nav-dropdown">
      <NavDropdown.Item as={Link} to='/lessons'>Surf Lessons</NavDropdown.Item>
      <NavDropdown.Item as={Link} to='/photos'>Surf Photography</NavDropdown.Item>
    </NavDropdown>
    <Nav.Item>
      <Nav.Link as={Link} to={'/shop'} >Shop</Nav.Link>
    </Nav.Item>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
  )
}

export default NavBar