import { Col } from "react-bootstrap";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <h5>
        <a class="projecttitle" href={url} target="_blank" rel="noreferrer">
          {title} <BsArrowUpRightCircleFill />
        </a>
      </h5>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="Sample of Project" />
        <div className="proj-txtx">
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
