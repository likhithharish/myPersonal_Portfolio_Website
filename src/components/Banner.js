import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { Nav } from "react-bootstrap";
import Records from "../assets/data.json";
import mobapp from "../assets/img/android.svg";
import webapp from "../assets/img/program.svg";

export const Banner = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200 - Math.random() * 50);
  //const [index, setIndex] = useState(1);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, delta]);

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
      //setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      //setIndex(1);
      setDelta(100);
    } else {
      //setIndex((prevIndex) => prevIndex + 1);
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
                    Hello! I'm <span className="name">{Records[1].name}</span>
                  </h1>
                  <h1>
                    <span
                      className="txt-rotate title"
                      dataPeriod="1000"
                      data-rotate='[ "Web Developer", "Web Designer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>

                  <p>{Records[1].intropara}</p>

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
            <TrackVisibility>
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
