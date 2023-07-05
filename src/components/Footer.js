import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo1 from "../assets/img/logo1.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={8} sm={8} style={{marginTop:"20px"}}>
            <img src={logo1} alt="Logo1" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end" style={{marginLeft:"550px" , marginTop:"-55px"}}>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/saurav-kumar-1883971b6/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/saurav9283" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/saurav9283/" target="_blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
