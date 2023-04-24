import { Link, useNavigate } from "react-router-dom";
import { loggedOutNavigationLinks, loggedInNavigationLinks } from "../consts";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useEffect, useState } from "react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("token") ? true : false);
  }, []);

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/");
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          Dine With Your Dog
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
              {isLoggedIn
                ? loggedInNavigationLinks.map((link, idx) => (
                    <Nav.Link
                      key={idx}
                      as={Link}
                      to={link.slug}
                      onClick={link.title === "Sign Out" && logOut}
                      className="header_link"
                    >
                      <li>{link.title}</li>
                    </Nav.Link>
                  ))
                : loggedOutNavigationLinks.map((link, idx) => (
                    <Nav.Link
                      key={idx}
                      as={Link}
                      to={link.slug}
                      className="header_link"
                    >
                      <li>{link.title}</li>
                    </Nav.Link>
                  ))}
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
