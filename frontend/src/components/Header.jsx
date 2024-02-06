import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      {/* when screen below "lg" size, it will have collapse on selection effect */}
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          {/* sub-component of Navbar called "brand" */}
          <Navbar.Brand href="/">ProShop</Navbar.Brand>
          {/* aria-controls attribute, it indicates that the element controls the visibility or behavior of another element with the specified ID. */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* it applies a margin to the left side of the element, pushing it towards the right within its container.  */}
            <Nav className="ms-auto">
              <Nav.Link href="/cart">
                <FaShoppingCart />
                Cart
              </Nav.Link>
              <Nav.Link href="/login">
                <FaUser />
                Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
