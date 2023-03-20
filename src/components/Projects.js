import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import notesApp from "../assets/img/notesApp.svg";
import projImg2 from "../assets/img/collectionAndroid.svg";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";

export const Projects = () => {
  const projects = [
    {
      title: "NoteTaking Android App",
      description:
        "Jetpack compose, Room, Firebase, HILT, MVVM/Clean Architecture.",
      imgUrl: notesApp,
      url: "https://github.com/likhithharish/NoteTakingApp",
    },
    {
      title: "Android Repo",
      description: "Cummulative collection of Android topics and code.",
      imgUrl: projImg2,
      url: "https://github.com/likhithharish/Android",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      url: "",
    },
  ];

  const secondProjects = [
    {
      title: "NoteTaking Android App",
      description:
        "Jetpack compose, Room, Firebase, HILT, MVVM/Clean Architecture.",
      imgUrl: notesApp,
      url: "https://github.com/likhithharish/NoteTakingApp",
    },
    {
      title: "Android Repo",
      description: "Cummulative collection of Android topics and code.",
      imgUrl: projImg2,
      url: "https://github.com/likhithharish/Android",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      url: "",
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
                    <Nav.Link eventKey="second">AI & Image Processing</Nav.Link>
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
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cumque quam, quod neque provident velit, rem explicabo
                      excepturi id illo molestiae blanditiis, eligendi dicta
                      officiis asperiores delectus quasi inventore debitis quo.
                    </p>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="back"
      ></img>
    </section>
  );
};
