import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import headerImg from '../assets/img/header-img.svg';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Pop from './Pop';

export const Banner = () => {
  const [showModel, setShowModel] = useState(false);

  const toggleModel = () => {
    setShowModel(!showModel);
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div>
                  <h1>
                    Hi! I'm Saurav,
                    <br />
                    Software Developer
                  </h1>
                  <button onClick={toggleModel}>
                    More About Me <ArrowRightCircle size={20} />
                  </button>
                  {showModel && <Pop />}
                  {/* <Pop  isOpen={showModel} toggleModal={toggleModel}/> */}
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__zoomIn' : ''
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      {/* CSS styles for the Pop component */}
      <style jsx>{`
        .popup {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          z-index: 9999;
        }
      `}</style>
    </section>
  );
};
