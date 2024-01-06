import React from "react";
import "./Home.css";
import { Col, Container, Row } from "react-bootstrap";
import bb from "../gpg.jpg";
import Tab from "../components/Tab";
import Projects from "../components/Projects";
import HomeCom from "../components/HomeCom";
import Contact from "../components/Contact";

function Home() {
 
  return (
    <>
      <div id="homesection" className="conatiner-fluid ">
        <Container>
          <div>
           <HomeCom/>

            <spacer />
          </div>
        </Container>
      </div>

      <div className="container-fluid mt-0 " id="about">
        <Container>
          <div id="">
            <Row className="justify-content-center  align-items-center vh-80">
              <Col lg={6} className="d-flex justify-content-center" >
                
                  <img
                    className="mt-4 mb-4 rounded rounded-2  "
                    src={bb}
                    alt=""
                    height={"100%"}
                    width={"80%"}
                  />
                
              </Col>
              <Col lg={6}>
                <div className="fs-4">
                  <h2 className="text-white">About Me</h2>
                  <p className="text-white opacity-50 fw-light">I am a frontend developer and UI/UX Designer dedicated to translating ideas into visually stunning and user-friendly websites.<br></br> Proficient in creating responsive and pixel-perfect designs, I bring a balance of aesthetics and functionality to every project.</p>
                  <Tab/>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <div className="container-fluid " id="portfolio">
        <Container>
            <Row className="justify-content-center  align-items-center vh-80">
              <Col>
              <Projects/>
              </Col>
              </Row>  


        </Container>
      </div>

      <div className="container-fluid" id="contact">
        <Container>
          <Contact/>
        </Container>

      </div>

    </>
  );
}

export default Home;
