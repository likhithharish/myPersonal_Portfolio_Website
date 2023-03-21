import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import notesApp from "../assets/img/notesApp.svg";
import projImg2 from "../assets/img/collectionAndroid.svg";
import projImg3 from "../assets/img/wip.svg";
import restloc from "../assets/img/recommendationloc.svg";
import imageproc from "../assets/img/imageproc.svg";
import ml from "../assets/img/ml.svg";
import "animate.css";

export const Projects = () => {
  const projects = [
    {
      title: "NoteTaking Android App",
      description:
        "App built using Jetpack compose, Room, Firebase, HILT, MVVM/Clean Architecture.",
      imgUrl: notesApp,
      url: "https://github.com/likhithharish/NoteTakingApp",
    },
    {
      title: "Complete Android Repo",
      description: "A Cummulative collection of Android topics with code.",
      imgUrl: projImg2,
      url: "https://github.com/likhithharish/Android",
    },
    {
      title: "Food Order Website",
      description: "Work in Progress",
      imgUrl: projImg3,
      url: "",
    },
  ];

  const secondProjects = [
    {
      title: "Restaurant Recommendation",
      description:
        "A location Recommendation system for opening a new restaurant in a city.",
      imgUrl: restloc,
      url: "https://github.com/likhithharish/Restaurant-Recommendation-System",
    },
    {
      title: "Optimized ML Algorithms",
      description:
        "Implemented GOSDT,an Optimised Decision Tree algorithm and FP-Growth algorithm from scratch without using any existing libraries.",
      imgUrl: ml,
      url: "https://github.com/likhithharish/DecisionTree_Induction_Algorithm",
    },
    {
      title: "Image Processing",
      description:
        "A collection of various image processing techniques such as watermark removal, transformation, interpolation, noise reduction.",
      imgUrl: imageproc,
      url: "https://github.com/likhithharish/ImageProcessing",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div className="projects-bx wow zooomIn">
              <h2>Latest Projects</h2>
              <p>
                My Latest projects in Android, Web and Machine learning covering
                my personal and academic work.
              </p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Software Development</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">
                      AI, ML & Image Processing
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Misc.</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp" className="">
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row>
                      {secondProjects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <p>
                      Talking Tiny Embedded Cognitive Architecture: An academic
                      project, Connected two PSoCs with various sensing devices
                      and established communication using a microphone and
                      speaker. An optimized learning algorithm programmed in C++
                      is implemented so that both PSoC can communicate and learn
                      each other sensor values.
                    </p>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
