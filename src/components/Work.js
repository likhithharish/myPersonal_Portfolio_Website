import "animate.css";
import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";
import { IoIosSchool } from "react-icons/io";

export const Work = () => {
  return (
    <section className="work" id="works">
      <Container>
        <Row>
          <Col size={12}>
            <div className="works-bx wow zooomIn">
              <h2>Experiences</h2>
              <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  date="Sep.2019 - Jun.2022"
                  dateClassName="firstDate"
                  icon={<MdWork />}
                  iconStyle={{ background: "#3e497a", color: "#fff" }}
                >
                  <h1 className="vertical-timeline-element-title">
                    Tata Consultancy Services
                  </h1>
                  <h3>Senior Software Engineer</h3>
                  <p>
                    A full stack developer, handled projects in Android and Web.
                    Gained strong expertise in designing banking and financial
                    applications. My Strong suit included writing clean, crisp
                    code with less redundancy.
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  date="May.2018 - Oct.2018"
                  icon={<IoIosSchool />}
                  iconStyle={{ background: "#3e497a", color: "#fff" }}
                >
                  <h1 className="vertical-timeline-element-title">
                    Tata Motors
                  </h1>
                  <h3>Machine Learning Intern</h3>
                  <p>
                    As an intern, worked on the machine learning project with
                    focus on acheiving zero defects on assembly by performing
                    predictive analysis on various sensory data.
                  </p>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
