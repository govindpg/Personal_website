import React from "react";
import { Col, Row, Tab, Tabs } from "react-bootstrap";
import "./projects.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { data } from "../components/Datas/data";
import one from '../components/images/01.jpg'
import two from '../components/images/02.png'
import three from '../components/images/03.png'
import four from '../components/images/04.png'
import five from '../components/images/05.png'
import six from '../components/images/07.jpg'



function Projects() {
  console.log(data);
  return (
    <div className="d-flex justify-content-center flex-column">
      <h3 className="mt-5 text-white mb-5 text-center">My Projects</h3>

      <div className="mb-5">
        <Tabs
          justify
          variant="underline"
          className="text-white mt-4 "
          defaultActiveKey="tab-1"
        >
          <Tab eventKey="tab-1" title="Web">
            <Row>
              {data.map((item) => (
                <Col className="mt-5" md={6} sm={12} lg={4}>
                  <div className="d-flex justify-content-center">
                    <Card
                      className="cr"
                      style={{ width: "18rem", height: "200px" }}
                    >
                      <Card.Img
                        className="object-fit-cover"
                        height={"200px"}
                        variant="top"
                        src={item.imgsrc}
                      />
                      <Card.Body>
                        <Card.Title className="text-white">
                          {item.title}
                        </Card.Title>
                        <Card.Text
                          className="text-white mt-2"
                          style={{ fontSize: "12px" }}
                        >
                          {item.desc}
                          <p className="mt-3">
                            Technologies used:
                            <span className="fw-bold">{item.Technolgies}</span>
                          </p>
                        </Card.Text>
                        <div className="icon">
                          <a
                            style={{ border: "0px", marginRight: "5px" }}
                            target="__blank"
                            href={item.github}
                          >
                            <i
                              style={{ color: "white" }}
                              class="fa-brands fa-github fa-xl"
                            ></i>
                          </a>
                          <a
                            style={{ border: "0px" }}
                            target="__blank"
                            href={item.link}
                          >
                            <i
                              style={{ color: "white" }}
                              class="fa-solid fa-link fa-xl"
                            ></i>
                          </a>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              ))}{" "}
            </Row>
          </Tab>
          <Tab eventKey="tab-2" title="UI/UX">
              <h5 className="text-center mb-4 mt-4">Here are some of my deisgns</h5>
         <Row className="mb-2">
              <Col className="mb-2 d-flex justify-content-center" lg={4} sm={12} md={12}>
              <img className='object-fit-contain' height={'250px'} width={'80%'} src={one} alt="" />
              </Col>
              <Col className="mb-2 d-flex justify-content-center" lg={4} sm={12} md={12} >               <img className='object-fit-cover' height={'250px'}  width={'80%'} src={two} alt="" />
</Col>
              <Col className="mb-2 d-flex justify-content-center" lg={4} sm={12} md={12}>              <img className='object-fit-cover' height={'250px'} width={'80%'} src={four} alt="" />
</Col>
         </Row>
         <Row className="mb-2">
              <Col className="mb-2 d-flex justify-content-center" lg={4} sm={12} md={12}>
              <img className='object-fit-contain' height={'250px'} width={'80%'} src={five} alt="" />
              </Col>
              <Col className="mb-2 d-flex justify-content-center" lg={4} sm={12} md={12} >               <img className='object-fit-cover' height={'250px'}  width={'80%'} src={six} alt="" />
</Col>
              <Col className="mb-2 d-flex justify-content-center" lg={4} sm={12} md={12}>              <img className='object-fit-cover' height={'250px'} width={'80%'} src={four} alt="" />
</Col>
         </Row>
         <div className="w-100 d-flex justify-content-center">
         <a target="__blank" style={{textDecoration:'none',textAlign:'center'}} href="https://drive.google.com/drive/folders/1G1_5QnymzLNyHQvdyJYKOoRbVv8HI_8F" >To see the full resolution version click me.....</a>

         </div>

          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default Projects;
