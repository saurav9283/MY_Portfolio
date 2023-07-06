import { Container, Row, Col } from "react-bootstrap";
import React from 'react';
import logo1 from "../assets/img/logo1.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.svg";
import cv from "../assets/img/saurav.pdf";

export const Footer = () => {
  const cvdownload = () => {
    const link = document.createElement("a");
    link.href = cv;
    link.download = "saurav.pdf";
    link.click();
  };
  
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={8} sm={8} style={{marginTop:"20px"}}>
            <img src={logo1} alt="Logo1" onClick={cvdownload} />
          </Col>
          <Col size={12} sm={6} className="text-center">
            <div className="social-icon2">
              <a href="https://www.linkedin.com/in/saurav-kumar-1883971b6/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/saurav9283" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/saurav9283/" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Icon" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
