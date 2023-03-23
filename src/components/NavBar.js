import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/LH-new.png";
import linkedin from "../assets/img/nav-icon1.svg";
import github from "../assets/img/git.svg";
import { HashLink } from "react-router-hash-link";
import resume from "../assets/Resume.pdf";
import { BrowserRouter as Router } from "react-router-dom";
import Records from "../assets/data.json";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <h1>Likhith.dev</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                {Records[0].nav1}
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                {Records[0].nav2}
              </Nav.Link>
              <Nav.Link
                href="#works"
                className={
                  activeLink === "works" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("works")}
              >
                {Records[0].nav3}
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                {Records[0].nav4}
              </Nav.Link>
              <Nav.Link
                href={resume}
                className={
                  activeLink === { resume }
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink({ resume })}
                target="_blank"
                rel="noreferrer"
              >
                {Records[0].nav5}
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href={Records[0].linkedin} target="_blank" rel="noreferrer">
                  <img src={linkedin} alt="linkedin" />
                </a>
                <a href={Records[0].github} target="_blank" rel="noreferrer">
                  <img src={github} alt="github" />
                </a>
              </div>
              <HashLink to="#connect">
                <button className="vvd">
                  <span>Let’s Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
