import { Link, useNavigate, useLocation } from "react-router-dom";
import { loggedOutNavigationLinks, loggedInNavigationLinks } from "../consts";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useEffect, useState } from "react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  function checkLoggedIn() {
    return localStorage.getItem("token") ? true : false;
  }

  useEffect(() => {
    console.log("useEffect hit");
    setIsLoggedIn(checkLoggedIn());
  }, [location]);

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/");
    // setIsLoggedIn();
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          Pawsome Dining&#128062;
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
