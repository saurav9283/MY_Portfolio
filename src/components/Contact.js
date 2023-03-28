import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useForm, ValidationError } from '@formspree/react';

export const Contact = () => {
  const [state, handleSubmit] = useForm("xrgvarqz");
  if (state.succeeded) {
      return <p>Thanks for Connecting!</p>;
  }
return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form  onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="fname" id="fname"  placeholder="First Name" />
                      <ValidationError prefix="First-Name" field="fname" errors={state.errors}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="lname" id="lname" placeholder="Last Name"/>
                      <ValidationError prefix="Last-Name" field="lname" errors={state.errors}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email"  placeholder="Email Address" id="email" name="email"/>
                      <ValidationError prefix="Email" field="email" errors={state.errors}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" id="phone" name="phone"  placeholder="Phone No." />
                      <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" name="message" id="message" placeholder="Message" ></textarea>
                      <ValidationError prefix="Message" field="message" errors={state.errors} />
                      <button type="submit"><span>Send</span></button>
                    </Col>

                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
