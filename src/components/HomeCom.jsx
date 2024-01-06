import React from 'react'
import { Col, Row } from 'react-bootstrap'
import aa from "../hero.svg";
import { useTypeWriter, Cursor, useTypewriter } from "react-simple-typewriter";
import useTypeWritter from "react-typewriter-hook/build/useTypewriter";

function HomeCom() {
       const [text] = useTypewriter({
              words: ["Frontend Developer.", "UI/UX Designer.", "Tech Enthusiast."],
              loop: {},
          
              cursorStyle: "*",
              typeSpeed: 100,
              deleteSpeed: 80,
            });
  return (
    <div>

<Row style={{minHeight:'500px'}} className="justify-content-center  align-items-center   ">
              <Col  sm={12} md={12} lg={6}>
                <div
                  className="w-100 flex-column d-flex justify-content-center"
                  style={{ marginTop: "120px" }}
                >
                  <h5 className="text-grey ">Hi There</h5>
                  <h2 className="text-white fw-bold fs-1">I'm Govind</h2>
                  <h3 className="text-white">
                    I am a{" "}
                    <span
                      style={{ fontWeight: "bold", fontFamily: "Bungee Spice" }}
                    >
                      {text}
                    </span>
                    <Cursor cursorStyle="|" />{" "}
                  </h3>
                  <button
                    style={{ backgroundColor: "#7077A1" ,width:'30%'}}
                    className="btn text-dark text-center  h-25 "
                  >
                    <a
                      className="text-dark "
                      target="__blank"
                     
                      style={{
                        textDecoration: "none",
                        backgroundColor: "#7077A1",
                      
                      }}
                      href="https://drive.google.com/file/d/13-GnXgzhbi7RYgAYLCifv-kr4G7y1rSk/view?usp=sharing" 
                    >
                      Get resume
                    </a>
                  </button>
                </div>
              </Col>
              <Col className="mb-2" md={12} sm={12} lg={6}>
                <div className="w-100 d-flex justify-content-center">
                  <img
                    style={{ marginTop: "120px", maxWidth: "100%" }}
                    src={aa}
                    width={"85%"}
                    alt=""
                  />
                </div>
              </Col>
            </Row>
    </div>
  )
}

export default HomeCom