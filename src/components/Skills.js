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
import Records from "../assets/data.json";
import Particle from "./Particle";

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
              <h2>{Records[2].title}</h2>
              <p>
                {Records[2].desc}
                <br></br>
                {Records[2].desc2}
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
                autoPlaySpeed={1000}
              >
                <div className="item">
                  <img src={java} alt="Image" />
                  <h5>{Records[2].s1}</h5>
                </div>
                <div className="item">
                  <img src={python} alt="Image" />
                  <h5>{Records[2].s2}</h5>
                </div>
                <div className="item">
                  <img src={kotlin} alt="Image" />
                  <h5>{Records[2].s3}</h5>
                </div>
                <div className="item">
                  <img src={react} alt="Image" />
                  <h5>{Records[2].s4}</h5>
                </div>
                <div className="item">
                  <img src={sql} alt="Image" />
                  <h5>{Records[2].s5}</h5>
                </div>
                <div className="item">
                  <img src={html} alt="Image" />
                  <h5>{Records[2].s6}</h5>
                </div>
                <div className="item">
                  <img src={css} alt="Image" />
                  <h5>{Records[2].s7}</h5>
                </div>
                <div className="item">
                  <img src={javascript} alt="Image" />
                  <h5>{Records[2].s8}</h5>
                </div>
                <div className="item">
                  <img src={typescript} alt="Image" />
                  <h5>{Records[2].s9}</h5>
                </div>
                <div className="item">
                  <img src={bootstrap} alt="Image" />
                  <h5>{Records[2].s10}</h5>
                </div>
                <div className="item">
                  <img src={git} alt="Image" />
                  <h5>{Records[2].s11}</h5>
                </div>
                <div className="item">
                  <img src={tensorflow} alt="Image" />
                  <h5>{Records[2].s12}</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
