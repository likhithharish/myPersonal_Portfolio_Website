import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import mobapp from "../assets/img/android.svg";
import webapp from "../assets/img/program.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { Nav } from "react-bootstrap";

export const Banner = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["'Web Developer'", "'Android Developer'"];
  const period = 1000;
  const [imagesrc, setImgSrc] = useState("");
  const rotateImg = [webapp, mobapp];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    let rotated = rotateImg[i];
    setText(updatedText);
    setImgSrc(rotated);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility once>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    Hello! I'm <span className="name">Likhith</span>
                  </h1>

                  <h1>
                    <span
                      className="txt-rotate title"
                      dataPeriod="1000"
                      data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>

                  <p>
                    I am a Software Engineer with 3+ years of experience in
                    Android and Web development and a love for creating
                    innovative and responsive applications. When I'm not CODING,
                    you can find me solving rubiks cube, enjoying a cup of
                    coffee with music and exploring. Also, I'm an Audiophile.
                  </p>

                  <p></p>
                  <Nav.Link
                    href="#connect"
                    className={
                      activeLink === "connect"
                        ? "active navbar-link"
                        : "navbar-link"
                    }
                    onClick={() => onUpdateActiveLink("connect")}
                  >
                    Let’s Connect <ArrowRightCircle size={25} />
                  </Nav.Link>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility once>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={imagesrc} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
