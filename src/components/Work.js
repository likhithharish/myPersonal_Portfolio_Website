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
import Records from "../assets/data.json";

export const Work = () => {
  return (
    <section className="work" id="works">
      <Container>
        <Row>
          <Col size={12}>
            <div className="works-bx wow zooomIn">
              <h2>{Records[3].title}</h2>
              <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  date={Records[3].date1}
                  dateClassName="firstDate"
                  icon={<MdWork />}
                  iconStyle={{ background: "#3e497a", color: "#fff" }}
                >
                  <h1 className="vertical-timeline-element-title">
                    {Records[3].exp1}
                  </h1>
                  <h3>{Records[3].role1}</h3>
                  <p>{Records[3].desc1}</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  date={Records[3].date2}
                  icon={<IoIosSchool />}
                  iconStyle={{ background: "#3e497a", color: "#fff" }}
                >
                  <h1 className="vertical-timeline-element-title">
                    {Records[3].exp2}
                  </h1>
                  <h3>{Records[3].role2}</h3>
                  <p>{Records[3].desc2}</p>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
