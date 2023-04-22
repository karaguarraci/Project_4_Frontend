import { Link } from "react-router-dom";
import { loggedOutNavigationLinks } from "../const";
import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          AppName
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="all_nav">
          <Nav className="browse_nav">
            <Nav.Link
              as={Link}
              to={"/allrestaurants"}
              onClick="hide.bs.dropdown"
            >
              All Restaurants
            </Nav.Link>
            <Nav.Link as={Link} to={"/locations"} onClick="hide.bs.dropdown">
              Locations
            </Nav.Link>
          </Nav>
          <Nav className="login_nav">
            <ul>
              {loggedOutNavigationLinks.map((link, idx) => (
                <Link key={idx} to={link.slug} className="header_link">
                  <li>{link.title}</li>
                </Link>
              ))}
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
