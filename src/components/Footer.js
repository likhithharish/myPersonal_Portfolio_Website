import { Container, Row, Col } from "react-bootstrap";
import linkedin from "../assets/img/nav-icon1.svg";
import github from "../assets/img/git.svg";
import { Nav } from "react-bootstrap";
import { useState } from "react";
import coding from "../assets/img/coding.svg";
import {
  FaReact,
  FaCloudflare,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";
import { BsFiletypeScss, BsBootstrapFill } from "react-icons/bs";
import Records from "../assets/data.json";

export const Footer = () => {
  const [activeLink, setActiveLink] = useState("home");
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h1>
              Let's make something <br></br>amazing together,
              <Nav.Link
                href="#connect"
                className={
                  activeLink === "connect"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("connect")}
              >
                Start by <u>hiring Me!</u>
              </Nav.Link>
            </h1>
            <p>
              This website is built using: <FaReact /> , <BsFiletypeScss /> ,{" "}
              <BsBootstrapFill /> , <FaCloudflare />
            </p>
          </Col>

          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/likhith-harish/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedin} alt="" />
              </a>
              <a
                href="https://github.com/likhithharish"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="" />
              </a>
            </div>
            <img src={coding} />

            <p>Copyright {new Date().getFullYear()}. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
