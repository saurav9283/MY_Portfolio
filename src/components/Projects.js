import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/netflix.jpeg";
import projImg2 from "../assets/img/travel.png";
import projImg3 from "../assets/img/drum.png";
import projImg4 from "../assets/img/pin.png";
import projImg5 from "../assets/img/front.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Netflix-Clon",
      description: "Using React.JS",
      imgUrl: projImg1,
    },
    {
      title: "Travel Planning Website",
      description: "Using HTML, CSS, JavaScript",
      imgUrl: projImg2,
    },
    {
      title: "DrumKit",
      description: "Using HTML, CSS, JavaScript",
      imgUrl: projImg3,
    },
    {
      title: "PinDog",
      description: "Using HTML, CSS, JavaScript",
      imgUrl: projImg4,
    },
    {
      title: "Portfolio",
      description: "HTML, CSS, JavaScript, ReactJS",
      imgUrl: projImg5,
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    {/* <Tab.Pane eventKey="first"> */}
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard 
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    {/* </Tab.Pane> */}
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
