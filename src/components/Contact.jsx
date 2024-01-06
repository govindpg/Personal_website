import React from "react";
import { Col, Row } from "react-bootstrap";

function Contact() {
  return (
    <div>
      <div style={{ minHeight: "300px" }}>
        <Row style={{minHeight:'100%'}}>
          <Col lg={6} md={12} sm={12} className="d-flex justify-content-center align-itemms-center">
            {" "}
            <div style={{marginTop:'85px'}} >
              <h4 className="text-center  ">Get in Touch</h4>
              <p className="mt-0">Feel free to contact me..</p>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12}>
         <Row  style={{marginTop:'90px'}}>
              <Col className="mt-3 mb-2 d-flex justify-content-center" lg={3} md={6} sm={12} ><a title="Linkdin" target="__blank" href="https://www.linkedin.com/in/govindpg123/"> <i class="fa-brands fa-linkedin fa-2xl"></i></a></Col>
              <Col className="mt-3 mb-2 d-flex justify-content-center" lg={3} md={6}  sm={12}><a title="Github" target="__blank" href="https://github.com/govindpg"><i class="fa-brands fa-github fa-2xl"></i></a></Col>
              <Col  className="mt-3 mb-2 d-flex justify-content-center" lg={3}  md={6} sm={12} ><a title="Whatsapp" target="__blank" href=" https://wa.me/919383426230"><i class="fa-brands fa-whatsapp fa-2xl"></i></a></Col>
              <Col  className="mt-3  d-flex justify-content-center" lg={3}  md={6}  sm={12}><a title="Mail" target="__blank" href="mailto:govindpg1234@gmail.com "><i class="fa-brands fa-at fa-2xl"></i></a></Col>
         </Row>

            
              
              
          </Col>
        </Row>
        <div className="mt-5">
                   <p class="text-center mb-1 fs-6 opacity-100">Made with ❤️ by Govind P G</p>
            <p class="text-center mt-0 fs-6 opacity-25">All rights reserved © 2023 </p>
   
        </div>

      </div>
    </div>
  );
}

export default Contact;
