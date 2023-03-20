import python from "../assets/img/skills/python.svg";
import java from "../assets/img/skills/java.svg";
import kotlin from "../assets/img/skills/kotlin.svg";
import react from "../assets/img/skills/react.svg";
import sql from "../assets/img/skills/sql.png";
import Carousel from "react-multi-carousel";
import html from "../assets/img/skills/html.png";
import css from "../assets/img/skills/css.svg";
import javascript from "../assets/img/skills/javascript.png";
import typescript from "../assets/img/skills/typescript.png";
import bootstrap from "../assets/img/skills/bootstrap.svg";
import git from "../assets/img/skills/git.svg";
import tensorflow from "../assets/img/skills/tensorflow.svg";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                My complete skillsets in Full-Stack Web, FrontEnd, BackEnd &
                Android.<br></br>Also with quite a niche in AI, Machine Learning
                & Image Processing/ Computer Vision.
              </p>
              <Carousel
                partialVisible={true}
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
                autoPlaySpeed={1000}
              >
                <div className="item">
                  <img src={java} alt="Image" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={python} alt="Image" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={kotlin} alt="Image" />
                  <h5>Kotlin</h5>
                </div>
                <div className="item">
                  <img src={react} alt="Image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={sql} alt="Image" />
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <img src={html} alt="Image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={css} alt="Image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={javascript} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={typescript} alt="Image" />
                  <h5>TypeScript</h5>
                </div>
                <div className="item">
                  <img src={bootstrap} alt="Image" />
                  <h5>BootStrap</h5>
                </div>
                <div className="item">
                  <img src={git} alt="Image" />
                  <h5>Git & Version Control</h5>
                </div>
                <div className="item">
                  <img src={tensorflow} alt="Image" />
                  <h5>Tensorflow</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
